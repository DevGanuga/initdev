import { ServiceCard, TechStackItem } from '@/lib/types/services';

export const servicesData: ServiceCard[] = [
  // Core Services
  {
    id: 'full-stack',
    category: 'core',
    icon: '⚡',
    iconBg: 'bg-volt/10',
    title: 'Full-Stack Product Development',
    tagline: 'End-to-end digital products that scale',
    description: 'Modern web apps that scale from 10 to 10 million users. React, Next.js, Node.js, Python – we speak all the languages that matter.',
    features: [
      'React/Next.js frontends that convert',
      'Node.js/Python backends that scale',
      'PostgreSQL/MongoDB optimized databases',
      'Real-time features with WebSockets',
      'Mobile-responsive PWAs',
      'API design & documentation'
    ],
    technologies: [
      { name: 'React', proficiency: 3, category: 'frontend' },
      { name: 'Next.js', proficiency: 3, category: 'frontend' },
      { name: 'Node.js', proficiency: 3, category: 'backend' },
      { name: 'Python', proficiency: 3, category: 'backend' },
      { name: 'PostgreSQL', proficiency: 3, category: 'database' },
      { name: 'TypeScript', proficiency: 3, category: 'frontend' }
    ],
    estimatedTimeline: '4-8 weeks',
    startingPrice: '$25,000',
    popular: true
  },
  {
    id: 'b2b-automation',
    category: 'core',
    icon: '🔄',
    iconBg: 'bg-azure/10',
    title: 'B2B Automation & Integration',
    tagline: 'The unsexy stuff that makes money',
    description: 'Connect everything, automate everything, scale everything. We build the plumbing that powers your business.',
    features: [
      'Salesforce/HubSpot integration',
      'Workflow automation & orchestration',
      'API development & integration',
      'Data pipeline architecture',
      'Event-driven systems',
      'Business process automation'
    ],
    technologies: [
      { name: 'Node.js', proficiency: 3, category: 'backend' },
      { name: 'Python', proficiency: 3, category: 'backend' },
      { name: 'Apache Kafka', proficiency: 2, category: 'data' },
      { name: 'Redis', proficiency: 3, category: 'database' },
      { name: 'RabbitMQ', proficiency: 2, category: 'backend' }
    ],
    estimatedTimeline: '2-6 weeks',
    startingPrice: '$15,000'
  },
  {
    id: 'ai-ml',
    category: 'core',
    icon: '🤖',
    iconBg: 'bg-gold/10',
    title: 'AI/ML Integration',
    tagline: 'Beyond the ChatGPT wrapper',
    description: 'Custom models, real intelligence, actual ROI. We build AI that solves real problems, not just demos.',
    features: [
      'OpenAI/Anthropic integration',
      'Custom model training & fine-tuning',
      'Computer vision solutions',
      'Natural language processing',
      'Predictive analytics & forecasting',
      'Recommendation engines'
    ],
    technologies: [
      { name: 'Python', proficiency: 3, category: 'backend' },
      { name: 'TensorFlow', proficiency: 2, category: 'ai-ml' },
      { name: 'PyTorch', proficiency: 2, category: 'ai-ml' },
      { name: 'OpenAI API', proficiency: 3, category: 'ai-ml' },
      { name: 'LangChain', proficiency: 3, category: 'ai-ml' }
    ],
    estimatedTimeline: '3-8 weeks',
    startingPrice: '$20,000'
  },
  {
    id: 'mobile-apps',
    category: 'core',
    icon: '📱',
    iconBg: 'bg-success/10',
    title: 'Mobile App Development',
    tagline: 'Native performance, cross-platform efficiency',
    description: 'iOS and Android apps that users love. React Native for speed, native code where it matters.',
    features: [
      'React Native cross-platform apps',
      'Native iOS/Android development',
      'Push notifications & deep linking',
      'Offline-first architecture',
      'App Store optimization',
      'In-app purchases & subscriptions'
    ],
    technologies: [
      { name: 'React Native', proficiency: 3, category: 'mobile' },
      { name: 'Swift', proficiency: 2, category: 'mobile' },
      { name: 'Kotlin', proficiency: 2, category: 'mobile' },
      { name: 'Expo', proficiency: 3, category: 'mobile' },
      { name: 'Firebase', proficiency: 3, category: 'backend' }
    ],
    estimatedTimeline: '6-12 weeks',
    startingPrice: '$35,000'
  },
  // Advanced Services
  {
    id: 'cybersecurity',
    category: 'advanced',
    icon: '🛡️',
    iconBg: 'bg-crimson/10',
    title: 'Cybersecurity & Compliance',
    tagline: 'Security-first architecture from day one',
    description: 'Pass due diligence, win enterprise deals, sleep at night. We build security into your DNA.',
    features: [
      'SOC2/HIPAA compliance',
      'Zero-trust architecture',
      'Penetration testing',
      'Security audits & assessments',
      'Incident response planning',
      'Data encryption & key management'
    ],
    technologies: [
      { name: 'AWS Security', proficiency: 3, category: 'security' },
      { name: 'OAuth/SAML', proficiency: 3, category: 'security' },
      { name: 'HashiCorp Vault', proficiency: 2, category: 'security' },
      { name: 'OWASP', proficiency: 3, category: 'security' }
    ],
    estimatedTimeline: '2-4 weeks',
    startingPrice: '$15,000'
  },
  {
    id: 'cloud-devops',
    category: 'advanced',
    icon: '☁️',
    iconBg: 'bg-info/10',
    title: 'Cloud & DevOps',
    tagline: 'Infrastructure that scales automatically',
    description: 'Deploy continuously, scale infinitely, never go down. We build infrastructure that just works.',
    features: [
      'AWS/GCP/Azure architecture',
      'Kubernetes orchestration',
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Cost optimization',
      'Monitoring & alerting'
    ],
    technologies: [
      { name: 'AWS', proficiency: 3, category: 'cloud' },
      { name: 'Kubernetes', proficiency: 3, category: 'devops' },
      { name: 'Docker', proficiency: 3, category: 'devops' },
      { name: 'Terraform', proficiency: 3, category: 'devops' },
      { name: 'GitHub Actions', proficiency: 3, category: 'devops' }
    ],
    estimatedTimeline: '1-3 weeks',
    startingPrice: '$10,000'
  },
  {
    id: 'data-engineering',
    category: 'advanced',
    icon: '📊',
    iconBg: 'bg-volt/10',
    title: 'Data Engineering & Analytics',
    tagline: 'Turn data chaos into competitive advantage',
    description: 'Real insights, real-time, real money. We build data pipelines that power decisions.',
    features: [
      'Real-time data pipelines',
      'Data warehouse architecture',
      'ETL/ELT development',
      'Business intelligence dashboards',
      'Data lake implementation',
      'Stream processing'
    ],
    technologies: [
      { name: 'Apache Spark', proficiency: 2, category: 'data' },
      { name: 'Snowflake', proficiency: 2, category: 'database' },
      { name: 'dbt', proficiency: 3, category: 'data' },
      { name: 'Airflow', proficiency: 2, category: 'data' },
      { name: 'BigQuery', proficiency: 3, category: 'database' }
    ],
    estimatedTimeline: '3-6 weeks',
    startingPrice: '$20,000'
  },
  {
    id: 'blockchain',
    category: 'advanced',
    icon: '⛓️',
    iconBg: 'bg-azure/10',
    title: 'Blockchain & Web3',
    tagline: 'Decentralized solutions for the future',
    description: 'Smart contracts, DeFi, NFTs – we build on-chain products that actually ship.',
    features: [
      'Smart contract development',
      'DeFi protocol implementation',
      'NFT marketplace creation',
      'Wallet integration',
      'Cross-chain bridges',
      'Token economics design'
    ],
    technologies: [
      { name: 'Solidity', proficiency: 2, category: 'backend' },
      { name: 'Ethereum', proficiency: 2, category: 'backend' },
      { name: 'Web3.js', proficiency: 2, category: 'frontend' },
      { name: 'Hardhat', proficiency: 2, category: 'backend' }
    ],
    estimatedTimeline: '4-8 weeks',
    startingPrice: '$30,000',
    comingSoon: false
  }
];

