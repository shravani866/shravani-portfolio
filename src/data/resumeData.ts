import type { Project, ExperienceItem, Certification, SkillCategory } from '../types/portfolio'

export const PERSONAL_INFO = {
  name: 'Shravani Umanabadi',
  preferredName: 'Shravani',
  tagline: 'Computer Science & Engineering Student • Software Development • Cloud • DevOps • AI',
  heroPreheading: "HELLO, I'M SHRAVANI",
  heroHeading: 'SHRAVANI UMANABADI',
  heroRole: 'Computer Science & Engineering Student',
  heroSpecialization: 'Software Development • Cloud Computing • DevOps • AI',
  heroQuote: 'Building reliable software, scalable cloud systems, and intelligent applications.',
  bioSummary:
    'Computer Science and Engineering student at Nagarjuna College of Engineering and Technology (NCET), Bengaluru, with an 8.58 CGPA (Expected Graduation: 2027). Interested in software development, cloud computing, DevOps, and AI. Passionate about building web applications, designing multi-cloud solutions, automating workflows, and solving algorithmic problems.',
  location: 'Bengaluru, Karnataka, India',
  email: 'shravaniumanabadi9@gmail.com',
  phone: '+91 8660954261',
  linkedin: 'https://linkedin.com/in/shravani-umanabadi',
  github: 'https://github.com/shravani866',
  leetcode: 'https://leetcode.com/u/shravaniumanabadi1/',
  resumeUrl: '/Shravani_Umanabadi_Resume.pdf',
  avatarCutoutUrl: '/shravani-cutout.png',
  avatarJpgUrl: '/shravani.jpg',
  stats: [
    { label: 'Academic CGPA', value: '8.58' },
    { label: 'DSA Problems Solved', value: '100+' },
    { label: 'Class XII Score', value: '91.83%' },
    { label: 'Cloud Credentials', value: 'AWS & GCP' },
  ],
}

// Spoken Languages from Resume
export const LANGUAGES = [
  { language: 'Kannada', proficiency: 'Native' },
  { language: 'English', proficiency: 'Professional Working Proficiency' },
]

// Professional Experience from Resume
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'toriiminds-ai-engineer',
    role: 'AI Ready Engineer',
    company: 'ToriiMinds',
    track: 'AI Engineering & LLM Integration',
    period: '2026',
    location: 'Bengaluru, India',
    type: 'experience',
    badge: 'ToriiMinds • 2026',
    highlights: [
      'Built and tested simple AI workflows using LangChain and ready-to-use LLM models.',
      'Connected AI models to user interfaces using basic REST APIs to improve response accuracy.',
    ],
    skills: ['LangChain', 'LLM Models', 'REST APIs', 'AI Workflows', 'Prompt Integration'],
  },
  {
    id: 'toriiminds-aws-trainee',
    role: 'AWS Cloud Trainee',
    company: 'ToriiMinds',
    track: 'Cloud Architecture & Infrastructure Automation',
    period: '2025',
    location: 'Bengaluru, India',
    type: 'experience',
    badge: 'ToriiMinds • 2025',
    highlights: [
      'Set up secure virtual networks, subnets, and user access roles across multiple zones.',
      'Automated backend tasks and cloud setups using basic Lambda functions and Bash scripts.',
    ],
    skills: ['AWS VPC', 'Subnets', 'IAM Roles', 'AWS Lambda', 'Bash Scripts', 'Multi-Zone Architecture'],
  },
]

