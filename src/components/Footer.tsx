import React from 'react'
import { ArrowUp, Mail, Code2 } from 'lucide-react'
import { PERSONAL_INFO } from '../data/resumeData'

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#FAF7F2] text-[#555E57] pt-20 pb-12 border-t border-[#EAE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column / Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 items-start">
          
          {/* Column 1 (4 cols): Brand + Mission */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="font-display text-2xl font-semibold text-[#1F2421]">
                <span>S</span>
                <span className="text-[#BA8146] text-lg font-normal ml-0.5 relative -top-1.5">+</span>
              </div>
              <div className="border-l border-[#E2DDD3] pl-2.5">
                <span className="font-display font-medium text-xs tracking-[0.15em] text-[#1F2421] uppercase block">
                  SHRAVANI
                </span>
                <span className="text-[9px] font-mono-tech text-[#8A9289] tracking-[0.2em] uppercase block">
                  ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5C665E] leading-relaxed max-w-sm">
              Computer Science & Engineering student passionate about software engineering, cloud systems, and applied artificial intelligence.
            </p>
          </div>

          {/* Column 2 (3 cols): Quick Navigation */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="font-display font-semibold text-sm text-[#1F2421]">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#5C665E]">
              <li>
                <a href="#hero" className="hover:text-[#BA8146] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#BA8146] transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#BA8146] transition-colors">
                  Technical Toolkit
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#BA8146] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#BA8146] transition-colors">
                  Architecture Lab
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#BA8146] transition-colors">
                  Education & Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#BA8146] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Connect & Profiles */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="font-display font-semibold text-sm text-[#1F2421]">
              Connect & Profiles
            </h5>
            <ul className="space-y-2.5 text-xs text-[#5C665E]">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BA8146] transition-colors"
                >
                  <GitHubIcon />
                  <span>GitHub (@shravani866)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BA8146] transition-colors"
                >
                  <LinkedInIcon />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/shravaniumanabadi1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BA8146] transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode (100+ Solved)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#BA8146] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 (2 cols): Arched Studio Detail Image */}
          <div className="hidden lg:flex lg:col-span-2 justify-end">
            <div className="relative w-36 aspect-[3/4] rounded-t-[70px] rounded-b-[16px] overflow-hidden border border-[#E8E2D5] shadow-xs">
              <img
                src="/pencil-holder.jpg"
                alt="Studio detail on desk"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 border-t border-[#EAE4D8] flex items-center justify-between text-xs text-[#7A8379]">
          <p>© 2026 Shravani Umanabadi • Computer Science & Engineering</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-8 h-8 rounded-full border border-[#DCD5C9] bg-white flex items-center justify-center text-[#1F2421] hover:bg-[#283827] hover:text-white hover:border-[#283827] transition-all cursor-pointer shadow-2xs"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
