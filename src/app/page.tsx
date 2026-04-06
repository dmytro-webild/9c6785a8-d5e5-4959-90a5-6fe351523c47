"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { CheckCircle2, HeartHandshake, Home, ShieldCheck, Users } from "lucide-react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function HomePage() {
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
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="hero" data-section="hero">
          <ContactSplit
            tag="Compassionate Senior Transition Support"
            title="When It’s Time to Transition, You Don’t Have to Carry the Weight Alone"
            description="Helping overwhelmed adult children navigate the complex move to senior living with dignity, expert coordination, and peace of mind."
            buttonText="Book Your Free 20-Minute Consultation"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="pain-points" data-section="pain-points">
          <FeatureBorderGlow
            title="Common Challenges We Resolve"
            description="We understand that helping an aging parent is a massive undertaking. You are likely juggling more than you should."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { icon: Users, title: "Overwhelmed by Logistics", description: "Managing property sales, downsizing, and placement all at once." },
              { icon: HeartHandshake, title: "Emotional Strain", description: "Feeling the weight of guilt, exhaustion, and difficult family dynamics." },
              { icon: ShieldCheck, title: "Safety Concerns", description: "Worrying if your parent is safe and truly cared for in their daily environment." },
              { icon: Home, title: "Navigating Systems", description: "Confused by the maze of senior communities, waitlists, and complex paperwork." }
            ]}
          />
        </div>

        <div id="process" data-section="process">
            <TimelineHorizontalCardStack
                title="A Clear, Gentle 3-Step Process"
                description="We simplify the path forward so you can focus on your family, not the paperwork."
                textboxLayout="default"
            >
                <div className="space-y-6">
                    <div className="p-6 rounded-lg bg-card border"><h3>1. Consultation</h3><p>We start with a free 20-minute call to listen to your story and understand your goals.</p></div>
                    <div className="p-6 rounded-lg bg-card border"><h3>2. Personalized Plan</h3><p>We build a bespoke roadmap for the transition, addressing housing, home sale, and downsizing.</p></div>
                    <div className="p-6 rounded-lg bg-card border"><h3>3. Coordinated Execution</h3><p>We step in to handle the heavy lifting, serving as your single point of contact until your parent is settled.</p></div>
                </div>
            </TimelineHorizontalCardStack>
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="Families We’ve Helped"
            description="Real relief for real families in Southern California."
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            testimonials={[
                { id: "t1", name: "Sarah J.", handle: "Los Angeles", testimonial: "Ronnie took the stress out of our transition. His real estate expertise combined with his deep knowledge of senior communities was a godsend.", rating: 5 }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            sideDescription="Everything you need to know about starting your consultation."
            faqsAnimation="slide-up"
            faqs={[
              { id: "1", title: "Is the consultation really free?", content: "Yes, our initial 20-minute discovery consultation is entirely free and no-obligation. We just want to see how we can best support your family." },
              { id: "2", title: "How do I book?", content: "Click the button above or visit our contact page to pick a time that works for you." }
            ]}
            buttons={[{ text: "Book a Consultation", href: "/contact" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] },
              { title: "Company", items: [{ label: "Contact", href: "/contact" }] },
              { title: "Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
