"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import { Home, Heart, Package } from "lucide-react";

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

  <div id="feature" data-section="feature">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: 1, title: "Real Estate Services", description: "Professional home sale coordination with compassion.", imageSrc: "" },
        { id: 2, title: "Senior Placement", description: "Expert assistance finding the right community.", imageSrc: "" },
        { id: 3, title: "Transition Management", description: "Full support through downsizing and moving.", imageSrc: "" },
      ]}
      title="Comprehensive Services"
      description="One trusted professional handles the home sale, senior placement, and the physical move."
      className="py-20"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", icon: Home, title: "Real Estate", value: "Top Dollar" },
        { id: "m2", icon: Heart, title: "Placement", value: "Free" },
        { id: "m3", icon: Package, title: "Management", value: "Custom" },
      ]}
      title="Service Impact"
      description="Integrated management delivers better outcomes for seniors and their families."
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