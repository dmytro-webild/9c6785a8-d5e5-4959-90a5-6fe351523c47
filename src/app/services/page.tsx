"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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

  <div id="product" data-section="product">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "re",          name: "Real Estate Services",          price: "Top Dollar",          variant: "Home Sale",          imageSrc: "http://img.b2bpic.net/free-vector/delivery-courier-people-icons-set_1284-17214.jpg?_wi=3"},
        {
          id: "sp",          name: "Senior Placement",          price: "Free",          variant: "Placement",          imageSrc: "http://img.b2bpic.net/free-vector/infographics-presentation-layout-template-with-business-people-silhouettes-icons_98292-4518.jpg?_wi=3"},
        {
          id: "tm",          name: "Transition Management",          price: "Custom",          variant: "Full Service",          imageSrc: "http://img.b2bpic.net/free-vector/flat-real-estate-infographic-template_23-2149009293.jpg?_wi=2"},
      ]}
      title="Comprehensive Services"
      description="One trusted professional handles the home sale, senior placement, and the physical move."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100%",          title: "Expert Coordination",          items: [
            "Real Estate",            "Placement",            "Downsizing"],
        },
        {
          id: "m2",          value: "4",          title: "Counties Served",          items: [
            "Orange",            "LA",            "Riverside",            "SB"],
        },
        {
          id: "m3",          value: "Free",          title: "Placement Fee",          items: [
            "Zero cost",            "to families"],
        },
      ]}
      title="Service Impact"
      description="Integrated management delivers better outcomes for seniors and their families."
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