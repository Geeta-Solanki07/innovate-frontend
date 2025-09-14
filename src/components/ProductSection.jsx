import React, { useState } from "react";

const productsData = {
  business: [
    {
      id: 1,
      title: "CRM System",
      description:
        "Streamline customer engagement with our enterprise-grade CRM platform.",
      image: "src/assets/Home/Advanced.png",
      link: "#",
    },
    {
      id: 2,
      title: "ERP Solution",
      description:
        "Complete enterprise resource planning to manage business operations seamlessly.",
      image: "src/assets/Home/jewellery.png",
      link: "#",
    },
    {
      id: 3,
      title: "PDF Generator",
      description:
        "Create, merge, and edit documents effortlessly with our smart PDF tools.",
      image: "src/assets/Home/product.png",
      link: "#",
    },
  ],
  eduverse: [
    {
      id: 4,
      title: "LMS Platform",
      description:
        "Empowering education with digital classrooms, e-learning, and management tools.",
      image: "src/assets/images/lms.png",
      link: "#",
    },
    {
      id: 5,
      title: "Eduverse Tools",
      description:
        "Innovative e-learning apps and student management systems for modern institutions.",
      image: "src/assets/images/academic.png",
      link: "#",
    },
  ],
  apps: [
    {
      id: 6,
      title: "AV App",
      description:
        "Next-gen parental content control & safety solution for modern families.",
      image: "src/assets/Home/app.png",
      link: "#",
    },
    {
      id: 7,
      title: "ShareIt Clone",
      description:
        "Fast, secure, and reliable file sharing app built for speed and performance.",
      image: "src/assets/Home/app2.png",
      link: "#",
    },
    {
      id: 8,
      title: "Upcoming SaaS Products",
      description:
        "Stay tuned for our next breakthrough SaaS applications, designed for the future.",
      image: "src/assets/Home/app3.webp",
      link: "#",
      comingSoon: true,
    },
  ],
};

const featuresData = [
  {
    id: 1,
    title: "Dynamic & stylish design",
    description:
      "Modern, eye-catching layouts crafted to make your brand stand out and keep visitors engaged.",
    image:
      "https://t3.ftcdn.net/jpg/08/61/55/92/360_F_861559218_VKYTUufj1Lkpiy7LyFGPZID3gRGu1Xda.png",
    tags: ["Design", "Layout", "Visuals"],
    big: true,
    bg: "bg-gray-800",
  },
  {
    id: 2,
    title: "Dark / light mode",
    description:
      "Switch effortlessly between light and dark modes for a user-friendly experience.",
    image: "src/assets/Home/ra1 (1).webp",
    tags: ["Theme Choice", "Interaction"],
    bg: "bg-purple-800 text-white",
  },
  {
    id: 3,
    title: "Easy to customize",
    description:
      "Adapt every detail to fit your vision — no fuss, just simple, clear editing.",
    image: "src/assets/Home/ra1 (4).webp",
    tags: ["Flexible", "Fast", "User-friendly"],
    bg: "bg-yellow-700 text-white",
  },
  {
    id: 4,
    title: "GSAP-powered animations",
    description:
      "Adding unique movement, scroll magic, and creative depth to your pages.",
    image: "src/assets/Home/ra1 (2).webp",
    tags: ["Motion", "Smooth", "Interaction"],
    bg: "bg-black text-white",
  },
  {
    id: 5,
    title: "Code excellence",
    description:
      "Built with clean, well-structured code that’s fast, secure, and easy to maintain.",
    image: "src/assets/Home/ra1 (3).webp",
    tags: ["Clean", "Reliable", "Validated"],
    bg: "bg-pink-600 text-white",
  },
];

export default function ProductsAndFeatures() {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section className="bg-[#1a1a1a] text-white">
      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-lime-400 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our complete suite of digital products designed for
            businesses, educators, and individuals – combining innovation,
            usability, and scalability.
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
              {tab === "business"
                ? "Business Tools"
                : tab === "eduverse"
                ? "Eduverse"
                : "Apps & SaaS"}
            </li>
          ))}
        </ul>

        {/* Products Grid with flip effect */}
        <div className="grid md:grid-cols-3 gap-8">
          {productsData[activeTab].map((product) => (
            <div key={product.id} className="group perspective">
              <div className="relative w-full h-64 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden border border-lime-600 flex items-center justify-center bg-gray-800 [backface-visibility:hidden] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-lime-500">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-6"
                  />
                </div>

                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 rounded-xl bg-gray-800 border border-lime-600 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-lime-500">
                  <h3 className="text-xl font-semibold text-lime-400">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    className={`mt-4 inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      product.comingSoon
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-lime-600 hover:bg-lime-500 text-white"
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
                    <span
                      key={idx}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
