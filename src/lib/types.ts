export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  headline: string;
  img?:string;
  role: string;
  period: string;
  tags: string[];
  summary: string;
  highlights: string[];
  href?: string;
};

export type Job = {
  company: string;
  context?: string;
  role: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  chips: { label: string; solid?: boolean }[];
};

export type Education = {
  degree: string;
  org: string;
  year: string;
};

export type Certificate = {
  num: string;
  title: string;
  source: string;
};
