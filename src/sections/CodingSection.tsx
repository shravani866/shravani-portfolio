import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Code2, Trophy, Terminal, CheckCircle2 } from 'lucide-react'

// Viewport-animated counter component
const ViewportCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return
    let current = 0
    const duration = 1800
    const stepTime = 30
    const totalSteps = duration / stepTime
    const increment = target / totalSteps

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [hasStarted, target])

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, margin: '-20px' }}
      className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-[#FAF7F2] tracking-tight block"
    >
      {count}{suffix}
    </motion.span>
  )
}

export const CodingSection: React.FC = () => {
  const platforms = [
    {
      name: 'LeetCode',
      profile: 'shravani866',
      focus: 'Data Structures, Binary Trees, Arrays & Hash Maps',
      color: 'border-[#547259]/50 bg-[#1F2C21]',
    },
    {
      name: 'CodeChef',
      profile: 'shravani866',
      focus: 'Contest Math, Algorithmic Efficiency & Arrays',
      color: 'border-[#547259]/50 bg-[#1F2C21]',
    },
  ]

  const topics = [
    'Arrays & Two Pointers',
    'Strings & Hashing',
    'Linked Lists & Stacks',
    'Binary Trees & BST',
    'Graph Traversals (BFS/DFS)',
    'Dynamic Programming',
    'Sorting & Searching',
    'Time/Space Complexity',
  ]

  return (
    <section id="coding" className="py-24 bg-[#FAF7F2] border-b border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Achievement Feature Box (Deep Forest Olive Theme) */}
        <div className="relative rounded-3xl bg-[#263828] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[#39523D] shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#547259]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#19201A]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Massive Viewport-Animated Counter */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39523D]/80 border border-[#547259]">
                <Trophy className="w-3.5 h-3.5 text-[#D6E2D4]" />
                <span className="text-xs font-mono-tech tracking-[0.2em] text-[#D6E2D4] uppercase font-semibold">
                  CODING ACHIEVEMENT
                </span>
              </div>

              {/* Animated Number: 0 ➔ 100+ */}
              <div>
                <ViewportCounter target={100} suffix="+" />
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#D6E2D4] tracking-tight mt-1">
                  Problems Solved
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#D6E2D4] font-normal leading-relaxed max-w-lg">
                Continuous competitive programming practice across <strong className="text-white">LeetCode</strong> and{' '}
                <strong className="text-white">CodeChef</strong>. Focused on algorithmic efficiency, asymptotic analysis,
                and optimal space-time trade-offs.
              </p>

              {/* Platforms Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className={`p-4 rounded-2xl border ${p.color} space-y-1`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-lg text-white">
                        {p.name}
                      </span>
                      <Code2 className="w-4 h-4 text-[#D6E2D4]" />
                    </div>
                    <p className="text-[11px] font-mono-tech text-[#D6E2D4]">
                      {p.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Algorithmic Domains */}
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#1D2B1F] border border-[#39523D]/80 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#39523D] text-xs font-mono-tech">
                <span className="text-[#D6E2D4] font-bold uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#7A997F]" />
                  <span>ALGORITHMIC COMPETENCIES</span>
                </span>
                <span className="text-[11px] text-[#A3B899]">Verified Practice</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="p-3 rounded-xl bg-[#263828] border border-[#39523D] flex items-center gap-2 text-xs text-[#FAF7F2] font-mono-tech"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A997F] shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs font-mono-tech text-[#A3B899] flex items-center justify-between">
                <span>Data Structures & Algorithmic Rigor</span>
                <span className="text-white font-semibold">100+ Problems</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
