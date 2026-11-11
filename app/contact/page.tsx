import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { Reveal } from "@/components/shared/Reveal";

const description =
  "Contact GBX Consulting to discuss behavioral health, training and performance consulting for your organization. Call 1-888-280-8204.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | GBX Consulting", description, url: "/contact" },
  twitter: { title: "Contact | GBX Consulting", description },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-ivory py-20 md:py-28">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.2fr]">
          <Reveal direction="left">
            <ContactInfo />
          </Reveal>
          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
