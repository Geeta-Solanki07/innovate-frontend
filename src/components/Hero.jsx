import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import {
  FaGlobe,
  FaPlayCircle,
  FaLaptopCode,
  FaGraduationCap,
  FaCubes,
  FaIndustry,
  FaHandshake,
  FaBullhorn,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";

const ecosystem = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Technology",
    desc: "Custom web & app development, digital marketing, and enterprise-grade IT solutions.",
    list: [
      "Software Development",
      "Mobile Applications",
      "ERP & CRM Solutions",
      "WhatsApp API Integration",
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "Education",
    desc: "Innovative e-learning platforms & tools for modern institutions.",
    list: [
      "LMS Platforms",
      "E-Learning Apps",
      "Student CRM",
      "Digital Libraries",
    ],
  },
  {
    id: 3,
    icon: <FaCubes />,
    title: "SaaS Products",
    desc: "Smart, scalable SaaS apps for businesses of tomorrow.",
    list: [
      "AV App – Parental Control",
      "ShareIt – File Sharing",
      "PDF Generator",
      "Upcoming SaaS Tools",
    ],
  },
  {
    id: 4,
    icon: <FaIndustry />,
    title: "Industries",
    desc: "Tailored solutions for multiple industries & enterprises.",
    list: [
      "Legal & Real Estate",
      "Insurance & Private Equity",
      "Education & Healthcare",
      "Automotive & Crypto",
    ],
  },
  {
    id: 5,
    icon: <FaHandshake />,
    title: "Partnerships",
    desc: "Strategic collaborations that drive innovation & growth.",
    list: [
      "Technology Partners",
      "Education Collaborations",
      "Media Alliances",
      "Global Ventures",
    ],
  },
  {
    id: 6,
    icon: <FaBullhorn />,
    title: "Media & Digital",
    desc: "Engaging content platforms for modern audiences.",
    list: [
      "Blogging Platforms",
      "News Websites",
      "YouTube Channels",
      "Social Media Communities",
    ],
  },
  {
    id: 7,
    icon: <FaPaintBrush />,
    title: "Themes & Templates",
    desc: "Pre-built solutions to accelerate your digital journey.",
    list: [
      "Website Themes",
      "Landing Page Templates",
      "Code Snippets",
      "Custom UI Kits",
    ],
  },
  {
    id: 8,
    icon: <FaUsers />,
    title: "Careers & Growth",
    desc: "Join us to build the future of tech, media & education.",
    list: [
      "Current Openings",
      "Internship Programs",
      "Company Culture",
      "Employee Benefits",
    ],
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rotate-[30deg] bg-[radial-gradient(circle,rgba(107,142,35,0.1)_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
          Innovating Across Industries – Technology, Education, Media & Beyond
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Welcome to Dousoft Universe — A parent tech company driving innovation
          in IT services, digital products, education, media, and SaaS
          platforms. We build, manage, and scale solutions that power the
          future.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-14">
          <button className="flex items-center gap-2 bg-gradient-to-r from-lime-700 to-lime-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            <FaGlobe /> Explore Our Universe
          </button>
          <button className="flex items-center gap-2 border-2 border-lime-600 text-lime-400 px-6 py-3 rounded-full font-semibold hover:bg-lime-900/20 transition">
            <FaPlayCircle /> Watch Video
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
          className="pb-12"
        >
          {ecosystem.map((eco) => (
            <SwiperSlide key={eco.id}>
              <div className="relative h-full bg-gray-900/80 backdrop-blur-md border border-lime-700/40 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition flex flex-col items-center group">
                {/* Hover green border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-lime-500 transition duration-300 pointer-events-none"></div>

                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-lime-700 to-lime-900 text-white rounded-full text-3xl mb-4">
                  {eco.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-lime-400 mb-3">
                  {eco.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm">{eco.desc}</p>

                {/* List */}
                <ul className="text-sm text-gray-300 w-full">
                  {eco.list.map((item, i) => (
                    <li
                      key={i}
                      className="py-2 border-b border-gray-700 last:border-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
