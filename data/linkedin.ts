/** Additional content sourced from LinkedIn — additive only, does not modify core portfolio data */

export const additionalNavLinks: { label: string; href: string }[] = [];

export const leadershipRoles = [
  {
    id: "bits-alumni",
    title: "Campus Relations Executive",
    organization: "Alumni Relations Division — BITS Pilani, Dubai Campus",
    period: "Oct 2025 – Present",
    location: "Dubai, UAE",
    highlights: [
      "Engage with alumni to strengthen connections between students and the global BITS network",
      "Contribute to BITS ECHO alumni magazine through interviews and content curation",
      "Coordinate outreach initiatives highlighting alumni achievements",
      "Support networking, mentorship, and community building within the BITS ecosystem",
    ],
  },
  {
    id: "house-captain",
    title: "Spring House Captain",
    organization: "Abu Dhabi Indian School",
    period: "Apr 2024 – May 2025",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Led and coordinated a house of 500+ students across academic, cultural, and sports activities",
      "Organized inter-house events including CodeQuest, Sports Day, Debate, and Public Speaking",
      "Led the house to Overall Championship for two consecutive years",
      "Developed centralized communication systems to streamline coordination",
    ],
  },
  {
    id: "house-vice-captain",
    title: "Spring House Vice Captain",
    organization: "Abu Dhabi Indian School",
    period: "May 2023 – Apr 2024",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Supported house leadership in coordinating student activities and competitions",
    ],
  },
  {
    id: "math-club-president",
    title: "Vice President of Math Club",
    organization: "Abu Dhabi Indian School",
    period: "Sep 2022 – Apr 2023",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Led mathematics club initiatives and academic enrichment activities",
    ],
  },
  {
    id: "math-club-secretary",
    title: "Secretary of Math Club",
    organization: "Abu Dhabi Indian School",
    period: "Sep 2021 – Apr 2022",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Managed club operations and supported math-focused student programs",
    ],
  },
];

export const volunteerWork = [
  {
    organization: "Emirates Environmental Group",
    role: "Volunteer",
    since: "Jul 2023",
    description: "Contributing to environmental conservation and sustainability initiatives in the UAE.",
  },
  {
    organization: "Hidden Voices Charitable Trust",
    role: "Volunteer",
    since: "Apr 2023",
    description:
      "Supporting visually impaired individuals through audiobook recording, quality checking, and community outreach.",
  },
  {
    organization: "Operation Smile",
    role: "Volunteer",
    since: "Jul 2023",
    description: "Supporting initiatives that provide cleft care and transform lives globally.",
  },
  {
    organization: "RECAPP",
    role: "Volunteer",
    since: "Apr 2023",
    description: "Promoting recycling awareness and sustainable waste management practices.",
  },
  {
    organization: "Vidyadaan",
    role: "Volunteer",
    since: "Mar 2023",
    description: "Contributing to education-focused community service and outreach programs.",
  },
];

export const honorsAndAwards = [
  {
    title: "IOF Gold Medalist — Mathematics",
    issuer: "International Olympiad Foundation",
    date: "Jan 2024",
    detail: "3rd Zonal and National Rank, 8th International Rank in IFMO 2023–2024.",
  },
  {
    title: "IOF Silver Medalist — Computer Science",
    issuer: "International Olympiad Foundation",
    date: "Jan 2024",
    detail: "4th Zonal and National Rank, 9th International Rank in IFCO 2023–2024.",
  },
  {
    title: "Shastra Prathiba Contest",
    issuer: "Science India Forum",
    date: "Mar 2023",
    detail:
      "Top 10 student from UAE; felicitated at BITS Pilani Dubai and met Mr. Nambi Narayan, former ISRO director.",
  },
  {
    title: "IOF Gold Medalist — Mathematics",
    issuer: "International Olympiad Foundation",
    date: "Jan 2022",
    detail: "1st Zonal and National Rank, 5th International Rank in IFMO 2021–2022.",
  },
  {
    title: "IOF Silver Medalist — Science",
    issuer: "International Olympiad Foundation",
    date: "Jan 2022",
    detail: "4th Zonal and National Rank, 8th International Rank in IFSO 2021–2022.",
  },
  {
    title: "9th International Rank — AI Olympiad",
    issuer: "School Connect Online",
    date: "Dec 2021",
    detail: "Outstanding performance in the International Artificial Intelligence Olympiad 2021–2022.",
  },
  {
    title: "1st National Rank — AI Olympiad",
    issuer: "School Connect Online",
    date: "Mar 2021",
    detail: "Certificate of Excellence for 1st National Rank in AI Olympiad 2020–2021.",
  },
];

