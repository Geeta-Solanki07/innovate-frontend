import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import Testimonials from "../components/Testimonials";
import BlogAndNewsletter from "../components/BlogAndNewsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProductSection />
      <Testimonials />
      <BlogAndNewsletter />
    </div>
  );
}
