export const profile = {
  name: "Manav Israni",
  headline: "Software & AI Engineer",
  tagline:
    "I build AI voice agents, multi-agent systems and LLM apps that make it to production, not just to a demo.",
  about:
    "I design and ship AI systems end to end: voice agents that make real calls, multi-agent pipelines for clinical decision support, and retrieval systems that stay grounded. I like owning the whole thing, from architecture to deployment.",
  location: "Melbourne, Australia",
  email: "works.imanav@gmail.com",
  avatar: "/profile.png",
  avatarFallback: "https://avatars.githubusercontent.com/u/87480105?v=4",
  links: {
    github: "https://github.com/manavisrani07",
    linkedin: "https://www.linkedin.com/in/manavisrani",
    medium: "https://medium.com/@manavisrani07",
    substack: "https://substack.com/@manavisrani07",
    scholar: "https://scholar.google.com/citations?user=0eXvlTAAAAAJ&hl=en",
    leetcode: "https://leetcode.com/u/manavisrani07/",
  },
};

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  "AI / ML": [
    "LLMs & Agents",
    "LangChain",
    "LangGraph",
    "AutoGen",
    "Hugging Face",
    "TensorFlow",
    "PyTorch",
    "RAG & Retrieval",
    "Voice AI (Twilio · ElevenLabs · VAD)",
  ],
  "Systems & Cloud": [
    "FastAPI",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "MLflow",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  points: string[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    company: "Atlas Counsel",
    role: "AI & Web Consultant",
    period: "May 2026 – Present",
    location: "Melbourne, Australia · Remote",
    type: "Part-time",
    points: [
      "Advising on and building AI-powered tooling and web systems for a legal consultancy.",
    ],
    tech: ["LLMs", "Web"],
  },
  {
    company: "Square Yards",
    role: "AI/ML Engineer",
    period: "Jun 2025 – Dec 2025",
    location: "Mumbai, India",
    type: "Full-time",
    points: [
      "Built a Voice Agent Studio that turns a plain script into a deployable outbound AI caller in under 10 minutes, with counter-prompt generation, testing and refinement built in. WebSockets at the core, VOIP through Twilio and Ozonetel.",
      "Shipped a multilingual outbound caller on Twilio, Gemini and ElevenLabs that talks to real-estate leads in several Indian languages and gives them personalised suggestions.",
      "Set up structured post-call reports that the ops team used to tune campaigns and follow up on leads.",
    ],
    tech: ["Twilio", "Gemini", "ElevenLabs", "WebSockets", "VAD"],
  },
  {
    company: "Nihin Media K.K.",
    role: "AI Engineer (Intern)",
    period: "Dec 2024 – May 2025",
    location: "Tokyo, Japan · Remote",
    type: "Internship",
    points: [
      "Built a Radiology Assistant: agents that read imaging, symptoms and patient history together, then suggest likely diagnoses with the clinical reasoning spelled out. Grounded in Japanese medical sources, PubMed and PMC.",
      "Cut hallucination in medical agents by grounding every answer in reliable sources with traceable references.",
      "Tuned MedGen's RAG retrieval for medical queries by testing different embedding setups.",
    ],
    tech: ["Multi-agent", "RAG", "PubMed/PMC", "Healthcare AI"],
  },
  {
    company: "DisruptiveNext (Phoenixgen)",
    role: "Generative AI Engineer (Intern)",
    period: "Dec 2024 – Jan 2025",
    location: "Pune, India · Remote",
    type: "Internship",
    points: [
      "Worked on LLM- and agent-based generative AI solutions.",
    ],
    tech: ["LLMs", "AI Agents"],
  },
  {
    company: "C1X Inc.",
    role: "Software Engineer (Intern)",
    period: "Sep 2023 – Jan 2024",
    location: "Chennai, India",
    type: "Internship",
    points: [
      "Built content-based and BERT-based recommendation systems for OrgFarm, covering 1,100+ organic products and 25,000+ users.",
      "Improved recommendation precision with BERT embeddings on AWS, lifting user engagement by 8%.",
    ],
    tech: ["BERT", "AWS", "Recommenders"],
  },
  {
    company: "Capabl (Elite Techno Groups)",
    role: "Data Science Intern",
    period: "Jun 2023 – Jul 2023",
    location: "Bangalore, India · Remote",
    type: "Internship",
    points: [
      "Developed and evaluated 3+ ML models on 50k+ row datasets; preprocessing and feature engineering improved accuracy by up to 15%.",
    ],
    tech: ["Python", "scikit-learn", "pandas"],
  },
];

