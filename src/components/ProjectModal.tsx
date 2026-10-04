import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle2, GitBranch, ExternalLink, Sparkles, UserCheck, Wrench } from 'lucide-react'
import type { Project } from '../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#121418]/65 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF7F2] border border-[#E2DDD3] rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#EAE4D8]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#52664B]/10 text-[#52664B] text-xs font-mono-tech font-bold">
                {project.badge}
              </span>
              <span className="text-xs font-mono-tech text-[#7A8379]">• {project.period}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2DDD3] text-xs font-mono-tech text-[#555E57] hover:text-[#BA8146] hover:border-[#BA8146]/50 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#52664B]" />
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#7A8379] hover:text-[#1F2421] hover:bg-[#F2EFE9] transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
            
            {/* Header: Title, Subtitle, & Optional Preview Image */}
            <div className="space-y-2">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[#BA8146] font-semibold">
                Project {project.projectNumber || '01'}
              </div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-medium text-[#1F2421] tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-[#5C665E] leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Project Image Banner */}
            {project.imageUrl && (
              <div className="relative aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-[#EAE4D8] bg-[#F2EFE9]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Quick 20-30 Second Summary Grid: Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-white border border-[#EAE4D8] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#9E4A3B] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#9E4A3B]"></span>
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#464F48] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-[#F2F6F1] border border-[#DCE7DA] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#355734] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#355734]" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2E472D] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Contribution (Crucial for recruiter clarity) */}
            {project.myContribution && (
              <div className="p-5 rounded-2xl bg-white border border-[#BA8146]/30 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#BA8146] mb-2">
                  <UserCheck className="w-4 h-4 text-[#BA8146]" />
                  <span>My Specific Contribution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2A312B] leading-relaxed font-medium">
                  {project.myContribution}
                </p>
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-[#EAE4D8]">
                <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1F2421] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52664B]" />
                  <span>Key Features & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5C665E]">
                      <span className="text-[#BA8146] font-bold shrink-0 mt-0.5">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#7A8379] mb-2.5 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#BA8146]" />
                <span>Technologies & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-white border border-[#E2DDD3] text-xs font-mono-tech text-[#1F2421] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Metrics (if present) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-4 border-t border-[#EAE4D8]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-[#EAE4D8] text-center">
                      <div className="font-display font-bold text-xl text-[#283827]">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono-tech text-[#7A8379] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Footer Action */}
          <div className="px-6 py-4 bg-white border-t border-[#EAE4D8] flex items-center justify-between">
            <span className="text-xs font-mono-tech text-[#8A9289]">
              Shravani Umanabadi • Engineering Case Study
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#283827] text-white text-xs font-mono-tech font-semibold hover:bg-[#BA8146] transition-colors cursor-pointer"
            >
              Close Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
