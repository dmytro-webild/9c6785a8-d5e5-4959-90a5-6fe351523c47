"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import TextBox from '@/components/Textbox';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { HeartHandshake, Home, ShieldCheck, Users, ClipboardCheck, Target, Sparkles } from "lucide-react";

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
          <NavbarStyleCentered
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

        <div id="hero" data-section="hero">
          <ContactSplit
            tag="Expert Support"
            title="Comprehensive Transition Support"
            description="From the first conversation to move-in day, we are by your side, managing every logistical detail with the dignity and empathy your family deserves."
            mediaAnimation="slide-up"
            background={{ variant: "sparkles-gradient" }}
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
            features={[
              { id: "s1", title: "Transition Planning", description: "A clear, compassionate roadmap tailored to your family's unique needs.", tag: "Planning" },
              { id: "s2", title: "Downsizing & Logistics", description: "Professional guidance through sorting, distributing, and organizing belongings.", tag: "Logistics" },
              { id: "s3", title: "Move Management", description: "Coordinated logistics so you can focus on being present for your family.", tag: "Management" },
              { id: "s4", title: "Placement & Vetting", description: "Personalized tours and advocacy to find the right senior living community.", tag: "Placement" },
              { id: "s5", title: "Real Estate Coordination", description: "Expert home sale management focused on top dollar and minimal stress.", tag: "Real Estate" }
            ]}
          />
        </div>

        <div id="when-to-reach-out" data-section="when-to-reach-out">
          <FaqSplitText
            sideTitle="When to Reach Out"
            sideDescription="You don't have to wait for a crisis. We are here whenever you feel the need for clarity and support."
            faqsAnimation="slide-up"
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
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
              { title: "Support", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}