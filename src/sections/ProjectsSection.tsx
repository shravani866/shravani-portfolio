import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/resumeData'
import type { Project } from '../types/portfolio'
import { ProjectModal } from '../components/ProjectModal'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: index >= 3 ? (index - 3) * 0.08 : index * 0.06 }}
      onClick={onSelect}
      className="group cursor-pointer rounded-2xl bg-white border border-[#EAE4D8] overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#BA8146]/50 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EFE9]">
        <img
          src={project.imageUrl || '/project-cloud.jpg'}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Project Number Badge (e.g. 01, 02...) */}
        <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-[#19201A]/80 backdrop-blur-xs text-[#FAF7F2] text-[11px] font-mono-tech font-bold tracking-wider shadow-xs">
          {project.projectNumber || `0${index + 1}`}
        </div>

        {/* Badge Category Tag */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#283827] text-[10px] font-mono-tech font-semibold shadow-xs">
          {project.badge}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          <div className="text-[11px] font-mono-tech text-[#8A9289] mb-1">
            {project.period}
          </div>

          <h3 className="font-display font-semibold text-lg sm:text-xl text-[#1F2421] group-hover:text-[#BA8146] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5C665E] font-normal leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8E2D6] text-[11px] font-mono-tech text-[#3A433C]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8E2D6] text-[11px] font-mono-tech text-[#8A9289]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* View Project Action Row */}
          <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
            <span className="text-xs font-semibold font-mono-tech text-[#283827] group-hover:text-[#BA8146] transition-colors flex items-center gap-1">
              <span>View Project Details</span>
            </span>

            {/* Circular Action Button with subtle slide */}
            <div className="w-8 h-8 rounded-full bg-[#283827] text-white flex items-center justify-center shrink-0 group-hover:bg-[#BA8146] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-2xs">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState<boolean>(false)

  // Initially show only the first 3 projects; reveal all when showAll is true
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3)

  const handleToggleProjects = () => {
    const nextShowAll = !showAll
    setShowAll(nextShowAll)
    if (!nextShowAll) {
      // When collapsing back to first 3, gently scroll to keep the section in focus
      const el = document.getElementById('projects')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="projects" className="py-24 bg-[#FAF7F2] border-t border-[#EAE4D8] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
            <span>SELECTED WORK</span>
            <span className="text-[#BA8146] text-sm">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#1F2421] tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm text-[#5C665E] max-w-xl font-normal leading-relaxed">
            Explore hands-on software engineering projects across healthcare operations, AI-enabled travel planning, and automated IoT sensor systems.
          </p>
        </div>

        {/* Project Cards Grid (Initially 3, smoothly expands to all available projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Clean VIEW ALL PROJECTS → / SHOW LESS ↑ Toggle Button */}
        {PROJECTS.length > 3 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={handleToggleProjects}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#283827] text-[#FAF7F2] hover:bg-[#39523D] text-xs font-mono-tech tracking-[0.18em] uppercase font-bold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>{showAll ? 'SHOW LESS' : 'VIEW ALL PROJECTS'}</span>
              <span className="text-sm font-normal transition-transform duration-300 group-hover:translate-x-0.5">
                {showAll ? '↑' : '→'}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
