import React from 'react'
import { motion } from 'motion/react'
import { Cloud, Sparkles, Monitor, Cpu } from 'lucide-react'

export const EngineeringFocusSection: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description:
        'Designing high-availability multi-tier VPC networks, automated scaling MIGs, and least-privilege IAM cloud infrastructure.',
      href: '#projects',
    },
    {
      icon: Sparkles,
      title: 'AI & Machine Learning',
      description:
        'Building predictive analytics models, sensor telemetry classification, and edge inference using Python and Scikit-learn.',
      href: '#projects',
    },
    {
      icon: Monitor,
      title: 'Full-Stack Engineering',
      description:
        'Crafting responsive, type-safe web applications with React, TypeScript, Tailwind CSS, Node.js, and modern RESTful APIs.',
      href: '#projects',
    },
    {
      icon: Cpu,
      title: 'Systems & IoT',
      description:
        'Developing embedded microcontroller firmware, hysteresis telemetry loops, and automated sensor-driven irrigation logic.',
      href: '#projects',
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
            <span>WHAT I DO</span>
            <span className="text-[#BA8146] text-sm">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#1F2421] tracking-tight">
            Services I Offer
          </h2>
        </div>

        {/* 4 White Rounded Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-7 rounded-2xl bg-white border border-[#EAE4D8] shadow-2xs hover:shadow-md hover:border-[#BA8146]/40 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  {/* Round Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#F0F4EE] group-hover:bg-[#E4ECE2] flex items-center justify-center text-[#4A5E44] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-[#1F2421]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C665E] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-6">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F2421] group-hover:text-[#BA8146] transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="text-sm font-light">→</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
