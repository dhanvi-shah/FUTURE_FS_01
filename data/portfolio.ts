export const siteConfig = {
  name: "Dhanvi Shah",
  title: "Dhanvi Shah | Software Engineer & AI Developer",
  description:
    "Portfolio of Dhanvi Shah — Software Engineer, AI Developer, and Full Stack Builder crafting intelligent software that solves real-world problems.",
  url: "https://dhanvishah.dev",
  email: "dhanvijigneshshah@gmail.com",
  phone: "+971 50 482 5375",
  linkedin: "https://linkedin.com/in/dhanvi-shah-3b324a302/",
  github: "https://github.com/dhanvi-shah",
  roles: [
    "Software Engineer",
    "AI Developer",
    "Full Stack Builder",
    "Entrepreneur",
  ],
};

export const aboutText = `I am an aspiring software developer passionate about AI, full-stack development, and solving meaningful real-world problems. I enjoy transforming ideas into scalable products and continuously learning new technologies. My work combines technical skills with creativity, sustainability, and innovation.`;

export const aboutHighlights = [
  "AI & Machine Learning",
  "Full-Stack Development",
  "Sustainability Tech",
  "Product Innovation",
  "Scalable Systems",
  "Creative Problem Solving",
];

export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
    color: "emerald",
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    color: "cyan",
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "FastAPI"],
    color: "emerald",
  },
  {
    title: "Cloud & Tools",
    icon: "Cloud",
    skills: ["Git", "CI/CD", "Google Cloud", "Prompt Engineering", "Generative AI"],
    color: "cyan",
  },
];

export type ProjectCategory = "All" | "AI" | "Full Stack" | "Enterprise";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  features: string[];
  impact?: string;
  technologies: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "focusflow",
    title: "FocusFlow",
    description: "AI-powered habit optimization platform.",
    category: "AI",
    features: [
      "Behavioral analytics",
      "Study prediction",
      "Smart notifications",
      "Session tracking",
      "Pattern recognition",
    ],
    impact: "Improved productivity consistency by approximately 60%.",
    technologies: ["Python", "FastAPI", "AI", "React"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
    icon: "Brain",
  },
  {
    id: "ecosync",
    title: "EcoSync UAE",
    description: "Full-stack AI recycling platform.",
    category: "Full Stack",
    features: [
      "AI waste detection",
      "Image recognition",
      "URL-based classification",
      "Eco Score",
      "Sustainable recommendations",
      "Geospatial mapping",
      "Gamification",
      "Smart logistics",
    ],
    impact: "Reduced logistical inefficiencies by approximately 40%.",
    technologies: ["Python", "FastAPI", "React", "AI", "GCP"],
    gradient: "from-cyan-500/20 to-emerald-500/20",
    icon: "Leaf",
  },
  {
    id: "circuflow",
    title: "CircuFlow ERP",
    description: "ERP built using Odoo for recycling management.",
    category: "Enterprise",
    features: [
      "Pickup scheduling",
      "Warehouse management",
      "Buyer/Seller marketplace",
      "Custom workflows",
      "Recycling automation",
    ],
    technologies: ["Odoo", "Python", "PostgreSQL"],
    gradient: "from-emerald-500/20 to-white/10",
    icon: "Recycle",
  },
];

export const experiences = [
  {
    id: "future-interns",
    company: "Future Interns",
    role: "Intern",
    period: "2025 – Present",
    location: "Remote",
    description:
      "Software development internship focused on building practical applications and gaining industry experience.",
    achievements: [
      "Contributing to real-world software projects and collaborative development",
      "Applying modern web technologies and engineering best practices",
    ],
  },
  {
    id: "odoo-bootcamp",
    company: "Odoo Bootcamp",
    role: "Buildathon Participant",
    period: "2025",
    location: "Dubai, UAE",
    description:
      "Participated in the Odoo Buildathon organized by ACM BITS Pilani Dubai and Microsoft Tech Club.",
    achievements: [
      "Built CircuFlow ERP and received Most Promising Idea recognition",
      "Developed custom Odoo models, workflows, and marketplace features",
      "Designed a circular economy platform for waste collection and recycling",
    ],
  },
  {
    id: "green-eco-tech",
    company: "Green Eco Tech",
    role: "Co-Founder",
    period: "2023 – Present",
    location: "Remote",
    highlight: true,
    description:
      "Led environmental sustainability initiatives while promoting eco-conscious practices across communities.",
    achievements: [
      "Collected 3,000+ kg paper from 200+ households",
      "Collected 40 kg fabric through community drives",
      "Collected 50 kg plastic while promoting sustainability",
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    role: "Intern",
    period: "Apr 2023 – May 2023",
    location: "Remote",
    description: "Market research and consumer insights for client deliverables.",
    achievements: [
      "Conducted market research analysis",
      "Built data visualizations for stakeholders",
      "Delivered consumer insights narratives",
    ],
  },
  {
    id: "tata",
    company: "Tata Group",
    role: "Intern",
    period: "Apr 2023 – May 2023",
    location: "Remote",
    description: "Data analytics and customer insights using Tableau.",
    achievements: [
      "Created Tableau dashboards for customer analytics",
      "Identified product trends and patterns",
      "Improved marketing effectiveness by 15%",
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant",
    role: "Intern",
    period: "Dec 2022 – Mar 2023",
    location: "Remote",
    description: "Project management tool development using Agile methodologies.",
    achievements: [
      "Applied Agile and Scrum methodologies",
      "Created user stories and assigned Scrum roles",
      "Collaborated cross-functionally on PM tool",
    ],
  },
];

export const publications = [
  {
    title: "AI in Addressing Space Pollution",
    description:
      "Published research exploring the role of AI in tracking and mitigating orbital debris to support sustainable space exploration.",
    year: "2024",
    url: "https://www.ijnrd.org/viewpaperforall.php?paper=IJNRD2403351",
    journal: "International Journal of Novel Research and Development",
    pages: "d399–d403",
  },
];

export const education = {
  institution: "Birla Institute of Technology and Science, Pilani Dubai",
  degree: "Bachelor of Engineering",
  field: "Computer Science",
  period: "2025 – 2029",
};

export const certifications = [
  { name: "AI for Everyone", issuer: "DeepLearning.AI" },
  { name: "CS50P", issuer: "HarvardX" },
  { name: "Python Data Structures", issuer: "MichiganX" },
  { name: "Understanding the World Through Data", issuer: "MITx" },
  { name: "Abu Dhabi University Summer Program", issuer: "Abu Dhabi University" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Blogs", href: "#blog" },
];
