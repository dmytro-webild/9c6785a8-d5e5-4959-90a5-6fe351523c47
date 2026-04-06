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
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "Is there a cost for your placement services?", content: "No — placement is completely free to families. Senior communities pay our fees."},
              { id: "q2", title: "Do we have to use your real estate services?", content: "Never — but most families find it far easier to use one trusted expert for everything."},
              { id: "q3", title: "How long does a typical transition take?", content: "It varies based on urgency and circumstances; we typically plan for 30–120 days."},
              { id: "q4", title: "What if my parent doesn't want to move?", content: "We’ve helped many families navigate this; it always starts with active, empathetic listening."},
              { id: "q5", title: "Do you only serve Orange County?", content: "We proudly serve Orange, LA, Riverside, and San Bernardino counties."},
              { id: "q6", title: "What kind of communities do you work with?", content: "The full spectrum: board and care homes, assisted living, memory care, and 55+ communities."}
            ]}
            title="Frequently Asked Questions"
            description="Clear answers to your most pressing questions about the transition process."
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
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}