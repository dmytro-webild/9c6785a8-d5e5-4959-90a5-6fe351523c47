"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';

export default function LandingPage() {
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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "How It Works",
          id: "/how-it-works",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Resources",
          id: "/resources",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Palante STS"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "What 'Palante' Means to Us",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg",
          alt: "Palante Meaning",
        },
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Principal Specialist",
          role: "Owner & Lead",
          description: "Experienced licensed professional with deep compassion for Southern California families.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",
        },
      ]}
      title="Meet the Team"
      description="Highly trusted specialists committed to Southern California families."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "How It Works",
              href: "/how-it-works",
            },
            {
              label: "Services",
              href: "/services",
            },
          ],
        },
        {
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Resources",
              href: "/resources",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          items: [
            {
              label: "CA DRE# 00000000",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
