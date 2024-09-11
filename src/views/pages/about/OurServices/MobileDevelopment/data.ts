import type {  ServiceType , StepType } from '@/types'
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
  "Startups: Launch your app idea with a reliable partner that understands the challenges of new ventures.",
  'Established Businesses: Expand your digital presence and engage your customers through a custom mobile app.',
  'E-commerce: Provide a mobile shopping experience that increases sales and customer loyalty.',
  'Enterprises: Optimize internal processes and enhance productivity with tailored mobile solutions.'
]

type WorkType = {
  id: number
} & ServiceType



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
    description: `Our developers bring the design to life using the latest technologies and best practices. We focus on creating a seamless, responsive, and high-performance app.
`
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance:',
    description: `Before launch, we rigorously test the app across different devices and environments to ensure it works flawlessly. We address any issues to deliver a smooth user experience.`
  },
  {
    id: 5,
    title: 'Deployment & Support:',
    description: `We handle the app's launch on the App Store, Google Play, or other platforms. Post-launch, we offer ongoing support and maintenance to keep your app updated and secure.`
  }
]

