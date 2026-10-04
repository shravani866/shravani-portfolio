import React from 'react'
import { motion } from 'motion/react'
import { GraduationCap, Code2, Sparkles, Layers } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: '8.58 CGPA',
      subtitle: 'NCET Bengaluru (Expected 2027)',
    },
    {
      icon: Code2,
      title: '100+ Problems Solved',
      subtitle: 'LeetCode & CodeChef Algorithmic Rigor',
    },
    {
      icon: Layers,
      title: 'B.E. Computer Science',
      subtitle: 'Nagarjuna College of Eng. & Tech.',
    },
    {
      icon: Sparkles,
      title: 'Core Technical Focus',
      subtitle: 'Software Eng • Cloud • AI/ML • Web Dev',
    },
  ]

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] border-t border-[#EAE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Editorial Grid: Vase Image | Narrative & Signature | Metrics Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1 (Left): Ceramic Vase on Books Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex justify-center lg:justify-start"
          >
            <div className="relative w-56 sm:w-64 lg:w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#E8E2D5]">
              <img
                src="/ceramic-vase.jpg"
                alt="Minimalist ceramic vase with eucalyptus branch on books"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Column 2 (Middle): Headline, Narrative, and Gold Cursive Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-5 text-left"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
              <span>ABOUT ME</span>
              <span className="text-[#BA8146] text-sm">✦</span>
            </div>

            {/* Serif Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-medium text-[#1F2421] leading-[1.15] tracking-tight">
              Software is not just what it looks like, it's how it works.
            </h2>

            {/* Honest Student Narrative */}
            <p className="text-sm sm:text-base text-[#576058] leading-relaxed">
              I am a Computer Science and Engineering student at <strong className="text-[#1F2421] font-semibold">Nagarjuna College of Engineering & Technology</strong> with an <strong className="text-[#1F2421] font-semibold">8.58 CGPA</strong> (Expected Graduation: 2027). I focus on building reliable software systems, exploring cloud infrastructure, and applying machine learning to practical problems. I enjoy solving algorithmic challenges and turning ideas into clean, functional applications.
            </p>

            {/* Cursive Signature in Warm Gold */}
            <div className="pt-2">
              <span className="font-script text-4xl sm:text-5xl text-[#BA8146] block transform -rotate-1">
                Shravani
              </span>
            </div>
          </motion.div>

          {/* Column 3 (Right): Key Credentials Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#EAE4D8] shadow-2xs hover:border-[#BA8146]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F2F6F1] flex items-center justify-center text-[#3D523C] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-[#1F2421]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#7A8379] font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
