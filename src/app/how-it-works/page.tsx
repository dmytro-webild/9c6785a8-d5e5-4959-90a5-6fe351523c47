"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function HowItWorksPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "/" },
              { name: "How It Works", id: "/how-it-works" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            logoText="Palante STS"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            sideTitle="Common Questions"
            sideDescription="Get the answers you need about our transition support services."
            faqsAnimation="slide-up"
            faqs={[
              { id: "q1", title: "How do we begin?", content: "Reach out for a no-obligation conversation. We are here to listen and help." },
              { id: "q2", title: "Is there a cost for the initial consultation?", content: "No, our first conversation is dedicated to understanding your family's journey without any pressure." }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] }
            ]}
            bottomLeftText="© 2025 Palante STS"
            bottomRightText="All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}