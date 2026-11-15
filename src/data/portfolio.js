import { asset } from '@/utils/asset';

// All page copy lives here so the template stays declarative and content
// edits never require touching markup or layout.

export const navLinks = [
  { label: 'Work', href: '#work', section: 'work' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Stack', href: '#stack', section: 'stack' },
  { label: 'Contact', href: '#contact', section: 'contact' },
  {
    label: 'Hire Me',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shashankh3@gmail.com',
    cta: true,
    external: true
  }
];

export const heroMeta = [
  { label: 'Role', value: 'Full-Stack · AI · Mobile Dev' },
  { label: 'Focus', value: 'GenAI + ROCm/CUDA + Mobile' },
  { label: 'Location', value: 'India' }
];

export const projects = [
  {
    id: 'radeon',
    index: '01',
    kicker: 'AI + HARDWARE COMPUTE',
    title: 'RadeonShift AI',
    stack: 'TypeScript · Python · Fireworks AI · AMD ROCm · CUDA · MI300X Telemetry · Vercel',
    description:
      'Enterprise DevSecOps pipeline automating NVIDIA CUDA to AMD MI300X migration using deterministic risk scanners and a semantic Mixture-of-Agents (MoA) dual-agent architecture to catch critical migration bugs that standard tools miss.',
    points: [
      'Layer 1 Deterministic Audit: Scans wavefront-64, inline PTX assembly, and WMMA matrix portability risks before AI inference.',
      'Layer 2 Mixture-of-Agents AI: Dual-agent semantic code translation via Fireworks AI with architectural readiness scoring.',
      'Live MI300X telemetry verification, provenance tracking (live, cached, demo), and real-time AST analysis.',
      'Built for the AMD Developer Hackathon: ACT II — fully deployed and verified on Vercel.'
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/shashankh3/RadeonShift-AI' },
      { label: 'Live Demo ↗', href: 'https://radeon-shift-ai.vercel.app/' }
    ],
    video: {
      src: asset('/videos/radeon.mp4'),
      poster: asset('/videos/radeon-poster.jpg'),
      url: 'radeon-shift-ai.vercel.app'
    }
  },
  {
    id: 'omnipitch',
    index: '02',
    kicker: '3D GRAPHICS + GENAI',
    title: 'OmniPitch 2026',
    stack: 'Vue 3 · Three.js · TypeScript · Tailwind CSS · Fireworks AI · Supabase · Vite',
    description:
      'GenAI-powered 3D Digital Twin and command center simulation for the FIFA World Cup 2026, delivering interactive stadium spatial rendering and AI incident management.',
    points: [
      'Real-time 3D stadium digital twin rendering engineered with Three.js and Vue 3.',
      'GenAI command center simulation powered by Fireworks AI for real-time scenario and incident handling.',
      'High-reliability architecture: 281 passing tests with 96% line coverage on logic layers, 630KB bundle size.'
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/shashankh3/omnipitch-2026' },
      { label: 'Live Demo ↗', href: 'https://omnipitch-2026.vercel.app/' }
    ],
    video: {
      src: asset('/videos/omnipitch.mp4'),
      poster: asset('/videos/omnipitch-poster.jpg'),
      url: 'omnipitch-2026.vercel.app/fan'
    }
  },
  {
    id: 'unilearn',
    index: '03',
    kicker: 'NATIVE MOBILE & OFFLINE',
    title: 'UNIlearn Maharashtra',
    stack: 'React Native 0.86 · Expo SDK 57 · React 19 · Moodle REST API · Jest · Android',
    description:
      'High-performance, offline-first native mobile LMS built for the Maharashtra State e-learning initiative, interfacing directly with Moodle Web Services REST API.',
    points: [
      'Offline-first local caching engine with encrypted token storage and secure biometric/session auth.',
      'Seamless sync with Moodle REST API 4.x for real-time course enrollment, submissions, and gradebooks.',
      'Accessible, trilingual vernacular UI optimized for smooth 60fps performance on low-end Android hardware (60+ Jest tests).'
    ],
    links: [{ label: 'GitHub →', href: 'https://github.com/shashankh3/moodle-lms-android' }],
    video: {
      src: asset('/videos/unilearn.mp4'),
      poster: asset('/videos/unilearn-poster.jpg'),
      url: 'UNIlearn Maharashtra — Android app'
    }
  },
  {
    id: 'lms',
    index: '04',
    kicker: 'FULL-STACK AI PLATFORM',
    title: 'LearnFlow LMS',
    stack: 'Next.js · TypeScript · Django · Tailwind CSS · Fireworks AI & Gemini · JWT',
    description:
      'Full-stack learning management system bridging video education and active retention through a dual Instructor/Student portal and an interactive AI challenge engine.',
    points: [
      "'Test Your Might' AI Gauntlet: generates on-demand interactive assessments from lesson content with human-in-the-loop review.",
      'Course Architect & Live Analytics: instructors track student progress percentages and enrollments in real time.',
      'Automated high-fidelity, print-ready Certificate of Completion generation upon 100% course completion.',
      'Secure JWT authentication, role-based workflows, and internationalization (i18n) ready architecture.'
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/shashankh3/LearnFlow-LMS' },
      { label: 'Live Demo ↗', href: 'https://frontend-phi-black-88.vercel.app/' }
    ],
    video: {
      src: asset('/videos/lms.mp4'),
      poster: asset('/videos/lms-poster.jpg'),
      url: 'frontend-phi-black-88.vercel.app'
    }
  },
  {
    id: 'dibs',
    index: '05',
    kicker: 'SMART ECO-ASSISTANT',
    title: 'DIBS (Do It Before Scrap)',
    stack: 'JavaScript · Geolocation API · Heatmaps · Context-Aware Routing · UI/UX',
    description:
      'Smart circular economy assistant that intelligently routes household items away from landfills using user location, item condition, and real-time scrap dealer heatmaps.',
    points: [
      "Gamified Swipe Interface: dynamic card-swipe routing ('call DIBS', pass, or scrap) based on GPS coordinates.",
      'Scrap Route Heatmap: live visual map assisting local scrap collectors with real-time weight accumulation by pincode.',
      'CO2 Impact Tracker: calculates carbon emissions saved from diverted waste with interactive community metrics.'
    ],
    links: [{ label: 'GitHub →', href: 'https://github.com/shashankh3/dibs' }],
    video: {
      src: asset('/videos/dibs.mp4'),
      poster: asset('/videos/dibs-poster.jpg'),
      url: 'DIBS — mobile app'
    }
  },
  {
    id: 'topicfeed',
    index: '06',
    kicker: 'BROWSER EXTENSION & PROMPT AI',
    title: 'TopicFeedPro',
    stack: 'JavaScript · Chrome Extensions Manifest V3 · Prompt Engineering · YouTube API',
    description:
      "AI-engineered browser extension that overrides YouTube's recommendation feed with intent-driven topic filtering, organizing content by views and relevance.",
    points: [
      'Replaces algorithmic recommendations with purposeful, user-specified topic feeds.',
      'Zero-latency client-side caching, global deduplication, and optimized view-count sorting logic.'
    ],
    links: [{ label: 'GitHub →', href: 'https://github.com/shashankh3/TopicFeedGenerator' }],
    video: {
      src: asset('/videos/topicfeed.mp4'),
      poster: asset('/videos/topicfeed-poster.jpg'),
      url: 'youtube.com — Topic Feed Pro extension'
    }
  }
];

export const experience = [
  {
    meta: 'March 2026 — Present · Remote',
    org: 'Freelance Android Developer — Safaikart',
    role: 'End-to-end Android Application (Expo Go)',
    description:
      'Developing Safaikart, an end-to-end Android application via Expo Go for a local business providing comprehensive laundry, delivery, and home sofa cleaning services. Accelerating the development lifecycle with AI-integrated workflows for rapid code generation, debugging, and scalable architecture design.'
  },
  {
    meta: 'March 2026 — Present · New Delhi (Remote)',
    org: 'United Nations OICT — UN India Technology Hub',
    role: 'Online Volunteer — Software Development Support',
    description:
      'Contributing to software development support for the UN India Technology Hub under the Office of Information and Communications Technology (OICT). Assisting with technical documentation, development tasks, and deployment of digital solutions aligned with broader UN goals.'
  },
  {
    meta: 'October 2024 — December 2024 · Remote',
    org: 'OUTLIER.AI',
    role: 'Individual Contractor — Prompt Engineering',
    description:
      'Optimized AI and LLM responses by designing prompts that intentionally generate errors to enhance model learning and improve accuracy. Trained AI models to refine their understanding and generate more accurate, context-aware responses by reviewing code and AI-generated outputs.'
  }
];

export const skillGroups = [
  {
    label: 'Languages',
    tags: ['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'Java', 'SQL', 'HTML/CSS']
  },
  {
    label: 'AI & GPU Acceleration',
    tags: [
      'Fireworks AI',
      'Gemini API',
      'LLM Evaluation & QA',
      'Mixture-of-Agents (MoA)',
      'AMD ROCm',
      'NVIDIA CUDA',
      'Prompt Engineering'
    ]
  },
  {
    label: 'Frontend & 3D Graphics',
    tags: ['React 19', 'Next.js', 'Vue 3', 'Three.js (3D WebGL)', 'Tailwind CSS', 'Vite']
  },
  {
    label: 'Mobile & Offline Systems',
    tags: [
      'React Native 0.86',
      'Expo SDK 57',
      'Android Development',
      'Offline-First Storage',
      'Moodle REST API'
    ]
  },
  {
    label: 'Backend & Cloud',
    tags: [
      'Django',
      'Django REST Framework',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'SQLite',
      'JWT Auth'
    ]
  },
  {
    label: 'DevOps, Testing & Tooling',
    tags: ['Git', 'GitHub', 'Vercel', 'Jest (Unit Testing)', 'Postman', 'Swagger / OpenAPI', 'VS Code']
  }
];

export const education = [
  {
    school: 'CSVTU, Bhilai',
    degree: 'B.Tech — Computer Science & Engineering',
    meta: 'July 2017 – June 2021 · CPI 7.84'
  },
  {
    school: 'Jawahar Navodaya Vidyalaya, Dongargarh',
    degree: 'CBSE 12th',
    meta: 'July 2015 – July 2016 · GPA 7.24'
  }
];

export const certifications = [
  'Microsoft AI Skills Fest (2026)',
  'Google AI Essentials',
  'Google Data Analytics Professional Certificate'
];

export const scores = [
  { label: 'Cognitive Total', value: 78.25 },
  { label: 'Advanced Cognitive', value: 69.91 },
  { label: 'Programming', value: 71.35 }
];
