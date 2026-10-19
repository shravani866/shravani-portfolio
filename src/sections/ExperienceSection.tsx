import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Briefcase, Calendar, MapPin } from 'lucide-react'
import { EXPERIENCE_ITEMS } from '../data/resumeData'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 bg-[#F5EFE6]/40 border-b border-[#E8E3D7] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EE] border border-[#D1DDD0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39523D]"></span>
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#39523D] uppercase font-semibold">
                PROFESSIONAL EXPERIENCE
              </span>
              <span className="text-[#BA8146] text-sm leading-none">✦</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-[#19201A] tracking-tight">
              Work Experience.
            </h2>
          </div>

          <p className="text-sm sm:text-base font-display italic text-[#515E54] max-w-md leading-relaxed">
            “Hands-on industry training and engineering experience across cloud infrastructure, virtual networks, AI workflows, and LLM interfaces at ToriiMinds.”
          </p>
        </div>

        {/* Chronological Timeline Cards */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D1DDD0] space-y-12 max-w-4xl mx-auto">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const isFirst = index === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Pin Node */}
                <div
                  className={`absolute -left-[33px] sm:-left-[49px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isFirst
                      ? 'bg-[#39523D] border-[#FAF7F2] ring-4 ring-[#EFF4EE] group-hover:scale-125'
                      : 'bg-white border-[#39523D] group-hover:scale-125'
                  }`}
                />

                {/* Editorial Experience Card */}
                <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#D1DDD0] hover:border-[#39523D]/50 hover:shadow-xl transition-all duration-300">
                  {/* Top Bar: Badge, Year & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#EFF4EE] text-[#39523D] text-xs font-mono-tech font-bold border border-[#D1DDD0]">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-mono-tech text-[#859088]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#547259]" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#BA8146]" />
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#19201A] leading-snug">
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-sm font-mono-tech text-[#547259] font-semibold pl-7">
                      {item.company} • {item.track}
                    </p>
                  </div>

                  {/* Bullet Points from Resume */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#515E54] leading-relaxed mb-6 pt-2 border-t border-[#E8E3D7]">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Skills Tags */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8E3D7]">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D1DDD0] text-[10px] font-mono-tech text-[#19201A]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
