"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import { CheckCircle2, CalendarDays, MapPin, HandHeart, Heart, Brain, Clock, Users, Home } from "lucide-react";

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

  <div id="emotional-support" data-section="emotional-support">
    <FeatureCardTen
      title="Helping Aging Parents Is Hard. You Shouldn’t Have to Figure It Out Alone."
      description="When the roles reverse, the weight of responsibility can feel overwhelming. We are here to carry that burden with you, providing the expertise and emotional support your family deserves to navigate this chapter with dignity and grace."
      textboxLayout="split"
      animationType="slide-up"
      useInvertedBackground={false}
      features={[{
          title: "We Carry the Load Together",          description: "Your family's peace of mind is our priority. We handle the complex logistics while keeping the focus on your parent's comfort and well-being.",          media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024464999-3a108hqh.jpg?_wi=2" },
          items: [
              { icon: Brain, text: "Confusing healthcare & housing bureaucracy" },
              { icon: Clock, text: "Exhausting time demands & logistical hurdles" },
              { icon: Users, text: "Emotional strain between siblings/family" },
              { icon: Home, text: "Uncertainty about the home sale & downsizing" }
          ],
          reverse: false
      }]}
      className="py-20"
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Step 1: Free Consultation", description: "We listen first — no pressure, no scripts. Just expert ears.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024464999-3a108hqh.jpg?_wi=2", imageAlt: "Ronnie meeting a family during an initial consultation" },
        { title: "Step 2: Your Personalized Plan", description: "Every situation is different. Yours gets a custom roadmap.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-jlqq0vat.jpg?_wi=2", imageAlt: "Developing a customized transition roadmap" },
        { title: "Step 3: We Handle Everything", description: "We handle home sales, placement tours, and downsizing with you.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-63c15eu0.jpg?_wi=2", imageAlt: "Managing the home sale and downsizing process" },
        { title: "Step 4: Move-In Day", description: "From old home to new, fully set up and ready to enjoy.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024465000-s8c2hkkm.jpg?_wi=2", imageAlt: "Settling into the new home on move-in day" },
      ]}
      title="Simplifying Every Step of Your Parent’s Transition"
      description="Navigating a parent's major life transition is difficult. We specialize in managing the emotional and logistical heavy lifting with warmth and expertise."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardThirteen
      showRating={true}
      animationType="none"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", handle: "SC, Orange", testimonial: "Palante STS handled everything with such care and expertise. I don't know what we would have done without them.", rating: 5 },
        { id: "2", name: "David Chen", handle: "DC, Irvine", testimonial: "The combination of real estate and placement services was exactly what we needed for Mom.", rating: 5 },
        { id: "3", name: "Elena Rodriguez", handle: "ER, Riverside", testimonial: "Kind, patient, and deeply knowledgeable about senior communities. They truly made 'pa'lante' feel real.", rating: 5 },
        { id: "4", name: "Robert Johnson", handle: "RJ, San Bernardino", testimonial: "One point of contact for the house sale, placement, and downsizing. An absolutely seamless experience.", rating: 5 },
      ]}
      title="What Our Families Say"
      description="See why families count on Palante Senior Transition Specialists for expert, compassionate care during major life transitions."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Commitment to Dignity"
      description={[
        "Moving a parent is not just a logistical task; it is an emotional journey.",        "Our mission is to guide you with transparency, respect, and deep expertise, ensuring your loved one's future is secure and comfortable.",        "My own mother's transition taught me how crucial an advocate is to prevent burnout and ensure a smooth move. I founded Palante STS to be that advocate for you and your family, treating every client with the same compassion I would expect for my own family."
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
