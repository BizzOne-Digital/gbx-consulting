import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { MissionSection } from "@/components/about/MissionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AudienceSection } from "@/components/about/AudienceSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { AboutCTA } from "@/components/about/AboutCTA";

const description =
  "Founded in 2010 by Shelton Gilyard, GBX Consulting is an international behavioral health service group delivering wellness and performance consulting across Southwest Florida and South America.";

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
      <MissionSection />
      <ValuesSection />
      <AudienceSection />
      <LeadershipSection />
      <AboutCTA />
    </>
  );
}
