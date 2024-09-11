import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Brand Guidelines',
    description:
      'Logo, color scheme, fonts, and any existing branding elements.',
 
  },
  {
    title: 'Content Outline',
    description:
      "A rough draft or detailed outline of the pages you need (e.g., Home, About Us, Services, Contact).",
 
  },
  {
    title: 'Target Audience',
    description:
      "Information about your target demographic, including age, preferences, and user behavior.",
    
  },
  {
    title: 'Competitor Analysis',
    description:
      ' Any websites you admire or consider competitors to help us understand your vision.',
   
  },
  {
    title: 'Functionality Requirements',
    description:
      'Any specific features you need (e.g., e-commerce, booking systems, galleries).',
   
  },
  {
    title: 'Business consulting',
    description:
      'Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.',
  
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
    title: 'Discovery & Planning:',
    description:
      'The process begins with a thorough consultation with the client to understand their business goals.'
  },
  {
    id: 2,
    title: 'Design & Review:',
    description: `They also analyze the client's current online presence and marketing efforts.`
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
