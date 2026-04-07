"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";

export default function AboutPage() {
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
                    { name: "Resources", id: "/resources" }
                ]}
                brandName="Palante STS"
            />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: 'text', content: "Compassion at the " },
              { type: 'text', content: "Heart of Every Transition" }
            ]}
            useInvertedBackground={false}
            ariaLabel="Founder Intro and My Story"
          />
        </div>

        <div id="why-palante" data-section="why-palante">
          <ContactText
            text="Why Palante: We believe a senior transition is not just a logistical move—it is an emotional journey. We serve as your steady guide, ensuring every step is taken with grace, transparency, and a profound respect for the life your loved one has built."
            background={{ variant: "plain" }}
            useInvertedBackground={true}
          />
        </div>

        <div id="what-we-bring" data-section="what-we-bring">
           <ContactText
            text="What I Bring to Your Family: Two decades of Southern California senior transition experience, holistic care integration, and dedicated family advocacy."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="who-we-serve" data-section="who-we-serve">
          <ContactText
            text="Who I Serve: Families across Southern California navigating complex, overwhelming transitions looking for a clear, dignified path forward."
            background={{ variant: "plain" }}
            useInvertedBackground={true}
          />
        </div>

        <div id="contact" data-section="contact">
            <ContactText
                text="Ready to take the first step toward peace of mind? Let's discuss your family's needs."
                buttons={[{ text: "Schedule Your Private Consultation", href: "/contact" }]}
                background={{ variant: "sparkles-gradient" }}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704" }] }
            ]}
            logoText="Palante STS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
