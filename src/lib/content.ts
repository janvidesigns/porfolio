import type {
  CaseStudy,
  Certificate,
  ContactLink,
  Education,
  Job,
  SkillGroup,
} from "./types";

export const nameMeaning = {
  word: "Janvi",
  meaning: "River",
  script: "जानवी",
  description:
    '"Janvi" means river in Sanskrit — flowing, adaptive, and receptive, like water finding its path.',
};

export const site = {
  name: "Janvi Bahira",
  shortName: "Janvi",
  role: "UI / UX Designer",
  headline: "UI/UX Product Designer.",
  subheadline: "Helping teams ship thoughtful product, web, and mobile experiences.",
  tagline:
    "I turn user research into usable, end-to-end product experiences — from first sketch to high-fidelity prototype and design systems that scale.",
  email: "janvibahira@gmail.com",
  behance: "https://behance.net/janvibahira",
  phone: "+91 91671 99633",
  location: "Mumbai, India",
  footerNote: "Designed in Mumbai. Fueled by good type, Figma, and user interviews.",
};

export const aboutParagraphs = [
  "I'm a UI/UX designer focused on product, web, and mobile — from wireframes and prototypes to design systems that scale with the business.",
  "At Navyh Ventures I designed a brand POS system across two phases in Figma for live products including Skylld and NimbuNexus. Before that, I led UX for Sport X's turf-booking app — generating 60k+ interest and a booking flow that scored 50% NPS in testing.",
  "I've also shipped mobile-first redesigns and 80+ component design systems for Freelancers Academy and Shoella, collaborating closely with PMs and engineers in agile teams.",
  "I enjoy working with positive, curious teams to design experiences that are clear, usable, and delightful.",
];

export const manifesto =
  "From user research and wireframes to scalable prototypes and design systems, I help product teams succeed.";

export const featuredWork = [
  { slug: "navyh-ventures", label: "Navyh Ventures" },
  { slug: "sport-x", label: "Sport X" },
  { slug: "freelancers-academy", label: "Freelancers Academy" },
];

export const nav = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const contactLinks: ContactLink[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Folio", value: "behance.net/janvibahira", href: site.behance },
  { label: "Phone", value: site.phone },
  { label: "Based", value: site.location },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "navyh-ventures",
    title: "Navyh Ventures",
    subtitle: "Brand POS · Skylld & NimbuNexus",
    headline:
      "Designing a two-phase POS experience for in-house retail brands.",
    role: "UX Designer",
    period: "Feb 2024 — Aug 2025",
    tags: ["POS", "Design systems", "Responsive", "Figma"],
    summary:
      "As UX designer, I built a brand POS system across two phases in Figma — iterating from user feedback and usability testing, implementing responsive patterns, and partnering with dev and product on requirements using established design systems.",
    highlights: [
      "POS system designed across two phases, slated for production launch",
      "Responsive design for seamless use across screen sizes",
      "Continuous refinement from user feedback and usability testing",
      "Aligned with developers and PMs across Skylld and NimbuNexus",
    ],
    href: site.behance,
  },
  // {
  //   slug: "sport-x",
  //   title: "Sport X",
  //   img:"",
  //   subtitle: "Turf booking mobile app",
  //   headline:
  //     "End-to-end mobile flows that drove 60k+ interest and 50% NPS.",
  //   role: "UX Designer",
  //   period: "Aug 2023 — Nov 2023",
  //   tags: ["Mobile", "Figma", "User testing", "Agile"],
  //   summary:
  //     "I initiated and designed an online turf-booking product in Figma — sketching, wireframing, prototyping, and user testing the full booking flow while managing delivery in an agile framework.",
  //   highlights: [
  //     "Generated 60k+ users' interest for the online turf-booking product",
  //     "Booking flow scored 50% NPS in user testing",
  //     "Delivered wireframes, prototypes, and iterative testing in agile sprints",
  //   ],
  //   href: site.behance,
  // },
  {
    slug: "freelancers-academy",
    title: "Freelancers Academy",
    subtitle: "Website redesign & design system",
    img:"/case-img/frelancer.png",
    headline:
      "Mobile-first redesign and an 80+ element system for a Gen-Z audience.",
    role: "UX Designer · Intern",
    period: "Oct 2022 — Mar 2023",
    tags: ["Web", "Design system", "Mobile-first", "Branding"],
    summary:
      "I redesigned the website for mobile with a modern aesthetic across 2+ rounds of sketching, wireframing, and prototyping — plus an expandable design system aligned to a new brand guide.",
    highlights: [
      "23% increase in design volume after mobile redesign",
      "22% improved retention via clearer product-customization hierarchy",
      "80+ element design system aligned to new brand guide",
      "Delivered with PM and front-end in under 4 months",
    ],
    href: site.behance,
  },
  {
    slug: "shoella",
    title: "Shoella",
    subtitle: "Customized products e-commerce",
    img:"/case-img/shoella.png",
    headline:
      "E-commerce UX with a “test habit” feature and a scalable Figma system.",
    role: "UX Designer · Intern",
    period: "Oct 2022 — Mar 2023",
    tags: ["Web", "Prototyping", "Figma", "User testing"],
    summary:
      "Designed the website end-to-end across 3+ iterations of wireframing, prototyping, and user testing — including a tailored feature for customers buying customized products.",
    highlights: [
      "20% improved user satisfaction with “test habit” feature",
      "16% faster design speed via expandable Figma design system",
      "3+ rounds of wireframing, prototyping, and user testing",
    ],
    href: site.behance,
  },
];

