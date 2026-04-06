"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";

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
            <NavbarStyleCentered
                navItems={[
                    { name: "Home", id: "/" },
                    { name: "How It Works", id: "/how-it-works" },
                    { name: "Services", id: "/services" },
                    { name: "About", id: "/about" },
                    { name: "Resources", id: "/resources" },
                    { name: "Contact", id: "/contact" },
                    { name: "Partner", id: "/referral-partner" }
                ]}
                brandName="Palante STS"
            />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            title="Compassion at the Heart of Every Transition"
            tag="Our Story"
            className="py-24"
            useInvertedBackground={false}
          />
        </div>

        <div id="mission" data-section="mission">
          <TextAbout
            title="Bridging the Gap to Your Family's Next Chapter"
            tag="Mission"
            useInvertedBackground={true}
          />
        </div>

        <div id="contact" data-section="contact">
            <ContactCTA
                tag="Connect with Ronnie"
                title="Let's Discuss Your Family's Needs"
                description="A gentle, no-pressure conversation is the first step toward clarity and peace of mind."
                buttons={[{ text: "Schedule Your Private Consultation", href: "/contact" }]}
                background={{ variant: "plain" }}
                useInvertedBackground={true}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Referral Partner", href: "/referral-partner" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }] }
            ]}
            logoText="Palante STS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
