import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Monitor,
  Globe,
  Server,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Cpu,
} from 'lucide-react'

interface ArchitectureNode {
  id: string
  step: string
  name: string
  shortTech: string
  icon: React.ComponentType<{ className?: string }>
  headline: string
  role: string
  protocols: string[]
  projectExample: string
  considerations: string[]
}

export const ArchitectureLab: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('client')

  // IoT Simulation State
  const [moistureLevel, setMoistureLevel] = useState<number>(24)
  const [pumpState, setPumpState] = useState<'ON' | 'OFF'>('ON')

  const handleMoistureChange = (value: number) => {
    setMoistureLevel(value)
    // Hysteresis logic: below 30% turn ON, above 70% turn OFF, maintain state between 30%-70%
    if (value < 30) {
      setPumpState('ON')
    } else if (value > 70) {
      setPumpState('OFF')
    }
  }

  const nodes: ArchitectureNode[] = [
    {
      id: 'client',
      step: '01',
      name: 'Client / UI',
      shortTech: 'React • Tailwind CSS',
      icon: Monitor,
      headline: 'Responsive User Interface & Interactive State',
      role: 'Handles user interaction, responsive presentation across devices, client-side validation, and accessible UI feedback.',
      protocols: ['HTTPS', 'JSON', 'REST Client', 'WebSocket'],
      projectExample: 'Refill Flow: Responsive patient and clinic portal for prescription refill requests and real-time status tracking.',
      considerations: [
        'Component modularity and clean prop interfaces',
        'Optimistic UI state updates for immediate user feedback',
        'Mobile-first responsive typography and spacing',
      ],
    },
    {
      id: 'gateway',
      step: '02',
      name: 'API / Gateway',
      shortTech: 'Node.js • Express • REST',
      icon: Globe,
      headline: 'RESTful API Routing, Auth & Rate Limiting',
      role: 'Entry point for HTTP requests. Authenticates tokens, validates incoming payload schemas, and routes traffic cleanly to service layers.',
      protocols: ['RESTful APIs', 'JSON Schema', 'CORS Headers', 'HTTP'],
      projectExample: 'AI Travel Planner API: RESTful endpoints routing location data, map queries, and AI itinerary requests.',
      considerations: [
        'Strict schema validation using TypeScript interfaces',
        'Graceful HTTP error responses (400, 401, 404, 500)',
        'CORS policy restrictions to verified client origins',
      ],
    },
    {
      id: 'backend',
      step: '03',
      name: 'Backend Logic',
      shortTech: 'Python • Flask • LangChain',
      icon: Server,
      headline: 'Core Business Logic & AI Workflows',
      role: 'Executes algorithmic calculations, data transformations, LangChain prompt orchestration, and connects AI models to user interfaces.',
      protocols: ['Async/Await', 'REST APIs', 'LangChain Workflows', 'Python WSGI'],
      projectExample: 'ToriiMinds AI Workflows: Connected ready-to-use LLM models to user interfaces using basic REST APIs to improve response accuracy.',
      considerations: [
        'Separation of concerns: Controllers, Services, and Data Repositories',
        'Non-blocking I/O for external AI API calls',
        'Comprehensive testing of business logic and alert timers',
      ],
    },
    {
      id: 'database',
      step: '04',
      name: 'Database Tier',
      shortTech: 'MySQL • MongoDB',
      icon: Database,
      headline: 'Relational & NoSQL Persistent Storage',
      role: 'Stores persistent application state, relational models, prescription records, user itineraries, and indexed lookup tables.',
      protocols: ['SQL', 'ACID Transactions', 'Connection Pooling', 'BSON/JSON'],
      projectExample: 'Refill Operations Data: Structured relational schemas tracking medicine refill queues, patient alerts, and clinic inventories.',
      considerations: [
        'Foreign key constraints and normalized relational schemas in MySQL',
        'Flexible document schemas for trip preferences in MongoDB',
        'Safe parameterization preventing SQL injection vulnerabilities',
      ],
    },
    {
      id: 'cloud',
      step: '05',
      name: 'Cloud & DevOps',
      shortTech: 'AWS • GCP • Terraform',
      icon: Cloud,
      headline: 'Cloud Infrastructure & Automated Pipelines',
      role: 'Multi-zone VPC networking, basic AWS Lambda automation, GCP Compute Engine & Cloud Run, and CI/CD workflows.',
      protocols: ['AWS Lambda', 'Amazon VPC', 'GCP Compute', 'IAM Roles'],
      projectExample: 'ToriiMinds AWS Trainee: Set up secure virtual networks, subnets, and user access roles across multiple zones with Lambda automation.',
      considerations: [
        'Least-privilege cloud IAM user access roles',
        'Automated backend tasks and cloud setups using Lambda functions and Bash scripts',
        'Declarative infrastructure configuration with Terraform',
      ],
    },
  ]

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0]
  const ActiveIcon = activeNode.icon

  return (
    <section id="architecture" className="py-24 bg-[#FAF7F2] border-t border-[#EAE4D8] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono-tech tracking-[0.25em] text-[#7A8379] uppercase font-semibold">
              <span>SYSTEM ARCHITECTURE</span>
              <span className="text-[#BA8146] text-sm">✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#1F2421] tracking-tight">
              Application Architecture Flow
            </h2>
            <p className="text-sm text-[#5C665E] max-w-xl font-normal leading-relaxed">
              How I structure end-to-end software applications — connecting clean client interfaces through resilient APIs, database layers, and cloud AI services.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#7A8379]">
            <span className="w-2 h-2 rounded-full bg-[#52664B] animate-pulse"></span>
            <span>Interactive Explorer: Click any node</span>
          </div>
        </div>

        {/* 5-Node Interactive Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {nodes.map((node) => {
            const Icon = node.icon
            const isActive = activeNodeId === node.id
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#283827] text-white border-[#283827] shadow-md -translate-y-1'
                    : 'bg-white text-[#1F2421] border-[#EAE4D8] hover:border-[#BA8146]/50 hover:bg-[#FDFBF7]'
                }`}
              >
                <div>
                  {/* Top Row: Step & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono-tech font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#7A8379]'
                      }`}
                    >
                      {node.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${isActive ? 'text-[#BA8146]' : 'text-[#52664B]'}`}
                    />
                  </div>

                  {/* Title & Short Tech */}
                  <h3 className="font-display font-semibold text-sm sm:text-base leading-tight mb-1">
                    {node.name}
                  </h3>
                  <p
                    className={`text-[11px] font-mono-tech truncate ${
                      isActive ? 'text-[#D8E6D5]' : 'text-[#7A8379]'
                    }`}
                  >
                    {node.shortTech}
                  </p>
                </div>

                {/* Arrow hint on active */}
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono-tech">
                  <span className={isActive ? 'text-[#D8E6D5]' : 'text-[#A6AEA4]'}>
                    {isActive ? 'Active Stage' : 'Inspect'}
                  </span>
                  <ArrowRight
                    className={`w-3 h-3 transition-transform ${
                      isActive ? 'translate-x-1 text-[#BA8146]' : 'text-[#A6AEA4]'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl bg-white border border-[#EAE4D8] p-6 sm:p-9 shadow-sm text-left mb-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Role & Considerations */}
              <div className="space-y-5 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#52664B]/10 flex items-center justify-center text-[#52664B]">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-[#BA8146] font-semibold">
                      Stage {activeNode.step} • {activeNode.name}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#1F2421]">
                      {activeNode.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5C665E] leading-relaxed">
                  {activeNode.role}
                </p>

                {/* Engineering Considerations */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#7A8379] font-bold">
                    Key Engineering Focus:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeNode.considerations.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#464F48]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#52664B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: In Practice & Protocols */}
              <div className="lg:w-80 space-y-4 lg:pl-8 lg:border-l lg:border-[#F0ECE1]">
                {/* Project Application */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D8]">
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#BA8146] font-bold block mb-1">
                    Applied in Real Project:
                  </span>
                  <p className="text-xs text-[#283827] font-medium leading-relaxed">
                    {activeNode.projectExample}
                  </p>
                </div>

                {/* Protocols / Formats */}
                <div>
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#7A8379] font-bold block mb-2">
                    Protocols & Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.protocols.map((proto) => (
                      <span
                        key={proto}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#E2DDD3] text-[11px] font-mono-tech text-[#1F2421]"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ======================================================== */}
        {/* Real Embedded Hardware/IoT Logic Simulator              */}
        {/* SCI-NOVA 2024 Showcase Project Interactive Demo         */}
        {/* ======================================================== */}
        <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8E2D6] p-6 sm:p-8 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#BA8146]" />
                <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#BA8146]">
                  Hardware Firmware Simulation (SCI-NOVA 2024)
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#1F2421]">
                Threshold Hysteresis State Machine
              </h3>
              <p className="text-xs text-[#5C665E]">
                From Project 03 (Smart Automated Irrigation System): Built a device using Arduino and soil sensors to check soil moisture automatically, turning the water pump on and off to save water.
              </p>
            </div>

            {/* Current Status Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className={`px-4 py-2 rounded-2xl border font-mono-tech text-xs font-bold flex items-center gap-2 shadow-2xs ${
                  pumpState === 'ON'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-700 border-stone-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    pumpState === 'ON' ? 'bg-emerald-600 animate-ping' : 'bg-stone-400'
                  }`}
                />
                <span>Relay Pump: {pumpState}</span>
              </div>
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#EAE4D8]">
            <div className="flex justify-between items-center text-xs font-mono-tech">
              <span className="text-[#5C665E] flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-blue-600" />
                <span>Simulated Soil Moisture Sensor:</span>
              </span>
              <span className="font-bold text-[#1F2421] text-sm">{moistureLevel}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={moistureLevel}
              onChange={(e) => handleMoistureChange(Number(e.target.value))}
              className="w-full accent-[#52664B] cursor-pointer"
            />

            <div className="flex justify-between text-[11px] font-mono-tech text-[#8A9289]">
              <span>Dry (0% - Pump triggers below 30%)</span>
              <span className="text-[#BA8146]">Deadband (30% - 70% Holds State)</span>
              <span>Saturated (100% - Pump cuts off above 70%)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
