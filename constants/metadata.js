import { useState } from "react";
import SVG from "react-inlinesvg";
import {
  IconCommunity,
  IconInstant,
  IconMic,
  IconSeed,
  IconTimeline,
  speedSvgIcon,
  simplicitySvgIcon,
  transparancySvgIcon,
  inclusivitySvgIcon,
  trustSvgIcon,
  qualitySvgIcon,
} from "../assets/svgs/pageSvgs";
  
export const metadataKodezi = {
  carrerPageFirstCards: [
    {
      year: "2019",
      icon: IconTimeline,
      title: "Started Kodezi",
      text: "Kodezi was founded in 2019 by immigrant founder Ishraq Khan",
    },
    {
      year: "2019",
      icon: IconMic,
      title: "Public Launch",
      text: `We announced the public launch of Kodezi and said “Hello World” to the internet.`,
    },
    {
      year: "2020",
      icon: IconSeed,
      title: "Seed Round",
      text: "We raised $30k from Accel, and announced the public beta app",
    },
    {
      year: "2021",
      icon: IconInstant,
      title: "Kodezi Live Assistance",
      text: "We launched kodezi live assistance for pogrammer find mistake instant.",
    },
    {
      year: "2022",
      icon: IconCommunity,
      title: "And today...",
      text: "We are a team of 16 folks, and excited at the prospect of you joining our team!",
    },
  ],
  careerPageFutureCardData: [
    {
      icon: speedSvgIcon,
      title: "Speed",
      description:
        "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
    },
    {
      icon: simplicitySvgIcon,
      title: "Simplicity",
      description:
        "We keep things simple and prefer pragmatic solutions over complicated abstractions. We cut away cargo cult.",
    },
    {
      icon: transparancySvgIcon,
      title: "Transparency",
      description:
        "We communicate early and often. We don’t have secrets but respect privacy and are honest if things went bad.",
    },
    {
      icon: trustSvgIcon,
      title: "Trust",
      description:
        "All of us own a piece of Kodezi and we trust each other to do what they think is best for the company.",
    },
    {
      icon: qualitySvgIcon,
      title: "Quality",
      description:
        "We don’t settle on mediocrity and choose quality over quantity. Even if the solutions are harder kodezi focused result.",
    },
    {
      icon: inclusivitySvgIcon,
      title: "Inclusivity",
      description:
        "We come from different backgrounds and reflect our diverse community. We treat each other as we want to be treated.",
    },
  ],
  trustecPartyIcons: [
    { icon: "/images/assets/harward-logo.png" },
    { icon: "/images/assets/MIT-Logo.png" },
    { icon: "/images/assets/stanford-university.png" },
    { icon: "/images/assets/Slack_logo.png" },
    { icon: "/images/assets/airbase-logo.png" },
    { icon: "/images/assets/amazon-logo.png" },
  ],
  howWeWorkCardsGridContent: [
    {
      title: "Time for actual work",
      description:
        "We have one meeting with the entire team per week – that’s it. We work autonomously, communicate asynchronously and collaborate ad-hoc. Every week, we demo what we’ve accomplished.",
    },
    {
      title: "Yearly meetups",
      description:
        "Once a year we bring the entire team together. In 2021, we rented a villa in Dubai where we launched our Extensions API, drove quad bikes in the desert and competed in top golf. We can’t wait to see where it takes us.",
    },
    {
      title: "Cut out the s#!%",
      description:
        "Many of us left companies because bureaucracy killed product development. We are here to build a great product with like-minded people. Everything else doesn’t matter from through.",
    },
    {
      title: "We have fun",
      description:
        "It isn’t all work and no play. We get together regularly to play games, make pancakes or other virtual activities. Our #watercooler Slack channel is jammed with photos outside of work and weekend plans.",
    },
    {
      title: "Fast moving",
      description:
        "Our aim is to continue making the best product we can. We bias to action and shipped 37 releases in 2021, including big features such as our Extensions API and hundreds of bug fixes and improvements.",
    },
    {
      title: 'We care about design',
      description: 'Design is at the heart of the product and team. Every pixel and every detail matters. From icons, to the UI in both dark and light mode, illustrations, social media content, it all belongs to the same story.'
    }
  ],
  moreThanJustJobContent: [
    {
      icon: '/images/assets/company-stock.png',
      title: 'Company stock options',
      description: `We don't treat "act like an owner" as a phrase`
    },
    {
      icon: '/images/assets/parental-leave.png',
      title: 'Parental leave',
      description: 'We provide 3 months paid time off'
    },
    {
      icon: '/images/assets/competitve-salary.png',
      title: 'Competitive salary',
      description: 'We pay you a location independent rate'
    },
    {
      icon: '/images/assets/build-your-workshop.png',
      title: 'Build your workspace',
      description: 'Order your own equipment to onboard'
    },
    {
      icon: '/images/assets/health-perk.png',
      title: 'Health perks',
      description: 'From insurance to gym. Stay healthy!'
    },
    {
      icon: '/images/assets/professional-growth.png',
      title: 'Professional growth hours',
      description: 'Employees receive 40 paid hours a year.'
    },
    {
      icon: '/images/assets/end-of-year-bonus.png',
      title: 'End of year bonus',
      description: 'We value going the extra mile'
    },
    {
      icon: '/images/assets/sabbatical-policy.png',
      title: 'Sabbatical policy',
      description: '2 months paid sabbatical after completing 5 years of service.'
    }
  ],
  joinOurTeamContent: [
    {
      title: 'Backend Engineer',
      description: 'Santa Monica or Remote, Full Time'
    },
    {
      title: 'Open Application',
      description: 'Santa Monica or Remote, Full Time'
    },
    {
      title: 'Product Designer',
      description: 'Santa Monica or Remote, Full Time'
    },
    {
      title: 'Open Application',
      description: 'Santa Monica or Remote, Full Time'
    }
  ]
};

export default function useMetadata(target) {
  const [metadata, setMetaData] = useState(metadataKodezi[target]);
  return metadata;
}
