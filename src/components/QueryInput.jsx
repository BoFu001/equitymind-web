import { useState } from 'react'

function QueryInput({ onSubmit, isStreaming }) {
  const [question, setQuestion] = useState('')

  const handleSubmit = () => {
    if (!question.trim() || isStreaming) return
    onSubmit(question.trim())
    setQuestion('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="border-t border-gray-800 p-4">
      <div className="flex gap-3 items-end">
        <textarea
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 
                     text-white placeholder-gray-500 text-sm resize-none
                     focus:outline-none focus:border-teal-500 transition-colors"
          placeholder="Ask about any stock, comparison, or investment idea..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          disabled={isStreaming}
        />
        <button
          onClick={handleSubmit}
          disabled={!question.trim() || isStreaming}
          className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-700 
                     disabled:cursor-not-allowed text-white font-semibold 
                     px-5 py-3 rounded-lg transition-colors text-sm"
        >
          {isStreaming ? 'Analysing...' : 'Analyse'}
        </button>
      </div>
      <p className="text-gray-600 text-xs mt-2 text-center">
        EquityMind uses SEC filings, live market data, and news sentiment. 
        Not financial advice.
      </p>
    </div>
  )
}

export default QueryInput