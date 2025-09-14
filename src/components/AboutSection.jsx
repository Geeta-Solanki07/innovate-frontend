import React from "react";
import { 
  FaBullseye, 
  FaEye, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaShoppingCart, 
  FaArrowRight 
} from "react-icons/fa";

const subsidiariesData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Dousoft IT Solutions",
    description: "Your comprehensive technology partner for software development and IT services.",
    features: ["Custom Software Development", "Web & Mobile Applications", "IT Consulting Services", "Enterprise Solutions"],
    
    linkText: "Discover IT",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "Dousoft Eduverse",
    description: "Transforming education through innovative technology and digital learning solutions.",
    features: ["Learning Management Systems", "E-Learning Platforms", "Educational Content Development", "Student Management Tools"],
    linkText: "Explore Eduverse",
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "Dousoft Ecom",
    description: "Powerful e-commerce solutions designed to help businesses thrive in the digital marketplace.",
    features: ["E-commerce Platform Development", "Online Store Solutions", "Payment Gateway Integration", "Inventory Management Systems"],
    linkText: "Shop Now",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
            About Dousoft Universe
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Dousoft Universe is the umbrella for India's fastest-growing technology-driven ventures. 
            Whether you need business automation, creative web/app solutions, educational platforms, 
            or digital transformation — our brands deliver it all.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-lime-400">Our Journey</h3>
            <p className="text-gray-300">
              Founded with a vision to revolutionize technology services across industries, Dousoft began
              as a small IT solutions provider and has grown into a diverse technology ecosystem serving
              clients worldwide.
            </p>
            <p className="text-gray-300">
              Our journey started with a focus on custom software development and has expanded to encompass
              education technology, media platforms, SaaS products, and strategic partnerships that drive
              innovation.
            </p>
            <p className="text-gray-300">
              Today, Dousoft Universe stands as a parent company overseeing multiple specialized divisions,
              each dedicated to excellence in their respective domains while maintaining our core values
              of innovation, quality, and customer satisfaction.
            </p>
          </div>

          {/* Video */}
          <div className="rounded-xl overflow-hidden border border-lime-600 shadow-lg">
            <video 
              src="src/assets/Home/Dousoft Universe Animation.mp4" 
              autoPlay 
              muted 
              loop 
              controls 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 border border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-lime-400">
              <FaBullseye /> Our Mission
            </h3>
            <p className="text-gray-300 mt-2">
              To empower businesses and educational institutions with cutting-edge technology solutions
              that drive growth, efficiency, and digital transformation across diverse industries.
            </p>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 border border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-lime-400">
              <FaEye /> Our Vision
            </h3>
            <p className="text-gray-300 mt-2">
              To create a universe of interconnected technology solutions that seamlessly serve every
              aspect of modern business and education, making advanced technology accessible to all.
            </p>
          </div>
        </div>

        {/* Subsidiaries */}
        <div>
          <h2 className="text-3xl font-bold text-center text-lime-400 mb-8">Our Digital Ecosystem</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Explore the diverse range of specialized platforms under the Dousoft Universe umbrella, each designed to serve unique needs and industries.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {subsidiariesData.map(sub => (
              <div key={sub.id} className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border border-lime-600 hover:shadow-2xl hover:-translate-y-2 transition flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-800 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {sub.icon}
                </div>
                <h3 className="text-xl font-semibold text-lime-400 mb-2">{sub.title}</h3>
                <p className="text-gray-300 flex-grow">{sub.description}</p>
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
                  className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-lime-600 to-lime-800 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition"
                >
                  {sub.linkText} <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
