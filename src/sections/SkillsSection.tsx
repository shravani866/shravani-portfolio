import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
  Code2,
  Globe,
  Cloud,
  Database,
  Terminal,
  Server,
  Layers,
  Sparkles,
  GitBranch,
} from 'lucide-react'
import { SKILL_GROUPS } from '../data/resumeData'

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')

  // Top banner featured primary tools matching editorial design
  const featuredTools = [
    { name: 'Python', icon: Code2 },
    { name: 'Java', icon: Code2 },
    { name: 'C++', icon: Code2 },
    { name: 'React', icon: Globe },
    { name: 'TypeScript', icon: Code2 },
    { name: 'FastAPI', icon: Server },
    { name: 'AWS', icon: Cloud },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Docker', icon: Server },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Linux', icon: Terminal },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PROGRAMMING':
        return Code2
      case 'WEB':
        return Globe
      case 'CLOUD & DEVOPS':
        return Cloud
      case 'DATABASES':
        return Database
      case 'TOOLS':
        return Terminal
      default:
        return Layers
    }
  }

  const categorySubtitles: Record<string, string> = {
    'PROGRAMMING': 'Core languages applied in algorithmic problem solving & system engineering',
    'WEB': 'Modern frontend libraries & performant RESTful backend runtimes',
    'CLOUD & DEVOPS': 'Cloud hosting, containerization & automated deployment pipelines',
    'DATABASES': 'Relational data modeling, NoSQL document stores & caching layers',
    'TOOLS': 'Productivity environments, API testing & developer toolchains',
  }

  const filteredGroups = activeCategory === 'ALL'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.category === activeCategory)

  return (
    <section id="skills" className="w-full relative scroll-mt-20">
      {/* ======================================================== */}
      {/* 1. Full-Width Deep Olive Green "TOOLS & SKILLS" Banner   */}
      {/* ======================================================== */}
      <div className="w-full bg-[#52664B] py-4 px-4 sm:px-8 border-y border-[#44563E] shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left Title Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono-tech tracking-[0.25em] text-[#DCE7DA] uppercase font-bold whitespace-nowrap">
              CORE CAPABILITIES
            </span>
            <span className="text-[#BA8146] text-sm">✦</span>
          </div>

          {/* Running Row of Tools */}
          <div className="flex items-center gap-6 overflow-x-auto py-1 no-scrollbar text-white">
            {featuredTools.map((tool) => {
              const Icon = tool.icon
              return (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity cursor-default"
                >
                  <Icon className="w-4 h-4 text-[#D8E6D5]" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {tool.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Right Subtitle */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono-tech text-[#DCE7DA]/80 shrink-0">
            <span>Verified in Code</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Structured Skills Directory: 5 Explicit Categories   */}
      {/* ======================================================== */}
      <div className="py-20 bg-[#FAF7F2] border-b border-[#EAE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
                <span>SKILLS INVENTORY</span>
                <span className="text-[#BA8146] text-sm">✦</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#1F2421] tracking-tight">
                Technical Toolkit
              </h2>
              <p className="text-sm text-[#5C665E] max-w-xl font-normal leading-relaxed">
                Technologies and tools I work with across software engineering, cloud systems, and application architecture. Zero fabricated percentages — purely hands-on competencies.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 self-start sm:self-auto">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
                  activeCategory === 'ALL'
                    ? 'bg-[#283827] text-white shadow-2xs font-semibold'
                    : 'bg-white border border-[#E2DDD3] text-[#555E57] hover:bg-[#F2EFE9]'
                }`}
              >
                All (5)
              </button>
              {SKILL_GROUPS.map((group) => (
                <button
                  key={group.category}
                  onClick={() => setActiveCategory(group.category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
                    activeCategory === group.category
                      ? 'bg-[#283827] text-white shadow-2xs font-semibold'
                      : 'bg-white border border-[#E2DDD3] text-[#555E57] hover:bg-[#F2EFE9]'
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>
          </div>

          {/* 5 Distinct Group Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group, index) => {
              const Icon = getCategoryIcon(group.category)
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl bg-white border border-[#EAE4D8] p-6 shadow-2xs hover:shadow-md hover:border-[#BA8146]/40 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Header: Icon, Category Name, Counter */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#F2F6F1] flex items-center justify-center text-[#4A5E44] group-hover:bg-[#4A5E44] group-hover:text-white transition-colors duration-300 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-mono-tech font-bold text-xs uppercase tracking-wider text-[#1F2421]">
                            {group.category}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono-tech text-[#8A9289] px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#EAE4D8]">
                        {group.skills.length} skills
                      </span>
                    </div>

                    <p className="text-xs text-[#7A8379] mb-5 leading-relaxed">
                      {categorySubtitles[group.category] || 'Production and project toolset'}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D6] text-xs font-mono-tech text-[#222823] hover:bg-[#F2EFE9] hover:border-[#BA8146]/50 transition-colors shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center justify-between text-[11px] font-mono-tech text-[#7A8379]">
                    <span className="flex items-center gap-1.5 text-[#52664B]">
                      <Sparkles className="w-3 h-3 text-[#BA8146]" />
                      <span>Hands-on practice</span>
                    </span>
                    <span className="text-[10px] text-[#A6AEA4]">Verified</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
