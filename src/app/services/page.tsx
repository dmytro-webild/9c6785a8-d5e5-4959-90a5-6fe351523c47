"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import TextBox from '@/components/Textbox';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ServicesPage() {
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
              { name: "How It Works", id: "/how-it-works" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Resources", id: "/resources" },
              { name: "Contact", id: "/contact" },
              { name: "Partner", id: "/referral-partner" }
            ]}
            brandName="Palante STS"
            button={{ text: "Get Started", href: "/contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <ContactSplit
            tag="Expert Support"
            title="Comprehensive Transition Support"
            description="From the first conversation to move-in day, we are by your side, managing every logistical detail with the dignity and empathy your family deserves."
            mediaAnimation="slide-up"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="intro" data-section="intro">
          <TextBox
            title="End-to-End Care"
            description="We bridge the gap between where your family is and where you need to be. Our end-to-end service ensures that no detail is overlooked and your loved one remains supported throughout the entire process."
            textboxLayout="default"
            center={true}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardMedia
            title="Our Core Services"
            description="Specialized care designed to alleviate the burden of transition for you and your family."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { id: "s1", title: "Transition Planning", description: "A clear, compassionate roadmap tailored to your family's unique needs.", tag: "Planning" },
              { id: "s2", title: "Downsizing & Logistics", description: "Professional guidance through sorting, distributing, and organizing belongings.", tag: "Logistics" },
              { id: "s3", title: "Move Management", description: "Coordinated logistics so you can focus on being present for your family.", tag: "Management" }
            ]}
          />
        </div>

        <div id="when-to-reach-out" data-section="when-to-reach-out">
          <FaqSplitText
            sideTitle="When to Reach Out"
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
                { id: "w1", title: "When you feel overwhelmed", content: "If the logistical demands of home management or impending transition are becoming a source of stress, we can provide immediate clarity." },
                { id: "w2", title: "When safety becomes a concern", content: "If living at home has introduced new risks, we help you assess the situation with compassion and build a safe path forward." }
            ]}
          />
        </div>

        <div id="why-palante" data-section="why-palante">
           <FeatureCardMedia
            title="Why Choose Palante STS"
            description="We bring over 20 years of experience, but more importantly, we bring deep, personal empathy to every family we serve."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
                { id: "p1", title: "Family-First Approach", description: "We treat every client with the same compassion and urgency we would provide to our own family members.", tag: "Empathy" },
                { id: "p2", title: "Single Point of Contact", description: "We are your dedicated partner and advocate, shielding you from the fragmented nature of transition services.", tag: "Advocacy" }
            ]}
           />
        </div>

        <div id="final-cta" data-section="final-cta">
          <ContactCTA
            tag="Get Started"
            title="Ready for Gentle Guidance?"
            description="Schedule your no-obligation consultation today to explore the roadmap for your family's next chapter."
            buttons={[{ text: "Schedule Your Call", href: "/contact" }]}
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Palante STS"
            imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }] },
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Referral Partner", href: "/referral-partner" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
