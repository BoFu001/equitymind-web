import ReactMarkdown from 'react-markdown'

function ReportPanel({ report, isStreaming }) {
  return (
    <div className="rounded-none px-4 py-3">
      <div className="prose prose-invert prose-sm max-w-none">
        <ReactMarkdown>{report}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ReportPanel