import {
  Brain, BriefcaseBusiness, Cloud, Code2, Database, Figma,
  Globe, Headphones, Layers3, Mail, MapPin, Phone,
  Server, ShieldCheck, Smartphone, Sparkles, Users, Workflow,
  Zap, Target, Award, Star, Package
} from 'lucide-react';

export const logo = '/assets/viznous-logo.jpeg';

export const company = {
  name: 'Viznous IT Technologies Private Limited',
  shortName: 'Viznous IT Technologies',
  tagline: 'Viznous',
  slogan: 'Engineering Intelligent Digital Futures',
  description: 'A modern software product engineering company building secure, scalable, and intelligent digital systems for forward-thinking enterprises worldwide.',
  email: 'contact@viznous.com',
  phone: '+91 00000 00000',
  hours: 'Monday - Saturday, 9:30 AM - 6:30 PM IST',
  addressLines: [
    'Plot No: 359, Road No: 6',
    'RVR Colony, Almasguda',
    'Hyderabad, Telangana - 500058',
    'India'
  ],
  socials: ['LinkedIn', 'X (Twitter)', 'Facebook', 'Instagram']
};

export const navItems = ['Home', 'About', 'Services', 'Technologies', 'Portfolio', 'Careers', 'Contact', 'Admin'];

export const services = [
  {
    title: 'Custom Software Development',
    desc: 'Tailored business platforms, workflow automation, SaaS products, and secure enterprise-grade applications built for scale.',
    icon: Code2,
    color: '#2563EB',
    tags: ['React', 'Python', 'FastAPI', 'MySQL']
  },
  {
    title: 'Web Development',
    desc: 'Fast, responsive, SEO-optimized websites and progressive web apps engineered with modern frontend excellence.',
    icon: Globe,
    color: '#8B5CF6',
    tags: ['React', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Mobile App Development',
    desc: 'Native-feeling mobile experiences for Android and iOS with seamless API integrations and intuitive UX.',
    icon: Smartphone,
    color: '#10B981',
    tags: ['React Native', 'iOS', 'Android', 'REST APIs']
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Predictive analytics, intelligent automation, recommendation engines, and LLM-powered business solutions.',
    icon: Brain,
    color: '#EF4444',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI']
  },
  {
    title: 'Cloud Solutions',
    desc: 'Cloud migration, containerized deployments, DevOps pipelines, and scalable infrastructure on AWS and Azure.',
    icon: Cloud,
    color: '#06B6D4',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    title: 'IT Consulting',
    desc: 'Technology strategy, architecture reviews, digital transformation roadmaps, and modernization advisory.',
    icon: BriefcaseBusiness,
    color: '#F59E0B',
    tags: ['Strategy', 'Architecture', 'Roadmap', 'CTO Advisory']
  },
  {
    title: 'UI/UX Design',
    desc: 'Human-centered product design, interactive prototypes, design systems, and polished brand-consistent interfaces.',
    icon: Figma,
    color: '#A78BFA',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'UX Research']
  },
  {
    title: 'Enterprise Solutions',
    desc: 'Integrated ERP, CRM, analytics dashboards, and role-based internal business management systems.',
    icon: Layers3,
    color: '#2563EB',
    tags: ['ERP', 'CRM', 'Analytics', 'Workflow']
  },
  {
    title: 'Maintenance & Support',
    desc: 'SLA-backed monitoring, proactive bug fixes, security hardening, upgrades, and 24/7 production support.',
    icon: Headphones,
    color: '#22C55E',
    tags: ['SLA', 'Monitoring', 'Security', '24/7']
  }
];

export const technologies = {
  Frontend: [
    { name: 'React', desc: 'Composable UI for scalable web applications.', icon: Code2, level: 95 },
    { name: 'JavaScript', desc: 'Dynamic logic, APIs, and rich interactions.', icon: Workflow, level: 92 },
    { name: 'HTML5', desc: 'Semantic, accessible page foundations.', icon: Globe, level: 98 },
    { name: 'CSS3', desc: 'Responsive layouts, animations, design systems.', icon: Sparkles, level: 95 }
  ],
  Backend: [
    { name: 'Python', desc: 'Reliable services, automation, and data pipelines.', icon: Server, level: 93 },
    { name: 'Flask', desc: 'Lightweight APIs for focused microservices.', icon: Package, level: 88 },
    { name: 'FastAPI', desc: 'High-performance typed REST APIs.', icon: ShieldCheck, level: 91 }
  ],
  Database: [
    { name: 'MySQL', desc: 'Transactional data for web platforms.', icon: Database, level: 90 },
    { name: 'SQL Server', desc: 'Enterprise-grade database operations.', icon: Database, level: 87 }
  ],
  Cloud: [
    { name: 'AWS', desc: 'Compute, storage, security, cloud-native.', icon: Cloud, level: 85 },
    { name: 'Azure', desc: 'Enterprise cloud, identity, managed services.', icon: Cloud, level: 82 }
  ]
};

