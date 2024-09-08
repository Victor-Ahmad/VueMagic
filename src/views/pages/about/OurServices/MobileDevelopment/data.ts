import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Project Scope',
    description:
      'Define the key features, platforms (iOS, Android, etc.), and desired user experience.',
 
  },
  {
    title: 'Target Audience',
    description:
      "Identify who will be using the app and their specific needs.",
 
  },
  {
    title: 'Design Assets',
    description:
      "Provide brand guidelines, logos, and any other design elements to maintain brand consistency.",
    
  },
  {
    title: 'Integration Needs',
    description:
      'Specify any required integrations with existing systems or third-party services.',
   
  },
  {
    title: 'Timeline & Budget',
    description:
      'Outline your desired timeline and budget constraints for the project.',
   
  }
]
export const approach: string[] = [
  "Small to Medium Businesses: Looking to establish or enhance their online presence.",
  'E-commerce Stores: Needing a professional, user-friendly site to drive sales.',
  'Startups: Requiring a sleek, modern website to attract investors and customers.',
  'Non-Profits: Seeking an impactful web presence to communicate their mission.',
  'Personal Brands & Influencers: Needing a custom site that reflects their unique personality.'
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
    title: 'Discovery Phase:',
    description:
      'We start by understanding your goals, target users, and key features. This phase includes market research, competitor analysis, and defining the project scope.'
  },
  {
    id: 2,
    title: 'Wireframing & Design:',
    description: `Our design team creates wireframes and visual mockups to ensure the app's flow and aesthetics align with your vision. We iterate based on your feedback to perfect the design.`
  },
  {
    id: 3,
    title: 'Development:',
    description: `For visibility, SEO strategies are employed to improve the client's website's search engine rankings.`
  },
  {
    id: 4,
    title: 'Launch & Support:',
    description: `Digital marketing agencies stay up-to-date with industry trends and algorithm changes.`
  },
  {
    id: 5,
    title: 'Launch & Support:',
    description: `Digital marketing agencies stay up-to-date with industry trends and algorithm changes.`
  }
]

export const pricing: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'Working with Innovacraft was a game-changer for our business. The team truly understood our brand and delivered a website that exceeded our expectations. The process and communication were smooth, and the final product has received nothing but praise from our customers.',
    title: 'Jane Doe, CEO of AmperTND Corp'
  },
  {
    avatar: avatar8,
    description:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    title: 'Louis Ferguson'
  },
  {
    avatar: avatar5,
    description:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    title: 'Jacqueline Miller'
  }
]
