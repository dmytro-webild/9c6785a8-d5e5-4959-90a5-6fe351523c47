"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactText from '@/components/sections/contact/ContactText';
import { ClipboardCheck, Target, Users, Home, Sparkles, Heart } from "lucide-react";

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

        <div id="intro" data-section="intro">
          <FeatureBorderGlow
            animationType="blur-reveal"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Our 5-Step Path to Peace of Mind"
            description="We guide your family through every phase of the senior transition with empathy, clarity, and expert coordination."
            features={[]}
          />
        </div>

        <div id="emotional-recognition" data-section="emotional-recognition">
           <ContactText
             text="We recognize that this process is more than a list of tasks; it's a profound life transition. We honor your emotions and treat your family's story with the dignity it deserves."
             background={{ variant: "plain" }}
             useInvertedBackground={true}
           />
        </div>

        <div id="process" data-section="process">
          <FeatureBorderGlow
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="The Process"
            description="Clear, organized steps forward."
            features={[
              { icon: ClipboardCheck, title: "Listen & Assess", description: "We listen deeply to understand your family's unique needs, challenges, and goals." },
              { icon: Target, title: "Personalized Plan", description: "We create a compassionate roadmap tailored to your timeline, budget, and needs." },
              { icon: Users, title: "Coordinate Transition", description: "We manage logistics of sorting and preparing the home for sale." },
              { icon: Home, title: "Support Housing Decision", description: "We vet communities and guide your placement process to ensure a secure, comfortable home." },
              { icon: Sparkles, title: "Move Forward", description: "From move-in to settling in, we stay by your side for a smooth, respectful transition." }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            title="Common Questions"
            faqsAnimation="slide-up"
            faqs={[
              { id: "q1", title: "How do we begin?", content: "Reach out for a no-obligation conversation. We are here to listen and help." },
              { id: "q2", title: "Is there a cost for the initial consultation?", content: "No, our first conversation is dedicated to understanding your family's journey without any pressure." }
            ]}
          />
        </div>

        <div id="cta" data-section="cta">
           <ContactText
             text="Ready to start your path forward?"
             buttons={[{ text: "Schedule Your Call", href: "/contact" }]}
             background={{ variant: "sparkles-gradient" }}
             useInvertedBackground={false}
           />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
              { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
