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
import ContactText from "@/components/sections/contact/ContactText";

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
              { name: "How It Works", id: "/how-it-works" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Resources", id: "/resources" }
            ]}
            brandName="Palante STS"
          />
        </div>

        <div id="hero" data-section="hero">
          <ContactSplit
            tag="Supporting Aging Parents"
            title="Compassionate Support for Your Family's Next Chapter"
            description="Palante STS provides the quiet confidence, expert logistics, and deep empathy needed to navigate your parents' transition to senior living—together."
            buttonText="Schedule a Consultation"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="pain-points" data-section="pain-points">
          <FeatureBorderGlow
            title="The Challenges We Help You Handle"
            description="Transitions are more than moving boxes; they are emotional journeys. We lift the burden so you can focus on being present for your loved one."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { icon: Users, title: "Navigating Care Options", description: "We simplify finding the right living environment that honors your parent's unique needs." },
              { icon: HeartHandshake, title: "Emotional Advocacy", description: "We serve as a calm, compassionate voice during the stressful moments of family change." },
              { icon: ShieldCheck, title: "Logistical Real Estate Support", description: "From selling the family home to downsizing belongings, we manage every detail with dignity." },
              { icon: Home, title: "Clear Path Forward", description: "We turn confusion into a clear roadmap, ensuring every family member feels informed and supported." }
            ]}
          />
        </div>

        <div id="trust-section" data-section="trust-section">
          <ContactText
            text="Trust our 20+ years of local Southern California expertise to provide the steady guidance your family needs during this sensitive time."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="process" data-section="process">
          <TimelineHorizontalCardStack
            title="A Gentle Path Forward"
            description="We simplify the complexities of this transition with a clear, step-by-step approach designed to keep you informed and at ease."
            textboxLayout="default"
          >
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border"><h3>1. Quiet Listening</h3><p>We begin by simply listening to your family’s unique story, needs, and hopes for this new chapter.</p></div>
              <div className="p-6 rounded-lg bg-card border"><h3>2. Personalized Roadmap</h3><p>We develop a thoughtful plan that integrates care, logistics, and real estate, tailored to your family's needs.</p></div>
              <div className="p-6 rounded-lg bg-card border"><h3>3. Committed Partnership</h3><p>We walk beside you as your single point of contact, ensuring every detail is handled with integrity and calm.</p></div>
            </div>
          </TimelineHorizontalCardStack>
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="Families We’ve Supported"
            description="Honoring your trust is the most important part of our work."
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "Sarah J.", handle: "Los Angeles", testimonial: "Ronnie provided not just expert guidance through our move, but a sense of calm that made all the difference during such a vulnerable time.", rating: 5 },
              { id: "t2", name: "Mark & Elena R.", handle: "Orange County", testimonial: "The transition felt overwhelming until we partnered with Palante. They managed the coordination perfectly, allowing us to focus entirely on Mom’s comfort.", rating: 5 },
              { id: "t3", name: "David L.", handle: "San Diego", testimonial: "Their empathy and logistical expertise were life-changing. We never felt alone during the process of finding the right community for Dad.", rating: 5 }
            ]}
          />
        </div>

        <div id="cta-strip" data-section="cta-strip">
          <ContactText
            text="Ready to ease the transition? Let's take the first step together."
            background={{ variant: "rotated-rays-static" }}
            useInvertedBackground={true}
            buttons={[{ text: "Schedule Your Private Consultation", href: "/contact" }]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Reflective Answers"
            sideDescription="We are here to help you feel confident as you take the next step."
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "How do we begin?", content: "We invite you to reach out for a private, no-pressure conversation. It is a chance to share your situation and see if our partnership feels right for your family." },
              { id: "2", title: "How do you support the family?", content: "We act as your advocate, managing the practical demands so you can remain present and connected to your parent during this transition." }
            ]}
            buttons={[{ text: "Schedule Your Private Consultation", href: "/contact" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Palante STS"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "About", href: "/about" }] },
              { title: "Company", items: [{ label: "Resources", href: "/resources" }, { label: "Services", href: "/services" }] },
              { title: "Support", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}