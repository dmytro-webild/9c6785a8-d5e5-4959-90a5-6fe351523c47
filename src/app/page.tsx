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
            tag="A Partner for Your Family's Journey"
            title="Walking Beside You Through Every Transition"
            description="Helping you navigate the move to senior living with the profound care, expert coordination, and quiet confidence your family deserves."
            buttonText="Begin a Conversation"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="pain-points" data-section="pain-points">
          <FeatureBorderGlow
            title="Your Peace of Mind is Our Priority"
            description="We understand that honoring your parent's future is a deeply personal commitment. We are here to carry the logistical load so you can focus on being present."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { icon: Users, title: "Graceful Logistical Guidance", description: "From the home sale to the final move, we handle the complex details with professional care." },
              { icon: HeartHandshake, title: "Emotional Support", description: "We offer a steady, reassuring presence through the highs and lows of this life transition." },
              { icon: ShieldCheck, title: "Your Advocate in Care", description: "We ensure your loved one's new environment truly honors their dignity, safety, and personal preferences." },
              { icon: Home, title: "Clear, Thoughtful Planning", description: "We turn an overwhelming process into a clear path forward, built on trust and expert perspective." }
            ]}
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
                { id: "t1", name: "Sarah J.", handle: "Los Angeles", testimonial: "Ronnie provided not just expert guidance through our move, but a sense of calm that made all the difference during such a vulnerable time.", rating: 5 }
            ]}
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
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] },
              { title: "Company", items: [{ label: "Contact", href: "/contact" }] },
              { title: "Support", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}