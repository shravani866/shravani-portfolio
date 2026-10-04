import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, MapPin, Send, Check, Copy } from 'lucide-react'
import confetti from 'canvas-confetti'
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

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#BA8146', '#283827', '#E2DDD3'],
      })
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setShowForm(false)
      setFormState({ name: '', email: '', message: '' })
    }, 2800)
  }

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#EAE4D8] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Contact Header & CTA Box */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Side: Eyebrow, Large Heading, and Subtitle */}
          <div className="max-w-xl text-left space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
              <span>GET IN TOUCH</span>
              <span className="text-[#BA8146] text-sm">✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-medium text-[#1F2421] leading-tight tracking-tight uppercase">
              LET'S BUILD SOMETHING MEANINGFUL.
            </h2>

            <p className="text-xs sm:text-sm text-[#5C665E] leading-relaxed pt-1">
              Currently open to Software Engineering internships, collaborative student hackathons, and early-career cloud engineering opportunities. Feel free to reach out directly.
            </p>

            {/* Quick Links: LinkedIn & GitHub */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#283827] hover:text-[#BA8146] transition-colors"
              >
                <span className="text-[#BA8146]">
                  <LinkedInIcon />
                </span>
                <span>LinkedIn Profile</span>
              </a>

              <span className="text-[#D8D2C5]">•</span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#283827] hover:text-[#BA8146] transition-colors"
              >
                <span className="text-[#BA8146]">
                  <GitHubIcon />
                </span>
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

          {/* Right Side: Direct Email & Pill Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
            <div className="space-y-2.5 text-left text-xs font-mono-tech">
              {/* Email with copy */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-[#1F2421] hover:text-[#BA8146] transition-colors cursor-pointer group"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4 text-[#BA8146]" />
                <span className="underline decoration-[#DCD5C9] underline-offset-4">
                  {PERSONAL_INFO.email}
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#8A9289] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                )}
              </button>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#5C665E]">
                <MapPin className="w-4 h-4 text-[#BA8146]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Caramel Gold "Send Message →" Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#BA8146] text-white text-xs font-semibold tracking-wider hover:bg-[#A56F39] transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <span>{showForm ? 'Close Form' : "Send Message"}</span>
              <span className="text-sm font-light">→</span>
            </button>
          </div>

        </div>

        {/* Expandable Contact Form Modal/Drawer */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12 pt-8 border-t border-[#EAE4D8] overflow-hidden"
            >
              <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-[#EAE4D8] shadow-sm text-left">
                <h3 className="font-display font-semibold text-xl text-[#1F2421] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#7A8379] mb-6">
                  Fill in the details below and I will respond to your note promptly.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#F0F4EE] border border-[#D2DDD0] text-center space-y-2">
                    <Check className="w-6 h-6 text-[#3D523C] mx-auto" />
                    <p className="font-display font-semibold text-base text-[#1F2421]">
                      Message Received!
                    </p>
                    <p className="text-xs text-[#5C665E]">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-[#5C665E] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2DDD3] text-sm text-[#1F2421] focus:outline-none focus:border-[#BA8146]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-[#5C665E] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2DDD3] text-sm text-[#1F2421] focus:outline-none focus:border-[#BA8146]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-[#5C665E] mb-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your team, internship role, or project..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2DDD3] text-sm text-[#1F2421] focus:outline-none focus:border-[#BA8146]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#283827] text-white text-xs font-semibold tracking-wider hover:bg-[#384D37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
