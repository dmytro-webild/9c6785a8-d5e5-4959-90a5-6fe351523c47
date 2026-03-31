"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import { Home, Heart, Package } from "lucide-react";

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
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="feature" data-section="feature">
          <FeatureCardThree
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Comprehensive Services"
            description="One trusted professional handles the home sale, senior placement, and the physical move."
            features={[
              { id: "1", title: "Real Estate Services", description: "Professional home sale coordination with compassion.", imageSrc: "" },
              { id: "2", title: "Senior Placement", description: "Expert assistance finding the right community.", imageSrc: "" },
              { id: "3", title: "Transition Management", description: "Full support through downsizing and moving.", imageSrc: "" },
            ]}
          />
        </div>

        <div id="metric" data-section="metric">
          <MetricCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Service Impact"
            description="Integrated management delivers better outcomes for seniors and their families."
            metrics={[
              { id: "m1", icon: Home, title: "Real Estate", value: "Top Dollar" },
              { id: "m2", icon: Heart, title: "Placement", value: "Free" },
              { id: "m3", icon: Package, title: "Management", value: "Custom" },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
              { title: "Legal", items: [{ label: "CA DRE# 01832704" }, { label: "Privacy Policy" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}