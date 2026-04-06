"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import { CheckCircle2, CalendarDays, MapPin, HandHeart, Heart, Award, ShieldCheck } from "lucide-react";

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
        { name: "≡ (213) 706-0093", id: "tel:2137060093" }
      ]}
      brandName="Palante STS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      title="We Help Families Navigate Senior Transitions with Compassion and Clarity"
      description="Expert guidance for downsizing, move management, senior living transitions, home sale support, and family peace of mind in Los Angeles, Orange, Riverside, and San Bernardino Counties."
      background={{ variant: "plain" }}
      testimonials={[
        { name: "Sarah Miller", handle: "SC, Orange", testimonial: "Palante STS transformed a stressful transition into a seamless experience. Their care is unmatched.", rating: 5 },
        { name: "David Chen", handle: "DC, Irvine", testimonial: "They handled the real estate and placement with such empathy and expertise. Highly recommend.", rating: 5 },
        { name: "Elena Rodriguez", handle: "ER, Riverside", testimonial: "Kind, patient, and deeply knowledgeable. They truly made 'pa'lante' feel real.", rating: 5 }
      ]}
      buttons={[
        { text: "Book a Free Consultation", href: "/contact" },
        { text: "Get the Free Home Safety Checklist", href: "/resources" },
      ]}
      avatarText="Trusted by families across SoCal"
      className="py-20"
      marqueeItems={[
          { type: 'text-icon', text: "CA DRE Licensed", icon: CheckCircle2 },
          { type: 'text-icon', text: "20 Years Experience", icon: CalendarDays },
          { type: 'text-icon', text: "4 Counties Served", icon: MapPin },
          { type: 'text-icon', text: "Placement Free to Families", icon: HandHeart }
      ]}
      marqueeSpeed={20}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      title="Why Families Trust Palante"
      description="We combine professional real estate expertise with deep senior care knowledge to advocate for your family."
      features={[
        {
          id: "t1",          title: "Real Estate Expertise",          description: ["20 years of experience ensuring top dollar for family homes.", "Full service listing support."],
        },
        {
          id: "t2",          title: "Personalized Advocacy",          description: ["We personally tour communities to ensure they meet our standard.", "Always acting in the senior's best interest."],
        },
        {
          id: "t3",          title: "Emotional Support",          description: ["We provide the compassionate guidance that families need.", "Available to facilitate family conversations."],
        }
      ]}
      titleSegments={[{ type: 'text', content: 'Why Families Trust Palante' }]
      }
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardThirteen
      showRating={true}
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", handle: "SC, Orange", testimonial: "Palante STS handled everything with such care and expertise. I don't know what we would have done without them.", rating: 5, icon: Heart },
        { id: "2", name: "David Chen", handle: "DC, Irvine", testimonial: "The combination of real estate and placement services was exactly what we needed for Mom.", rating: 5, icon: Award },
        { id: "3", name: "Elena Rodriguez", handle: "ER, Riverside", testimonial: "Kind, patient, and deeply knowledgeable about senior communities. They truly made 'pa'lante' feel real.", rating: 5, icon: ShieldCheck },
        { id: "4", name: "Robert Johnson", handle: "RJ, San Bernardino", testimonial: "One point of contact for the house sale, placement, and downsizing. An absolutely seamless experience.", rating: 5, icon: Heart },
      ]}
      title="Our Families' Success Stories"
      description="We specialize in bridging the gap between real estate and care management—here is how families feel on the other side of a transition."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Commitment to Dignity"
      description={[
        "Moving a parent is not just a logistical task; it is an emotional journey.",        
        "Our mission is to guide you with transparency, respect, and deep expertise, ensuring your loved one's future is secure and comfortable.",        
        "My own mother's transition taught me how crucial an advocate is to prevent burnout and ensure a smooth move. I founded Palante STS to be that advocate for you and your family, treating every client with the same compassion I would expect for my own family."
      ]}
      showBorder={true}
      buttons={[{ text: "Meet Our Team & Licensing", href: "/about" }]} 
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
        tag="Get In Touch"
        title="Start Your Gentle Transition Today"
        description="We're here to listen, support, and handle the heavy lifting. Reach out whenever you're ready—we'll guide you through this, step by step."
        buttons={[{ text: "Schedule My Free Consultation", href: "/contact" }]}
        background={{ variant: "sparkles-gradient" }}
        useInvertedBackground={false}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
        logoText="Palante STS"
        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-63c15eu0.jpg?_wi=2"
        columns={[
            { title: "Navigate", items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
            { title: "Support", items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
            { title: "Legal & Contact", items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] }
        ]}
        copyrightText="© 2025 | Palante Senior Transition Specialists"
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
