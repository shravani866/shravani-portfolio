import React from 'react'
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Maximize2,
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/resumeData'

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-28 bg-[#FAF7F2] border-b border-[#E8E3D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EE] border border-[#D1DDD0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39523D]"></span>
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#39523D] uppercase font-semibold">
                CURRICULUM VITAE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#19201A] tracking-tight">
              More about my journey.
            </h2>
          </div>

          {/* Action CTAs: VIEW RESUME & DOWNLOAD RESUME */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Shravani_Umanabadi_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#263828] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#39523D] transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D6E2D4]" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#D1DDD0] text-[#19201A] text-xs font-semibold tracking-widest uppercase hover:border-[#263828] transition-colors shadow-2xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#39523D]" />
              <span>VIEW RESUME</span>
            </a>
          </div>
        </div>

        {/* Resume Preview Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Key Highlights & Quick Verification Sheet */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-7 rounded-3xl border border-[#D1DDD0] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E8E3D7]">
                <div className="w-10 h-10 rounded-full bg-[#EFF4EE] border border-[#D1DDD0] text-[#39523D] flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#19201A]">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="text-[11px] font-mono-tech text-[#859088]">
                    Official Verified Resume
                  </span>
                </div>
              </div>

              {/* Quick Summary Points */}
              <div className="space-y-3.5 text-xs text-[#515E54]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Education:</strong> B.E. Computer Science Engineering, NCET Bengaluru (8.58 CGPA)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Certifications:</strong> AWS Solutions Architect & AWS AI Practitioner
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Problem Solving:</strong> 100+ Problems Solved on LeetCode & CodeChef
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39523D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Core Stack:</strong> C, C++, Python, Java, AWS, GCP, React, Node.js, SQL
                  </span>
                </div>
              </div>

              {/* Direct Download Callout */}
              <div className="p-5 rounded-2xl bg-[#EFF4EE] border border-[#D1DDD0] space-y-3">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#39523D] block font-bold">
                  DOCUMENT INFORMATION
                </span>
                <div className="text-xs font-mono-tech text-[#515E54] space-y-1.5">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-semibold text-[#19201A]">PDF Document</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Source:</span>
                    <span className="font-semibold text-[#19201A]">Shravani_Umanabadi_Resume.pdf</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold text-[#39523D]">Ready for Submission</span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Shravani_Umanabadi_Resume.pdf"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#263828] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#39523D] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SAVE RESUME (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated PDF Preview / Document Viewer */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#D1DDD0] shadow-md overflow-hidden flex flex-col">
            {/* Viewer Top Toolbar */}
            <div className="px-6 py-3.5 bg-[#EFF4EE] border-b border-[#D1DDD0] flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-[#515E54]">
                <FileText className="w-4 h-4 text-[#39523D]" />
                <span className="font-semibold text-[#19201A]">
                  Shravani_Umanabadi_Resume.pdf
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#39523D] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>FULLSCREEN</span>
                </a>
              </div>
            </div>

            {/* Embedded PDF iframe / Document Frame */}
            <div className="relative w-full h-[640px] bg-[#EAE5DB] flex items-center justify-center">
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Shravani Umanabadi Resume Preview"
                className="w-full h-full border-none"
              />
            </div>

            {/* Viewer Footer */}
            <div className="p-4 bg-white border-t border-[#D1DDD0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#515E54]">
              <span className="font-mono-tech text-[11px]">
                Bengaluru, Karnataka, India • {PERSONAL_INFO.phone}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#39523D] font-semibold hover:underline font-mono-tech"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
