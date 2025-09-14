import React, { useState, useEffect } from "react";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { subsidiariesData } from "../data/subsidiariesData";
import { statsData } from "../data/statsData";

export default function AboutSection() {
  const [counts, setCounts] = useState(statsData.map(stat => stat.start));
  const { ref: statsRef, inView } = useInView({ triggerOnce: true });

  // Count animation
  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const intervalTime = 50;
    const steps = duration / intervalTime;

    const intervals = statsData.map((stat, idx) => {
      const increment = (stat.end - stat.start) / steps;
      let current = stat.start;
      return setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          current = stat.end;
          clearInterval(intervals[idx]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[idx] = Math.floor(current);
          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, [inView]);

  return (
    <section className="bg-[#1a1a1a] text-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-20">

        {/* Stats Section FIRST */}
        <section ref={statsRef} className="py-10 border-t border-b border-gray-800">
          <div className="flex flex-wrap justify-around gap-12">
            {statsData.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent mb-2">
                  {counts[idx]}+
                </div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
            About Dousoft Universe
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Dousoft Universe is the umbrella for India's fastest-growing technology-driven ventures. 
            Whether you need business automation, creative web/app solutions, educational platforms, 
            or digital transformation — our brands deliver it all.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-5 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-lime-400">Our Journey</h3>
            <p className="text-gray-300 text-lg md:text-lg">
              Founded with a vision to revolutionize technology services across industries, Dousoft began
              as a small IT solutions provider and has grown into a diverse technology ecosystem serving
              clients worldwide.
            </p>
            <p className="text-gray-300 text-lg md:text-lg">
              Our journey started with a focus on custom software development and has expanded to encompass
              education technology, media platforms, SaaS products, and strategic partnerships that drive
              innovation.
            </p>
            <p className="text-gray-300 text-lg md:text-lg">
              Today, Dousoft Universe stands as a parent company overseeing multiple specialized divisions,
              each dedicated to excellence in their respective domains while maintaining our core values
              of innovation, quality, and customer satisfaction.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-lime-600 shadow-lg flex">
            <video 
              src="/assets/Home/Dousoft Universe Animation.mp4" 
              autoPlay 
              muted 
              loop 
              controls 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 border border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition relative">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-lime-400">
              <FaBullseye /> Our Mission
            </h3>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-lime-600 rounded"></span>
            <p className="text-gray-300 mt-4 text-lg md:text-lg">
              To empower businesses and educational institutions with cutting-edge technology solutions
              that drive growth, efficiency, and digital transformation across diverse industries.
            </p>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 border border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-lime-400">
              <FaEye /> Our Vision
            </h3>
            <p className="text-gray-300 mt-2 text-lg md:text-lg">
              To create a universe of interconnected technology solutions that seamlessly serve every
              aspect of modern business and education, making advanced technology accessible to all.
            </p>
          </div>
        </div>

        {/* Subsidiaries */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-lime-400 mb-8">
            Our Digital Ecosystem
          </h2>
          <p className="text-gray-300 text-center text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Explore the diverse range of specialized platforms under the Dousoft Universe umbrella, each designed to serve unique needs and industries.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {subsidiariesData.map(sub => {
              const Icon = sub.icon; // assign component
              return (
                <div 
                  key={sub.id} 
                  className="relative bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border border-transparent hover:border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition flex flex-col group"
                >
                  <span className="absolute top-0 left-0 w-full h-1 bg-lime-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"></span>
                  
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-600 to-lime-800 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
                      <Icon /> {/* ✅ render as JSX */}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-center text-lime-400 mb-2">{sub.title}</h3>
                  <p className="text-gray-300 text-center text-lg md:text-lg">{sub.description}</p>

                  <ul className="mt-4 mb-4 space-y-1 text-gray-300 text-sm">
                    {sub.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-lime-500 font-bold">•</span> {f}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={sub.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-lime-600 to-lime-800 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition self-center"
                  >
                    {sub.linkText} <FaArrowRight />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
