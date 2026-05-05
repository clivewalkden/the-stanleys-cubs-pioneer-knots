import { useState } from 'react'
import { easeConfig, priorityConfig } from '../data/knots'

function YouTubeEmbed({ videoId, title }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="youtube-container bg-gray-900 rounded-lg overflow-hidden">
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => setLoaded(true)}
          role="button"
          aria-label={`Play video: ${title}`}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10 w-16 h-16 rounded-full bg-[#00a650] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="relative z-10 mt-3 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            Watch Tutorial
          </span>
        </div>
      )}
      {loaded && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default function KnotCard({ knot, index }) {
  const ease = easeConfig[knot.ease]
  const priority = knot.priority ? priorityConfig[knot.priority] : null

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Card header */}
      <div className="bg-gray-50 border-b border-gray-100 px-5 py-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00a650] text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <h2 className="text-lg font-bold text-gray-900 leading-tight">{knot.name}</h2>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {priority && (
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${priority.color}`}>
              {priority.icon} {knot.priority}
            </span>
          )}
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${ease.color}`}>
            {ease.label}
          </span>
        </div>
      </div>

      {/* Video */}
      <div className="p-4">
        <YouTubeEmbed videoId={knot.youtubeId} title={`How to tie a ${knot.name}`} />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col gap-4 flex-1">
        {/* Use */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7b2d8b] mb-1.5">
            When to use it
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{knot.use}</p>
        </div>

        {/* Steps */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7b2d8b] mb-1.5">
            How to tie it
          </h3>
          <ol className="space-y-1.5">
            {knot.steps.map((step, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00a650]/15 text-[#00a650] text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex gap-2.5">
          <span className="text-lg leading-none flex-shrink-0">💡</span>
          <p className="text-sm text-amber-900 leading-relaxed">{knot.tip}</p>
        </div>
      </div>
    </article>
  )
}
