"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
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
                    { name: "Contact", id: "/contact" }
                ]}
                brandName="Palante STS"
            />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            title="More Than A Transition. A New Chapter."
            description={[
                "Founded by Ronnie Konishi after personal experience navigating a family transition, Palante STS was born from the belief that moving forward is not just a logistical necessity—it's an emotional journey that deserves to be honored.",                "We approach every family story with empathy and deep local expertise. Our mission is to bridge the gap between where you are and where you need to be, ensuring every step feels supported and dignified.",                "With over 20 years of real estate experience and a compassionate, hands-on approach, we remove the burden of logistics so your family can focus on what truly matters: staying present and connected."
            ]}
            useInvertedBackground={false}
            className="py-24"
          />
        </div>

        <div id="features" data-section="features">
            <TextSplitAbout
                title="Why Choose Palante STS"
                description={[
                    "Expertise you can trust, compassion you can feel. We provide more than just coordination; we offer peace of mind."
                ]}
                useInvertedBackground={true}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactCTA
                tag="Connect with Ronnie"
                title="Your Family's Roadmap Starts Here"
                description="Let's have a gentle, no-obligation conversation about where you are and how we can support you."
                buttons={[{ text: "Schedule Your Call", href: "/contact" }]}
                background={{ variant: "plain" }}
                useInvertedBackground={true}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }] }
            ]}
            logoText="Palante STS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
