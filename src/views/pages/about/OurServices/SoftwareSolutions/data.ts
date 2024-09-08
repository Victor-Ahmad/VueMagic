import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Project Scope',
    description:
      'A detailed description of the problem you’re looking to solve or the process you wish to improve.',
 
  },
  {
    title: 'Current System Overview',
    description:
      "Documentation of your existing software and workflows, including any pain points.",
 
  },
  {
    title: 'User Requirements',
    description:
      "Insights into who will be using the software and their specific needs.",
    
  },
  {
    title: 'Technology Preferences',
    description:
      'Any preferred programming languages, frameworks, or platforms.',
   
  },
  {
    title: 'Budget & Timeline',
    description:
      'Your budget constraints and the timeframe in which you need the project completed.',
   
  }
]
export const approach: string[] = [
  "Enterprises: Looking to automate complex processes and improve efficiency.",
  'Startups: Needing to develop a new product or platform from scratch.',
  'Retail & E-commerce: Seeking custom inventory management, CRM, or sales tools.',
  'Healthcare Providers: Requiring software that complies with industry regulations and improves patient care.',
  'Education Institutions: Needing custom learning management systems or administrative tools.'
]

type WorkType = {
  id: number
} & ServiceType

export type PricingType = {
  avatar: string
} & PricingPlanType

export const work: WorkType[] = [
  {
    id: 1,
    title: 'Consultation & Planning:',
    description:
      `Initial Meeting: We start with a deep dive into your business challenges, goals, and expectations.

      Feasibility Study: We assess the technical and operational feasibility of the project.

      Detailed Proposal: Based on our findings, we provide a clear proposal outlining the solution, timeline, and costs.`
  },
  {
    id: 2,
    title: 'Design & Prototyping:',
    description: `Conceptual Design: We draft an initial design and architecture that meets your requirements.

    Prototype Development: A working prototype is created to demonstrate key features and gather your feedback.

    Iterative Review: We refine the prototype through continuous collaboration with your team.`
  },
  {
    id: 3,
    title: 'Development & Testing:',
    description: `Full-Scale Development: Our developers build the software according to the agreed-upon design.
    Rigorous Testing: We conduct thorough testing to ensure the software is bug-free and performs well under all conditions.
    User Acceptance Testing (UAT): We work with your team to validate the software’s functionality and user experience.
`
  },
  {
    id: 4,
    title: 'Deployment & Support:',
    description: `Implementation: We deploy the software into your production environment, ensuring a smooth transition.
    Training & Documentation: We provide training sessions and detailed documentation for your team.
    Ongoing Support: After deployment, we offer ongoing support to address any issues and provide updates as necessary.`
  }
]

export const testimonials: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'Working with Innovacraft was a game-changer for our business. The team truly understood our brand and delivered a website that exceeded our expectations. The process and communication were smooth, and the final product has received nothing but praise from our customers.',
    title: 'Jane Doe, CEO of AmperTND Corp'
  },
  {
    avatar: avatar8,
    description:
      'The custom software developed by [Our Company] transformed our operations. It was tailored exactly to our needs and has saved us countless hours. The team was professional, responsive, and a pleasure to work with.',
    title: 'Tim Maker, CTO of Skyline Inc.'
  },
  {
    avatar: avatar5,
    description:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    title: 'Jacqueline Miller'
  }
]
