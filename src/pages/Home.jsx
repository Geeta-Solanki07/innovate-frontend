import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsAndFeatures from "../components/ProductsAndFeatures";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProductsAndFeatures/>
      <Testimonials />
      <BlogSection />
    </div>
  );
}
