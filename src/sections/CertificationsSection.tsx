import React from 'react'
import { motion } from 'motion/react'
import { ShieldCheck } from 'lucide-react'
import { CERTIFICATIONS } from '../data/resumeData'

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-28 bg-[#FAF7F2] border-b border-[#E8E3D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EE] border border-[#D1DDD0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39523D]"></span>
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#39523D] uppercase font-semibold">
                INDUSTRY CREDENTIALS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-[#19201A] tracking-tight">
              Certifications.
            </h2>
          </div>

          <p className="text-sm sm:text-base font-display italic text-[#515E54] max-w-md leading-relaxed">
            “Verified certifications across AWS solutions architecture, artificial intelligence, and Google Cloud core infrastructure.”
          </p>
        </div>

        {/* 6 Elegant Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="p-7 rounded-3xl bg-white border border-[#D1DDD0] hover:border-[#39523D]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Issuer */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#EFF4EE] text-[#39523D] text-[11px] font-mono-tech font-semibold border border-[#D1DDD0]">
                    {cert.badgeText}
                  </span>
                  <span className="text-xs font-mono-tech text-[#859088]">{cert.issuer}</span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-display font-bold text-xl text-[#19201A] leading-snug group-hover:text-[#263828] transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#515E54] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags & Verification Badge */}
              <div className="mt-6 pt-4 border-t border-[#E8E3D7] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#D1DDD0] text-[10px] font-mono-tech text-[#19201A]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#859088]">
                  <span className="flex items-center gap-1.5 text-[#39523D] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Resume Verified</span>
                  </span>
                  <span className="text-[10px] uppercase text-[#859088]">Official</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
