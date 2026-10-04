import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react'
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/resumeData'

interface TerminalConsoleProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandHistory {
  command: string
  output: React.ReactNode
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="text-stone-300 space-y-1">
          <p className="text-emerald-400 font-semibold">
            shravani-cloud-shell v2.6.4 (x86_64-pc-linux-gnu)
          </p>
          <p className="text-stone-400 text-xs">
            Host: Bengaluru-Edge-Gateway | AWS Certified Solutions Architect & AI Practitioner
          </p>
          <p className="text-stone-400 text-xs">
            Type <span className="text-amber-300 font-mono underline">help</span> or click suggestions below to inspect systems.
          </p>
        </div>
      ),
    },
  ])
  const [isExpanded, setIsExpanded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let output: React.ReactNode = null

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-stone-300 font-mono">
              <div><span className="text-amber-300">about</span> — Overview, education & credentials</div>
              <div><span className="text-amber-300">skills</span> — Verified technical toolchain</div>
              <div><span className="text-amber-300">projects</span> — Architecture & project list</div>
              <div><span className="text-amber-300">vpc</span> — 3-tier AWS VPC network topology</div>
              <div><span className="text-amber-300">mig</span> — GCP Managed Instance Group specs</div>
              <div><span className="text-amber-300">contact</span> — Reach out & verified endpoints</div>
              <div><span className="text-amber-300">resume</span> — Open / download PDF</div>
              <div><span className="text-amber-300">clear</span> — Flush console screen</div>
            </div>
          </div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-1 text-xs text-stone-300">
            <p className="text-emerald-400 font-semibold">{PERSONAL_INFO.name}</p>
            <p>Education: B.E. in Computer Science & Engineering (NCET Bengaluru, Expected 2027)</p>
            <p className="text-emerald-300 font-mono">CGPA: 8.58 / 10 | Class XII: 91.83%</p>
            <p>Certifications: AWS Solutions Architect – Associate | AWS AI Practitioner | GCP Core Infra</p>
            <p className="text-stone-400">Current Role: AWS Cloud Trainee (Cloud Infrastructure & Automation Track)</p>
          </div>
        )
        break

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat: any) => (
              <div key={cat.category}>
                <span className="text-amber-300 font-semibold">{cat.category}: </span>
                <span className="text-stone-300 font-mono">
                  {cat.skills.map((s: any) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-stone-300">
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-emerald-500 pl-2">
                <p className="text-emerald-300 font-semibold">{p.title} ({p.period})</p>
                <p className="text-stone-400">{p.shortDescription}</p>
                <p className="text-stone-500 font-mono text-[11px]">Stack: {p.stack.join(' • ')}</p>
              </div>
            ))}
          </div>
        )
        break

      case 'vpc':
        output = (
          <div className="text-xs font-mono text-stone-300 space-y-1 bg-stone-900/60 p-2.5 rounded border border-stone-800">
            <p className="text-emerald-400 font-bold">[AWS 3-Tier Multi-AZ VPC Architecture]</p>
            <p>Region: ap-south-1 (2 Availability Zones: ap-south-1a, ap-south-1b)</p>
            <p>CIDR: 10.0.0.0/16</p>
            <p>├── Public Subnets (10.0.1.0/24, 10.0.2.0/24) ── NAT Gateways & ALB</p>
            <p>├── Private App Subnets (10.0.10.0/24, 10.0.20.0/24) ── AWS Lambda / EC2 Services</p>
            <p>└── Private Database Subnets (10.0.30.0/24, 10.0.40.0/24) ── MySQL / Aurora Cluster</p>
            <p className="text-amber-300 text-[11px]">Security: 15+ Granular IAM Roles with Least-Privilege & Zero Internet Ingress</p>
          </div>
        )
        break

      case 'mig':
        output = (
          <div className="text-xs font-mono text-stone-300 space-y-1 bg-stone-900/60 p-2.5 rounded border border-stone-800">
            <p className="text-emerald-400 font-bold">[GCP Managed Instance Group Specs]</p>
            <p>Scope: Multi-Zone Regional MIG (3 Zones)</p>
            <p>Ingress: Global HTTP(S) Load Balancer with Layer-7 Health Checks (-25% Latency)</p>
            <p>Auto-Scaling Policy: Target CPU 65% + Request-rate dynamic triggers (99.9% Uptime)</p>
            <p>Egress: Cloud NAT Gateway (100% internal instances shielded from public IPs)</p>
            <p className="text-emerald-300 text-[11px]">Bootstrapping: Automated via Bash startup scripts (-40% spin-up time)</p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-stone-300">
            <p><span className="text-amber-300">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-amber-300">Phone:</span> {PERSONAL_INFO.phone}</p>
            <p><span className="text-amber-300">LinkedIn:</span> {PERSONAL_INFO.linkedin}</p>
            <p><span className="text-amber-300">GitHub:</span> {PERSONAL_INFO.github}</p>
            <p><span className="text-amber-300">Location:</span> {PERSONAL_INFO.location}</p>
          </div>
        )
        break

      case 'resume':
        window.open(PERSONAL_INFO.resumeUrl, '_blank')
        output = (
          <p className="text-xs text-emerald-400 font-mono">
            Opening official resume PDF in new tab ({PERSONAL_INFO.resumeUrl})...
          </p>
        )
        break

      case 'clear':
        setHistory([])
        return

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            command not found: {trimmed}. Type <span className="text-stone-200 underline">help</span> for available commands.
          </p>
        )
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    executeCommand(input)
    setInput('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cloud Shell Terminal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`w-full bg-[#121418] border border-stone-800 rounded-xl shadow-2xl flex flex-col overflow-hidden text-stone-200 transition-all ${
              isExpanded ? 'h-[92vh] max-w-5xl' : 'h-[540px] max-w-2xl'
            }`}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181B20] border-b border-stone-800/80">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer hover:bg-rose-400" onClick={onClose}></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block cursor-pointer hover:bg-emerald-400" onClick={() => setIsExpanded(!isExpanded)}></span>
                </div>
                <div className="flex items-center gap-1.5 ml-3 text-xs font-mono-tech text-stone-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>shravani@cloud-shell:~</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 text-stone-400 hover:text-white rounded"
                  aria-label="Toggle terminal full size"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 text-stone-400 hover:text-white rounded"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick chips bar */}
            <div className="px-4 py-1.5 bg-[#14161B] border-b border-stone-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono-tech">
              <span className="text-stone-500">Quick:</span>
              {['about', 'vpc', 'mig', 'skills', 'projects', 'resume', 'clear'].map((item) => (
                <button
                  key={item}
                  onClick={() => executeCommand(item)}
                  className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 hover:bg-emerald-950 hover:text-emerald-300 hover:border-emerald-700/50 border border-stone-700/60 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 font-mono-tech text-xs overflow-y-auto space-y-3 bg-[#0E1013]">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="text-stone-200">{h.command}</span>
                  </div>
                  <div className="pl-4">{h.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 bg-[#14161B] border-t border-stone-800"
            >
              <span className="text-emerald-400 font-mono-tech font-bold text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. vpc, mig, skills, help)..."
                className="flex-1 bg-transparent text-stone-100 font-mono-tech text-xs focus:outline-none placeholder:text-stone-600"
              />
              <button
                type="submit"
                className="p-1.5 rounded bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
