import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "January 2024 — Present",
    title: "Software Engineer",
    company: "Featherwebs",
    companyUrl: "https://www.featherwebs.com",
    description: `Developed and maintained the web applications and services that power the company's products and services.`,
    technologies: [
      "Angular",
      "Laravel",
      "PHP",
      "MySQL",
      "FilamentCMS"
    ],
    logo: "/logos/featherwebs.png",
  },
  {
    dates: "July 2023 — January 2024",
    title: "Software Engineer",
    company: "Supreme IT Solutions",
    companyUrl: "https://www.supremeitsolutions.com",
    description:
      `Contibuted to multiple projects on both client and server side.Collaborated with UI/UX designers to ensure a user-friendly
      interface and seamless user experience.Lead the training sessions for interns`,
    technologies: [
      "React JS",
      "Node JS",
      "PostgreSQL",
      "Laravel",
      "PHP",
      "MySQL",
    ],
  },
  {
    dates: "July 2022 — July 2023",
    title: "Backend Engineer",
    company: "SkillSewa Pvt. Ltd.",
    companyUrl: "https://www.skillsewa.com",
    description:
      `Developed REST API services to facilitate seamless communication between
       different components of the system,enhancing the efficiency and scalability
      of data exchange`,
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
    logo: "/logos/skillsewa.png",
  },
];
