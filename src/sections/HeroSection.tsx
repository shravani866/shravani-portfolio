import React from 'react'
import { motion } from 'motion/react'
import { Download, Mail, Code2 } from 'lucide-react'
import { PERSONAL_INFO } from '../data/resumeData'

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-20 flex items-center bg-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography & Connect Strip        */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left z-10"
          >
            {/* Eyebrow Label with Star */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
              <span>HELLO, I'M SHRAVANI</span>
              <span className="text-[#BA8146] text-base leading-none">✦</span>
            </div>

            {/* Large Luxury Serif Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-display font-medium text-[#1F2421] leading-[1.03] tracking-tight">
              Software Engineer<br />
              Crafting <span className="font-editorial italic font-normal text-[#BA8146]">Scalable</span><br />
              Systems
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-[#555E57] max-w-lg font-normal leading-relaxed">
              Computer Science and Engineering student passionate about software development, cloud computing, DevOps, and AI.
            </p>

            {/* Action Buttons: VIEW MY WORK & DOWNLOAD RESUME */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#283827] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#384D37] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <span className="text-base font-light">→</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Shravani_Umanabadi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/90 border border-[#DCD5C9] text-[#1F2421] text-xs font-semibold tracking-wider uppercase hover:bg-white hover:border-[#1F2421] transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-3.5 h-3.5 text-[#555E57]" />
              </a>
            </div>

            {/* LET'S CONNECT & Circular Social Icons */}
            <div className="pt-6 space-y-3">
              <span className="block text-[11px] font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
                LET'S CONNECT
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-[#DCD5C9] bg-white flex items-center justify-center text-[#283827] hover:bg-[#283827] hover:text-white hover:border-[#283827] transition-all shadow-2xs"
                >
                  <GitHubIcon />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-[#DCD5C9] bg-white flex items-center justify-center text-[#283827] hover:bg-[#283827] hover:text-white hover:border-[#283827] transition-all shadow-2xs"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://leetcode.com/u/shravaniumanabadi1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="w-10 h-10 rounded-full border border-[#DCD5C9] bg-white flex items-center justify-center text-[#283827] hover:bg-[#283827] hover:text-white hover:border-[#283827] transition-all shadow-2xs"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Shravani"
                  className="w-10 h-10 rounded-full border border-[#DCD5C9] bg-white flex items-center justify-center text-[#283827] hover:bg-[#283827] hover:text-white hover:border-[#283827] transition-all shadow-2xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Arched Portrait & Botanical Composition    */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
            
            {/* The Tall Soft Sage Green Arched Container & 3D Layered Portrait */}
            <div className="relative w-[340px] sm:w-[400px] lg:w-[440px] h-[480px] sm:h-[550px] lg:h-[600px] flex items-end justify-center">
              {/* Arched Backdrop */}
              <div className="absolute inset-x-0 bottom-0 top-7 rounded-t-[220px] rounded-b-[40px] bg-[#8F9E8B] overflow-hidden shadow-lg">
                {/* Subtle ambient light gradient inside arch */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#9FB09B]/70 via-[#8F9E8B] to-[#7B8B77] pointer-events-none" />
              </div>

              {/* Shravani's Portrait (Extending naturally with 3D depth) */}
              <img
                src="/shravani-cutout.png"
                alt="Shravani Umanabadi — Software Engineer"
                className="relative z-10 w-full h-[98%] object-contain object-bottom filter contrast-[1.02] drop-shadow-md"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (!target.src.endsWith('/shravani.jpg')) {
                    target.src = '/shravani.jpg'
                  }
                }}
                loading="eager"
              />
            </div>

            {/* Eucalyptus Branch Overlay on the Left of the Arch */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 sm:-left-10 bottom-6 sm:bottom-12 w-40 sm:w-52 pointer-events-none z-20 opacity-90"
            >
              <img
                src="/eucalyptus-branch.png"
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain filter drop-shadow-sm"
              />
            </motion.div>

            {/* Circular Rotating Stamp Badge (Top-Right of Arch) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#FAF7F2] border border-[#E5DFD4] shadow-md flex items-center justify-center pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full p-1.5" aria-hidden="true">
                <path
                  id="stampCirclePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[7.8px] font-mono-tech font-semibold uppercase fill-[#6E776F] tracking-[0.18em]">
                  <textPath href="#stampCirclePath" startOffset="0%">
                    • SCALABLE • RESILIENT • INTELLIGENT • INNOVATIVE
                  </textPath>
                </text>
              </svg>

              {/* Central Golden Star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#BA8146] text-xl font-light leading-none">✦</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
