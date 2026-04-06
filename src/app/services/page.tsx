"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';

export default function ServicesPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="feature" data-section="feature">
          <FeatureCardMedia
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="We Handle the Hardest Parts of the Transition — So You Don’t Have To"
            description="We understand the emotional and practical overwhelm of life transitions. Our goal is to relieve that pressure by serving as your single partner through every phase of the journey."
            features={[
              { id: "1", title: "Transition Planning", description: "A clear, compassionate roadmap tailored to your family's unique emotional and practical needs.", tag: "Planning" },
              { id: "2", title: "Downsizing", description: "Thoughtful, professional guidance through sorting, distributing, and organizing decades of belongings.", tag: "Logistics" },
              { id: "3", title: "Move Management", description: "End-to-end logistics handling so you can focus on being present for your loved one.", tag: "Management" },
              { id: "4", title: "Senior Living Support", description: "Personalized vetting and placement guidance to find the right community for a secure future.", tag: "Placement" },
              { id: "5", title: "Home Sale Coordination", description: "Expert real estate service focused on getting top dollar with minimal stress for your family.", tag: "Real Estate" },
              { id: "6", title: "Family Communication", description: "Facilitating honest, productive conversations among family members during sensitive decision-making.", tag: "Support" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
              { title: "Legal & Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}