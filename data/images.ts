// Centralized imagery. Files live in /public — replace a file (same name) to update it site-wide.
export const images = {
  heroOffice: { src: "/heroOffice.png", alt: "Confident executive in a navy suit and green tie standing in a modern office" },
  sheltonHero: { src: "/shelton-hero.jpg", alt: "Shelton Gilyard, Founder of GBX Consulting, smiling outdoors in a navy suit" },
  sheltonPortrait: { src: "/shelton-portrait.jpg", alt: "Portrait of Shelton Gilyard, Founder and Principal Consultant of GBX Consulting" },
  sheltonGilyard: { src: "/sheltonGilyard.png", alt: "Executive seated in a leather chair in a wood-panelled office" },
  officeLounge: { src: "/officeLounge.png", alt: "Elegant GBX Consulting office lounge with green velvet seating and wood accents" },
  strategyMeeting: { src: "/strategyMeeting.png", alt: "Leadership team collaborating during a strategy session" },
  boardroom: { src: "/boardroom.png", alt: "Executives in discussion around a boardroom table" },
  training: { src: "/training.png", alt: "Consultant leading a professional training session" },
  sportsField: { src: "/sportsField.png", alt: "Illuminated professional stadium at dusk" },
  community: { src: "/community.png", alt: "Diverse professionals in a collaborative conversation" },
  workspace: { src: "/workspace.png", alt: "Team members reviewing documents together in a modern workspace" },
  merchandise: { src: "/merchandise.png", alt: "GBX branded merchandise including a tote bag, polo shirt, notebook and mug" },
} as const;

export type ImageKey = keyof typeof images;
