import {
  businessIcon,
  businessIcon2,
  designIcon,
  marketingIcon,
  strategicIcon,
  taxIcon
} from '@/assets/data/icons'
import type {  ServiceType } from '@/types'



export const services: ServiceType[] = [
  {
    title: 'Web Design',
    description:
      "Our Business Analysis service is the first step in understanding your organization's current state.",
    icon: businessIcon,
    route: { name: 'ourservices.web-design' }
  },
  {
    title: 'UI/UX Design',
    description:
      'We work closely with you to develop a tailored roadmap that aligns with your goals and objectives.',
    icon: strategicIcon,
    route: { name: 'ourservices.ui-ux-design' }
  },
  {
    title: 'Content Creation',
    description:
      "Our Marketing Strategy service is designed to elevate your brand's visibility and engagement.",
    icon: marketingIcon
  },
  {
    title: 'software solutions',
    description:
      'From website design to app development, we blend aesthetics with usability to leave a lasting impression.',
    icon: designIcon
  },
  {
    title: 'outsourcing',
    description: 'Our consultants become your trusted advisors on the path to success.',
    icon: businessIcon2
  },
  {
    title: 'Tax consultant',
    description:
      "We're here to optimize your tax strategy, so you can focus on what matters most to your business.",
    icon: taxIcon
  }
]

