"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Handshake, Search, ArrowRight, ShieldCheck } from "lucide-react";
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
            tag="For Communities"
            title="A Trusted Transition Partner for Senior Living Communities"
            description="We bridge the gap for families, ensuring they arrive at your community informed, prepared, and ready to call it home. Partner with Palante to streamline the admission process for both your team and new residents."
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="pain-points" data-section="pain-points">
          <FeatureBorderGlow
            title="Solving Community Challenges"
            description="We address the friction points that delay admissions and increase family stress."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { icon: Search, title: "Qualified Leads", description: "We work with families who are educated about the process and ready for the next step." },
              { icon: Handshake, title: "Reduced Drop-off", description: "By supporting the emotional and logistical move, we ensure families stay committed to their choice of your community." },
              { icon: ShieldCheck, title: "Streamlined Admissions", description: "Our detailed logistics support helps families clear the hurdles of downsizing and selling their homes quickly." }
            ]}
          />
        </div>

        <div id="trust-section" data-section="trust-section">
          <ContactText
            text="Palante STS acts as an extension of your community's values, providing the bridge that turns prospects into successful long-term residents."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="cta-strip" data-section="cta-strip">
          <ContactCTA
            tag="Partnership"
            title="Let's Discuss a Partnership"
            description="Discover how Palante STS can support your admissions goals and provide a higher standard of care for prospective families."
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
