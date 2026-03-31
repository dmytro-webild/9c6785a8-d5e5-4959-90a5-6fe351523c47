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
        { type: "text", content: "Advocacy Rooted in Compassion and Expertise" },
      ]}
      buttons={[{ text: "Let's Start Your Journey", href: "/contact" }]}
    />
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold">Our Origin Story</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Palante STS was born out of a personal realization. When I navigated my own mother's senior transition, I saw firsthand how fragmented, stressful, and lonely the process could be for a family. I realized that families don't need just a realtor or just a placement agent; they need a partner who understands the emotional weight and logistical urgency of the moment.
      </p>
      <h2 className="text-3xl font-semibold">The Palante Philosophy</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Our philosophy is simple: we walk beside you. 'Pa'lante' means moving forward, and that is exactly what we do—we move families forward with grace, dignity, and absolute transparency. By integrating real estate sales, placement advocacy, and move management, we eliminate the need for you to coordinate between multiple disconnected vendors.
      </p>
      <h2 className="text-3xl font-semibold">Our Commitment to You</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        We hold ourselves to a standard of radical empathy. Whether we are preparing a home for market or navigating complex placement paperwork, our goal is to ensure you can spend your energy on the person who matters most: your parent. You handle the love; we handle the rest.
      </p>
      <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8 text-xl italic text-gray-800">
        "We don't just facilitate moves; we build trust for the next chapter of life."
      </blockquote>
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
