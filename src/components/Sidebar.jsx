function Sidebar({ turns }) {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="px-4 h-[56px] flex items-center border-b border-gray-800">
        <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
          Query History
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {turns.length === 0 ? (
          <p className="text-gray-600 text-sm p-2">No queries yet</p>
        ) : (
          turns.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-lg mb-1 cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <p className="text-gray-300 text-sm truncate">{item.question}</p>
              {item.duration && (
                <p className="text-gray-600 text-xs mt-1">{item.duration}s</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Sidebar