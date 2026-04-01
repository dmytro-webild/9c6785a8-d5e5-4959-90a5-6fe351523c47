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
        { name: "(213) 706-0093 (Call/Text)", id: "tel:2137060093" }
      ]}
      brandName="Palante STS"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Let's Talk"
      description="Most families tell us they wish they had called sooner. Call or text us anytime at (213) 706-0093. Whenever you're ready, we're here."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", className: "bg-white border border-gray-300 focus:border-gray-500" },
        { name: "email", type: "email", placeholder: "Your Email", className: "bg-white border border-gray-300 focus:border-gray-500" },
        { name: "phone", type: "tel", placeholder: "Your Phone Number", className: "bg-white border border-gray-300 focus:border-gray-500" },
      ]}
      textarea={{ name: "situation", placeholder: "Tell us a little about your situation", className: "bg-white border border-gray-300 focus:border-gray-500" }}
      mediaAnimation="none"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgAzSnGoyjp2WRFEpWFU41xUOw/uploaded-1775031054157-h3a6el8o.jpg"
      imageAlt="Happy senior smiling in a sunny community"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "(213) 706-0093 (Call or Text)", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}