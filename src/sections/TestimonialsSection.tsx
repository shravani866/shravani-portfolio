import React, { useState } from 'react'
import { motion } from 'motion/react'

export const TestimonialsSection: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0)

  const testimonials = [
    {
      name: 'Faculty Mentor',
      role: 'Dept of CSE, NCET Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=160',
      quote:
        'Shravani is a standout engineering student with rare diligence. Her ability to architect multi-tier cloud systems and bridge machine learning algorithms with real IoT hardware is exceptional.',
    },
    {
      name: 'Technical Career Education',
      role: 'AWS Cloud Trainee Program Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=160',
      quote:
        'Her deep grasp of AWS VPC topologies, IAM least privilege, and hands-on cloud automation made her one of the most proactive trainees in our enterprise cloud cohorts.',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#FAF7F2] border-t border-[#EAE4D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
            <span>TESTIMONIALS</span>
            <span className="text-[#BA8146] text-sm">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#1F2421] tracking-tight">
            What Mentors & Peers Say
          </h2>
        </div>

        {/* Testimonials Content with Glass Eucalyptus Vase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 2 Quote Cards */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="p-7 rounded-2xl bg-white border border-[#EAE4D8] shadow-2xs relative flex flex-col justify-between text-left"
                >
                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-[#555E57] italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>

                  {/* Profile and Gold Quote Mark */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE1]">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#E2DDD3]"
                      />
                      <div>
                        <h4 className="font-display font-semibold text-sm text-[#1F2421]">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#7A8379] font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Gold Decorative Quotation Mark */}
                    <span className="font-editorial text-3xl font-normal text-[#BA8146] select-none leading-none">
                      ”
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setActiveDot(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeDot === dot ? 'bg-[#BA8146] w-4' : 'bg-[#D6CFC3]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Clear Glass Vase with Eucalyptus */}
          <div className="hidden lg:flex lg:col-span-4 justify-center">
            <div className="relative w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#E8E2D5]">
              <img
                src="/glass-vase.jpg"
                alt="Clear glass vase with fresh eucalyptus leaves"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
