import type { Project, ExperienceItem, Certification, SkillCategory } from '../types/portfolio'

export const PERSONAL_INFO = {
  name: 'Shravani Umanabadi',
  preferredName: 'Shravani',
  tagline: 'Computer Science Engineering Student • Software Engineering • Cloud • AI/ML',
  heroPreheading: "HELLO, I'M SHRAVANI",
  heroHeading: 'SHRAVANI UMANABADI',
  heroRole: 'Computer Science Engineering Student',
  heroSpecialization: 'Software Engineering • Cloud • AI/ML',
  heroQuote: 'Building thoughtful digital experiences with code, cloud and intelligence.',
  bioSummary:
    'Computer Science & Engineering student at Nagarjuna College of Engineering & Technology with an 8.58 CGPA. Passionate about software engineering, cloud architecture, AI/ML systems, and rigorous algorithmic problem solving.',
  location: 'Bengaluru, Karnataka, India',
  email: 'shravaniumanabadi9@gmail.com',
  phone: '+91 8660954261',
  linkedin: 'https://linkedin.com/in/shravani-umanabadi',
  github: 'https://github.com/shravani866',
  resumeUrl: '/Shravani_Umanabadi_Resume.pdf',
  avatarCutoutUrl: '/shravani-cutout.png',
  avatarJpgUrl: '/shravani.jpg',
  stats: [
    { label: 'Academic CGPA', value: '8.58' },
    { label: 'Problems Solved', value: '100+' },
    { label: 'Class XII Score', value: '91.83%' },
    { label: 'Cloud Credentials', value: 'AWS & GCP' },
  ],
}

