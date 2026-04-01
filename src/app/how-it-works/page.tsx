"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Home, Lightbulb, FileText, CheckCircle } from "lucide-react";

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
      <FeatureCardNine
      showStepNumbers={true}
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our 4-Step Process"
      description="We ensure your family transitions with clarity, confidence, and peace of mind through a predictable 4-step framework."
      features={[
        { 
          id: 1, 
          title: "Free Consultation", 
          description: "We listen first — no pressure, no scripts. Just expert ears.", 
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024464999-3a108hqh.jpg",          imageAlt: "Ronnie meeting a family during an initial consultation"
        },
        { 
          id: 2, 
          title: "Custom Transition Plan", 
          description: "Every situation is different. Yours gets a custom roadmap.", 
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-jlqq0vat.jpg",          imageAlt: "Developing a customized transition roadmap"
        },
        { 
          id: 3, 
          title: "Full Execution", 
          description: "We handle home sales, placement tours, and downsizing with you.", 
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-63c15eu0.jpg",          imageAlt: "Managing the home sale and downsizing process"
        },
        { 
          id: 4, 
          title: "Move-In Day", 
          description: "From old home to new, fully set up and ready to enjoy.", 
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-s8c2hkkm.jpg",          imageAlt: "Settling into the new home on move-in day"
        },
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
        { id: "q6", title: "What kind of communities do you work with?", content: "The full spectrum: board and care homes, assisted living, memory care, and 55+ communities."},
      ]}
      title="Frequently Asked Questions"
      description="Clear answers to your most pressing questions about the transition process."
      faqsAnimation="slide-up"
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