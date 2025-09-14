import React, { useState } from "react";
import { productsData, featuresData } from "../data/productsData";

export default function ProductsAndFeatures() {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section className="bg-[#1a1a1a] text-white">
      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-lime-400 mb-4">Featured Products</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our complete suite of digital products designed for businesses, educators, and individuals – combining innovation, usability, and scalability.
          </p>
        </div>

        {/* Tabs */}
        <ul className="flex justify-center gap-6 mb-12">
          {["business", "eduverse", "apps"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-lime-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab === "business" ? "Business Tools" : tab === "eduverse" ? "Eduverse" : "Apps & SaaS"}
            </li>
          ))}
        </ul>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {productsData[activeTab].map((product) => (
            <div key={product.id} className="group perspective">
              <div className="relative w-full h-64 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden border border-lime-600 flex items-center justify-center bg-gray-800 [backface-visibility:hidden] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-lime-500">
                  <img src={product.image} alt={product.title} className="h-full w-full object-contain p-6" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 rounded-xl bg-gray-800 border border-lime-600 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-lime-500">
                  <h3 className="text-xl font-semibold text-lime-400">{product.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm">{product.description}</p>
                  <a
                    href={product.link}
                    className={`mt-4 inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      product.comingSoon ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-lime-600 hover:bg-lime-500 text-white"
                    }`}
                  >
                    {product.comingSoon ? "Coming Soon" : "Learn More"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col rounded-xl border border-lime-600 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition ${
                feature.big ? "md:col-span-2" : ""
              } ${feature.bg}`}
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
              </div>
              <img src={feature.image} alt={feature.title} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
