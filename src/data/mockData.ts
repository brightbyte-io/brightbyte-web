import {
  NavItem,
  ServiceItem,
  EngagementModel,
  ProcessStep,
  StatItem,
  TestimonialItem,
  FaqItem,
  BlogPost,
} from '../types';

export const navigationItems: NavItem[] = [
  { label: 'About', href: '#about', pageId: 'about' },
  {
    label: 'Services',
    href: '#services',
    pageId: 'services',
    children: [
      { label: 'Mobile App Development', serviceId: 'mobile-app' },
      { label: 'Web & Enterprise App Development', serviceId: 'web-enterprise' },
      { label: 'AI App Development', serviceId: 'ai-app' },
      { label: 'DevOps', serviceId: 'devops' },
      { label: 'Enterprise Resource Planning (ERP)', serviceId: 'erp' },
      { label: 'Business Auditing', serviceId: 'business-auditing' },
      { label: 'Project Management', serviceId: 'project-management' },
      { label: 'SEO & Social Media Marketing', serviceId: 'seo-marketing' },
      { label: 'OEM Global Sourcing', serviceId: 'oem-sourcing' },
    ],
  },
  { label: 'How We Work', href: '#how-we-work', pageId: 'how-we-work' },
  { label: 'Blog', href: '#blog', pageId: 'blog' },
];

export const heroStats: StatItem[] = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '95%', label: 'Client Retention Rate' },
  { value: '2×', label: 'Avg. Velocity Gain' },
  { value: '30%', label: 'Avg. Cost Reduction' },
];

export const trustedBrands = [
  { name: 'Apex Global', id: '1' },
  { name: 'OmniVenture', id: '2' },
  { name: 'Synthetix', id: '3' },
  { name: 'Nexura Tech', id: '4' },
  { name: 'Hyperion Labs', id: '5' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategic Architecture',
    description:
      'Wireframes, user interfaces, and system architecture. All aligned before a single line of code is written.',
    duration: '1 – 2 Weeks',
    deliverables: ['Architecture Blueprint', 'Technical Scoping Document', 'API Contract Schemas'],
    pinColor: 'yellow',
  },
  {
    number: '02',
    title: 'UI/UX Design & Prototyping',
    description:
      'User-centric wireframes, interactive design systems, and rapid clickable prototypes validated with stakeholders.',
    duration: '2 – 3 Weeks',
    deliverables: ['Clickable Figma Prototypes', 'Design System Tokens', 'UX Research Validation'],
    pinColor: 'pink',
  },
  {
    number: '03',
    title: 'Agile Sprint Engineering',
    description:
      'Agile sprints, regular check-ins, clean modular code, and automated CI/CD pipelines. You see real progress every week.',
    duration: '4 – 10 Weeks',
    deliverables: ['Production-Grade Git Repositories', 'Bi-Weekly Demo Deployments', 'Unit & Integration Tests'],
    pinColor: 'blue',
  },
  {
    number: '04',
    title: 'Comprehensive QA & Security',
    description:
      'QA at every stage, not just the end. Rigorous load testing, security audits, and automated regression suites catch bugs before launch.',
    duration: '1 – 2 Weeks',
    deliverables: ['100% Automated Test Coverage', 'Vulnerability Penetration Report', 'App Store / Play Store Approvals'],
    pinColor: 'emerald',
  },
  {
    number: '05',
    title: 'Production Launch & Managed Scaling',
    description:
      'We ship, monitor, and stay on hand after launch. Zero-downtime deployment, cloud scaling, and dedicated SLA support.',
    duration: 'Ongoing SLA',
    deliverables: ['Zero-Downtime Production Deployment', '24/7 Telemetry & Health Monitoring', 'Full IP & Code Transfer'],
    pinColor: 'blue',
  },
];

