"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function AboutPage() {
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

  <div id="about" data-section="about">
      <MediaAbout
      title="Ronnie Konishi"
      description="Founder & Principal Senior Transition Specialist · California Licensed Realtor · 20 Years Experience"
      useInvertedBackground={false}
      className="py-20"
    />
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-8">
      <blockquote className="text-2xl italic text-gray-800 font-serif border-l-4 border-blue-600 pl-6 py-2 my-8">
        'I remember wishing there was just one person who could guide us through everything — with both expertise and compassion.'
      </blockquote>
      
      <p className="text-lg leading-relaxed text-gray-700">
        When my mother needed to move from our family home into assisted living, I thought my 20 years as a licensed California Realtor would make it easier. I knew real estate. I knew contracts and timelines and negotiations.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        I was not prepared for the rest of it.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        The endless phone calls to senior communities — none of whom seemed to have availability when we needed it. The contradictory advice from well-meaning friends. The sheer weight of deciding what happened to 40 years of furniture, photographs, and memories. And underneath all of it, the emotional toll on every member of our family — the guilt, the grief, the exhaustion of making enormous decisions while also trying to just be a present, loving son.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        I remember standing in my mother's living room one afternoon, surrounded by decades of her life, thinking: there has to be a better way to do this.
      </p>

      <h2 className="text-3xl font-semibold mt-12">Why I Founded Palante STS</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        After my family's experience, I couldn't stop thinking about the thousands of Southern California families going through the same thing every single day — without a roadmap, without a guide, without anyone who could hold the whole picture at once.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        I founded Palante Senior Transition Specialists to be the service I wished my family had. One person. One point of contact. Someone who could sell the home with genuine expertise, identify and personally vet the right senior communities, and manage the downsizing and move — all while actually understanding what the family was going through emotionally.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        The name says it all. Pa'lante — from the Cuban expression para adelante — means forward. It's what we say when we're facing something hard and we choose to keep moving. That's what every family I work with is doing. And that's the energy I bring to every engagement.
      </p>

      <h2 className="text-3xl font-semibold mt-12">What I Bring to Your Family</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
        <li><strong>20 years as a California-licensed Realtor</strong> — I know how to price, prepare, and sell a senior's home for top dollar in the Orange County, LA, Riverside, and San Bernardino markets.</li>
        <li><strong>Personal knowledge of Southern California's senior communities</strong> — I have personally toured Board & Care homes, assisted living communities, and memory care facilities across all four counties.</li>
        <li><strong>End-to-end coordination</strong> — I don't hand you off. From the first conversation to move-in day, I am your one point of contact.</li>
        <li><strong>The understanding that only comes from lived experience</strong> — I know what it feels like to stand in your parent's home and not know where to start.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12">Who I Serve</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        I work with families across Orange County, Los Angeles County, Riverside County, and San Bernardino County. My clients are adult children — many managing a parent's transition from another city or state — and seniors who are ready to take this step on their own terms, with someone they trust beside them.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Southern California is one of the most diverse regions in the country, and the families I serve reflect that richness. I am honored to work across cultures and communities, and I approach every family's situation with the same deep respect for their unique story, values, and needs. Se habla español.
      </p>
    </div>
  </div>

  <div id="contact" data-section="contact">
    <div className="px-6 py-12 max-w-4xl mx-auto text-center">
        <p className="text-xl italic font-serif mb-8 text-gray-800">'I'd love to learn about your family's situation. There's no pressure and no obligation — just a conversation with someone who has been where you are and knows the way forward.'</p>
        <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Schedule a Call with Ronnie
        </a>
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }, { label: "Services", href: "/services" }] },
        { items: [{ label: "About Us", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }] },
        { items: [{ label: "≡ (213) 706-0093", href: "tel:2137060093" }, { label: "CA DRE# 01832704", href: "#" }, { label: "Privacy Policy", href: "#" }] },
      ]}
      logoText="Palante STS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}