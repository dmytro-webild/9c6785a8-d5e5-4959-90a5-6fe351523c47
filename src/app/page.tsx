"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';

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

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="When It's Time for Mom or Dad to Move — We Handle Everything."
      description="California-licensed Senior Transition Specialist serving Orange County, LA, Riverside & San Bernardino. Real estate. Placement. Downsizing. One expert. One seamless process."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=1", imageAlt: "Family support consultation" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=2", imageAlt: "Caring transition support" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=3", imageAlt: "Seamless senior move" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=4", imageAlt: "Helping families forward" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=5", imageAlt: "Expert transition guidance" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=6", imageAlt: "Professional real estate care" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=7", imageAlt: "Family care professional" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=8", imageAlt: "Senior community visit" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=9", imageAlt: "Seamless downsizing process" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=10", imageAlt: "Happy senior transition" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=11", imageAlt: "Trusted expert service" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=12", imageAlt: "Quality senior placement" },
      ]}
      buttons={[
        { text: "Claim Your Free Needs Assessment Now", href: "/contact" },
        { text: "See Our Process", href: "/how-it-works" },
      ]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/shot-happy-50-year-old-retired-woman-with-freckles-gray-hair-posing-stylish-interior-background-wearing-white-shirt-smiling-broadly-front_343059-3758.jpg", alt: "Client 1" },
        { src: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg", alt: "Client 2" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-happy-queer-eldery-women_23-2149732507.jpg", alt: "Client 3" },
        { src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5287.jpg", alt: "Client 4" },
        { src: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg", alt: "Client 5" },
      ]}
      marqueeItems={[
        { type: "text", text: "Licensed" },
        { type: "text", text: "Trusted" },
        { type: "text", text: "Professional" },
        { type: "text", text: "Compassionate" },
        { type: "text", text: "Proven" },
      ]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: 1, title: "Step 1: Needs Assessment", description: "Dad fell last month and can't live alone anymore — we provide immediate assessment and safety-first planning to bring you peace of mind.", imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg" },
        { id: 2, title: "Step 2: Logistical Management", description: "Downsizing an entire life's accumulation is overwhelming; we restore your home's value and simplify the process, ensuring family unity throughout.", imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg" },
        { id: 3, title: "Step 3: Family Advocacy", description: "Living states away creates unnecessary stress; we serve as your local advocate to bridge the gap and maintain harmony for the whole family.", imageSrc: "http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg" },
      ]}
      title="Simplifying Every Step of Your Parent’s Transition"
      description="Navigating a parent's major life transition is difficult. We specialize in managing the emotional and logistical heavy lifting with warmth and expertise."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardThirteen
      carouselMode="auto"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", handle: "Orange County", testimonial: "Palante STS handled everything with such care and expertise. I don't know what we would have done without them.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/shot-happy-50-year-old-retired-woman-with-freckles-gray-hair-posing-stylish-interior-background-wearing-white-shirt-smiling-broadly-front_343059-3758.jpg?_wi=1" },
        { id: "2", name: "David Chen", handle: "Los Angeles", testimonial: "The combination of real estate and placement services was exactly what we needed for Mom.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg" },
        { id: "3", name: "Elena Rodriguez", handle: "Riverside County", testimonial: "Kind, patient, and deeply knowledgeable about senior communities. They truly made 'pa'lante' feel real.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-queer-eldery-women_23-2149732507.jpg" },
        { id: "4", name: "Robert Johnson", handle: "San Bernardino", testimonial: "One point of contact for the house sale, placement, and downsizing. An absolutely seamless experience.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5287.jpg" },
        { id: "5", name: "Linda Thompson", handle: "Orange County", testimonial: "They provided the emotional support and logistical clarity our family desperately needed.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/shot-happy-50-year-old-retired-woman-with-freckles-gray-hair-posing-stylish-interior-background-wearing-white-shirt-smiling-broadly-front_343059-3758.jpg?_wi=2" },
      ]}
      showRating={true}
      title="What Our Families Say"
      description="See why families count on Palante Senior Transition Specialists for expert, compassionate care during major life transitions."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Commitment to Dignity"
      description={[
        "Moving a parent is not just a logistical task; it is an emotional journey.",        
        "Our mission is to guide you with transparency, respect, and deep expertise, ensuring your loved one's future is secure and comfortable.",        "My own mother's transition taught me how crucial an advocate is to prevent burnout and ensure a smooth move. I founded Palante STS to be that advocate for you and your family, treating every client with the same compassion I would expect for my own family."
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
        buttons={[{ text: "Let's Talk Soon", href: "/contact" }]}
        background={{ variant: "sparkles-gradient" }}
        useInvertedBackground={false}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "CA DRE# 00000000", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}