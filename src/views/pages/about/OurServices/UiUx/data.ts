import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Project Overview',
    description:
      'A clear understanding of your product or service and the role the UI/UX design will play.',
 
  },
  {
    title: 'Target Audience',
    description:
      "Detailed profiles of your users, including their needs, preferences, and challenges.",
 
  },
  {
    title: 'Brand Guidelines',
    description:
      "Information about your brand’s visual identity, including logos, color schemes, and typography.",
    
  },
  {
    title: 'Existing Assets',
    description:
      'Any current designs, wireframes, or prototypes you may have.',
   
  },
  {
    title: 'User Feedback',
    description:
      'Any insights or feedback from users that could inform the design process.',
   
  },
  {
    title: 'Budget & Timeline',
    description:
      'Details about your budget and any important deadlines.',
  
  }
]
export const approach: string[] = [
  "Accelerate your business: Enhance your digital product’s user experience to drive growth.",
  'Maximise control & minimise risks: Implement a design that’s both functional and visually appealing, reducing the risk of user frustration.',
  'Increase quality & efficiency: Ensure your product is not only beautiful but also easy to use, improving user satisfaction.',
  'Scale without limits when you need: Expand your product’s features with a scalable design framework.',
  'Reduce time to market: Quickly deliver a polished product with a user-centered design approach.',
  'Optimise your budget: Get high-quality design work that aligns with your financial constraints.',
  'Establish your presence globally: Create a design that resonates with a diverse, international user base.'
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
    title: 'Discovery & Research:',
    description:
      `We start by deeply understanding your business, your product, and your users. Through workshops, interviews, and user research, we gather insights that inform the entire design process. This foundational step ensures we align the design with your strategic objectives.`
  },
  {
    id: 2,
    title: 'Strategy & Planning:',
    description: `Based on our research, we develop a comprehensive strategy that includes user personas, user journeys, and a clear roadmap for the design. This step ensures that every design decision is grounded in real data and user needs, setting the stage for a successful project.`
  },
  {
    id: 3,
    title: 'Wireframing & Prototyping:',
    description: `With a clear strategy in place, we move on to creating wireframes and interactive prototypes. This step allows us to visualize the structure and flow of the user experience, providing a blueprint for the final design. You’ll be able to see how users will interact with your product before we dive into the visual design.`
  },
  {
    id: 4,
    title: 'Visual Design & Development:',
    description: `Once the wireframes and prototypes are approved, we bring your product to life with a visually engaging design that reflects your brand’s identity. We focus on creating a cohesive and appealing interface that enhances usability. Our team works closely with developers to ensure the design is accurately implemented.`
  },
  {
    id: 5,
    title: 'Testing & Refinement:',
    description: `After the initial design is complete, we conduct rigorous usability testing to gather feedback from real users. Based on this feedback, we make any necessary refinements to ensure the final product is as effective and user-friendly as possible. This step guarantees that the design is not only beautiful but also functional and intuitive.`
  }
]

export const pricing: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    title: 'Lour Ferguson'
  },
  {
    avatar: avatar8,
    description:
      'The UI/UX design provided by [Your Company] transformed our product. The user experience is now seamless, and our customers love the new interface. Working with their design team was a pleasure, and the results exceeded our expectations.',
    title: 'Danny Mulder, Product Manager at Propzy Solutions'
   
  },
  {
    avatar: avatar5,
    description:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    title: 'Jacqueline Miller'
  }
]