export const languages = [
  { name: "English", level: "Full professional proficiency" },
  { name: "Hindi", level: "Native or bilingual proficiency" },
  { name: "Gujarati", level: "Native or bilingual proficiency" },
  { name: "French", level: "Elementary proficiency" },
  { name: "Arabic", level: "Elementary proficiency" },
];

export const additionalCertifications = [
  {
    name: "Young Member of the New York Academy of Sciences",
    issuer: "The New York Academy of Sciences",
    year: "2023",
    url: "https://credly.com/badges/f48917e3-92d3-4a00-bfdd-7cc10ee78b2f",
  },
  {
    name: "Climate Change: Understand, Reflect, Empathize, and Act",
    issuer: "UNESCO MGIEP",
    year: "2023",
  },
  {
    name: "World Rescue: Decision Making towards Sustainability",
    issuer: "UNESCO MGIEP",
    year: "2022",
  },
];

export interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  date?: string;
  tags: string[];
  url: string;
  type: "shared" | "achievement" | "community";
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "capgemini-connected",
    title: "ConnectED Session — Capgemini & AI at Scale",
    excerpt:
      "Attended the ConnectED session by Ramila Vempati from Capgemini — an eye-opening talk on how AI is real work at global consulting firms, and how data and security foundations matter as much as the models on top. The campus-to-corporate jump is a steep ramp, but people have done it, and so can you.",
    tags: ["AI", "Capgemini", "BITS Pilani", "Career Growth"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_bitspilani-bpdc-bitspilanidubaicampus-activity-7457874645996924928-wTd7",
    type: "shared",
  },
  {
    id: "circuflow-buildathon",
    title: "CircuFlow ERP — Most Promising Idea at Odoo Buildathon",
    excerpt:
      "Built CircuFlow ERP as first-year students at the Odoo Buildathon and received the 'Most Promising Idea' recognition. A circular economy platform that schedules waste pickups, tracks recyclables, matches agency demand with supply, and extends into a marketplace — all built on Odoo with custom models and workflows.",
    tags: ["Odoo", "ERP", "Sustainability", "Buildathon"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_odoo-buildathon-erp-activity-7451203510274265089-_Q_U",
    type: "achievement",
  },
  {
    id: "greenecotech-journey",
    title: "The GreenEcoTech Journey — Gratitude & Impact",
    excerpt:
      "Reflecting on co-founding GreenEcoTech with Charmi Shah — a non-profit advancing UN SDGs through education and community engagement. We've collected 3,000 kg of paper, 50 kg of plastic, and 30 kg of cloth from 200+ households, with heartfelt gratitude to family, volunteers, and collaborators who made it possible.",
    tags: ["GreenEcoTech", "Sustainability", "SDGs", "Non-Profit"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_environment-environmentalissues-green-activity-7243625683875168256-ZrTb",
    type: "community",
  },
  {
    id: "hidden-voices",
    title: "Volunteering with Hidden Voices Charitable Trust",
    excerpt:
      "Over a year volunteering with Hidden Voices — empowering visually impaired individuals through multilingual audiobooks. An incredible experience that instilled life skills and a renewed passion for making a difference every day.",
    tags: ["Volunteering", "Hidden Voices", "Community Service"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_visuallychallenged-visuallyimpaired-hiddenvoices-activity-7242222357073793028-DFys",
    type: "community",
  },
  {
    id: "adu-summer",
    title: "Abu Dhabi University Summer Training Program",
    excerpt:
      "Completed an enriching summer training at Abu Dhabi University led by Dr. Hamad Odhabi, learning Python and Java alongside AI applications, study skills, and productivity tools for university students.",
    tags: ["Abu Dhabi University", "Python", "Java", "AI"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_certificateofcompletion-activity-7231329276149587969-c_fl",
    type: "achievement",
  },
  {
    id: "nyas-member",
    title: "Young Member — New York Academy of Sciences",
    excerpt:
      "Honored to be a Young Member of the New York Academy of Sciences, connecting with a global community of scientists and science enthusiasts to advance research, education, and policy.",
    tags: ["NYAS", "Science", "Certification"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_young-member-of-the-new-york-academy-of-sciences-activity-7225042204702969856-j7r_",
    type: "achievement",
  },
  {
    id: "athletics",
    title: "My Athletic Journey — High Jump & UAE School Games",
    excerpt:
      "From joining a sports club at age 8 to excelling in high jump at inter-house, interschool, and cluster competitions — including UAE School Games and ADEK Cup. A journey shaped by coach Mrs. Sanju and unwavering family support.",
    tags: ["Athletics", "Sports", "High Jump"],
    url: "https://www.linkedin.com/posts/dhanvi-shah-3b324a302_potential-capability-athletics-activity-7205599370044473344-1A7e",
    type: "shared",
  },
];
