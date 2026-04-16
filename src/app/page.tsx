"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ethereal Couture"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Timeless Elegance, Redefined."
      description="Discover our latest premium collection, crafted with meticulous attention to detail for the modern individual."
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-customer-trying-new-dress-boutique-woman-choosing-clothes-fashion-store-buying-clothes-boutique-concept_74855-11772.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/elegance-blonde-girl-fur-coat-store-fur-coats-leather-jackets_627829-8486.jpg",
          alt: "Elegant blonde girl in fur coat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegance-blonde-girl-coat-store-fur-coats-leather-jackets_627829-8510.jpg",
          alt: "Elegant blonde girl in coat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegance-blonde-girl-fur-coat-store-fur-coats-leather-jackets_627829-8482.jpg",
          alt: "Elegant blonde girl in fur coat at the store",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elderly-businesswoman-coat-outside-cafe_1303-19475.jpg",
          alt: "Elderly businesswoman in a coat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-leaning-against-wooden-sculpture_171337-19338.jpg",
          alt: "Fashion model portrait",
        },
      ]}
      avatarText="Trusted by 5,000+ fashion enthusiasts"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Crafted to Perfection"
      description={[
        "At Ethereal Couture, we believe that clothing is more than just fabric; it is an expression of self.",
        "Our philosophy blends timeless craftsmanship with modern minimalism, ensuring every garment feels like a second skin.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Premium Materials",
          descriptions: [
            "Sourced from the finest mills worldwide.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-violet-fabric-suit_23-2148402304.jpg",
        },
        {
          id: "f2",
          title: "Sustainable Practices",
          descriptions: [
            "Ethically produced with planet in mind.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/female-fashion-designer-studio-working-clothing_23-2150407888.jpg",
        },
        {
          id: "f3",
          title: "Artisanal Tailoring",
          descriptions: [
            "Hand-finished details for lasting wear.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414741.jpg",
        },
      ]}
      title="Why Choose Ethereal?"
      description="Our commitment to quality sets us apart in the fast-paced world of fashion."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "prod1",
          name: "Silk Blouse",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-photo-young-magnificent-woman-pink-shirt_158595-1030.jpg",
        },
        {
          id: "prod2",
          name: "Cashmere Sweater",
          price: "$250",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-neatly-folded-knitted-items-pastel-color_169016-18129.jpg",
        },
        {
          id: "prod3",
          name: "Tailored Trousers",
          price: "$180",
          imageSrc: "http://img.b2bpic.net/free-photo/client-suit-boutique-with-shopping-bags_7502-4397.jpg",
        },
        {
          id: "prod4",
          name: "Pleated Skirt",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-tall-model-wearing-pretty-grey-dress-decorated-with-fur-collar-sleeves-wearing-black-high-heels-isolate_132075-11536.jpg",
        },
        {
          id: "prod5",
          name: "Modern Blazer",
          price: "$300",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2738.jpg",
        },
        {
          id: "prod6",
          name: "Evening Dress",
          price: "$450",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blond-woman-white-long-dressand-black-evening-gloves_613910-10991.jpg",
        },
      ]}
      title="The Autumn Collection"
      description="Explore our curated selection of essential pieces for your wardrobe."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The quality of the material is unparalleled. It truly is the premium experience I've been looking for."
      rating={5}
      author="Sarah Jenkins"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-leaning-against-wooden-sculpture_171337-19338.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-caucasian-slender-brunette-girl-black-elegant-suit-glasses-sits-by-window-with-glass-drink-evening-lifestyle-concept_197531-32089.jpg",
          alt: "Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-posing_23-2148452676.jpg",
          alt: "Elena",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-man-with-long-blonde-hair-wearing-red-jacket_23-2149020151.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-cheerful-woman_329181-7271.jpg",
          alt: "Sophia",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What is your shipping policy?",
          content: "We offer global shipping with tracked delivery options.",
        },
        {
          id: "q2",
          title: "Can I return items?",
          content: "Yes, we accept returns within 30 days of purchase.",
        },
        {
          id: "q3",
          title: "How do I care for my items?",
          content: "Care instructions are included on every product tag.",
        },
      ]}
      title="Frequently Asked"
      description="Have questions? We have answers regarding shipping, sizing, and care."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414723.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Join our newsletter for exclusive early access and private styling advice."
      buttons={[
        {
          text: "Subscribe Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Shop",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Ethereal Couture"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