export const programs = [
  {
    name: "Amazon ML Summer School",
    detail:
      "Selected for Amazon's 4-week ML program: deep learning, PGMs, sequential models, causal inference and RL, taught by Amazon scientists.",
    period: "Jul 2024",
  },
  {
    name: "ACM India Summer School · IIT Gandhinagar",
    detail:
      "Two weeks at IIT Gandhinagar on LLMs: RLHF, in-context learning, CoT, prompt engineering, RAG and responsible AI.",
    period: "Jun – Jul 2024",
  },
  {
    name: "Krypthon Hackathon Winner",
    detail: "Healthcare-domain hackathon winner at VIT Chennai.",
    period: "Mar 2023",
  },
  {
    name: "HackOverflow Hackathon Finalist",
    detail: "Full-stack build, VIT Chennai.",
    period: "Oct 2022",
  },
];

export type Project = {
  name: string;
  repo: string; // owner/name on GitHub
  description: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "LeaseFlow AI",
    repo: "manavisrani07/LeaseFlow-AI",
    description:
      "Reads rental agreements, pulls the structured data out and auto-generates tenant welcome packs. LLMs, FastAPI and Supabase.",
    tags: ["LLM", "FastAPI", "Supabase"],
    featured: true,
  },
  {
    name: "ObjectEraserSD",
    repo: "manavisrani07/ObjectEraserSD",
    description:
      "Removes a chosen object from an image by manipulating Stable Diffusion's attention maps mid-generation. The rest of the scene stays untouched.",
    tags: ["Stable Diffusion", "Attention", "GenAI"],
    featured: true,
  },
  {
    name: "AI Proposal Generator",
    repo: "manavisrani07/ai-proposal-generator",
    description:
      "Agents that draft full business proposals on their own. Built with LLMs and a multi-agent pipeline.",
    tags: ["Agents", "LLM"],
    featured: true,
  },
  {
    name: "LipSync (Wav2Lip)",
    repo: "manavisrani07/LipSync",
    description:
      "Syncs any audio track to video footage using Wav2Lip. Works with partial or continuous facial footage.",
    tags: ["Computer Vision", "Audio"],
    featured: true,
  },
  {
    name: "Vector Engine",
    repo: "manavisrani07/vector_engine",
    description:
      "Semantic search engine combining BERT-style transformers with Faiss for fast similarity search.",
    tags: ["BERT", "Faiss", "Search"],
    featured: true,
  },
  {
    name: "Inventory Demand Forecasting",
    repo: "manavisrani07/Inventory_demand_forecasting",
    description:
      "Demand forecasting and inventory management models for e-commerce product stocking.",
    tags: ["Forecasting", "ML"],
    featured: true,
  },
];

// Repos hidden from the auto-synced GitHub grid (e.g. profile readme, config repos).
export const hiddenRepos: string[] = ["manavisrani07/manavisrani07"];

export const beyond = {
  blurb:
    "When I'm not at a keyboard I'm usually outside: trekking, hiking or camping, ideally somewhere with no phone signal. I play football whenever I get the chance. At work, the things people seem to value me for beyond code are writing clearly, getting along with very different teams across countries, and taking ownership without being asked.",
  softSkills: [
    "Research writing & management",
    "Cross-cultural collaboration (India · Japan · Australia)",
    "Clear technical communication",
    "Ownership & fast iteration",
  ],
  interests: ["Trekking", "Hiking", "Camping", "Nature", "Football"],
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  summary: string;
  doi: string;
  badge?: string;
};

export const publications: Publication[] = [
  {
    title:
      "FasterRes-FPN: A Deep Learning Approach for Microplastic Pollution Surveillance in Water Bodies",
    venue: "Springer LNNS · ICIVC 2025",
    year: "2025",
    authors: "M. Israni, A. Biswas, S. Renuse, V. Premanand",
    summary:
      "Faster R-CNN with a ResNet-50-FPN backbone for spotting microplastics in water. Hit an F1 of 0.9376, ahead of YOLOv8 and YOLOv9 baselines on real-world aquatic data.",
    doi: "https://doi.org/10.1007/978-3-032-10667-4_24",
    badge: "SOTA F1 0.9376",
  },
  {
    title:
      "AutoMed: Multi-Agent AI System for Personalized Medical Knowledge Retrieval and Summarization",
    venue: "IEEE · ICDSAAI 2025",
    year: "2025",
    authors: "M. Israni, S. Renuse",
    summary:
      "A team of agents that refines the query, retrieves articles and curates the answer for biomedical questions. About 4 seconds to first token.",
    doi: "https://doi.org/10.1109/ICDSAAI65575.2025.11011656",
    badge: "Cited by 2",
  },
  {
    title:
      "RCA-MViT: Residual Convolutional Attention Multi-scale Vision Transformer for Dermatological Disease Classification",
    venue: "Springer LNNS · ITAI 2025",
    year: "2025",
    authors: "M. Israni, V. Premanand, S. Renuse",
    summary:
      "ResNet18 crossed with CrossViT for multi-class skin disease classification. 90.5% accuracy with a ROC-AUC around 0.9879.",
    doi: "https://dx.doi.org/10.1007/978-981-96-8687-2_33",
    badge: "ROC-AUC 0.9879",
  },
];

