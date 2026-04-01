"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import { Home, Heart, Package, MoveDown } from "lucide-react";

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
            description="One trusted professional handles the home sale, senior placement, and the physical move across Orange, LA, Riverside, and San Bernardino counties."
            features={[
              { id: "1", title: "Real Estate Services", description: "Professional home sale coordination with compassion.", imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
              { id: "2", title: "Senior Placement", description: "Expert assistance finding the right community.", imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" },
              { id: "3", title: "Transition Management", description: "Full support through downsizing and moving.", imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
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
              { id: "m1", icon: Home, title: "Real Estate", value: "4 Counties, 1 Expert" },
              { id: "m2", icon: Heart, title: "Placement", value: "Free to Families — Senior Placement at $0 Cost" },
              { id: "m3", icon: MoveDown, title: "Downsizing & Management", value: "Set up and organization" },
            ]}
            valueClassName="text-sm md:text-base"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
              { title: "Legal", items: [{ label: "CA DRE# 01832704" }, { label: "Privacy Policy" }] },
            ]}
            bottomLeftText="© 2024 Palante STS"
            bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
