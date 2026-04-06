"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { Heart, Compass, ShieldCheck } from "lucide-react";

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
            <NavbarLayoutFloatingInline
                navItems={[
                    { name: "Home", id: "/" },
                    { name: "How It Works", id: "/how-it-works" },
                    { name: "Services", id: "/services" },
                    { name: "About", id: "/about" },
                    { name: "Resources", id: "/resources" },
                    { name: "Contact", id: "/contact" }
                ]}
                brandName="Palante STS"
                button={{ text: "Get Started", href: "/contact" }}
            />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            tag="Our Story"
            tagIcon={Heart}
            title="More Than A Transition. A New Chapter for Your Loved One."
            className="py-24"
            useInvertedBackground={false}
          />
          <div className="px-6 py-12 max-w-4xl mx-auto space-y-8 text-lg text-foreground/80">
            <p>Founded by Ronnie Konishi after navigating a deeply personal family transition, Palante STS was born from a singular belief: moving forward is not just a logistical necessity—it is an emotional journey that deserves to be honored with grace, patience, and dignity.</p>
            <p>We approach every family story as if it were our own. Our mission is to bridge the gap between where your family is today and the secure, supported future your parents deserve. We don't just move boxes; we handle the delicate transition of a lifetime, ensuring that every detail is managed with local expertise and heart.</p>
            <p>With over two decades of Southern California real estate experience, Ronnie brings a unique blend of analytical rigor and deep compassion. We remove the burden of logistics so your family can focus on what truly matters: staying present, connected, and at peace during this transformative chapter.</p>
          </div>
        </div>

        <div id="trust-section" data-section="trust-section">
          <TextAbout
            tag="Our Values"
            tagIcon={ShieldCheck}
            title="Why Families Trust Palante"
            className="py-16 bg-card"
            useInvertedBackground={true}
          />
          <div className="px-6 py-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-foreground/80">
            <div className="p-6 rounded-xl border">
                <h3 className="font-bold mb-2">Deep Empathy</h3>
                <p>We understand that transition often brings uncertainty. Our team serves as a steady, compassionate anchor for every family member.</p>
            </div>
            <div className="p-6 rounded-xl border">
                <h3 className="font-bold mb-2">Logistical Mastery</h3>
                <p>From downsizing complex estates to securing the right care facility, we orchestrate the entire process so you don't have to.</p>
            </div>
            <div className="p-6 rounded-xl border">
                <h3 className="font-bold mb-2">Advocacy First</h3>
                <p>We are your dedicated partners and advocates, shielding you from the fragmented nature of senior care and real estate services.</p>
            </div>
            <div className="p-6 rounded-xl border">
                <h3 className="font-bold mb-2">Local Expertise</h3>
                <p>Rooted in Southern California, we leverage our long-term relationships and deep community knowledge to provide superior placement and transition solutions.</p>
            </div>
          </div>
        </div>

        <div id="contact" data-section="contact">
            <ContactCTA
                tag="Next Steps"
                tagIcon={Compass}
                title="Ready to Start a Gentle Conversation?"
                description="You don't have to navigate this alone. Let's discuss your family's journey and see how we can provide the roadmap you need."
                buttons={[{ text: "Schedule Your Consultation", href: "/contact" }]}
                background={{ variant: "sparkles-gradient" }}
                useInvertedBackground={true}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            columns={[
                { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "How It Works", href: "/how-it-works" }] },
                { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
                { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }] }
            ]}
            logoText="Palante STS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
