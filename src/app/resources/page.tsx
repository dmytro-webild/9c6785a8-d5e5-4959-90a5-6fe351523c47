"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function ResourcesPage() {
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

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Family Transition Resources"
      description="Essential guides and insights for navigating the senior transition process in SoCal."
      blogs={[
        {
          id: "b1",          
          category: "Downsizing",          
          title: "5 Tips for Downsizing",          
          excerpt: "How to sort items with care.",          
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024899412-2vvj9muh.jpg",          
          imageAlt: "Senior couple home environment",          
          authorName: "Palante STS",          
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          
          date: "Jan 2026"
        },
        {
          id: "b2",          
          category: "Housing",          
          title: "Assisted Living 101",          
          excerpt: "Understanding the types of senior homes.",          
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775024899413-sat65gaf.jpg",          
          imageAlt: "Senior community dining",          
          authorName: "Palante STS",          
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          
          date: "Jan 2026"
        },
        {
          id: "b3",          
          category: "Caregiving",          
          title: "Supporting Your Parents",          
          excerpt: "Balancing care and compassion.",          
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775025173345-exfayvm0.jpg",          
          imageAlt: "Family caregiver supporting senior",          
          authorName: "Palante STS",          
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          
          date: "Jan 2026"
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "(213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}