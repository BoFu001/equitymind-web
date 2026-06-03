import ReactMarkdown from 'react-markdown'

function ReportPanel({ report, isStreaming }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
          Research Report
        </h3>
        {isStreaming && (
          <span className="text-teal-400 text-xs animate-pulse">
            Generating...
          </span>
        )}
      </div>
      <div className="prose prose-invert prose-sm max-w-none">
        <ReactMarkdown>{report}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ReportPanel