// 3 Projects from Resume
export const PROJECTS: Project[] = [
  {
    id: 'refill-flow',
    projectNumber: '01',
    title: 'Refill Flow — Healthcare Refill Operations',
    subtitle: 'Prescription Refill Portal & Automated Patient Reminder System',
    period: '2026',
    badge: 'Healthcare & Operations',
    category: 'ai',
    imageUrl: '/project-refill-ai.jpg',
    stack: ['React', 'Node.js', 'Python', 'Flask', 'AWS Lambda', 'RESTful APIs'],
    shortDescription:
      'Built a portal for patients and clinics to request and track medicine refills, with automated reminder alerts to help patients reorder prescriptions on time.',
    problemStatement:
      'Patients and healthcare clinics frequently experience delayed prescription refills and missed medication schedules due to manual coordination and a lack of timely reorder alerts.',
    solution:
      'Built a comprehensive portal for patients and clinics to request and track medicine refills seamlessly, integrating automated reminder alerts so patients can reorder prescriptions on time.',
    keyFeatures: [
      'Built a portal for patients and clinics to request and track medicine refills.',
      'Added automated reminder alerts to help patients reorder prescriptions on time.',
      'Streamlined clinic refill workflows with real-time request tracking.',
      'Responsive, user-friendly interface for patients and healthcare administrators.',
    ],
    myContribution:
      'Built the patient and clinic refill request portal, developed responsive UI components in React, and integrated automated alert triggers and RESTful API endpoints.',
    architectureDetails: [
      'Client Portal → Responsive React UI for Patients and Clinic Administrators',
      'API Gateway → RESTful Endpoints handling refill requests and schedule tracking',
      'Backend Automation → Serverless AWS Lambda & Python services managing notification schedules',
      'Data Store → Structured tracking of active prescriptions, clinic queues, and refill timestamps',
    ],
    metrics: [
      { label: 'Active User Groups', value: 'Patients & Clinics' },
      { label: 'Refill Tracking', value: 'Real-Time' },
      { label: 'Reminder Automation', value: 'Scheduled' },
    ],
    highlights: [
      'Built a portal for patients and clinics to request and track medicine refills',
      'Added automated reminder alerts to help patients reorder prescriptions on time',
      'Integrated real-time tracking for patients and clinic staff',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'ai-travel-planner',
    projectNumber: '02',
    title: 'AI Enabled Travel Planner',
    subtitle: 'Intelligent Trip Planning, Budget Estimation & Route Mapping',
    period: '2025',
    badge: 'AI & Web Applications',
    category: 'ai',
    imageUrl: '/project-cloud.jpg',
    stack: ['Python', 'Flask', 'React', 'JavaScript', 'RESTful APIs'],
    shortDescription:
      'Created a web application that uses AI to generate daily trip plans and budgets quickly, connecting maps and location data to show the best routes for users.',
    problemStatement:
      'Planning multi-day travel itineraries and estimating realistic daily travel budgets manually is tedious and often leads to inefficient routes and unexpected expenses.',
    solution:
      'Created a web application that uses AI to generate daily trip plans and budgets quickly, connecting maps and location data to show the best routes for users.',
    keyFeatures: [
      'Created a web app that uses AI to generate daily trip plans and budgets quickly.',
      'Connected maps and location data to show the best routes for users.',
      'Automated daily itinerary generator tailored to user trip preferences.',
      'Integrated dynamic budget calculation per day, travel mode, and destination.',
    ],
    myContribution:
      'Developed the AI-driven itinerary generator, connected mapping services for route calculation, and designed the responsive web user interface.',
    architectureDetails: [
      'Web Client → Interactive React and JavaScript frontend for destination search',
      'Backend Service → Python & Flask RESTful API communicating with AI models',
      'Maps Integration → Geolocation and route mapping integration for best travel paths',
      'Budget Engine → Automated cost estimation per day and activity',
    ],
    metrics: [
      { label: 'Itinerary Generation', value: 'Instant' },
      { label: 'Route Mapping', value: 'Interactive' },
      { label: 'Budget Precision', value: 'Optimized' },
    ],
    highlights: [
      'Created a web application that uses AI to generate daily trip plans and budgets quickly',
      'Connected maps and location data to show the best routes for users',
      'Automated travel plan generation and budget forecasting',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'smart-irrigation-system',
    projectNumber: '03',
    title: 'Smart Automated Irrigation System',
    subtitle: 'Sensor-Driven Soil Telemetry & Automated Pump Control',
    period: '2024',
    badge: 'IoT & Embedded Systems',
    category: 'iot',
    imageUrl: '/project-iot.jpg',
    stack: ['Arduino', 'C++', 'IoT Sensors', 'Relay Switching'],
    shortDescription:
      'Built a device using Arduino and soil sensors to check soil moisture automatically, programming the system to turn the water pump on and off to save water.',
    problemStatement:
      'Conventional timer-based or manual agricultural watering wastes valuable water and risks plant damage due to insufficient or excessive irrigation without real-time soil feedback.',
    solution:
      'Built a device using Arduino and soil sensors to check soil moisture automatically, and programmed the system to turn the water pump on and off to save water.',
    keyFeatures: [
      'Built a device using Arduino and soil sensors to check soil moisture automatically.',
      'Programmed the system to turn the water pump on and off to save water.',
      'Autonomous soil moisture telemetry loop regulating pump relay state.',
      'Presented and showcased live at the SCI-NOVA 2024 Project Exhibition.',
    ],
    myContribution:
      'Assembled and calibrated the soil sensors with Arduino, wrote the embedded C++ control logic to regulate pump actuation, and defended the system at SCI-NOVA 2024.',
    architectureDetails: [
      'Telemetry Sensing → Analog soil moisture sensor continuously polling moisture values',
      'Microcontroller → Arduino board executing embedded C++ threshold control loop',
      'Relay Driver → Optocoupled relay module switching the water pump motor on and off',
      'Water Conservation → Automated cut-off logic preventing excess water discharge',
    ],
    metrics: [
      { label: 'Water Conservation', value: 'Significant' },
      { label: 'Automation', value: '100% Autonomous' },
      { label: 'Exhibition', value: 'SCI-NOVA 2024' },
    ],
    highlights: [
      'Built a device using Arduino and soil sensors to check soil moisture automatically',
      'Programmed the system to turn the water pump on and off to save water',
      'Presented at the SCI-NOVA 2024 Project Exhibition',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
]

// Education Section from Resume
export const EDUCATION_MILESTONES: ExperienceItem[] = [
  {
    id: 'ncet-be-cse',
    role: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
    company: 'Nagarjuna College of Engineering and Technology (NCET)',
    track: 'Bengaluru, India',
    period: 'Expected 2027',
    location: 'Bengaluru, India',
    type: 'education',
    badge: 'CGPA: 8.58 / 10',
    highlights: [
      'Pursuing Bachelor of Engineering (B.E.) in Computer Science and Engineering at NCET Bengaluru.',
      'Maintained a cumulative grade point average of 8.58/10.',
      'Core Competencies: Data Structures & Algorithms, Computer Networks, Operating Systems, DBMS, System Architecture.',
    ],
    skills: [
      'Data Structures & Algorithms',
      'Computer Networks',
      'Operating Systems',
      'DBMS',
      'System Architecture',
    ],
  },
  {
    id: 'st-joseph-pu',
    role: 'Pre-University Course (Class XII)',
    company: 'St. Joseph PU College',
    track: 'Vijayapura, India',
    period: '2023',
    location: 'Vijayapura, India',
    type: 'education',
    badge: 'Score: 91.83%',
    highlights: [
      'Completed Pre-University Course (Class XII) with a score of 91.83% in 2023.',
      'Built strong analytical foundations in Mathematics, Physics, Chemistry, and Computer Science.',
    ],
    skills: ['Mathematics', 'Analytical Problem Solving', 'Logic & Foundations'],
  },
]

// Achievements & Certifications from Resume
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    badgeText: 'AWS Certified',
    skills: ['EC2', 'S3', 'IAM', 'VPC', 'Lambda', 'CloudWatch'],
    description:
      'Validates expertise in designing secure, resilient, high-performing, and cost-optimized distributed cloud architectures on Amazon Web Services.',
  },
  {
    id: 'aws-aip',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    badgeText: 'AWS Certified',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Responsible AI'],
    description:
      'Demonstrates foundational understanding of artificial intelligence and machine learning concepts and implementing AI workflows on AWS.',
  },
  {
    id: 'gcp-core',
    title: 'Google Cloud Fundamentals – Core Infrastructure',
    issuer: 'Google Cloud',
    badgeText: 'Google Cloud',
    skills: ['Compute Engine', 'Managed Instance Groups (MIG)', 'Cloud NAT', 'Cloud Run'],
    description:
      'Covers core infrastructure capabilities, compute, networking, storage, and serverless container services across Google Cloud Platform.',
  },
]

// All Technologies from Resume
export interface TechnologyItem {
  name: string
  category: 'Programming Languages' | 'Cloud Platforms' | 'DevOps & Tools' | 'Databases & Frameworks' | 'Core CS'
  highlight: string
}

export const ALL_TECHNOLOGIES: TechnologyItem[] = [
  // Programming Languages
  { name: 'C', category: 'Programming Languages', highlight: 'System programming & foundational algorithms' },
  { name: 'C++', category: 'Programming Languages', highlight: 'Object-oriented programming & embedded microcontroller firmware' },
  { name: 'Python', category: 'Programming Languages', highlight: 'Scripting, backend services, LangChain & AI workflows' },
  { name: 'Java', category: 'Programming Languages', highlight: 'Object-oriented software development & algorithms' },
  { name: 'SQL', category: 'Programming Languages', highlight: 'Relational database queries, schemas & data operations' },
  { name: 'JavaScript', category: 'Programming Languages', highlight: 'Modern asynchronous web application logic & interactive UI' },
  { name: 'Bash', category: 'Programming Languages', highlight: 'Shell scripting, task automation & cloud provisioning' },

  // Cloud Platforms
  { name: 'AWS (EC2, S3, IAM, VPC, Lambda, CloudWatch)', category: 'Cloud Platforms', highlight: 'Multi-zone networking, serverless compute, IAM roles & monitoring' },
  { name: 'GCP (Compute Engine, MIG, Cloud NAT, Cloud Run)', category: 'Cloud Platforms', highlight: 'Compute Engine, Managed Instance Groups, Cloud NAT & Cloud Run' },

  // DevOps & Tools
  { name: 'Terraform', category: 'DevOps & Tools', highlight: 'Declarative Infrastructure as Code (IaC) configuration' },
  { name: 'Linux/Unix', category: 'DevOps & Tools', highlight: 'Operating system environments, CLI commands & server administration' },
  { name: 'Git', category: 'DevOps & Tools', highlight: 'Distributed version control, branching & code collaboration' },
  { name: 'GitHub Actions', category: 'DevOps & Tools', highlight: 'Automated CI/CD build, test & deployment pipelines' },
  { name: 'CI/CD', category: 'DevOps & Tools', highlight: 'Continuous Integration & Continuous Deployment best practices' },
  { name: 'RESTful APIs', category: 'DevOps & Tools', highlight: 'Stateless HTTP API design, integration & request handling' },
  { name: 'Postman', category: 'DevOps & Tools', highlight: 'API endpoint testing, request validation & workflow testing' },

  // Databases & Frameworks
  { name: 'MySQL', category: 'Databases & Frameworks', highlight: 'Relational schema design, normalization & transactional queries' },
  { name: 'MongoDB', category: 'Databases & Frameworks', highlight: 'Document-oriented NoSQL database modeling & collections' },
  { name: 'Node.js', category: 'Databases & Frameworks', highlight: 'Asynchronous event-driven backend server runtime' },
  { name: 'Express', category: 'Databases & Frameworks', highlight: 'Minimalist web and API application framework for Node.js' },
  { name: 'Flask', category: 'Databases & Frameworks', highlight: 'Lightweight Python WSGI web framework for microservices' },
  { name: 'React', category: 'Databases & Frameworks', highlight: 'Component-driven interactive frontend UI & responsive state' },

  // Core CS Competencies
  { name: 'Data Structures & Algorithms', category: 'Core CS', highlight: 'Optimal algorithmic problem solving, trees, graphs, sorting' },
  { name: 'Computer Networks', category: 'Core CS', highlight: 'Network protocols, TCP/IP, OSI layers & routing concepts' },
  { name: 'Operating Systems', category: 'Core CS', highlight: 'Process management, concurrency, memory allocation & file systems' },
  { name: 'DBMS', category: 'Core CS', highlight: 'Database Management Systems, ACID properties, indexing & storage' },
  { name: 'System Architecture', category: 'Core CS', highlight: 'Multi-tier application design, scalability & component cohesion' },
]

export interface SkillGroup {
  category: string
  description: string
  skills: string[]
}

// 5 Skill Groups Organized Exactly from Resume
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'PROGRAMMING LANGUAGES',
    description: 'Core languages for algorithm implementation, system programming & automation scripting.',
    skills: ['C', 'C++', 'Python', 'Java', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    category: 'CLOUD PLATFORMS',
    description: 'Multi-cloud infrastructure across Amazon Web Services and Google Cloud Platform.',
    skills: [
      'AWS: EC2, S3, IAM, VPC, Lambda, CloudWatch',
      'GCP: Compute Engine, MIG, Cloud NAT, Cloud Run',
    ],
  },
  {
    category: 'DEVOPS & TOOLS',
    description: 'Automation, infrastructure as code, CI/CD pipelines, and API testing toolchains.',
    skills: ['Terraform', 'Linux/Unix', 'Git', 'GitHub Actions', 'CI/CD', 'RESTful APIs', 'Postman'],
  },
  {
    category: 'DATABASES & FRAMEWORKS',
    description: 'Modern frontend interfaces, backend runtimes, and relational & NoSQL databases.',
    skills: ['MySQL', 'MongoDB', 'Node.js', 'Express', 'Flask', 'React'],
  },
  {
    category: 'CORE COMPUTER SCIENCE',
    description: 'Foundational computer science principles applied in rigorous engineering solutions.',
    skills: [
      'Data Structures & Algorithms',
      'Computer Networks',
      'Operating Systems',
      'DBMS',
      'System Architecture',
    ],
  },
]

// Student Professional Journey matching Resume Milestones
export interface JourneyStage {
  step: string
  pillar: string
  title: string
  period: string
  badge: string
  description: string
  details: string[]
  tags: string[]
}

export const STUDENT_JOURNEY: JourneyStage[] = [
  {
    step: '01',
    pillar: 'Engineering',
    title: 'Computer Science and Engineering Foundations',
    period: 'Expected 2027',
    badge: 'NCET Bengaluru (CGPA 8.58)',
    description:
      'Pursuing Bachelor of Engineering (B.E.) in Computer Science and Engineering at Nagarjuna College of Engineering and Technology (NCET), Bengaluru.',
    details: [
      'Maintaining 8.58/10 CGPA across core engineering disciplines.',
      'Rigorous foundation in Data Structures & Algorithms, Computer Networks, Operating Systems, DBMS, and System Architecture.',
      'Pre-University foundation at St. Joseph PU College with a 91.83% score in 2023.',
    ],
    tags: ['NCET Bengaluru', '8.58 CGPA', 'Class XII (91.83%)', 'Core CS'],
  },
  {
    step: '02',
    pillar: 'Cloud Experience',
    title: 'AWS Cloud Trainee — ToriiMinds',
    period: '2025',
    badge: 'ToriiMinds',
    description:
      'Set up secure virtual networks, subnets, and user access roles across multiple zones. Automated backend tasks and cloud setups using basic Lambda functions and Bash scripts.',
    details: [
      'Configured multi-zone VPC networks, subnets, and granular IAM user access roles.',
      'Automated routine backend tasks and cloud setups using basic Lambda functions and Bash scripts.',
    ],
    tags: ['ToriiMinds', 'AWS VPC', 'Subnets', 'IAM', 'AWS Lambda', 'Bash Scripts'],
  },
  {
    step: '03',
    pillar: 'AI Engineering',
    title: 'AI Ready Engineer — ToriiMinds',
    period: '2026',
    badge: 'ToriiMinds',
    description:
      'Built and tested simple AI workflows using LangChain and ready-to-use LLM models. Connected AI models to user interfaces using basic REST APIs to improve response accuracy.',
    details: [
      'Built and evaluated prompt workflows using LangChain and ready-to-use LLM models.',
      'Connected AI model endpoints to user interfaces via lightweight REST APIs for accurate responses.',
    ],
    tags: ['ToriiMinds', 'LangChain', 'LLM Models', 'REST APIs', 'AI Workflows'],
  },
  {
    step: '04',
    pillar: 'Projects',
    title: 'Real-World Software, AI & IoT Systems',
    period: '2024 – 2026',
    badge: '3 Resume Projects',
    description:
      'Developed practical engineering projects addressing healthcare refill management, AI-enabled travel planning, and automated agricultural water conservation.',
    details: [
      'Refill Flow: Built a portal for patients and clinics to request/track medicine refills with automated reminders.',
      'AI Enabled Travel Planner: Web app generating daily trip itineraries, budgets, and map routes via AI.',
      'Smart Automated Irrigation System: Arduino and soil sensor device automating pump control to save water.',
    ],
    tags: ['Refill Flow (2026)', 'AI Travel Planner (2025)', 'Smart Irrigation (2024)'],
  },
  {
    step: '05',
    pillar: 'Certifications',
    title: 'AWS & Google Cloud Certifications',
    period: '2024 – 2026',
    badge: 'Verified Credentials',
    description:
      'Earned industry certifications validating solutions architecture, artificial intelligence fundamentals, and cloud core infrastructure.',
    details: [
      'AWS Certified Solutions Architect – Associate (Amazon Web Services)',
      'AWS Certified AI Practitioner (Amazon Web Services)',
      'Google Cloud Fundamentals – Core Infrastructure (Google Cloud)',
    ],
    tags: ['AWS SAA', 'AWS AIP', 'Google Cloud Core'],
  },
  {
    step: '06',
    pillar: 'Competitive Coding',
    title: '100+ Problems Solved on LeetCode & CodeChef',
    period: '2023 – 2026',
    badge: '100+ Problems Solved',
    description:
      'Solved 100+ Data Structures and Algorithms problems across LeetCode and CodeChef, focusing on algorithmic efficiency and problem solving.',
    details: [
      'Practiced arrays, two pointers, strings, binary trees, graphs, and dynamic programming.',
      'Continuous algorithmic practice with optimal time and space complexity.',
    ],
    tags: ['LeetCode', 'CodeChef', 'Data Structures', 'Algorithms', '100+ Solved'],
  },
  {
    step: '07',
    pillar: 'Hackathons',
    title: 'Hackathons & Project Exhibitions',
    period: '2024 – 2025',
    badge: 'HyperAPI & SCI-NOVA 2024',
    description:
      'Competed in the HyperAPI Global Hackathon and presented the Smart Irrigation System at the SCI-NOVA 2024 Project Exhibition.',
    details: [
      'Competed in the HyperAPI Global Hackathon developing API-driven integrations.',
      'Presented the Smart Automated Irrigation System at the SCI-NOVA 2024 Project Exhibition.',
    ],
    tags: ['HyperAPI Hackathon', 'SCI-NOVA 2024', 'Project Defense'],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for algorithm design, software development & automation scripting',
    skills: [
      { name: 'C', highlight: 'System programming & memory fundamentals' },
      { name: 'C++', highlight: 'Object-oriented programming & microcontroller firmware' },
      { name: 'Python', highlight: 'Backend services, automation scripts & AI models' },
      { name: 'Java', highlight: 'Object-oriented application architecture' },
      { name: 'SQL', highlight: 'Relational database schemas & queries' },
      { name: 'JavaScript', highlight: 'Modern asynchronous frontend & backend logic' },
      { name: 'Bash', highlight: 'Shell scripting & cloud environment automation' },
    ],
  },
  {
    category: 'Cloud Platforms',
    description: 'Multi-cloud infrastructure across Amazon Web Services and Google Cloud',
    skills: [
      { name: 'AWS', highlight: 'EC2, S3, IAM, VPC, Lambda, CloudWatch' },
      { name: 'GCP', highlight: 'Compute Engine, MIG, Cloud NAT, Cloud Run' },
    ],
  },
  {
    category: 'DevOps & Tools',
    description: 'Infrastructure automation, CI/CD pipelines & API testing',
    skills: [
      { name: 'Terraform', highlight: 'Infrastructure as Code provisioning' },
      { name: 'Linux/Unix', highlight: 'Operating system CLI & server environments' },
      { name: 'Git & GitHub', highlight: 'Distributed version control & collaboration' },
      { name: 'GitHub Actions', highlight: 'CI/CD automated workflows' },
      { name: 'RESTful APIs', highlight: 'HTTP service communication' },
      { name: 'Postman', highlight: 'API endpoint testing & verification' },
    ],
  },
  {
    category: 'Databases & Frameworks',
    description: 'Relational and NoSQL data stores alongside modern application frameworks',
    skills: [
      { name: 'MySQL', highlight: 'Relational schema design & transactional integrity' },
      { name: 'MongoDB', highlight: 'NoSQL document data modeling' },
      { name: 'Node.js', highlight: 'Asynchronous event-driven server runtime' },
      { name: 'Express', highlight: 'Web application backend framework' },
      { name: 'Flask', highlight: 'Python microservice web framework' },
      { name: 'React', highlight: 'Component-driven interactive user interfaces' },
    ],
  },
  {
    category: 'Core Computer Science',
    description: 'Foundational computer science principles applied in engineering solutions',
    skills: [
      { name: 'Data Structures & Algorithms', highlight: 'Optimal time and space problem solving' },
      { name: 'Computer Networks', highlight: 'Protocols, TCP/IP, OSI layers & routing' },
      { name: 'Operating Systems', highlight: 'Processes, concurrency & memory management' },
      { name: 'DBMS', highlight: 'Database management systems & ACID principles' },
      { name: 'System Architecture', highlight: 'Multi-tier modular application design' },
    ],
  },
]
