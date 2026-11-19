import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ExpertiseSection } from "@/components/about/ExpertiseSection";
import { FeaturedStory } from "@/components/about/FeaturedStory";
import { MissionSection } from "@/components/about/MissionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AudienceSection } from "@/components/about/AudienceSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { AboutCTA } from "@/components/about/AboutCTA";

const description =
  "Founded in 2010 by Shelton Gilyard, GBX Consulting is a global consulting partner in education, technical assistance, behavioral health workforce development and human services system enhancement.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | GBX Consulting", description, url: "/about" },
  twitter: { title: "About Us | GBX Consulting", description },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ExpertiseSection />
      <FeaturedStory />
      <MissionSection />
      <ValuesSection />
      <AudienceSection />
      <LeadershipSection />
      <AboutCTA />
    </>
  );
}
