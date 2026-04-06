"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Handshake, Search, Target, ShieldCheck, Users, Briefcase, FileText } from "lucide-react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import ContactText from "@/components/sections/contact/ContactText";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function ReferralPartnerPage() {
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
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
              { name: "Partner", id: "/referral-partner" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="hero" data-section="hero">
          <ContactSplit
            tag="For Professionals"
            title="A Trusted Transition Coordination Partner"
            description="We serve as an extension of your professional practice, providing the logistics, real estate oversight, and senior placement coordination your clients need to navigate complex transitions with grace and efficiency."
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="pain-points" data-section="pain-points">
          <FeatureBorderGlow
            title="Why Professionals Refer to Palante"
            description="We bridge the gap for your clients, ensuring they arrive at their next chapter prepared, informed, and supported. We handle the heavy lifting so you can focus on your professional expertise."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { icon: Briefcase, title: "Expert Transition Management", description: "From downsizing coordination to logistical hurdles, we manage every detail to prevent family friction and delays." },
              { icon: Handshake, title: "Seamless Professional Collaboration", description: "We work closely with attorneys, fiduciaries, and advisors to ensure the transition aligns perfectly with legal and financial strategies." },
              { icon: Users, title: "Concierge Placement Support", description: "We guide families through the maze of senior living options, finding the right fit that honors their lifestyle and care needs." },
              { icon: ShieldCheck, title: "Dignified Advocacy", description: "Our calm, professional presence serves as a trusted guide, reducing family stress and preserving client relationships for your practice." }
            ]}
          />
        </div>

        <div id="trust-section" data-section="trust-section">
          <ContactText
            text="How Palante Supports Your Clients: We provide a single, dedicated point of contact who acts as an advocate, logistics manager, and emotional anchor for families in transition."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="process" data-section="process">
          <ContactText
            text="Valuable Referral Benefits: By partnering with Palante, you ensure your clients receive the white-glove logistical support required for successful, timely transitions, allowing you to focus on your specialized counsel."
            background={{ variant: "rotated-rays-static" }}
            useInvertedBackground={true}
          />
        </div>

        <div id="cta-strip" data-section="cta-strip">
          <ContactCTA
            tag="Partnership"
            title="Join Our Referral Network"
            description="We welcome inquiries from trusted senior service professionals who share our commitment to families. Let's discuss how we can become your go-to transition partner."
            buttons={[{ text: "Request a Partnership Conversation", href: "/contact" }]}
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "About", href: "/about" }] },
              { title: "Company", items: [{ label: "Referral Partner", href: "/referral-partner" }, { label: "Contact", href: "/contact" }] },
              { title: "Support", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
