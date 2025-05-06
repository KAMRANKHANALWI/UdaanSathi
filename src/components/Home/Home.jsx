import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Features from "../Features";
import Marketplace from "../Marketplace";
import Featured from "../Featured";
import BrandsMarquee from "../BrandsMarquee";
import Testimonials from "../MarqueeTestimonials";
import Journey from "../Journey";
import CTA from "../CTA";
import ContactForm from "../ContactForm";
import FAQ from "../FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <CreatorPlatform /> */}
      <Features />
      <Journey />
      <Marketplace />
      {/* <Featured /> */}
      {/* <BrandsMarquee /> */}
      <Testimonials />
      <ContactForm />
      <FAQ />
    </>
  );
}
