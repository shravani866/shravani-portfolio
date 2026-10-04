import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  CheckCircle2,
  Trophy,
  Award,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { CERTIFICATIONS, EDUCATION_MILESTONES } from '../data/resumeData'

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return
    let current = 0
    const duration = 1600
    const stepTime = 25
    const totalSteps = duration / stepTime
    const increment = target / totalSteps

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [hasStarted, target])

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
      className="font-display font-bold text-4xl sm:text-5xl text-amber-300"
    >
      {count}{suffix}
    </motion.span>
  )
}

export const ExperienceSection: React.FC = () => {
  const timelineMilestones = [
    {
      year: 'Jan 2026 – Present',
      title: 'AWS Cloud Trainee',
      org: 'Cloud Infrastructure & Automation Track',
      badge: 'Current Role',
      highlights: [
        'Provisioned secure 3-tier VPC architecture across 2 Availability Zones with subnets, NAT Gateways, and 15+ granular IAM roles enforcing 100% least-privilege compliance.',
        'Engineered event-driven serverless pipelines using AWS Lambda and S3, automating data processing and cutting compute idle time by 35%.',
        'Deployed 10+ custom CloudWatch metric filters and alarm thresholds, reducing simulated system incident detection time from 15 minutes to under 2 minutes.',
        'Streamlined cloud provisioning workflows by writing reusable Bash automation scripts and Terraform templates, reducing manual setup overhead by 45%.',
      ],
      tags: ['AWS VPC', 'AWS Lambda', 'Amazon S3', 'Terraform', 'Bash Automation', 'CloudWatch', 'IAM'],
    },
    {
      year: '2025 – 2026',
      title: 'Cloud Infrastructure & Applied Systems Engineering',
      org: 'Independent Projects & Algorithmic Milestones',
      badge: 'Advanced Systems',
      highlights: [
        'Architected high-availability multi-zone GCP infrastructure using Managed Instance Groups (MIG) with dynamic scaling policies, maintaining 99.9% uptime under load.',
        'Engineered Refill Bridge AI: event-driven prescription OCR parsing and inventory depletion forecasting on AWS.',
        'Developed zero-knowledge credential verification framework using Circom arithmetic circuits and Groth16 zk-SNARKs.',
        'Surpassed 100+ Data Structures & Algorithms problems solved across LeetCode and CodeChef.',
      ],
      tags: ['GCP MIG', 'AWS Lambda', 'FastAPI', 'Circom', 'zk-SNARKs', 'LeetCode (100+)'],
    },
    {
      year: '2024',
      title: 'Embedded Systems & SCI-NOVA Project Exhibition',
      org: 'SCI-NOVA 2024 Technical Showcase',
      badge: 'Exhibition Presenter',
      highlights: [
        'Engineered Smart Automated Irrigation System using Arduino, analog capacitive soil moisture sensors, and threshold hysteresis firmware in embedded C++.',
        'Conserved over 30% water consumption compared to traditional schedule-based timers across 50+ simulation cycles.',
        'Defended hardware architecture and telemetry regulation live at the SCI-NOVA 2024 Project Exhibition.',
      ],
      tags: ['Embedded C++', 'Arduino', 'IoT', 'SCI-NOVA 2024', 'Hysteresis Logic'],
    },
    {
      year: '2023 – Expected 2027',
      title: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
      org: 'Nagarjuna College of Engineering and Technology (NCET), Bengaluru',
      badge: 'CGPA: 8.58 / 10',
      highlights: [
        'Admitted to B.E. in Computer Science and Engineering at NCET Bengaluru, maintaining an academic CGPA of 8.58 / 10.',
        'Completed Pre-University Course (Class XII) at St. Joseph PU College with a score of 91.83% in 2023.',
        'Competed in the HyperAPI Global Hackathon, engineering collaborative cloud API services.',
      ],
      tags: ['NCET Bengaluru', '8.58 CGPA', 'Class XII (91.83%)', 'HyperAPI Hackathon'],
    },
  ]

  return (
    <section id="journey" className="py-28 bg-[#F5EFE6]/30 border-b border-[#EAE5DB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E4A3B] animate-pulse"></span>
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8C929E] uppercase font-semibold">
                EXPERIENCE & CREDENTIALS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#17181C] tracking-tight">
              My Journey.
            </h2>
          </div>

          <p className="text-sm sm:text-base font-display italic text-[#585D67] max-w-md leading-relaxed">
            “Enterprise cloud training, academic excellence at NCET Bengaluru, certified credentials, and competitive algorithmic problem solving.”
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. DEDICATED EDUCATION SECTION                           */}
        {/* ======================================================== */}
        <div className="mb-24">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#EAE5DB]">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#17181C] flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-[#9E4A3B]" />
              <span>Education</span>
            </h3>
            <span className="text-xs font-mono-tech text-[#8C929E] uppercase tracking-wider">
              Academic Background
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_MILESTONES.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-white border border-[#EAE5DB] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#9E4A3B] text-xs font-mono-tech font-bold border border-[#EAE5DB]">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono-tech text-[#8C929E]">{edu.period}</span>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#17181C] leading-snug">
                    {edu.role}
                  </h4>
                  <p className="text-xs font-mono-tech text-[#585D67] mt-1 font-medium">
                    {edu.company} • {edu.location}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#585D67] leading-relaxed">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9E4A3B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE5DB]/70 flex flex-wrap gap-1.5">
                  {edu.skills?.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE5DB] text-[10px] font-mono-tech text-[#585D67]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. DEDICATED OFFICIAL CERTIFICATIONS SHOWCASE (ALL 6)    */}
        {/* ======================================================== */}
        <div className="mb-24">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#EAE5DB]">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#17181C] flex items-center gap-2.5">
              <Award className="w-6 h-6 text-[#9E4A3B]" />
              <span>Official Industry Certifications</span>
            </h3>
            <span className="text-xs font-mono-tech text-[#8C929E] uppercase tracking-wider">
              6 Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-7 rounded-3xl bg-white border border-[#EAE5DB] shadow-xs hover:shadow-md hover:border-[#9E4A3B]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#9E4A3B] text-[11px] font-mono-tech font-semibold border border-[#EAE5DB]">
                      {cert.badgeText}
                    </span>
                    <span className="text-xs font-mono-tech text-[#8C929E]">{cert.issuer}</span>
                  </div>

                  <h4 className="font-display font-bold text-xl text-[#17181C] leading-snug">
                    {cert.title}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#585D67] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE5DB]/70 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#EAE5DB] text-[10px] font-mono-tech text-[#585D67]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. ACHIEVEMENTS & ANIMATED COUNTER (0 → 100+)            */}
        {/* ======================================================== */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#17181C] text-white border border-stone-800 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-amber-300 mb-8">
            <Trophy className="w-4 h-4" />
            <span>Honors & Engineering Recognition</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Featured Animated Counter Achievement */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
              <span className="text-[11px] font-mono-tech text-stone-400 uppercase tracking-wider block">
                COMPETITIVE PROGRAMMING
              </span>
              <div className="flex items-baseline gap-2">
                <AnimatedCounter target={100} suffix="+" />
                <span className="text-sm font-mono-tech text-stone-300">Problems Solved</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                Verified solutions across LeetCode & CodeChef covering Data Structures, Graphs, Trees, and Dynamic Programming.
              </p>
            </div>

            {/* HyperAPI Global Hackathon */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
              <span className="text-[11px] font-mono-tech text-stone-400 uppercase tracking-wider block">
                GLOBAL HACKATHON
              </span>
              <h4 className="text-xl font-display font-semibold text-white">
                HyperAPI Global Hackathon
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                Competed in high-velocity international hackathon architecting collaborative API-driven cloud backend microservices.
              </p>
            </div>

            {/* SCI-NOVA 2024 */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
              <span className="text-[11px] font-mono-tech text-stone-400 uppercase tracking-wider block">
                TECHNICAL EXHIBITION
              </span>
              <h4 className="text-xl font-display font-semibold text-white">
                SCI-NOVA 2024 Presenter
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                Showcased and defended the Smart Automated Irrigation System with hysteresis regulation to academic and industry judges.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. CHRONOLOGICAL EDITORIAL TIMELINE ("MY JOURNEY")       */}
        {/* ======================================================== */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-12 border-b border-[#EAE5DB]">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#17181C] flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-[#9E4A3B]" />
              <span>Timeline & Milestones</span>
            </h3>
            <span className="text-xs font-mono-tech text-[#8C929E] uppercase tracking-wider">
              Chronological Path
            </span>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-[#D8D2C5] space-y-14">
            {timelineMilestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Indicator Pin */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#17181C] group-hover:border-[#9E4A3B] group-hover:scale-125 transition-all" />

                {/* Editorial Milestone Card */}
                <div className="bg-white rounded-3xl border border-[#EAE5DB] p-7 sm:p-9 shadow-xs hover:shadow-md transition-all">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#EAE5DB] gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono-tech font-bold text-[#9E4A3B] bg-[#FAF7F2] px-3 py-0.5 rounded-full border border-[#EAE5DB]">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono-tech text-[#8C929E]">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#17181C]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono-tech text-[#585D67] mt-0.5">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Points from Resume */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#585D67] leading-relaxed mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9E4A3B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EAE5DB]/60">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE5DB] text-[11px] font-mono-tech text-[#17181C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