export const engagementModels: EngagementModel[] = [
  {
    id: 'staff-augmentation',
    number: '01',
    title: 'Staff Augmentation',
    tag: 'Best for: Skill gaps and deadlines',
    summary:
      'Our engineers and specialists seamlessly integrate with your existing team, participating fully in daily standups and team meetings. They commit directly to your codebase and utilize your preferred tools and workflows, ensuring smooth collaboration. This approach eliminates lengthy onboarding periods and reduces process friction, allowing your projects to progress efficiently and without interruption.',
    features: [
      {
        icon: 'rocket',
        title: 'Faster delivery',
        description: '1.5-2x velocity increase reported by clients using augmentation.',
      },
      {
        icon: 'users',
        title: 'Seamless integration',
        description: 'Our engineers work in your tools, your process, your codebase.',
      },
      {
        icon: 'target',
        title: 'Skill-targeted',
        description: 'Add exactly the expertise you need, not a generic package.',
      },
      {
        icon: 'calendar',
        title: 'Flexible duration',
        description: 'Scale up or down as your project needs change.',
      },
    ],
  },
  {
    id: 'dedicated-teams',
    number: '02',
    title: 'Dedicated Teams',
    tag: 'Best for: Product roadmaps',
    summary:
      'We assemble a cross-functional team built around your specific product. Designers, Developers, and QA working full-time alongside your own staff. This works well for companies that have project deadlines or skill gaps but want a team that integrates closely with their existing developers rather than taking the project over entirely.',
    features: [
      {
        icon: 'layers',
        title: 'Cross-functional',
        description: 'Dev, design, and QA assembled specifically for your product.',
      },
      {
        icon: 'crosshair',
        title: 'Product-focused',
        description: 'Your dedicated team is not split across other clients.',
      },
      {
        icon: 'handshake',
        title: 'Works with your team',
        description: 'Integrated alongside your existing developers to enhance productivity.',
      },
      {
        icon: 'activity',
        title: 'Transparent progress',
        description: 'Full visibility into what the team is working on and why.',
      },
    ],
  },
  {
    id: 'project-outsourcing',
    number: '03',
    title: 'Project Outsourcing',
    tag: 'Best for: Minimal involvement',
    summary:
      'You hand us the project, and we take full ownership of every aspect of the outcome. From initial design and development through rigorous quality assurance and final delivery, we manage the entire process seamlessly. Throughout the project, we keep you informed with regular updates at agreed intervals, ensuring transparency and alignment with your goals every step of the way.',
    features: [
      {
        icon: 'trending-down',
        title: 'Up to 30% cost savings',
        description: 'Compared to building and managing the project internally.',
      },
      {
        icon: 'user-check',
        title: 'Minimal management',
        description: 'You focus on your business while we own the delivery.',
      },
      {
        icon: 'package-check',
        title: 'End-to-end',
        description: 'From brief to deployed product, fully in our hands.',
      },
      {
        icon: 'clock',
        title: 'Regular updates',
        description: 'Agreed reporting cadence so you are never in the dark.',
      },
    ],
  },
  {
    id: 'managed-it',
    number: '04',
    title: 'Managed IT Services',
    tag: 'Best for: No in-house IT team',
    summary:
      'We ensure IT stability by handling routine monitoring, maintenance, and operations on an ongoing basis, giving your business the benefits of a capable IT function without the cost and overhead of building one in-house. Ideal for growing businesses that need reliable IT infrastructure managed by people who know what they are doing.',
    features: [
      {
        icon: 'clipboard-list',
        title: 'Project Management',
        description: 'Proactive monitoring and management to keep things running.',
      },
      {
        icon: 'settings',
        title: 'Routine operations',
        description: 'Maintenance, updates, and day-to-day IT tasks handled for you.',
      },
      {
        icon: 'trending-up',
        title: 'Strategic input',
        description: 'We flag issues before they become problems and advise proactively.',
      },
      {
        icon: 'dollar-sign',
        title: 'Lower overheads',
        description: 'No need to recruit, manage, or retain a full IT team in-house.',
      },
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    categoryTag: 'MOBILE APP DEVELOPMENT',
    heroHeadline: 'Native Android and iOS apps, built to launch and built to last.',
    heroSubtitle:
      'From a focused MVP to a fully featured consumer or enterprise app, UI/UX, development, QA, and store submission, all handled by one dedicated team.',
    overviewHeading: 'Mobile App Development',
    overviewDescription:
      'We build Android and iOS applications ranging from a focused MVP to a fully featured consumer or enterprise app. Our team handles UI/UX design, development, quality assurance, and App Store or Google Play submission.',
    overviewTags: ['Android', 'iOS', 'UI/UX Design', 'QA & Testing'],
    features: [
      {
        icon: 'layout',
        title: 'UI / UX Design',
        description: 'User-focused design from wireframes through to final, polished screens.',
      },
      {
        icon: 'smartphone',
        title: 'Android Development',
        description: 'Native Android apps built for performance and usability across devices.',
      },
      {
        icon: 'code',
        title: 'iOS Development',
        description: 'Native iOS apps designed for Apple ecosystem with Apple Store-ready code.',
      },
      {
        icon: 'check-circle',
        title: 'QA & Testing',
        description: 'Thorough testing at every stage so issues are caught before they reach users.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description:
          'Design, development, QA, and store submission handled by the same dedicated team. No hand-offs.',
      },
      {
        title: 'Native or cross-platform',
        description:
          'We recommend the right approach for your users and budget, not a default we push on everyone.',
      },
      {
        title: 'Store-ready from day one',
        description:
          'App Store and Google Play submission and approval handling built into the process, not an afterthought.',
      },
      {
        title: 'QA at every stage',
        description:
          'Testing throughout development, not just before launch, fewer surprises after you ship.',
      },
    ],
    technologies: [
      { category: 'iOS', skills: 'Swift, native App Store-ready code.' },
      { category: 'Android', skills: 'Kotlin, built for performance across devices.' },
      { category: 'Cross-platform', skills: 'Shared codebase where it fits your budget and timeline.' },
      { category: 'Backend & APIs', skills: 'REST APIs, cloud infrastructure, and third-party integrations.' },
    ],
    ctaText: "Let's build an app →",
  },
  {
    id: 'web-enterprise',
    title: 'Web & Enterprise Apps',
    categoryTag: 'WEB & ENTERPRISE APP DEVELOPMENT',
    heroHeadline: 'Platforms that run your business.',
    heroSubtitle:
      'From modern web apps to secure enterprise systems, we build scalable platforms, portals, dashboards and workflows, tailored to complex business operations.',
    overviewHeading: 'Web & Enterprise App Development',
    overviewDescription:
      'We build web and enterprise applications, from focused business tools to large-scale platforms. Our team handles design, development, integrations, testing, and deployment.',
    overviewTags: ['Full-Stack Development', 'API & Systems Integration', 'UI/UX Design', 'QA & Testing'],
    features: [
      {
        icon: 'code',
        title: 'Web Applications',
        description: 'Scalable, responsive web platforms built around real business workflows and user needs.',
      },
      {
        icon: 'git-merge',
        title: 'API Integration',
        description: 'Reliable connections between applications, services, databases, and third-party platforms.',
      },
      {
        icon: 'database',
        title: 'Enterprise Software',
        description: 'Secure, scalable systems designed for complex workflows, teams, and business operations.',
      },
      {
        icon: 'shopping-cart',
        title: 'E-Commerce',
        description: 'High-performance online stores with payments, inventory, product management, and integrations.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Design, development, QA, and cloud deployment handled by the same team.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Architected for modern cloud environments with high responsiveness.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Enterprise grade security, SSO, and compliance protocols.',
      },
      {
        title: 'QA at every stage',
        description: 'Zero regression with continuous automated integration testing.',
      },
    ],
    technologies: [
      { category: 'Frontend Development', skills: 'React, Next.js, TypeScript, Angular, Vue.js, and Tailwind CSS.' },
      { category: 'Backend & APIs', skills: 'Node.js, .NET, Java Spring Boot, Python, REST, and GraphQL.' },
      { category: 'Enterprise Systems', skills: '.NET Enterprise, Java EE, Microsoft Power Platform, SAP, and Salesforce.' },
      { category: 'Cloud & Integrations', skills: 'AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, and third-party APIs.' },
    ],
    ctaText: 'Let’s build a web app →',
  },
  {
    id: 'ai-app',
    title: 'AI App Development',
    categoryTag: 'AI APP DEVELOPMENT',
    heroHeadline: 'Apps that automate and think ahead.',
    heroSubtitle:
      'AI assistants, intelligent workflows and predictive features, we build applications that automate, personalize and help businesses make smarter decisions.',
    overviewHeading: 'AI App Development',
    overviewDescription:
      'We create AI-powered software combining AI, machine learning, and IoT to build smarter products and efficient workflows that solve real business problems.',
    overviewTags: ['Android', 'iOS', 'UI/UX Design', 'QA & Testing'],
    features: [
      {
        icon: 'cpu',
        title: 'Machine Learning',
        description: 'Custom models that learn from data to predict outcomes, identify patterns, and improve decisions.',
      },
      {
        icon: 'zap',
        title: 'Intelligent Automation',
        description: 'AI-powered workflows that reduce manual work and automate repetitive business processes.',
      },
      {
        icon: 'activity',
        title: 'IoT Solutions',
        description: 'Connected systems that collect device data, enable monitoring, and trigger intelligent actions.',
      },
      {
        icon: 'bar-chart',
        title: 'Data & Analytics',
        description: 'Advanced analytics that turn complex data into clear insights, trends, and business intelligence.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'From data engineering and model evaluation to polished UI integration.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Cloud and edge deployment options tailored to privacy and latency requirements.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Robust guardrails, rate limiting, and observability out of the box.',
      },
      {
        title: 'QA at every stage',
        description: 'Strict testing for model drift, hallucination mitigation, and data integrity.',
      },
    ],
    technologies: [
      { category: 'Generative AI & LLMs', skills: 'OpenAI, Anthropic, Gemini, Llama, LangChain, and Hugging Face.' },
      { category: 'Machine Learning', skills: 'Python, TensorFlow, PyTorch, Scikit-learn, XGBoost, and Pandas.' },
      { category: 'Computer Vision & NLP', skills: 'OpenCV, YOLO, spaCy, Transformers, Whisper, and Vision APIs.' },
      { category: 'AI Infrastructure & MLOps', skills: 'AWS, Azure AI, Google Cloud AI, Kubernetes, MLflow, and vector databases.' },
    ],
    ctaText: 'Let’s build an AI App →',
  },
  {
    id: 'devops',
    title: 'DevOps',
    categoryTag: 'DEVOPS',
    heroHeadline: 'Deploy with speed and confidence.',
    heroSubtitle:
      'We help teams build reliable deployment pipelines, integrating development, operations, and QA for faster, stable releases, plus standalone QA consulting for testing standards.',
    overviewHeading: 'DevOps',
    overviewDescription:
      'We help teams build reliable deployment pipelines, integrating development, operations, and QA for faster, stable releases, plus standalone QA consulting for testing standards.',
    overviewTags: ['CI/CD', 'Cloud', 'Docker', 'Linux', 'Agile', 'QA'],
    features: [
      {
        icon: 'git-branch',
        title: 'CI/CD Pipelines',
        description: 'Automated build, test, and deployment workflows that help teams release faster and more reliably.',
      },
      {
        icon: 'cloud',
        title: 'Cloud Infrastructure',
        description: 'Scalable cloud environments designed for performance, availability, and efficient resource management.',
      },
      {
        icon: 'check-square',
        title: 'QA & Testing',
        description: 'Automated and manual testing processes that improve software quality, stability, and release confidence.',
      },
      {
        icon: 'shield',
        title: 'Security',
        description: 'Integrated security practices that protect applications, infrastructure, data, and deployment pipelines.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Infrastructure as Code (IaC) with reproducible Terraform & Ansible modules.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Multi-cloud architectures across AWS, GCP, and Microsoft Azure.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Zero-downtime rolling deployments and blue-green releases.',
      },
      {
        title: 'QA at every stage',
        description: 'Continuous security scanning, SAST/DAST, and automated compliance.',
      },
    ],
    technologies: [
      { category: 'Frontend Development', skills: 'React, Next.js, TypeScript, Angular, Vue.js, and Tailwind CSS.' },
      { category: 'Backend & APIs', skills: 'Node.js, .NET, Java Spring Boot, Python, REST, and GraphQL.' },
      { category: 'Enterprise Systems', skills: '.NET Enterprise, Java EE, Microsoft Power Platform, SAP, and Salesforce.' },
      { category: 'Cloud & Integrations', skills: 'AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, and third-party APIs.' },
    ],
    ctaText: 'Let’s help you with DevOps →',
  },
  {
    id: 'erp',
    title: 'Enterprise Resource Planning (ERP)',
    categoryTag: 'ENTERPRISE RESOURCE PLANNING (ERP)',
    heroHeadline: 'Unify every part of your business.',
    heroSubtitle:
      'From finance and procurement to inventory, HR and reporting, we build ERP solutions that connect operations, streamline workflows and scale with you organization.',
    overviewHeading: 'Enterprise Resource Planning (ERP)',
    overviewDescription:
      'We design custom ERP solutions unifying operations, finance, inventory, and team management, tailored to your business processes for clear leadership control.',
    overviewTags: ['Custom ERP', 'SQL', 'API Integration', 'Reporting'],
    features: [
      {
        icon: 'database',
        title: 'ERP Implementation',
        description: 'End-to-end ERP deployment tailored to business requirements, covering configuration, migration, testing, and go-live support.',
      },
      {
        icon: 'network',
        title: 'System Integration',
        description: 'Seamless integration of ERP platforms with existing applications, databases, third-party tools, and business systems.',
      },
      {
        icon: 'git-commit',
        title: 'Process Mapping',
        description: 'Detailed analysis and mapping of business workflows to align ERP functionality with operational processes and goals.',
      },
      {
        icon: 'users',
        title: 'Training & Handover',
        description: 'Structured user training, documentation, and knowledge transfer to ensure smooth adoption and independent system management.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Holistic data modeling, migration script verification, and roll-out.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Accessible on web portals, desktop client workstations, and mobile devices.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Role-based access control (RBAC), multi-tenant tenancy, and ledger audit trails.',
      },
      {
        title: 'QA at every stage',
        description: 'Full reconciliation tests ensuring data zero-discrepancy.',
      },
    ],
    technologies: [
      { category: 'ERP Implementation', skills: 'SAP, Oracle NetSuite, Microsoft Dynamics 365, Odoo, and ERPNext.' },
      { category: 'System Integration', skills: 'REST APIs, SOAP, MuleSoft, Boomi, Zapier, Microsoft Power Automate, and webhooks.' },
      { category: 'Process Mapping', skills: 'Microsoft Visio, Lucidchart, Miro, Bizagi, BPMN, and ARIS.' },
      { category: 'Training & Handover', skills: 'Loom, Microsoft Teams, Confluence, SharePoint, Notion, and structured SOP documentation.' },
    ],
    ctaText: 'Let’s build your ERP →',
  },
  {
    id: 'business-auditing',
    title: 'Business Auditing',
    categoryTag: 'BUSINESS AUDITING',
    heroHeadline: 'Audit with clarity and control.',
    heroSubtitle:
      'From internal reviews and compliance checks to financial process assessments, we help businesses uncover risks, strengthen controls, and improve operational confidence.',
    overviewHeading: 'Business Auditing',
    overviewDescription:
      'Our business audit identifies inefficiencies in your tech, processes, and operations, providing clear insights and practical recommendations.',
    overviewTags: ['Process Review', 'Tech Audit', 'Gap Analysis', 'Recommendations'],
    features: [
      {
        icon: 'search',
        title: 'Technology Review',
        description: 'Evaluation of existing systems, tools, infrastructure, and technology gaps to identify risks and improvement opportunities.',
      },
      {
        icon: 'git-branch',
        title: 'Process Analysis',
        description: 'Detailed assessment of workflows, controls, and operational processes to uncover inefficiencies and bottlenecks.',
      },
      {
        icon: 'file-text',
        title: 'Actionable Report',
        description: 'Clear findings, prioritized recommendations, and practical next steps to improve performance, compliance, and efficiency.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Senior auditors who inspect code, infrastructure, and operational bottlenecks.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Actionable reports delivered with executive summaries and tactical roadmaps.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Strict confidentiality agreements and data security measures.',
      },
      {
        title: 'QA at every stage',
        description: 'Verification of findings against international ISO and SOC2 standards.',
      },
    ],
    technologies: [
      { category: 'Systems Audit', skills: 'SAP, Oracle, Microsoft Dynamics 365, ServiceNow, Power BI, Excel' },
      { category: 'Process Review', skills: 'Visio, Lucidchart, Bizagi, ARIS, Excel, SharePoint' },
      { category: 'Data Analysis', skills: 'Power BI, Tableau, ACL Analytics, IDEA, Excel, SQL' },
      { category: 'Audit Reporting', skills: 'Power BI, Excel, Word, PowerPoint, Confluence' },
    ],
    ctaText: 'Let’s audit your business →',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    categoryTag: 'PROJECT MANAGEMENT',
    heroHeadline: 'Projects that stay on track.',
    heroSubtitle:
      'From internal reviews and compliance checks to financial process assessments, we help businesses uncover risks, strengthen controls, and improve operational confidence.',
    overviewHeading: 'Project Management',
    overviewDescription:
      'Experienced project managers who keep your build on track, on budget, and clearly communicated throughout. Whether embedded in an existing team or leading independently, our PMs use Agile methodologies adapted to suit your project.',
    overviewTags: ['Agile', 'Scrum', 'Waterfall', 'Risk Management', 'RAD'],
    features: [
      {
        icon: 'refresh-cw',
        title: 'Agile Delivery',
        description: 'Flexible, iterative delivery that keeps development focused, efficient, and aligned with evolving project needs.',
      },
      {
        icon: 'message-square',
        title: 'Client Communication',
        description: 'Clear, consistent updates and collaboration throughout the project to maintain transparency and alignment.',
      },
      {
        icon: 'shield-alert',
        title: 'Risk Management',
        description: 'Early identification and mitigation of technical, operational, and delivery risks to keep projects on track.',
      },
      {
        icon: 'check-circle-2',
        title: 'Handover',
        description: 'Structured documentation, knowledge transfer, and final system delivery to ensure a smooth transition and ongoing ownership.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Transparent sprint burndowns, weekly video recaps, and live demos.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Adaptive management for synchronous or distributed global teams.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Guaranteed milestones and deterministic delivery schedules.',
      },
      {
        title: 'QA at every stage',
        description: 'Defect triage and blocker escalation within 4 hours.',
      },
    ],
    technologies: [
      { category: 'Agile Delivery', skills: 'Jira, Azure DevOps, ClickUp, Trello, Monday.com, Asana' },
      { category: 'Project Planning', skills: 'Microsoft Project, Primavera P6, Smartsheet, Custom ERP.' },
      { category: 'Collaboration', skills: 'Microsoft Teams, Slack, Confluence, Notion, Miro, Zoom.' },
      { category: 'Risk Tracking', skills: 'Jira, Power BI, Smartsheet, Excel, RAID Logs, Microsoft Project.' },
    ],
    ctaText: 'Let’s keep your projects on track →',
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Social Media Marketing',
    categoryTag: 'SEO & SOCIAL MEDIA MARKETING',
    heroHeadline: 'Deploy with speed and confidence.',
    heroSubtitle:
      'From search visibility to content strategy and campaign execution, we help brands improve rankings, reach the right audience, and turn engagement into measurable growth.',
    overviewHeading: 'SEO & Social Media Marketing',
    overviewDescription:
      'We grow your online presence with SEO and social media marketing, building lasting visibility that continues beyond paid campaigns.',
    overviewTags: ['Technical SEO', 'Content Strategy', 'Social Media', 'SEM', 'Analytics'],
    features: [
      {
        icon: 'search',
        title: 'Search Engine Optimization',
        description: 'On-page, technical, and content optimization that improves visibility, rankings, and organic traffic.',
      },
      {
        icon: 'share-2',
        title: 'Social Media Marketing',
        description: 'Targeted social campaigns that build awareness, engage audiences, and generate qualified leads.',
      },
      {
        icon: 'mouse-pointer-click',
        title: 'SEM',
        description: 'Paid search campaigns designed to increase visibility, drive traffic, and maximize advertising ROI.',
      },
      {
        icon: 'pie-chart',
        title: 'Reporting',
        description: 'Clear performance dashboards and insights covering traffic, conversions, campaigns, and growth trends.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Data-driven content clustering, schema markups, and backlink strategies.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Multi-channel coverage across Google, Meta, LinkedIn, and TikTok.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Full conversion tracking setup in Google Tag Manager and GA4.',
      },
      {
        title: 'QA at every stage',
        description: 'A/B landing page testing and continuous CTR optimization.',
      },
    ],
    technologies: [
      { category: 'SEO & Keyword Research', skills: 'Semrush, Google Search Console, Google Keyword Planner, Ahrefs.' },
      { category: 'Content & On-Page Optimization', skills: 'Surfer SEO, Yoast SEO, Rank Math, Google Trends.' },
      { category: 'Social Media Management', skills: 'Meta Business Suite, Hootsuite, Buffer, Sprout Social, and Canva.' },
      { category: 'Analytics & Performance Tracking', skills: 'Google Analytics 4, Google Tag Manager, Looker Studio, Meta Ads Manager.' },
    ],
    ctaText: 'Let’s promote you brand →',
  },
  {
    id: 'oem-sourcing',
    title: 'OEM Global Sourcing',
    categoryTag: 'OEM GLOBAL SOURCING',
    heroHeadline: 'Your access to the world and its goods.',
    heroSubtitle:
      'We help businesses find and procure high-quality products from trusted manufacturers around the world and deliver them to your doorstep, seamlessly, reliably and cost-effectively.',
    overviewHeading: 'OEM Global Sourcing',
    overviewDescription:
      'We source hardware and physical products from OEM manufacturers worldwide, managing the entire process from supplier identification and quality control through to customs clearance and delivery to your door.',
    overviewTags: ['Global Sourcing', 'Quality Control', 'Logistics', 'Customs', 'Private Label'],
    features: [
      {
        icon: 'search',
        title: 'Supplier Identification',
        description: 'We source and evaluate reliable suppliers based on quality, pricing, capacity, and delivery needs.',
      },
      {
        icon: 'package-check',
        title: 'Quality Control',
        description: 'Pre-shipment inspection and product checks to ensure goods meet agreed specifications before leaving the factory.',
      },
      {
        icon: 'truck',
        title: 'Shipping & Logistics',
        description: 'We manage freight, documentation, and shipment coordination for smooth international delivery.',
      },
      {
        icon: 'shield-check',
        title: 'Customs & Delivery',
        description: 'We support customs clearance, import documentation, duties, and final delivery to your doorstep.',
      },
    ],
    whyChoosePoints: [
      {
        title: 'One team, start to finish',
        description: 'Direct boots on the ground at manufacturing hubs across Asia and Europe.',
      },
      {
        title: 'Native or cross-platform',
        description: 'Transparent landed-cost calculators with no hidden harbor fees.',
      },
      {
        title: 'Store-ready from day one',
        description: 'Rigorous factory audits and production line oversight.',
      },
      {
        title: 'QA at every stage',
        description: '100% pre-shipment sampling and testing reports before dispatch.',
      },
    ],
    technologies: [
      { category: 'Agile Delivery', skills: 'Jira, Azure DevOps, ClickUp, Trello, Monday.com, Asana' },
      { category: 'Project Planning', skills: 'Microsoft Project, Primavera P6, Smartsheet, Custom ERP.' },
      { category: 'Collaboration', skills: 'Microsoft Teams, Slack, Confluence, Notion, Miro, Zoom.' },
      { category: 'Risk Tracking', skills: 'Jira, Power BI, Smartsheet, Excel, RAID Logs, Microsoft Project.' },
    ],
    ctaText: 'Let’s audit your business →',
  },
];

export const clientReviews: TestimonialItem[] = [
  {
    id: 'rev-1',
    quote:
      'Impressed with the seamless integration and effective security features. I highly recommend Bright Byte Consulting for bringing your vision to life.',
    author: 'John Smith',
    location: 'Yorkshire, UK',
  },
  {
    id: 'rev-2',
    quote:
      'The engineering quality delivered by BrightByte was extraordinary. They took over our complex cloud architecture and doubled our deployment velocity in less than 3 months.',
    author: 'Sarah Jenkins',
    location: 'Toronto, Canada',
  },
  {
    id: 'rev-3',
    quote:
      'BrightByte acted as true technical partners rather than an outsourced agency. Their team in Islamabad and Toronto worked flawlessly across timezones to ship our mobile app.',
    author: 'Michael Chang',
    location: 'London, UK',
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Why partner with Brightbyte Consulting?',
    answer:
      'We combine enterprise-grade technical expertise with boutique agility. Every engagement is staffed by dedicated senior engineers and architects across our two continents, ensuring high velocity, transparent communication, and zero unnecessary overhead.',
  },
  {
    id: 'faq-2',
    question: 'What services does Brightbyte Consulting provide?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. We offer end-to-end software engineering across mobile apps, web and enterprise platforms, AI development, DevOps, ERP systems, business auditing, project management, SEO marketing, and OEM global sourcing.',
  },
  {
    id: 'faq-3',
    question: 'How do I initiate a consultation?',
    answer:
      'You can click "Book a Free Call" or "Schedule on Calendly" to pick a 30-minute slot on our calendar, or submit our consultation form with your project details. We will respond within one business day.',
  },
  {
    id: 'faq-4',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, you can outline your project requirements through our consultation form, and our engineering leadership will provide a comprehensive scope, timeline, and budget estimate within one business day.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'job-application-guide',
    title: 'Your Complete Guide to Applying for a Job Successfully',
    category: 'HIRING',
    readTime: '2-3 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum, cras venenatis euismod malesuada.',
    date: 'July 12, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Manager HR',
      avatar: 'AN',
    },
    tags: ['Hiring', 'Job Application', 'Job Search'],
    content: [
      'Embarking on a job search can initially feel overwhelming, but by adopting a structured and thoughtful strategy, you can navigate the process with confidence and improve your chances of landing the ideal role. Start by conducting a comprehensive self-assessment to understand your strengths, skills, experiences, and long-term career objectives. Reflect on what motivates you, the environments where you thrive, and the industries that excite you. This clarity will help you target roles that truly align with your professional aspirations and personal values.',
      'Once you have a clear understanding of your goals, invest time in crafting a tailored resume for each job application. Highlight your most relevant accomplishments and skills that directly correspond to the job description. Use quantifiable results and specific examples to demonstrate your impact in previous roles. This personalized approach not only showcases your qualifications but also signals to employers that you have taken the time to understand their needs and are genuinely interested in the position.',
      'In addition to your resume, write a compelling cover letter that goes beyond summarizing your work history. Share your unique professional journey, emphasizing your passion for the field, your core values, and how you envision contributing to the company\'s mission and success. Use this opportunity to connect your experiences to the organization\'s goals, making a persuasive case for why you are the right fit.',
      'Thoroughly research each prospective employer before applying. Delve into their mission statement, company culture, recent projects, and standing within the industry. Understanding these elements will enable you to tailor your application materials more effectively and prepare insightful questions for interviews. Demonstrating this level of preparation reflects your enthusiasm and commitment, setting you apart from other candidates.',
      'Prepare diligently for interviews by practicing responses to common questions. Focus on articulating your experiences with concrete examples that highlight your problem-solving abilities, teamwork, adaptability, and leadership skills. Additionally, develop thoughtful questions to ask your interviewer about the role, team dynamics, company vision, and growth opportunities. This proactive engagement shows your genuine interest and helps you assess if the company is the right fit for you.',
      'After each interview, promptly send a personalized thank-you note. Express your gratitude for the opportunity, reiterate your enthusiasm for the role, and briefly summarize why your skills and experiences make you an excellent candidate. This courteous follow-up keeps you top of mind and reinforces your professionalism.',
      'Throughout your job search, maintain organized records of your applications, communications, interview feedback, and any networking contacts. Tracking this information will help you monitor your progress, identify patterns, and refine your approach as needed. Staying organized also reduces stress and ensures you can respond promptly to opportunities.',
      'By following these detailed and comprehensive steps with diligence and confidence, you will be well-prepared to navigate the competitive job market. This methodical approach not only increases your chances of securing a position that aligns with your career ambitions but also empowers you to present your best self at every stage of the hiring process.',
    ],
  },
  {
    id: 'ai-transforming-industry',
    title: "How AI is transforming the industry that we're serving in",
    category: 'TECHNICAL',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.',
    date: 'June 28, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
  {
    id: 'major-llms-way-forward',
    title: 'Are the major LLMs really the way forward?',
    category: 'TECHNICAL',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'June 15, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
  {
    id: 'teamwork-dream-work',
    title: 'Team work makes the dream work... Does it really?',
    category: 'HIRING',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    date: 'June 02, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
  {
    id: 'right-place-for-me',
    title: 'Is this the right place for me to work?',
    category: 'HIRING',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.',
    date: 'May 20, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
  {
    id: 'could-have-been-email',
    title: 'This surely could have been an email right?',
    category: 'TEAMWORK',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'May 10, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
  {
    id: 'insurance-for-shipment',
    title: 'Have you gotten the right kind of insurance for your shipment?',
    category: 'OEM SOURCING',
    readTime: '2 Min Read',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    date: 'April 25, 2026',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatar: 'AN',
    },
  },
];

export const trustedClients = [
  { name: 'Apex Global', logo: 'AG' },
  { name: 'OmniVenture', logo: 'OV' },
  { name: 'Synthetix', logo: 'SX' },
  { name: 'Nexura Tech', logo: 'NT' },
  { name: 'Hyperion Labs', logo: 'HL' },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rev-1',
    quote:
      'Impressed with the seamless integration and effective security features. I highly recommend Bright Byte Consulting for bringing your vision to life.',
    author: 'John Smith',
    location: 'Yorkshire, UK',
    company: 'Apex Health Corp',
    role: 'Chief Technology Officer',
    avatarText: 'JS',
    impact: 'Deployed on AWS in 6 weeks with zero downtime',
  },
  {
    id: 'rev-2',
    quote:
      'The engineering quality delivered by BrightByte was extraordinary. They took over our complex cloud architecture and doubled our deployment velocity in less than 3 months.',
    author: 'Sarah Jenkins',
    location: 'Toronto, Canada',
    company: 'FinFlow Technologies',
    role: 'VP of Engineering',
    avatarText: 'SJ',
    impact: '2x sprint velocity gain & SOC2 compliance achieved',
  },
  {
    id: 'rev-3',
    quote:
      'BrightByte acted as true technical partners rather than an outsourced agency. Their team in Islamabad and Toronto worked flawlessly across timezones to ship our mobile app.',
    author: 'Michael Chang',
    location: 'London, UK',
    company: 'RetailPulse International',
    role: 'Founder & CEO',
    avatarText: 'MC',
    impact: 'Top 10 App Store debut with 99.9% crash-free rate',
  },
];

export const faqData = faqsData;

