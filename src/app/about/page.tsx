"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import { HandHeart, Scale, MapPin, Users } from "lucide-react";

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
                    { name: "Services", id: "/services" },
                    { name: "How It Works", id: "/how-it-works" },
                    { name: "About", id: "/about" },
                    { name: "Resources", id: "/resources" },
                    { name: "Contact", id: "/contact" }
                ]}
                brandName="Palante STS"
            />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            title="More Than A Transition. A New Chapter."
            description="Founded by Ronnie Konishi after personal experience navigating a family transition, Palante STS was born from the belief that moving forward is not just a logistical necessity—it's an emotional journey that deserves to be honored."
            textboxLayout="split"
            useInvertedBackground={false}
            bulletPoints={[
              { icon: Scale, title: "20 Years of Real Estate Expertise", description: "As a licensed California Realtor, I ensure your home sale is handled with precision and financial care." },
              { icon: MapPin, title: "Deep Community Knowledge", description: "I have personally vetted senior living options across Southern California to ensure your loved one finds a true home." },
              { icon: Users, title: "End-to-End Coordination", description: "You have one partner, one point of contact, and one commitment: to make this as smooth as possible for your entire family." },
              { icon: HandHeart, title: "Lived Experience & Empathy", description: "I have walked this path personally, and I bring that perspective to every family I serve." }
            ]}
            className="py-24"
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