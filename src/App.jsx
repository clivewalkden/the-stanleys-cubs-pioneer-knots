import Header from './components/Header'
import KnotCard from './components/KnotCard'
import { knots } from './data/knots'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Intro banner */}
        <div className="mb-6 bg-white border border-gray-100 rounded-xl px-5 py-4 flex flex-wrap gap-4 items-center shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-3 h-3 rounded-full bg-[#00a650] inline-block" />
            <span><strong className="text-gray-900">Goal:</strong> Each Cub ties 3 different knots to earn the Pioneer badge</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs ml-auto">
            <span className="flex items-center gap-1 bg-[#00a650] text-white px-2.5 py-1 rounded-full font-bold">
              ★ ALL CUBS — must know the Reef Knot
            </span>
            <span className="flex items-center gap-1 bg-[#7b2d8b] text-white px-2.5 py-1 rounded-full font-bold">
              ★★ SIXERS — must also know the Bowline
            </span>
          </div>
        </div>

        {/* Knot grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {knots.map((knot, index) => (
            <KnotCard key={knot.id} knot={knot} index={index} />
          ))}
        </div>

        <footer className="mt-8 text-center text-xs text-gray-400 pb-6">
          Videos by <a href="https://www.animatedknots.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Animated Knots by Grog</a>
          {' · '} The Stanleys Cubs · Pioneer Badge
        </footer>
      </main>
    </div>
  )
}
