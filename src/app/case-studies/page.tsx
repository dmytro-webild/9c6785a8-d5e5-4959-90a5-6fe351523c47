"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function CaseStudiesPage() {
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
              { name: "Case Studies", id: "/case-studies" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="case-studies" data-section="case-studies">
          <FeatureCardThree
            title="Case Studies"
            description="Real life examples of how we have guided families through difficult transitions."
            gridVariant="two-columns-alternating-heights"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { id: "c1", title: "From Family Home to Assisted Living", description: "Managing a complex sale and logistics for a long-time homeowner with limited mobility.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024899412-2vvj9muh.jpg" },
              { id: "c2", title: "The Multi-State Downsizing", description: "Coordination across regions to move a family estate efficiently.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024899413-sat65gaf.jpg" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Links", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
              { title: "More", items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Case Studies", href: "/case-studies" }] },
              { title: "Support", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "Privacy Policy", href: "#" }] },
            ]}
            bottomLeftText="© 2026 Palante STS"
            bottomRightText="All Rights Reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}