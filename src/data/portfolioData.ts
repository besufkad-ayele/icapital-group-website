import PortfolioImg1 from "@/assets/portfolio-img-1.png";
import PortfolioImg2 from "@/assets/portfolio-img-2.png";
import PortfolioImg3 from "@/assets/portfolio-img-3.png";
import PortfolioImg4 from "@/assets/portfolio-img-4.png";
import PortfolioImg5 from "@/assets/portfolio-img-5.png";
import PortfolioImg6 from "@/assets/portfolio-img-6.png";

import PortfolioLogo1 from "@/assets/portfolio-logo-1.png";
import PortfolioLogo2 from "@/assets/portfolio-logo-2.png";
import PortfolioLogo3 from "@/assets/portfolio-logo-3.png";
import PortfolioLogo4 from "@/assets/portfolio-logo-4.png";
import PortfolioLogo5 from "@/assets/portfolio-logo-5.png";
import PortfolioLogo6 from "@/assets/portfolio-logo-6.png";

import { StaticImageData } from "next/image";

export interface PortfolioItem {
  id: number;
  title: string;
  logoImg: StaticImageData;
  cardImg: StaticImageData;
  slug: string;
  client: {
    name: string;
    description: string;
    website: string;
  };
  problem: string;
  problemPoints: string[];
  solution: string;
  solutionPoints: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Digital Literacy Assessment",
    logoImg: PortfolioLogo1,
    cardImg: PortfolioImg1,
    slug: "digital-literacy-assessment",
    client: {
      name: "GIZ Ethiopia",
      description:
        "GIZ Ethiopia supports sustainable development initiatives across various sectors, including education, governance, and economic development.",
      website: "https://www.giz.de",
    },
    problem:
      "Many rural areas in Ethiopia face challenges in digital literacy, hindering access to online services, education, and economic opportunities.",
    problemPoints: [
      "Limited access to digital devices and internet connectivity.",
      "Lack of awareness and basic computer skills among rural populations.",
      "Insufficient training resources for educators and community leaders.",
      "Gender disparities in digital literacy rates.",
    ],
    solution:
      "A comprehensive digital literacy assessment was conducted to identify gaps and develop targeted training programs.",
    solutionPoints: [
      "Surveyed over 2,000 participants across 10 rural regions.",
      "Developed digital literacy modules tailored to local languages and cultural contexts.",
      "Trained 150 community facilitators to deliver ongoing digital skills workshops.",
      "Collaborated with telecom providers to improve connectivity in target areas.",
    ],
  },
  {
    id: 2,
    title: "Job Description, Job Evaluation, and Competency Assessment",
    logoImg: PortfolioLogo2,
    cardImg: PortfolioImg2,
    slug: "job-description-job-evaluation-and-competency-assessment",
    client: {
      name: "GIZ Ethiopia",
      description:
        "GIZ Ethiopia aims to strengthen institutional capacity and improve human resources practices in public and private sectors.",
      website: "https://www.giz.de",
    },
    problem:
      "Government agencies in Ethiopia faced inconsistencies in job roles, leading to confusion in responsibilities and performance evaluations.",
    problemPoints: [
      "Outdated job descriptions lacking clear competencies and deliverables.",
      "Inconsistent job evaluation criteria across departments.",
      "Challenges in aligning individual roles with organizational objectives.",
      "Limited understanding of competency-based assessments among HR personnel.",
    ],
    solution:
      "A structured approach was implemented to revise job descriptions, introduce competency frameworks, and standardize evaluations.",
    solutionPoints: [
      "Reviewed and updated 300+ job descriptions across various ministries.",
      "Developed a competency framework aligned with international standards.",
      "Conducted workshops for 50 HR managers to ensure effective implementation.",
      "Integrated the new system into existing HR software for seamless evaluations.",
    ],
  },
  {
    id: 3,
    title: "Organizational Transformation",
    logoImg: PortfolioLogo3,
    cardImg: PortfolioImg3,
    slug: "organizational-transformation",
    client: {
      name: "GIZ Ethiopia",
      description:
        "GIZ Ethiopia facilitates projects that drive organizational efficiency, fostering adaptability to changing socio-economic conditions.",
      website: "https://www.giz.de",
    },
    problem:
      "Inefficient processes and siloed departments hindered collaboration and service delivery within targeted governmental institutions.",
    problemPoints: [
      "Fragmented communication between departments.",
      "Redundant processes causing delays in decision-making.",
      "Resistance to change from long-standing staff members.",
      "Limited use of digital tools for internal communication.",
    ],
    solution:
      "A holistic transformation strategy was executed to enhance collaboration, streamline operations, and foster a culture of continuous improvement.",
    solutionPoints: [
      "Mapped and optimized key business processes to reduce redundancies.",
      "Implemented digital collaboration platforms for real-time communication.",
      "Held change management sessions to ease the transition for staff.",
      "Established KPIs to monitor and sustain organizational improvements.",
    ],
  },
  {
    id: 4,
    title: "Strategy and Organizational Transformation",
    logoImg: PortfolioLogo4,
    cardImg: PortfolioImg4,
    slug: "strategy-and-organizational-transformation",
    client: {
      name: "GIZ Ethiopia",
      description:
        "Focused on enhancing institutional capacities, GIZ Ethiopia supports long-term strategies for effective governance and development.",
      website: "https://www.giz.de",
    },
    problem:
      "The absence of a clear long-term strategy led to misaligned priorities and inefficient resource allocation within partner organizations.",
    problemPoints: [
      "Lack of a unified vision and mission statement.",
      "Disjointed planning processes across departments.",
      "Limited stakeholder engagement during strategic planning.",
      "Insufficient data to inform decision-making.",
    ],
    solution:
      "A participatory strategic planning process was launched, ensuring alignment between organizational goals and operational plans.",
    solutionPoints: [
      "Conducted strategic workshops involving 200+ stakeholders.",
      "Developed a 5-year strategic roadmap with clear milestones.",
      "Established data-driven decision-making protocols.",
      "Implemented quarterly review sessions to track progress and adjust plans.",
    ],
  },
  {
    id: 5,
    title: "Structured On-the-Job Training Implementation",
    logoImg: PortfolioLogo5,
    cardImg: PortfolioImg5,
    slug: "structured-on-the-job-training-implementation",
    client: {
      name: "GIZ Ethiopia",
      description:
        "GIZ Ethiopia enhances workforce skills through innovative training solutions tailored to the local context.",
      website: "https://www.giz.de",
    },
    problem:
      "Employees in key sectors lacked practical skills, impacting productivity and service delivery.",
    problemPoints: [
      "Existing training programs were theoretical with minimal hands-on experience.",
      "Limited access to updated learning materials.",
      "Low employee engagement in traditional training sessions.",
      "No standardized approach to assess training effectiveness.",
    ],
    solution:
      "A structured on-the-job training program was developed to provide practical, work-based learning experiences.",
    solutionPoints: [
      "Designed customized training modules with industry experts.",
      "Introduced mentorship programs pairing trainees with senior staff.",
      "Deployed digital platforms for tracking training progress.",
      "Achieved a 30% increase in productivity metrics post-training.",
    ],
  },
  {
    id: 6,
    title: "Organizational Training Needs Assessment",
    logoImg: PortfolioLogo6,
    cardImg: PortfolioImg6,
    slug: "organizational-training-need-assessment",
    client: {
      name: "GIZ Ethiopia",
      description:
        "Committed to capacity building, GIZ Ethiopia conducts comprehensive needs assessments to tailor impactful training interventions.",
      website: "https://www.giz.de",
    },
    problem:
      "A gap between existing employee competencies and organizational needs resulted in suboptimal performance.",
    problemPoints: [
      "No recent assessment of workforce skill levels.",
      "Mismatched training programs failing to address key competencies.",
      "Resource allocation for training was not data-driven.",
      "Low post-training application of acquired skills.",
    ],
    solution:
      "An extensive training needs assessment was performed, forming the foundation for targeted skill development programs.",
    solutionPoints: [
      "Conducted surveys and interviews with over 500 employees.",
      "Analyzed organizational goals to identify priority skill areas.",
      "Developed a comprehensive training plan aligned with identified gaps.",
      "Ensured 80% post-training application rate through follow-up sessions.",
    ],
  },
];

export function getPortfolioItemBySlug(
  slug: string,
): PortfolioItem | undefined {
  return portfolioData.find((item) => item.slug === slug);
}
