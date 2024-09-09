import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Task/Project Description:',
    description:
      'Details of the roles and responsibilities you want to outsource.',
 
  },
  {
    title: 'Scope & Volume:',
    description:
      "An overview of the expected workload, including timelines and deadlines.",
 
  },
  {
    title: 'Quality Standards:',
    description:
      "Any specific requirements or industry standards that need to be followed.",
    
  },
  {
    title: 'Existing Processes:',
    description:
      'Information about your current workflows and tools.',
   
  },
  {
    title: 'Communication Preferences:',
    description:
      'Your preferred method and frequency for receiving updates.',
   
  }
]
export const approach: string[] = [
  "Accelerate your business: Quickly access the skills you need to drive growth.",
  'Maximise control & minimise risks: Maintain oversight while we handle the execution.',
  'Increase quality & efficiency: Improve the quality of work with specialized talent.',
  'Scale without limits when you need: Expand your team effortlessly as your needs grow.',
  'Reduce time to market: Speed up your projects and bring products to market faster.',
  'Optimise your budget: Get high-quality work at a fraction of the cost of hiring full-time staff.',
  'Establish your presence globally: Leverage our network of professionals to operate on a global scale.'
]
export const roles: string[] = [
  "Full-stack Developer",
  'Data Scientist',
  'QA Manager',
  'Front-end Developer',
  'Back-end Developer',
  'Team Lead',
  'Business Analyst',
  'Scrum Master',
  'Product Owner',
  'UI/UX Specialist',
  'Machine Learning Engineer',
  'Data Analyst'
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
    title: 'Tell Us What You Need:',
    description:
      `Initial Consultation: Begin by filling out your details—your data is 100% confidential and secure. Let us know what roles you need to fill and the skills required.`
  },
  {
    id: 2,
    title: 'Talk to Our Experts:',
    description: `Discovery Call: One of our team members will promptly contact you to discuss your needs in detail. We’ll explore the challenges you face and identify the best solutions.`
  },
  {
    id: 3,
    title: 'Get a Tailored Proposal:',
    description: `Customized Solution: Based on our conversation, we’ll prepare a proposal tailored to your specific requirements, including the timeline, budget, and deliverables.`
  }
]

export const testimonials: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'Outsourcing with you has allowed us to focus on our core business while they took care of the rest. Their expertise and commitment to quality have significantly improved our operations.',
    title: 'Sarah Lee, Operations Manager at Delfts Ltd.'
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
