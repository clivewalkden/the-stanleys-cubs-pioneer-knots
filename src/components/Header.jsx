export default function Header() {
  return (
    <header className="bg-[#00a650] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex items-center">
          <div className="bg-white rounded-xl px-3 py-1.5">
            <img src="/cubs-logo-green.png" alt="Cubs" className="h-8 w-auto" />
          </div>
        </div>
        <div className="h-8 w-px bg-white/40" />
        <div>
          <h1 className="text-xl font-bold leading-tight">Base 1 — Knots</h1>
          <p className="text-green-100 text-sm">Pioneer Badge · The Stanleys</p>
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-2 text-green-100 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>20 minutes</span>
        </div>
      </div>
    </header>
  )
}
