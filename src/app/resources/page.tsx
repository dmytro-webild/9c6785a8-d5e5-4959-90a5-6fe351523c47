"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
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
        {
          name: "Home",          id: "/"},
        {
          name: "How It Works",          id: "/how-it-works"},
        {
          name: "Services",          id: "/services"},
        {
          name: "About",          id: "/about"},
        {
          name: "Resources",          id: "/resources"},
        {
          name: "Contact",          id: "/contact"},
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
          id: "b1",          category: "Downsizing",          title: "5 Tips for Downsizing",          excerpt: "How to sort items with care.",          imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",          authorName: "Palante STS",          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          date: "Jan 2026"},
        {
          id: "b2",          category: "Housing",          title: "Assisted Living 101",          excerpt: "Understanding the types of senior homes.",          imageSrc: "https://images.unsplash.com/photo-1581578028711-2d7c588b5608?q=80&w=800",          authorName: "Palante STS",          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          date: "Jan 2026"},
        {
          id: "b3",          category: "Real Estate",          title: "Selling a Senior Home",          excerpt: "Preparing for a smooth sale.",          imageSrc: "https://images.unsplash.com/photo-1540158546175-97e3a3512b9a?q=80&w=800",          authorName: "Palante STS",          authorAvatar: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",          date: "Jan 2026"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "How It Works",              href: "/how-it-works"},
            {
              label: "Services",              href: "/services"},
          ],
        },
        {
          items: [
            {
              label: "About Us",              href: "/about"},
            {
              label: "Resources",              href: "/resources"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          items: [
            {
              label: "CA DRE# 01832704",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}