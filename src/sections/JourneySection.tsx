import React from 'react'
import { motion } from 'motion/react'
import {
  GraduationCap,
  Code2,
  Cloud,
  Sparkles,
  Layers,
  Trophy,
  Award,
  CheckCircle2,
  Calendar,
} from 'lucide-react'
import { STUDENT_JOURNEY, type JourneyStage } from '../data/resumeData'

export const JourneySection: React.FC = () => {
  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'Engineering':
        return GraduationCap
      case 'Programming':
        return Code2
      case 'Cloud Learning':
        return Cloud
      case 'AI/ML':
        return Sparkles
      case 'Projects':
        return Layers
      case 'Hackathons':
        return Trophy
      case 'Certifications':
        return Award
      default:
        return CheckCircle2
    }
  }

  return (
    <section id="journey" className="py-28 bg-[#F5EFE6]/40 border-b border-[#E8E3D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EE] border border-[#D1DDD0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39523D]"></span>
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#39523D] uppercase font-semibold">
                STUDENT PROFESSIONAL PATHWAY
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#19201A] tracking-tight">
              My Journey.
            </h2>
          </div>

          <p className="text-sm sm:text-base font-display italic text-[#515E54] max-w-md leading-relaxed">
            “An authentic student trajectory across academic engineering, systems programming, cloud learning, applied AI/ML, hackathons, and certified achievements.”
          </p>
        </div>

        {/* 7-Step Chronological Journey Path */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D1DDD0] space-y-12 max-w-4xl mx-auto">
          {STUDENT_JOURNEY.map((stage: JourneyStage, index: number) => {
            const IconComp = getPillarIcon(stage.pillar)

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node on Timeline */}
                <div className="absolute -left-[33px] sm:-left-[49px] top-3 w-4 h-4 rounded-full bg-white border-2 border-[#39523D] group-hover:bg-[#39523D] group-hover:scale-125 transition-all duration-300 shadow-2xs" />

                {/* Journey Milestone Card */}
                <div className="bg-white rounded-3xl border border-[#D1DDD0] hover:border-[#39523D]/50 p-7 sm:p-9 shadow-xs hover:shadow-xl transition-all duration-300">
                  {/* Top Bar: Pillar, Step Number, Badge, and Period */}
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-[#E8E3D7] gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-light text-2xl text-[#859088]">
                        {stage.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#EFF4EE] text-[#39523D] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono-tech tracking-wider uppercase bg-[#EFF4EE] text-[#39523D] font-bold px-3 py-1 rounded-full border border-[#D1DDD0]">
                        {stage.pillar}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono-tech text-[#859088]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{stage.period}</span>
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-1 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#19201A]">
                        {stage.title}
                      </h3>
                      <span className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#547259] border border-[#D1DDD0]">
                        {stage.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#515E54] leading-relaxed pt-1">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-xs sm:text-sm text-[#515E54] leading-relaxed pt-3 border-t border-[#E8E3D7]">
                    {stage.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-[#E8E3D7]">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#D1DDD0] text-[10px] font-mono-tech text-[#19201A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
