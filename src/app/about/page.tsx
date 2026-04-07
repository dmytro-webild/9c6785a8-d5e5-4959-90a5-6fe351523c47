"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import { Heart, ShieldCheck, MapPin } from "lucide-react";

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
                    { name: "Resources", id: "/resources" }
                ]}
                brandName="Palante STS"
            />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            title="Compassion at the Heart of Every Transition"
            tag="Our Commitment"
            textboxLayout="split"
            useInvertedBackground={false}
            description="At Palante STS, we believe a senior transition is not just a logistical move—it is an emotional journey. We serve as your steady guide, ensuring that every step is taken with grace, transparency, and a profound respect for the life your loved one has built."
            bulletPoints={[
                { title: "Deep Expertise", description: "Two decades of Southern California senior transition experience.", icon: MapPin },
                { title: "Holistic Care", description: "We integrate real estate, downsizing, and placement support seamlessly.", icon: Heart },
                { title: "Family Advocacy", description: "We act as your dedicated shield, navigating complex systems on your behalf.", icon: ShieldCheck }
            ]}
            className="py-24"
          />
        </div>

        <div id="mission" data-section="mission">
          <ContactText
            text="We turn complex, overwhelming transitions into clear, dignified paths forward for families across Southern California."
            background={{ variant: "plain" }}
            useInvertedBackground={true}
          />
        </div>

        <div id="contact" data-section="contact">
            <ContactText
                text="Ready to take the first step toward peace of mind? Let's discuss your family's needs."
                buttons={[{ text: "Schedule Your Private Consultation", href: "/contact" }]}
                background={{ variant: "sparkles-gradient" }}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }] }
            ]}
            logoText="Palante STS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}