export const techStackData: TechStackItem[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description: 'Building component-based UIs since 2016',
    proficiency: 3,
    yearsExperience: 8,
    projectsCount: 127,
    featured: true
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    description: 'Full-stack React framework for production',
    proficiency: 3,
    yearsExperience: 5,
    projectsCount: 89,
    featured: true
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    description: 'Type-safe JavaScript at scale',
    proficiency: 3,
    yearsExperience: 6,
    projectsCount: 112
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first CSS framework',
    proficiency: 3,
    yearsExperience: 4,
    projectsCount: 76
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    description: 'Progressive JavaScript framework',
    proficiency: 2,
    yearsExperience: 3,
    projectsCount: 34
  },
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    description: 'JavaScript runtime for scalable backends',
    proficiency: 3,
    yearsExperience: 8,
    projectsCount: 145,
    featured: true
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    description: 'Versatile language for web, data, and AI',
    proficiency: 3,
    yearsExperience: 10,
    projectsCount: 98,
    featured: true
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    description: 'High-level Python web framework',
    proficiency: 3,
    yearsExperience: 6,
    projectsCount: 45
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    description: 'Modern, fast Python API framework',
    proficiency: 3,
    yearsExperience: 3,
    projectsCount: 28
  },
  {
    id: 'golang',
    name: 'Go',
    category: 'backend',
    description: 'Efficient language for cloud services',
    proficiency: 2,
    yearsExperience: 3,
    projectsCount: 22
  },
  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    description: 'Advanced open source database',
    proficiency: 3,
    yearsExperience: 9,
    projectsCount: 132,
    featured: true
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    description: 'NoSQL database for modern apps',
    proficiency: 3,
    yearsExperience: 7,
    projectsCount: 89
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    description: 'In-memory data structure store',
    proficiency: 3,
    yearsExperience: 6,
    projectsCount: 112
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    description: 'Popular relational database',
    proficiency: 3,
    yearsExperience: 8,
    projectsCount: 76
  },
  // Cloud
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    description: 'Amazon Web Services cloud platform',
    proficiency: 3,
    yearsExperience: 7,
    projectsCount: 145,
    featured: true
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    category: 'cloud',
    description: 'Google Cloud Platform services',
    proficiency: 2,
    yearsExperience: 4,
    projectsCount: 56
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'cloud',
    description: 'Microsoft cloud computing platform',
    proficiency: 2,
    yearsExperience: 3,
    projectsCount: 34
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    description: 'Platform for frontend frameworks',
    proficiency: 3,
    yearsExperience: 4,
    projectsCount: 67
  },
  // AI/ML
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'ai-ml',
    description: 'GPT and DALL-E integration',
    proficiency: 3,
    yearsExperience: 2,
    projectsCount: 34,
    featured: true
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ai-ml',
    description: 'Open source ML framework',
    proficiency: 2,
    yearsExperience: 4,
    projectsCount: 23
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai-ml',
    description: 'Deep learning framework',
    proficiency: 2,
    yearsExperience: 3,
    projectsCount: 18
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'ai-ml',
    description: 'Framework for LLM applications',
    proficiency: 3,
    yearsExperience: 1,
    projectsCount: 12
  },
  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    description: 'Container platform for apps',
    proficiency: 3,
    yearsExperience: 7,
    projectsCount: 134,
    featured: true
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    description: 'Container orchestration platform',
    proficiency: 3,
    yearsExperience: 5,
    projectsCount: 67
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'devops',
    description: 'Infrastructure as Code',
    proficiency: 3,
    yearsExperience: 4,
    projectsCount: 89
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'devops',
    description: 'CI/CD automation platform',
    proficiency: 3,
    yearsExperience: 3,
    projectsCount: 112
  },
  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    description: 'Cross-platform mobile development',
    proficiency: 3,
    yearsExperience: 5,
    projectsCount: 45
  },
  {
    id: 'expo',
    name: 'Expo',
    category: 'mobile',
    description: 'React Native development platform',
    proficiency: 3,
    yearsExperience: 3,
    projectsCount: 34
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'mobile',
    description: 'Native iOS development',
    proficiency: 2,
    yearsExperience: 3,
    projectsCount: 18
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'mobile',
    description: 'Native Android development',
    proficiency: 2,
    yearsExperience: 2,
    projectsCount: 15
  }
];
