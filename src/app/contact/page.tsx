"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Let's Talk"
      description="Most families tell us they wish they had called sooner. Whenever you're ready, we're here."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", className: "bg-white border border-gray-300 focus:border-gray-500" },
        { name: "email", type: "email", placeholder: "Your Email", className: "bg-white border border-gray-300 focus:border-gray-500" },
        { name: "phone", type: "tel", placeholder: "Your Phone Number", className: "bg-white border border-gray-300 focus:border-gray-500" },
      ]}
      textarea={{ name: "situation", placeholder: "Tell us a little about your situation", className: "bg-white border border-gray-300 focus:border-gray-500" }}
      mediaAnimation="none"
      imageSrc="http://img.b2bpic.net/free-photo/mature-women-holding-hands_23-2148354864.jpg?_wi=13"
      imageAlt="warm multi-generational family moments"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}