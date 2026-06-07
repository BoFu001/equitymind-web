function ProgressPanel({ messages, isStreaming }) {
  const lastIndex = messages.length - 1

  return (
    <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
      <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
        Agent Progress
      </h3>
      <div className="space-y-2">
        {messages.map((item, index) => {
          const message = typeof item === 'string' ? item : item.message
          const isSub = typeof item === 'object' && item.isSub
          const isLast = index === lastIndex
          const isLastSub = isLast && isSub && isStreaming

          // Check if this node has any sub items after it
          const hasActiveSubs = !isSub && isStreaming && (() => {
            for (let i = index + 1; i < messages.length; i++) {
              if (!messages[i].isSub) break
              if (i === lastIndex) return true
            }
            return false
          })()

          const isActiveNode = !isSub && isLast && isStreaming
          const isSpinning = isActiveNode || hasActiveSubs

          if (isSub) {
            return (
              <div key={index} className="flex items-center gap-2 ml-6">
                {isLastSub ? (
                  <div className="w-2 h-2 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-teal-600 flex items-center justify-center">
                    <span className="text-white" style={{fontSize: '8px'}}>✓</span>
                  </div>
                )}
                <span className={`text-xs ${isLastSub ? 'text-teal-400' : 'text-gray-500'}`}>
                  {message}
                </span>
              </div>
            )
          }

          return (
            <div key={index} className="flex items-center gap-2">
              {isSpinning ? (
                <div className="w-3 h-3 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
              ) : (
                <div className="w-3 h-3 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <span className={`text-sm ${isSpinning ? 'text-teal-400' : 'text-gray-400'}`}>
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