function Header() {
  return (
    <header className="border-b border-gray-800 px-6 py-4 flex items-center gap-3">
      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">E</span>
      </div>
      <div>
        <h1 className="text-white font-semibold text-lg leading-none">EquityMind</h1>
        <p className="text-gray-500 text-xs mt-0.5">Financial AI Research</p>
      </div>
    </header>
  )
}

export default Header