export const jobs: Job[] = [
  {
    company: "Stew Digital Solutions",
    role: "UI/UX Designer",
    period: "Mar 2026 — Present",
    bullets: [
      "Designing responsive websites end-to-end — from wireframes to high-fidelity prototypes — for client brands.",
    ],
  },
  {
    company: "Navyh Ventures",
    context: "live product",
    role: "UX Designer",
    period: "Feb 2024 — Aug 2025",
    bullets: [
      "Designing a brand POS system across two phases in Figma, slated for production launch.",
      "Iterate on designs from user feedback and usability testing.",
      "Partnered with developers and managers on requirements and design systems.",
    ],
  },
  {
    company: "Sport X",
    context: "turf booking app",
    role: "UX Designer",
    period: "Aug 2023 — Nov 2023",
    bullets: [
      "Initiated an online turf-booking product that generated 60k+ users' interest.",
      "Designed a turf-booking flow scoring 50% NPS in Figma.",
    ],
  },
  {
    company: "Freelancers Academy",
    role: "UX Designer · Intern",
    period: "Oct 2022 — Mar 2023",
    bullets: [
      "Increased design volume 23% with mobile-first redesign and modern branding.",
      "Improved retention 22% through stronger product-customization hierarchy.",
    ],
  },
  {
    company: "Shoella",
    role: "UX Designer · Intern",
    period: "Oct 2022 — Mar 2023",
    bullets: [
      "Designed website end-to-end across 3+ iterations.",
      "Improved user satisfaction 20% with customized “test habit” feature.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Design",
    chips: [
      { label: "Design Systems" },
      { label: "Wireframing" },
      { label: "Prototyping" },
      { label: "UX Research" },
      { label: "Information Architecture" },
      { label: "Visual Design" },
      { label: "Mobile & Web" },
    ],
  },
  {
    title: "Tools",
    chips: [
      { label: "Figma", solid: true },
      { label: "InVision", solid: true },
    ],
  },
  {
    title: "AI Tools",
    chips: [
      { label: "Figma AI" },
      { label: "Claude" },
      { label: "Uizard" },
      { label: "Midjourney" },
      { label: "ChatGPT" },
      { label: "v0" },
    ],
  },
  {
    title: "Front End",
    chips: [{ label: "HTML" }, { label: "CSS" }],
  },
];

export const education: Education[] = [
  {
    degree: "BSc, Computer Science",
    org: "University of Mumbai",
    year: "2019 — 2022",
  },
];

export const certificates: Certificate[] = [
  {
    num: "01",
    title: "UI/UX Design Certification",
    source: "Freelancers Academy",
  },
  {
    num: "02",
    title: "Visual Elements of User Interface",
    source: "Coursera",
  },
  {
    num: "03",
    title: "UX Design Fundamentals",
    source: "Coursera",
  },
];
