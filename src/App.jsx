import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import QueryInput from './components/QueryInput'
import ProgressPanel from './components/ProgressPanel'
import ReportPanel from './components/ReportPanel'

function App() {
  const [history, setHistory] = useState([])
  const [progress, setProgress] = useState([])
  const [report, setReport] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState('')

  const handleQuery = (question) => {
    setCurrentQuestion(question)
    setProgress([])
    setReport('')
    setIsStreaming(true)

    const ws = new WebSocket('wss://equitymind.up.railway.app/api/v1/query/stream')

    ws.onopen = () => {
      ws.send(JSON.stringify({ question }))
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      if (data.type === 'progress') {
          setProgress(prev => [...prev, { message: data.message, isSub: false }])
      }

      if (data.type === 'sub_progress') {
          setProgress(prev => [...prev, { message: data.message, isSub: true }])
      }

      if (data.type === 'token') {
        setReport(prev => prev + data.text)
      }

      if (data.type === 'done') {
        setIsStreaming(false)
        setHistory(prev => [{
          question,
          report,
          ticker: data.ticker,
          intent: data.intent,
          timestamp: new Date().toLocaleTimeString()
        }, ...prev])
        ws.close()
      }

      if (data.type === 'error') {
        setIsStreaming(false)
        ws.close()
      }
    }

    ws.onerror = () => {
      setIsStreaming(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <Sidebar history={history} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {progress.length > 0 && (
            <ProgressPanel messages={progress} isStreaming={isStreaming} />
          )}
          {report && (
            <ReportPanel report={report} isStreaming={isStreaming} />
          )}
          {!report && progress.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <p className="text-2xl font-semibold mb-2">EquityMind</p>
                <p className="text-sm">Ask me about any stock, comparison, or investment idea</p>
              </div>
            </div>
          )}
        </main>
        <QueryInput onSubmit={handleQuery} isStreaming={isStreaming} />
      </div>
    </div>
  )
}

export default App