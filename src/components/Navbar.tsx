import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { PERSONAL_INFO } from '../data/resumeData'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const sections = ['contact', 'education', 'projects', 'experience', 'skills', 'about', 'hero']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D5] py-4 shadow-[0_4px_20px_rgba(40,50,40,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Refined Monogram + Brand Typography */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-left focus:outline-none"
              aria-label="Shravani Umanabadi Home"
            >
              <div className="relative font-display text-2xl font-semibold text-[#1F2421] tracking-tight">
                <span>S</span>
                <span className="text-[#BA8146] text-lg font-normal ml-0.5 relative -top-1.5">+</span>
              </div>

              <div className="flex flex-col border-l border-[#E2DDD3] pl-2.5">
                <span className="font-display font-medium text-xs sm:text-sm tracking-[0.15em] text-[#1F2421] uppercase">
                  SHRAVANI
                </span>
                <span className="text-[9px] font-mono-tech text-[#8A9289] tracking-[0.2em] uppercase">
                  ENGINEERING
                </span>
              </div>
            </a>

            {/* Center: Clean Nav Links with subtle active dot */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 text-sm font-medium transition-colors flex flex-col items-center ${
                      isActive
                        ? 'text-[#1F2421] font-semibold'
                        : 'text-[#6C756E] hover:text-[#1F2421]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavDot"
                        className="w-1 h-1 rounded-full bg-[#BA8146] mt-0.5"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-transparent mt-0.5" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Right: Warm Caramel/Gold "Let's Connect →" Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#BA8146] text-white text-xs font-semibold tracking-wider hover:bg-[#A66F38] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Let's Connect</span>
                <span className="text-sm font-light">→</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-full bg-[#263828] text-[#FAF7F2] text-[11px] font-semibold tracking-wider uppercase"
              >
                CONNECT
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-[#D1DDD0] bg-white text-[#19201A] hover:bg-[#EFF4EE] transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E3D7] p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-3 mb-2 border-b border-[#E8E3D7] text-[11px] font-mono-tech text-[#39523D]">
                NCET Bengaluru • B.E. Computer Science • 8.58 CGPA
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase font-semibold text-[#19201A] hover:bg-[#EFF4EE] hover:text-[#263828] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#859088]" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E8E3D7] flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Shravani_Umanabadi_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#263828] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#39523D]"
                >
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
