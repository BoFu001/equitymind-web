function ProgressPanel({ messages, isStreaming }) {
  return (
    <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
      <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
        Agent Progress
      </h3>
      <div className="space-y-2">
        {messages.map((message, index) => {
          const isLast = index === messages.length - 1
          const isActive = isLast && isStreaming

          return (
            <div key={index} className="flex items-center gap-2">
              {isActive ? (
                <div className="w-3 h-3 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
              ) : (
                <div className="w-3 h-3 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <span className={`text-sm ${isActive ? 'text-teal-400' : 'text-gray-400'}`}>
                {message}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressPanel