function ProgressPanel({ messages, isStreaming }) {
  return (
    <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
      <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
        Agent Progress
      </h3>
      <div className="space-y-2">
        {messages.map((item, index) => {
          const message = typeof item === 'string' ? item : item.message
          const isSub = typeof item === 'object' && item.isSub
          const isLast = index === messages.length - 1
          const isActive = isLast && isStreaming && !isSub

          if (isSub) {
            return (
              <div key={index} className="flex items-center gap-2 ml-6">
                <span className="text-teal-600 text-xs">↳</span>
                <span className="text-gray-500 text-xs">{message}</span>
              </div>
            )
          }

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