"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { ClipboardCheck, Target, Users, Home, Sparkles } from "lucide-react";

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
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/" },
              { name: "How It Works", id: "/how-it-works" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Resources", id: "/resources" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="feature" data-section="feature">
          <FeatureBorderGlow
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Our 5-Step Path to Peace of Mind"
            description="We guide your family through every phase of the senior transition with empathy, clarity, and expert coordination."
            features={[
              { 
                icon: ClipboardCheck,
                title: "We Assess the Situation", 
                description: "We start by listening deeply to understand your family's unique needs, challenges, and goals for the transition."
              },
              { 
                icon: Target,
                title: "We Build a Personalized Transition Plan", 
                description: "We create a clear, compassionate roadmap tailored to your specific timeline, budget, and emotional needs."
              },
              { 
                icon: Users,
                title: "We Coordinate Downsizing and Move Preparation", 
                description: "We handle the logistics of sorting, packing, and preparing your home for sale so you can focus on being present for your loved one."
              },
              { 
                icon: Home,
                title: "We Support the Next Housing Decision", 
                description: "We personally vet senior communities and guide you through the placement process to ensure a secure, comfortable new home."
              },
              { 
                icon: Sparkles,
                title: "We Help You Move Forward with Peace of Mind", 
                description: "From move-in day to settling in, we stay by your side to ensure the transition is smooth, respectful, and dignified."
              }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            title="Compassionate Answers for Your Family's Transition"
            description="We know this is a deeply personal time for your family. Here are answers to the most common questions we receive to help you feel supported and informed as you take the next step."
            faqs={[
              { id: "q1", title: "When is the right time to transition?", content: "There is no perfect time, but when daily home life becomes a source of stress or safety concern rather than comfort, it's a gentle signal to explore options. We help you identify those signs with kindness." },
              { id: "q2", title: "How do we handle resistance from a loved one?", content: "Resistance is often a form of fear or loss of control. We start with active, empathetic listening, focusing on their preferences and dignity, rather than just logistics." },
              { id: "q3", title: "How does your downsizing support work?", content: "We treat your family home with reverence. We guide you through sorting with patience, ensuring heirlooms are kept or rehomed according to your wishes, not just discarded." },
              { id: "q4", title: "What about selling the family home?", content: "As licensed real estate specialists, we manage everything from property prep to closing, focusing on getting top dollar while shielding your family from the daily stress of the sale process." },
              { id: "q5", title: "How do we ensure the right community placement?", content: "We personally tour and vet communities to find places that match not just your loved one’s care needs, but their personality, cultural values, and interests. We are your advocate throughout the process." },
              { id: "q6", title: "How do we begin this process with you?", content: "Simply reach out for a no-obligation conversation. We are here to listen to your story, understand your goals, and provide the clarity you deserve. Your path forward starts with a single, comfortable step." }
            ]}
            buttons={[{ text: "Book Your Gentle Consultation", href: "/contact" }]}
            faqsAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
              { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }, { label: "Privacy Policy" }] }
            ]}
            bottomLeftText="© 2024 Palante STS. All rights reserved."
            bottomRightText="Built with integrity."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}