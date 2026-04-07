"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function AboutPage() {
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
            <NavbarLayoutFloatingInline
                navItems={[
                    { name: "Home", id: "/" },
                    { name: "About", id: "/about" },
                    { name: "Contact", id: "/contact" }
                ]}
                brandName="Palante STS"
                button={{ text: "Get Started" }}
            />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
                { type: 'text', content: "Compassion at the Heart of Every Transition" }
            ]}
            useInvertedBackground={false}
            className="py-24"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Palante STS"
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}