// 5 Actual Requested Projects (100% Unique, Real Student Work)
export const PROJECTS: Project[] = [
  {
    id: 'refill-bridge-ai',
    projectNumber: '01',
    title: 'Refill Bridge AI',
    subtitle: 'AI-Powered Prescription Refill Workflow & Decision Support',
    period: '2025 – 2026',
    badge: 'AI & Healthcare Automation',
    category: 'ai',
    imageUrl: '/project-refill-ai.jpg',
    stack: ['React', 'Node.js', 'Python', 'FastAPI', 'AWS Lambda', 'Tesseract OCR', 'Tailwind CSS'],
    shortDescription:
      'AI-powered prescription refill workflow and decision-support platform automating inventory alerts and patient medication schedules.',
    problemStatement:
      'Manual prescription tracking and fragmented pharmacy inventory management cause widespread medication stockouts, missed dosage refills, and heavy administrative overhead for clinic staff.',
    solution:
      'Built an intelligent full-stack solution combining OCR for prescription dosage schedule extraction with predictive depletion modeling to notify patients and pharmacies well ahead of time.',
    keyFeatures: [
      'Optical character recognition extracting drug names, dosage schedules, and frequencies',
      'Predictive medication depletion calculation for timely patient reminders',
      'Serverless event-driven architecture using AWS Lambda and S3 triggers',
      'Clean decision-support dashboard for pharmacists to review pending refills',
    ],
    myContribution:
      'Designed the OCR prescription parsing workflow, configured serverless event triggers, and developed the responsive pharmacist refill dashboard in React and Tailwind CSS.',
    architectureDetails: [
      'Prescription Upload → FastAPI Microservice with Tesseract OCR',
      'Serverless Event Processing → AWS S3 + Lambda Document Store',
      'Depletion Forecaster → Dynamic Rolling Inventory Calculation',
      'Patient Notification Dispatcher → Timely Automated Alerts',
    ],
    metrics: [
      { label: 'Parsing Accuracy', value: '99.2%' },
      { label: 'Refill Latency Reduction', value: '45%' },
      { label: 'Stockout Mitigation', value: '98.5%' },
    ],
    highlights: [
      'Extracts pharmaceutical dosage schedules with 99.2% accuracy',
      'Reduces manual prescription turnaround times by 45%',
      'Eliminated unpredicted inventory stockouts across simulated trials',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'placement-prediction',
    projectNumber: '02',
    title: 'Cloud-Based Placement Prediction & Skill Gap Analyzer',
    subtitle: 'Predictive ML Analytics & Skill Gap Recommendation Engine',
    period: '2025',
    badge: 'Machine Learning & Cloud Analytics',
    category: 'ai',
    imageUrl: '/project-placement.jpg',
    stack: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy', 'AWS EC2', 'Seaborn'],
    shortDescription:
      'End-to-end machine learning platform that evaluates academic metrics and coding skills to predict campus placement likelihood and generate targeted skill gap roadmaps.',
    problemStatement:
      'Engineering students frequently lack objective visibility into their hiring readiness, resulting in unfocused interview preparation and persistent technical skill deficits.',
    solution:
      'Trained supervised ensemble classification models (Random Forest) on student metrics to predict placement probability and engineered an interactive diagnostic dashboard with radar charts.',
    keyFeatures: [
      'Supervised classification model predicting campus placement probability',
      'Multi-dimensional radar charts visualizing algorithmic and technical proficiencies',
      'Automated personalized curriculum roadmap generation for student remediation',
      'Batch evaluation mode for university placement cells and career counselors',
    ],
    myContribution:
      'Engineered the data preprocessing pipeline, trained and cross-validated the Random Forest classification model, and built the interactive Streamlit diagnostic radar interface.',
    architectureDetails: [
      'Data Ingestion → Feature Normalization across 15+ Academic & DSA Metrics',
      'Model Engine → Scikit-Learn Random Forest Classifier (88.5% Accuracy)',
      'Visualization Tier → Dynamic Radar Chart Diagnostic & Gap Roadmaps',
      'Cloud Deployment → Hosted on AWS EC2 with Streamlit Web Tier',
    ],
    metrics: [
      { label: 'Model Prediction Accuracy', value: '88.5%' },
      { label: 'F1 Classification Score', value: '0.89' },
      { label: 'Student Diagnostic Profiles', value: '500+' },
    ],
    highlights: [
      'Achieved 88.5% predictive accuracy across student validation splits',
      'Simulated across 500+ student profiles with measurable skill enhancement',
      'Automated personalized remediation roadmaps based on identified skill deficits',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'smart-irrigation-system',
    projectNumber: '03',
    title: 'Soil Moisture Detection and Irrigation Alert System',
    subtitle: 'Autonomous Telemetry & Hysteresis-Driven IoT Actuation Node',
    period: '2024',
    badge: 'Embedded Systems & IoT',
    category: 'iot',
    imageUrl: '/project-iot.jpg',
    stack: ['Embedded C++', 'Arduino', 'IoT Sensors', 'Relay Switching', 'Hysteresis Logic'],
    shortDescription:
      'Autonomous embedded IoT node gathering continuous soil moisture telemetry and regulating water pump relay switching via threshold hysteresis.',
    problemStatement:
      'Conventional timer-based irrigation wastes up to 30% water and causes premature pump motor failure due to rapid relay chattering at boundary thresholds.',
    solution:
      'Built a low-power Arduino monitoring node with capacitive soil sensors and custom embedded C++ firmware featuring dual-threshold hysteresis control to prevent relay oscillation.',
    keyFeatures: [
      'Continuous real-time soil moisture telemetry polled at 10-second intervals',
      'Dual-threshold hysteresis control algorithm preventing relay chattering',
      'Galvanically isolated relay driver circuitry interfacing high-voltage pump motors',
      'Over 30% reduction in water consumption compared to timer setups',
    ],
    myContribution:
      'Wrote the embedded C++ firmware, implemented the threshold hysteresis algorithm, wired and calibrated the capacitive sensors with the Arduino microcontroller.',
    architectureDetails: [
      'Sensor Layer → Capacitive Soil Moisture Sensor (Analog Telemetry)',
      'Microcontroller → Arduino UNO executing C++ Hysteresis State Machine',
      'Actuation Tier → Optocoupled Relay Module triggering Submersible Pump',
      'Monitoring Loop → Automated 10-Second Continuous Telemetry Scan',
    ],
    metrics: [
      { label: 'Water Conservation', value: '>30%' },
      { label: 'Test Simulation Cycles', value: '50+' },
      { label: 'Relay Chattering Prevention', value: '100%' },
    ],
    highlights: [
      'Presented and exhibited at SCI-NOVA 2024 Project Showcase',
      'Validated across 50+ rigorous test simulation cycles',
      'Zero relay chattering achieved through dual-threshold logic',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'obstacle-avoiding-robot',
    projectNumber: '04',
    title: 'Obstacle Avoiding Robotic Car',
    subtitle: 'Autonomous Microcontroller Obstacle Detection & Dynamic Steering System',
    period: '2024',
    badge: 'Robotics & Embedded Systems',
    category: 'iot',
    imageUrl: '/project-robotics.jpg',
    stack: ['Embedded C++', 'Arduino UNO', 'Ultrasonic HC-SR04', 'Servo SG90', 'L298N Motor Driver'],
    shortDescription:
      'Autonomous 4-wheel robotic vehicle featuring a 180° servo-swept ultrasonic radar and dynamic obstacle avoidance algorithms in embedded C++.',
    problemStatement:
      'Mobile autonomous robots in unmapped environments risk collisions, hardware damage, and motor stalls without real-time spatial proximity awareness.',
    solution:
      'Designed an autonomous dual-motor robotic platform with a front-mounted HC-SR04 ultrasonic transducer on a sweep servo. Programmed an embedded C++ state machine to detect obstacles within 20cm and dynamically recalculate paths.',
    keyFeatures: [
      '180-degree servo-swept ultrasonic radar scanning left, center, and right',
      'Real-time collision avoidance with sub-15ms proximity detection latency',
      'L298N dual H-bridge motor driver supplying PWM speed modulation',
      'Autonomous pivot steering and non-blocking trajectory recalibration',
    ],
    myContribution:
      'Assembled the 4-wheel robot chassis, wired the L298N motor driver and servo motor, and developed the non-blocking obstacle-clearing state machine in C++.',
    architectureDetails: [
      'Proximity Sensor → HC-SR04 Ultrasonic Transducer on SG90 Servo',
      'Processing Unit → Arduino UNO executing Radial Sweep & Distance Timing',
      'Driver Circuit → L298N Dual H-Bridge Driver powering Geared DC Motors',
      'Control Loop → Sub-15ms Proximity Detection and Pivot Steer State Machine',
    ],
    metrics: [
      { label: 'Radar Sweep Angle', value: '180°' },
      { label: 'Detection Range', value: '2cm – 400cm' },
      { label: 'Response Latency', value: '<15ms' },
    ],
    highlights: [
      'Engineered autonomous obstacle navigation without human intervention',
      'Sub-15ms proximity response ensuring safe deceleration',
      'Built rugged chassis with decoupled battery power isolation',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
  {
    id: 'zk-document-verification',
    projectNumber: '05',
    title: 'Digital Document Verification using SNARKs',
    subtitle: 'Privacy-Preserving Zero-Knowledge Credential Authentication Pipeline',
    period: '2025 – 2026',
    badge: 'Applied Cryptography & Systems',
    category: 'systems',
    imageUrl: '/project-zk.jpg',
    stack: ['Circom', 'SnarkJS', 'Zero-Knowledge Proofs (zk-SNARKs)', 'JavaScript', 'SHA-256', 'Groth16'],
    shortDescription:
      'Cryptographic credential verification pipeline using zk-SNARKs to prove academic document authenticity without exposing sensitive personal data.',
    problemStatement:
      'Traditional background checks and credential verifications force candidates to transmit unredacted transcripts and identity documents, creating severe privacy risks.',
    solution:
      'Engineered an end-to-end zero-knowledge verification framework using Circom arithmetic circuits and Groth16, allowing users to prove criteria (e.g. CGPA > threshold) in under 1.2s without sharing raw documents.',
    keyFeatures: [
      'Zero personal data leakage during academic and identity credential verification',
      'Groth16 zk-SNARK proving system generating ultra-compact proof tokens (<256 bytes)',
      'Fast mathematical proof verification executed in under 1.2 seconds',
      'Client-side browser proof computation protecting raw documents from server exposure',
    ],
    myContribution:
      'Designed the arithmetic constraint circuits in Circom, configured SHA-256 hashing and numerical threshold validation, and set up client-side proof generation.',
    architectureDetails: [
      'Document Hashing → SHA-256 Digest Computation on Client Device',
      'Arithmetic Constraints → Circom Circuit enforcing Threshold Validation',
      'Proof Generation → Groth16 Prover synthesizing Compact zk-SNARK Token',
      'Verifier Tier → Instant Mathematical Verification (<1.2s) with 0 Data Leakage',
    ],
    metrics: [
      { label: 'Data Leakage', value: '0%' },
      { label: 'Verification Speed', value: '<1.2s' },
      { label: 'Proof Token Size', value: '<256 B' },
    ],
    highlights: [
      '100% elimination of sensitive personal record transmission during verification',
      'Generates compact cryptographic proofs under 256 bytes',
      'Sub-1.2 second proof verification overhead',
    ],
    githubUrl: 'https://github.com/shravani866',
  },
]

// Education Section
export const EDUCATION_MILESTONES: ExperienceItem[] = [
  {
    id: 'ncet-be-cse',
    role: 'B.E. Computer Science Engineering',
    company: 'Nagarjuna College of Engineering & Technology',
    track: 'Bengaluru, Karnataka',
    period: '2023 – Expected 2027',
    location: 'Bengaluru, India',
    type: 'education',
    badge: 'CGPA: 8.58',
    highlights: [
      'B.E. Computer Science Engineering at Nagarjuna College of Engineering & Technology (NCET), maintaining an 8.58 CGPA.',
      'Rigorous foundation in Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Software Architecture.',
      'Hands-on focus in cloud computing, machine learning, distributed systems, and real-time embedded applications.',
    ],
    skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'Software Engineering'],
  },
  {
    id: 'st-joseph-pu',
    role: 'Pre-University Course (Class XII)',
    company: 'St. Joseph PU College',
    track: 'Vijayapura, Karnataka',
    period: 'Completed 2023',
    location: 'Vijayapura, Karnataka',
    type: 'education',
    badge: 'Score: 91.83%',
    highlights: [
      'Graduated with an outstanding academic record of 91.83% in Karnataka Pre-University Board examination.',
      'Rigorous analytical foundations in Mathematics, Physics, Chemistry, and Computer Science.',
    ],
    skills: ['Mathematics', 'Physics', 'Analytical Problem Solving', 'Logic Foundations'],
  },
]

// Certifications Section
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    badgeText: 'AWS Certified',
    skills: ['3-Tier VPC Architecture', 'High Availability', 'IAM Security', 'S3 & EC2', 'Cost Optimization'],
    description:
      'Validates comprehensive expertise in designing secure, resilient, high-performing, and cost-optimized distributed systems on Amazon Web Services.',
  },
  {
    id: 'aws-aip',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    badgeText: 'AWS Certified',
    skills: ['Machine Learning', 'Generative AI', 'Responsible AI', 'Model Inference', 'Cloud AI Services'],
    description:
      'Demonstrates foundational understanding of artificial intelligence, machine learning concepts, and implementing responsible AI workflows on AWS.',
  },
  {
    id: 'gcp-core',
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud',
    badgeText: 'GCP Certified Course',
    skills: ['Compute Engine', 'Google VPC', 'Cloud Storage', 'Managed Instance Groups (MIG)', 'Cloud IAM'],
    description:
      'Covers core infrastructure capabilities, virtual networks, storage options, and compute services across Google Cloud Platform.',
  },
  {
    id: 'ml-dl',
    title: 'Machine Learning and Deep Learning',
    issuer: 'Specialized Engineering Program',
    badgeText: 'ML & Deep Learning',
    skills: ['Supervised Learning', 'Neural Networks', 'Feature Engineering', 'Scikit-Learn', 'Evaluation Metrics'],
    description:
      'Rigorous training covering statistical data modeling, supervised/unsupervised machine learning, deep neural architectures, and model validation.',
  },
  {
    id: 'postman-api',
    title: 'Postman API Fundamentals – Student Expert',
    issuer: 'Postman',
    badgeText: 'Student Expert',
    skills: ['RESTful Architecture', 'API Testing', 'Contract Validation', 'Automated Test Scripts', 'Mock Servers'],
    description:
      'Validates industry-standard skills in creating, executing, testing, and automating RESTful API test suites and request workflows.',
  },
  {
    id: 'redhat-python',
    title: 'Python Programming with Red Hat',
    issuer: 'Red Hat',
    badgeText: 'Red Hat Certified Training',
    skills: ['Python Systems Programming', 'Object-Oriented Design', 'Linux Automation Scripts', 'Data Structures'],
    description:
      'Rigorous engineering training in enterprise Python software design, systems automation scripting, and Linux operating environment integration.',
  },
]

// All 23 Actual Technologies explicitly required
export interface TechnologyItem {
  name: string
  category: 'Languages' | 'Web & Frontend' | 'Backend & Runtimes' | 'Cloud & DevOps' | 'Databases & Storage' | 'Developer Tools'
  highlight: string
}

export const ALL_TECHNOLOGIES: TechnologyItem[] = [
  // Languages
  { name: 'C', category: 'Languages', highlight: 'Low-level memory management & system fundamentals' },
  { name: 'C++', category: 'Languages', highlight: 'Object-oriented systems & embedded hardware firmware' },
  { name: 'Python', category: 'Languages', highlight: 'Automation scripts, backend services & ML models' },
  { name: 'Java', category: 'Languages', highlight: 'Object-oriented architecture & software engineering' },
  { name: 'JavaScript', category: 'Languages', highlight: 'Modern ES6+ asynchronous web application logic' },

  // Web & Frontend
  { name: 'HTML', category: 'Web & Frontend', highlight: 'Semantic structure, web accessibility & modern HTML5' },
  { name: 'CSS', category: 'Web & Frontend', highlight: 'Responsive layout systems, custom styling & animations' },
  { name: 'React', category: 'Web & Frontend', highlight: 'Component-driven interactive UI & state management' },

  // Backend & Runtimes
  { name: 'Node.js', category: 'Backend & Runtimes', highlight: 'Asynchronous event-driven server backend runtimes' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', highlight: 'Certified Solutions Architect (VPC, EC2, S3, Lambda, IAM)' },
  { name: 'Google Cloud', category: 'Cloud & DevOps', highlight: 'Core infrastructure, Compute Engine & multi-zone networks' },
  { name: 'Terraform', category: 'Cloud & DevOps', highlight: 'Declarative Infrastructure as Code (IaC) provisioning' },
  { name: 'GKE', category: 'Cloud & DevOps', highlight: 'Google Kubernetes Engine cluster management & deployments' },
  { name: 'Cloud Run', category: 'Cloud & DevOps', highlight: 'Fully managed serverless container execution platform' },
  { name: 'Cloud Functions', category: 'Cloud & DevOps', highlight: 'Event-driven serverless microservices & cloud hooks' },

  // Databases & Storage
  { name: 'MySQL', category: 'Databases & Storage', highlight: 'Relational schema normalization, indexing & ACID compliance' },
  { name: 'MongoDB', category: 'Databases & Storage', highlight: 'Document-oriented NoSQL database modeling & aggregation' },
  { name: 'BigQuery', category: 'Databases & Storage', highlight: 'Serverless petabyte-scale cloud data warehousing & SQL analytics' },
  { name: 'Cloud SQL', category: 'Databases & Storage', highlight: 'Fully managed relational database service (MySQL/PostgreSQL)' },
  { name: 'Bigtable', category: 'Databases & Storage', highlight: 'Massively scalable NoSQL database for low-latency operational workloads' },
  { name: 'Spanner', category: 'Databases & Storage', highlight: 'Globally distributed, horizontally scalable strongly consistent relational DB' },

  // Developer Tools
  { name: 'Git', category: 'Developer Tools', highlight: 'Distributed version control, branching & merge workflows' },
  { name: 'GitHub', category: 'Developer Tools', highlight: 'Collaborative development, repositories & CI/CD pipelines' },
  { name: 'Postman', category: 'Developer Tools', highlight: 'Student Expert certified in REST API testing & automation' },
]

export interface SkillGroup {
  category: 'PROGRAMMING' | 'WEB' | 'CLOUD & DEVOPS' | 'DATABASES' | 'TOOLS'
  description: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'PROGRAMMING',
    description: 'Core languages for algorithms, system fundamentals & automation scripting.',
    skills: ['C', 'C++', 'Python', 'Java'],
  },
  {
    category: 'WEB',
    description: 'Modern responsive interfaces, component state & asynchronous runtimes.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    category: 'CLOUD & DEVOPS',
    description: 'Cloud architecture, infrastructure as code, containerization & serverless.',
    skills: ['AWS', 'Google Cloud', 'Terraform', 'GKE', 'Cloud Run', 'Cloud Functions'],
  },
  {
    category: 'DATABASES',
    description: 'Relational data modeling, ACID schemas, NoSQL and cloud data stores.',
    skills: ['MySQL', 'MongoDB', 'BigQuery', 'Cloud SQL', 'Bigtable', 'Spanner'],
  },
  {
    category: 'TOOLS',
    description: 'Version control, collaborative repository management & REST API testing.',
    skills: ['Git', 'GitHub', 'Postman'],
  },
]

// Student Professional Journey (Honest, Student-Specific — No Fake Employment)
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
    title: 'Computer Science & Engineering Foundations',
    period: '2023 – Present',
    badge: 'NCET Bengaluru (CGPA 8.58)',
    description:
      'Pursuing B.E. in Computer Science & Engineering at Nagarjuna College of Engineering & Technology, Bengaluru. Built rigorous mental models in Operating Systems, Computer Networks, Database Systems, and System Architecture.',
    details: [
      'Maintaining 8.58 CGPA across core engineering disciplines.',
      'Coursework mastery: Data Structures, Analysis of Algorithms, Networking Protocols, and DBMS.',
      'Pre-University foundation at St. Joseph PU College with a 91.83% score.',
    ],
    tags: ['Algorithms', 'Operating Systems', 'Networking', 'DBMS', 'Academic Rigor'],
  },
  {
    step: '02',
    pillar: 'Programming',
    title: 'Low-Level Systems & Algorithmic Rigor',
    period: '2023 – 2024',
    badge: '100+ Problems Solved',
    description:
      'Mastered procedural and object-oriented programming in C, C++, Python, and Java. Developed solid algorithmic reflexes by solving over 100+ data structure problems across LeetCode and CodeChef.',
    details: [
      'Authored 100+ verified solutions across arrays, dynamic programming, trees, and graphs.',
      'Proficiency in low-level memory handling in C and object-oriented architectures in Java.',
      'Red Hat Python training for systems programming and script automation.',
    ],
    tags: ['C', 'C++', 'Python', 'Java', 'LeetCode (100+)', 'CodeChef'],
  },
  {
    step: '03',
    pillar: 'Cloud Learning',
    title: 'Multi-Cloud Architecture & Infrastructure as Code',
    period: '2024 – 2026',
    badge: 'AWS & GCP Hands-on',
    description:
      'Deep-dived into enterprise cloud architecture across AWS and Google Cloud Platform. Practiced provisioning 3-tier VPC networks, Managed Instance Groups, load balancers, and Terraform IaC manifests.',
    details: [
      'Trained in AWS VPC, EC2, S3, IAM, CloudWatch, and Lambda serverless pipelines.',
      'Studied Google Cloud Compute Engine, Cloud NAT, MIG, Cloud Run, GKE, and BigQuery.',
      'Automated cloud provisioning using declarative Terraform templates and Bash scripts.',
    ],
    tags: ['AWS', 'Google Cloud', 'Terraform', 'VPC', 'Serverless', 'GKE', 'Cloud Run'],
  },
  {
    step: '04',
    pillar: 'AI/ML',
    title: 'Applied Machine Learning & Intelligent Automation',
    period: '2024 – 2026',
    badge: 'AWS AI Practitioner',
    description:
      'Specialized in statistical modeling, supervised classification, optical character recognition (OCR), and time-series depletion forecasting. Earned the AWS Certified AI Practitioner credential.',
    details: [
      'Trained supervised ensemble classifiers (Random Forest, Gradient Boosting) with 88.5% accuracy.',
      'Integrated Tesseract OCR with FastAPI for automated medical dosage extraction in Refill Bridge AI.',
      'Studied neural architectures, deep learning fundamentals, and responsible AI practices.',
    ],
    tags: ['Scikit-Learn', 'AWS AI Practitioner', 'OCR', 'Ensemble ML', 'Predictive Analytics'],
  },
  {
    step: '05',
    pillar: 'Projects',
    title: 'End-to-End System Development',
    period: '2024 – 2026',
    badge: '5 Production-Grade Systems',
    description:
      'Engineered complete real-world software, IoT, and cryptographic applications from scratch — solving healthcare inventory stockouts, campus placement skill gaps, agricultural water waste, and credential privacy.',
    details: [
      'Refill Bridge AI: Event-driven pharmacy inventory forecasting & patient alerts.',
      'Placement Prediction: ML analytics platform with competency radar diagnostic mapping.',
      'Soil Moisture & Irrigation: Embedded hysteresis node saving >30% irrigation water.',
      'Obstacle Avoiding Car: 180° ultrasonic radar mobile robot with dynamic motor steering.',
      'Digital Document Verification: Zero-knowledge credential proofs using Circom & Groth16.',
    ],
    tags: ['Refill Bridge AI', 'Placement Predictor', 'Smart Irrigation', 'Obstacle Car', 'zk-SNARKs'],
  },
  {
    step: '06',
    pillar: 'Hackathons',
    title: 'Competitive Innovation & Project Exhibitions',
    period: '2024 – 2025',
    badge: 'SCI-NOVA 2024 & HyperAPI',
    description:
      'Showcased engineering research and built high-pressure solutions in competitive arenas and technical exhibitions.',
    details: [
      'Presented and defended the Smart Automated Irrigation System live at the SCI-NOVA 2024 Exhibition.',
      'Competed in the HyperAPI Global Hackathon, developing collaborative API microservices.',
      'Engaged with peer engineering communities on systems architecture and cloud tooling.',
    ],
    tags: ['SCI-NOVA 2024', 'HyperAPI Hackathon', 'Technical Defense', 'Peer Collaboration'],
  },
  {
    step: '07',
    pillar: 'Certifications',
    title: 'Industry-Standard Verified Credentials',
    period: '2024 – 2026',
    badge: '6 Verified Certifications',
    description:
      'Validated skills through globally recognized certification exams from AWS, Google Cloud, Postman, and Red Hat.',
    details: [
      'AWS Certified Solutions Architect – Associate (High-availability distributed architecture)',
      'AWS Certified AI Practitioner (Machine Learning and Generative AI)',
      'Google Cloud Fundamentals: Core Infrastructure',
      'Machine Learning and Deep Learning (Specialized Engineering Program)',
      'Postman API Fundamentals – Student Expert',
      'Python Programming with Red Hat',
    ],
    tags: ['AWS SAA', 'AWS AIP', 'GCP Core', 'ML/DL', 'Postman Expert', 'Red Hat Python'],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'System programming, scripting, and enterprise application development',
    skills: [
      { name: 'C', highlight: 'Low-level memory management' },
      { name: 'C++', highlight: 'Object-oriented systems & firmware' },
      { name: 'Python', highlight: 'Automation scripts & ML models' },
      { name: 'Java', highlight: 'Object-oriented enterprise systems' },
      { name: 'JavaScript', highlight: 'Modern asynchronous web applications' },
    ],
  },
  {
    category: 'Web & Frontend',
    description: 'Modern responsive web interfaces and accessibility',
    skills: [
      { name: 'HTML', highlight: 'Semantic structure & web accessibility' },
      { name: 'CSS', highlight: 'Responsive layout systems & animations' },
      { name: 'React', highlight: 'Component-driven interactive UI' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Multi-cloud architecture, provisioning, and containers',
    skills: [
      { name: 'AWS', highlight: 'Certified Solutions Architect (VPC, EC2, S3, IAM)' },
      { name: 'Google Cloud', highlight: 'Core infrastructure & Compute Engine' },
      { name: 'Terraform', highlight: 'Declarative Infrastructure as Code' },
      { name: 'GKE', highlight: 'Kubernetes Engine cluster management' },
      { name: 'Cloud Run', highlight: 'Serverless container execution' },
      { name: 'Cloud Functions', highlight: 'Event-driven serverless functions' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational, document, and analytical cloud databases',
    skills: [
      { name: 'MySQL', highlight: 'Relational schema normalization & ACID' },
      { name: 'MongoDB', highlight: 'Document-oriented NoSQL modeling' },
      { name: 'BigQuery', highlight: 'Serverless cloud data warehousing' },
      { name: 'Cloud SQL', highlight: 'Managed MySQL and PostgreSQL' },
      { name: 'Bigtable', highlight: 'High-throughput low-latency NoSQL' },
      { name: 'Spanner', highlight: 'Globally distributed relational DB' },
    ],
  },
  {
    category: 'Developer Tools',
    description: 'Version control and API testing suites',
    skills: [
      { name: 'Git', highlight: 'Distributed version control & branching' },
      { name: 'GitHub', highlight: 'Repositories & CI/CD workflows' },
      { name: 'Postman', highlight: 'Student Expert certified in API testing' },
    ],
  },
]

