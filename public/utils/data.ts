import {
  allMatch,
  approval,
  precision_manufacturing,
  serviceToolbox,
} from "./svgs";

export const menu = [
  {
    id: 1,
    name: "Features",
    link: "/",
  },
  {
    id: 2,
    name: "Pricing",
    link: "/",
  },
  {
    id: 3,
    name: "About",
    link: "/",
  },
];
export const cardData = [
  {
    id: 1,
    padding: "p-12",
    image: "card3",
    subtitle: "Onboard",
    title: "Club Registration and Invite Players",
    size: "large",
    desc: "Gyms create profiles and invite players to the platform. Simple setup ensures quick onboarding.",
  },
  {
    id: 2,
    padding: "px-6",
    image: "card2",
    subtitle: "Connect",
    title: "Match Requests and Player Interactions",
    desc: "Players send match requests, view available courts, and connect with potential teammates",
  },
  {
    id: 3,
    padding: "px-6",
    image: "card1",
    subtitle: "Evolve",
    title: "Smart Level & Notification",
    desc: "Upgrade the smart level and receive notifications based on your preferences",
  },
];
export const paddlePlatformCardsData = [
  {
    id: 1,
    imageSrc: "laptop-dashboard",
    extraClasses: "translate-x-6.5 w-1/2 my-2 ",
    subtitle: "Club",
    title: "Gym Owner Features",
    desc: "Easily manage your club with player onboarding, match creation, approval workflows, and level upgrade reviews.",
  },
  {
    id: 2,
    imageSrc: "mobile-screens",
    allowOverflow: true,
    imageWrapper: "left-0 -translate-y-13 w-128.5 h-146 overflow-visible",
    extraClasses: "scale-160",
    subtitle: "Player",
    title: "Mobile Experience for Players",
    desc: "Players discover matches, send requests, track progress, and grow their skill level—all from the mobile app.",
  },
];
export const coreFeaturesData = [
  {
    id: 1,
    icon: allMatch,
    title: "Matchmaking capabilities",
    desc: "Location and skill-based player connections",
  },
  {
    id: 2,
    icon: serviceToolbox,
    title: "Invite-only player management",
    desc: "Powerful tools for paddle club digital transformation",
  },
  {
    id: 3,
    icon: approval,
    title: "Streamlined match request and approval system",
    desc: "Innovative features designed to simplify club management",
  },
  {
    id: 4,
    icon: precision_manufacturing,
    title: "Smart player connections",
    desc: "Precision matching based on skill and location",
  },
];
export const priceListItems = [
  "player management",
  "Club notifications system",
  "Create & manage matches",
  "Player profile management",
  "Skill-level based matchmaking",
  "Access to web dashboard & mobile app",
  "Upgrade anytime — no credit card required",
];