export const stats = [
  { label: 'Projects Delivered', value: 120, suffix: '+', icon: Zap },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: Star },
  { label: 'Technology Experts', value: 35, suffix: '+', icon: Users },
  { label: 'Support Coverage', value: 24, suffix: '/7', icon: ShieldCheck }
];

export const testimonials = [
  {
    quote: 'The Viznous team translated our operational complexity into a clean, scalable platform that our team actually loves using.',
    author: 'Operations Director',
    company: 'Fintech Client',
    rating: 5
  },
  {
    quote: 'Their delivery discipline and UI polish made our internal product adoption effortless. Exceeded every expectation.',
    author: 'Founder & CEO',
    company: 'SaaS Startup',
    rating: 5
  },
  {
    quote: 'We rely on Viznous for practical cloud guidance and dependable post-launch support. A truly trusted technology partner.',
    author: 'IT Head',
    company: 'Enterprise Client',
    rating: 5
  }
];

export const projects = [
  {
    title: 'Enterprise Resource Portal',
    category: 'Enterprise',
    impact: '42% reduction in approval cycle time',
    description: 'Role-based operations platform with real-time dashboards, approval workflows, reporting modules, and secure user management.',
    tech: ['React', 'FastAPI', 'SQL Server', 'Azure'],
    color: '#0B5CFF'
  },
  {
    title: 'AI Customer Insights Engine',
    category: 'AI & ML',
    impact: '31% improvement in lead prioritization',
    description: 'Machine learning pipeline for customer segmentation, predictive scoring, campaign intelligence, and conversion optimization.',
    tech: ['Python', 'TensorFlow', 'MySQL', 'AWS'],
    color: '#EF4444'
  },
  {
    title: 'Healthcare Appointment App',
    category: 'Mobile',
    impact: '80K+ bookings in pilot rollout',
    description: 'Mobile-first patient booking, smart reminders, provider calendar management, and admin scheduling workflows.',
    tech: ['React Native', 'FastAPI', 'MySQL', 'AWS'],
    color: '#10B981'
  },
  {
    title: 'Cloud Migration Program',
    category: 'Cloud',
    impact: '55% reduction in infrastructure incidents',
    description: 'Full migration roadmap, deployment automation, observability stack, and ongoing managed cloud operations.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    color: '#06B6D4'
  },
  {
    title: 'Commerce Experience Redesign',
    category: 'Web',
    impact: '18% uplift in conversion rate',
    description: 'Responsive storefront redesign with optimized checkout, analytics integration, and CMS content workflows.',
    tech: ['React', 'CSS3', 'Python', 'MySQL'],
    color: '#7C3AED'
  },
  {
    title: 'Manufacturing Analytics Suite',
    category: 'Enterprise',
    impact: 'Real-time plant visibility achieved',
    description: 'Executive dashboards, KPI tracking, SQL reporting pipelines, and performance monitoring for factory floors.',
    tech: ['React', 'Python', 'SQL Server', 'Azure'],
    color: '#F59E0B'
  }
];

export const jobs = [
  {
    role: 'Full Stack Developer',
    location: 'Hyderabad / Hybrid',
    skills: 'React - Python - FastAPI - MySQL',
    desc: 'Build robust web applications and seamless API integrations for our enterprise clients across industries.',
    type: 'Full-time'
  },
  {
    role: 'UI/UX Designer',
    location: 'Hyderabad',
    skills: 'Figma - Design Systems - UX Research',
    desc: 'Design premium product interfaces, interactive prototypes, and user-centered workflows for complex systems.',
    type: 'Full-time'
  },
  {
    role: 'Cloud Engineer',
    location: 'Remote / Hybrid',
    skills: 'AWS - Azure - DevOps - Kubernetes',
    desc: 'Architect secure cloud deployments, automated CI/CD pipelines, and comprehensive monitoring systems.',
    type: 'Full-time'
  }
];

export const values = [
  { title: 'Integrity', desc: 'Transparent decisions, clear communication, and dependable delivery that our clients can rely on.', icon: ShieldCheck },
  { title: 'Innovation', desc: 'Practical emerging technology applied to real business outcomes, not buzzwords.', icon: Zap },
  { title: 'Ownership', desc: 'We treat every product and platform like mission-critical infrastructure from day one.', icon: Target },
  { title: 'Excellence', desc: 'Clean engineering, refined design, and measurable impact in everything we ship.', icon: Award }
];

export const contactCards = [
  { title: 'Visit Us', text: company.addressLines.join(', '), icon: MapPin },
  { title: 'Email Us', text: company.email, icon: Mail },
  { title: 'Call Us', text: company.phone, icon: Phone },
  { title: 'Business Hours', text: company.hours, icon: BriefcaseBusiness }
];

export const clients = [
  'Fintech Corp', 'HealthTech Inc', 'Retail Giant', 'ManuFab Ltd',
  'EduSys Group', 'LogiPrime', 'RetailChain', 'DataVault'
];
