import { CheckIcon, ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

function ProgressPanel({ messages, isStreaming, duration, progressOpen, onToggle }) {
  const lastIndex = messages.length - 1


  return (
    <div className="rounded-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2 px-4 py-2 text-left"
      >
        <span className={`text-sm font-normal ${
          isStreaming ? 'text-teal-400 animate-pulse' : 'text-gray-400'
        }`}>
          {isStreaming ? 'Researching...' : `Completed in ${duration}s`}
        </span>
        {!isStreaming && (
          <ChevronRightIcon className={`w-4 h-4 text-gray-500 transition-transform ${progressOpen ? 'rotate-90' : ''}`} />
        )}
      </button>

      {(isStreaming || progressOpen) && (
        <div className="px-4 pb-3">
          <div className="space-y-1">
            {messages.map((item, index) => {
              const message = typeof item === 'string' ? item : item.message
              const isSub = typeof item === 'object' && item.isSub
              const isLast = index === lastIndex
              const isLastSub = isLast && isSub && isStreaming

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
                      <ArrowPathIcon className="w-3 h-3 text-teal-500 animate-spin" />
                    ) : (
                      <CheckIcon className="w-3 h-3 text-teal-500" />
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
                    <ArrowPathIcon className="w-4 h-4 text-teal-500 animate-spin" />
                  ) : (
                    <CheckIcon className="w-4 h-4 text-teal-500" />
                  )}
                  <span className={`text-xs ${isSpinning ? 'text-teal-400' : 'text-gray-400'}`}>
                    {message}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )



}

export default ProgressPanel