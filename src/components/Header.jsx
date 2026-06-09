function Header() {
  return (
    <header className="px-6 h-[56px] flex items-center gap-3">
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