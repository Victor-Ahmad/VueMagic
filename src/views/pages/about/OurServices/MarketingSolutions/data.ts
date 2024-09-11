import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType , StepType } from '@/types'
export const cards: StepType[] = [
  {
    title: 'Business Objectives',
    description:
      'Clear goals for what you want to achieve, such as brand awareness, lead generation, or sales growth.',
 
  },
  {
    title: 'Target Audience:',
    description:
      "Detailed insights into your ideal customers, including demographics, behaviors, and preferences.",
 
  },
  {
    title: 'Current Marketing Efforts',
    description:
      "An overview of your existing marketing activities, including successes and challenges.",
    
  },
  {
    title: 'Brand Guidelines',
    description:
      'Your brand’s voice, values, and visual identity.',
   
  },
  {
    title: 'Budget & Timeline',
    description:
      'Information about your budget and any deadlines or launch dates.',
   
  }
]
export const approach: string[] = [
  "Accelerate your business: Drive growth through targeted marketing efforts that connect with your audience.",
  'Maximise control & minimise risks: Get a clear, strategic plan that allows you to track results and make adjustments as needed.',
  'Increase quality & efficiency: Leverage our expertise to produce high-quality campaigns that deliver results.',
  'Scale without limits when you need: Expand your marketing efforts quickly and efficiently as your business grows.',
  'Reduce time to market: Speed up the launch of new products or services with well-planned marketing strategies.',
  'Optimise your budget: Ensure your marketing dollars are spent wisely, with campaigns designed for maximum ROI.',
  'Establish your presence globally: Reach international audiences with campaigns that resonate across cultures and regions.'
]
export const services: string[] = [
  "Digital Marketing: Comprehensive online strategies, including SEO, SEM, and social media management.",
  'Content Marketing: Crafting engaging content to attract, inform, and convert your audience.',
  'Social Media Management: Building and managing your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter.',
  'SEO Optimization: Improving your website’s visibility on search engines to drive organic traffic.',
  'Paid Advertising: Creating and managing PPC campaigns on platforms like Google Ads and social media.',
  'Brand Strategy: Developing and refining your brand’s identity, messaging, and positioning.',
  'Email Marketing: Designing and executing email campaigns that engage and convert subscribers.',
  'Market Research & Analysis: Gathering insights to understand your market, competitors, and customer needs.',
  'Public Relations: Managing your brand’s reputation and relationships with the media and public.',
  'Graphic Design & Creative Services: Visual design that communicates your brand’s message and enhances your campaigns.'
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
      `Initial Consultation: Fill in your details—your data is 100% confidential and secure. Share your business goals and the marketing challenges you want to overcome.`
  },
  {
    id: 2,
    title: 'Talk to Our Experts:',
    description: `Discovery Call: One of our marketing strategists will contact you promptly for a detailed discussion about your needs, objectives, and target audience.`
  },
  {
    id: 3,
    title: 'Get a Tailored Proposal:',
    description: `Customized Marketing Plan: We’ll develop a marketing strategy tailored to your business, complete with campaign ideas, timelines, and budget considerations.`
  }
]

export const testimonials: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'The marketing strategies developed by [Our company name] have transformed our brand’s visibility and engagement. Their creative approach and attention to detail have been instrumental in our success.',
    title: 'Emily Davis, Marketing Director at Snelwoningruil.nl.'
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