export type Article = {
  title: string;
  url: string;
  date: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    title:
      "Everyone Runs Claude Code on Default Settings. Here's How to Stop.",
    url: "https://manavisrani07.substack.com/p/everyone-runs-claude-code-on-default",
    date: "Jun 2026",
    tags: ["Claude Code", "Substack"],
  },
  {
    title:
      "Anthropic Priced the Danger: What Claude Fable 5 Really Tells Us About AI Safety",
    url: "https://medium.com/@manavisrani07/anthropic-priced-the-danger-what-claude-fable-5-really-tells-us-about-ai-safety-d573e60e5945",
    date: "Jun 2026",
    tags: ["AI Safety", "Anthropic"],
  },
  {
    title: "How 250 Bad Files Can Hack a Billion-Parameter AI",
    url: "https://medium.com/@manavisrani07/how-250-bad-files-can-hack-a-billion-parameter-ai-40936be729fc",
    date: "Oct 2025",
    tags: ["LLM Security", "Data Poisoning"],
  },
  {
    title:
      "The Secret to Reliable Voice Agents: Treat Prompts Like State Machines",
    url: "https://medium.com/@manavisrani07/the-secret-to-reliable-voice-agents-treat-prompts-like-state-machines-2323a616affa",
    date: "Oct 2025",
    tags: ["Voice AI", "Prompt Engineering"],
  },
  {
    title:
      "BAML: The Structured-Output Power Tool Your LLM Workflow Has Been Missing",
    url: "https://medium.com/@manavisrani07/baml-the-structured-output-power-tool-your-llm-workflow-has-been-missing-f326046d019b",
    date: "Jun 2025",
    tags: ["LLM Tooling", "BAML"],
  },
  {
    title:
      "Building a Graph-Based Movie Recommendation System Using Neo4j and Python",
    url: "https://medium.com/@manavisrani07/building-a-graph-based-movie-recommendation-system-using-neo4j-and-python-d823b54213b2",
    date: "Nov 2024",
    tags: ["Neo4j", "RecSys"],
  },
  {
    title: "An Introduction to Generative AI: Unleashing Machine Creativity",
    url: "https://medium.com/@manavisrani07/an-introduction-to-generative-ai-unleashing-machine-creativity-3cba3abe369d",
    date: "Oct 2024",
    tags: ["GenAI"],
  },
  {
    title:
      "Mastering Image Editing with AI: Object Eraser through Attention Control in Stable Diffusion",
    url: "https://medium.com/p/8df8bcade490",
    date: "Sep 2024",
    tags: ["Stable Diffusion"],
  },
  {
    title: "Custom Hassle-Free Chatbot Creation: A Quick & Easy Guide!",
    url: "https://medium.com/p/c796b0ed3338",
    date: "Sep 2024",
    tags: ["Chatbots", "NLP"],
  },
  {
    title: "Unlocking Lip-Syncing Magic with Wav2Lip: A Step-by-Step Guide",
    url: "https://medium.com/p/7d92678a6712",
    date: "Aug 2024",
    tags: ["Deepfakes", "Wav2Lip"],
  },
];

export const education = [
  {
    school: "The University of Melbourne",
    degree: "Master of Data Science",
    period: "2026 – 2028",
    detail: "Melbourne, Australia",
  },
  {
    school: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2021 – 2025",
    detail: "CGPA 8.92 / 10",
  },
];

export const stats = [
  { value: "3", label: "Peer-reviewed publications" },
  { value: "20+", label: "Open-source projects" },
  { value: "9", label: "Technical articles" },
  { value: "4+", label: "AI roles across 3 countries" },
];
