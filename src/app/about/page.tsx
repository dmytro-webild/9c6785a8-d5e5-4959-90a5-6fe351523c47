"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "/" },
        { name: "How It Works", id: "/how-it-works" },
        { name: "Services", id: "/services" },
        { name: "About", id: "/about" },
        { name: "Resources", id: "/resources" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Palante STS"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Ronnie Konishi: Your Partner in Transition" },
      ]}
    />
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        I founded Palante STS with a singular purpose: to provide the professional, empathetic advocacy that I wished I had for my own family. When a parent needs to transition, the path forward is often obscured by emotional weight and logistical complexity. I am here to light the way.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        With a deep background in real estate and senior transitions, I bridge the gap between selling a cherished family home and ensuring a comfortable, secure placement. My approach is rooted in the belief that every family deserves a guide who listens first and acts with integrity second.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        At Palante STS, we don't just facilitate moves; we build trust. We handle the heavy lifting of downsizing and logistics so you can focus on what truly matters: spending quality time with your loved ones. Let us handle the details while you hold the hands of those you care about most.
      </p>
    </div>
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="none"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        { id: "t1", name: "Ronnie Konishi", role: "Owner & Lead Specialist", description: "Licensed specialist dedicated to serving families across Southern California with heart and expertise.", imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg?_wi=2" },
      ]}
      title="Meet Your Advocate"
      description="Personalized attention for every family we serve."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}