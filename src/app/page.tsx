"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import { ClipboardCheck, Target, Users, Home, Sparkles } from "lucide-react";

export default function HomePage() {
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
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="feature" data-section="feature">
          <FeatureCardOne
            title="Our 5-Step Path to Peace of Mind"
            description="We guide your family through every phase of the senior transition with empathy, clarity, and expert coordination."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
              { 
                id: 1,
                title: "We Assess the Situation", 
                description: "We start by listening deeply to understand your family's unique needs, challenges, and goals for the transition.",                videoSrc: "https://example.com/video1.mp4"
              },
              { 
                id: 2,
                title: "We Build a Personalized Transition Plan", 
                description: "We create a clear, compassionate roadmap tailored to your specific timeline, budget, and emotional needs.",                videoSrc: "https://example.com/video2.mp4"
              },
              { 
                id: 3,
                title: "We Coordinate Downsizing and Move Preparation", 
                description: "We handle the logistics of sorting, packing, and preparing your home for sale so you can focus on being present for your loved one.",                videoSrc: "https://example.com/video3.mp4"
              },
              { 
                id: 4,
                title: "We Support the Next Housing Decision", 
                description: "We personally vet senior communities and guide you through the placement process to ensure a secure, comfortable new home.",                videoSrc: "https://example.com/video4.mp4"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] },
              { title: "Company", items: [{ label: "Contact", href: "/contact" }] },
              { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}