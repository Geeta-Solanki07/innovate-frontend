import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaGlobe, FaPlayCircle } from "react-icons/fa";

import { ecosystem } from "../data/ecosystem";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rotate-[30deg] 
      bg-[radial-gradient(circle,rgba(107,142,35,0.15)_0%,transparent_70%)]"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl text-center px-6">
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
          <button className="flex items-center gap-2 bg-gradient-to-r from-lime-600 to-lime-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            <FaGlobe /> Explore Our Universe
          </button>
          <button className="flex items-center gap-2 border-2 border-lime-600 text-lime-400 px-6 py-3 rounded-full font-semibold hover:bg-lime-900/30 transition">
            <FaPlayCircle /> Watch Video
          </button>
        </div>

        {/* Ecosystem Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {ecosystem.map((eco) => {
            const Icon = eco.icon;
            return (
              <SwiperSlide key={eco.id}>
                <div
                  className="bg-gray-900/90 backdrop-blur-md border border-lime-700/40 
                rounded-2xl shadow-xl p-6 text-left hover:scale-105 hover:border-lime-500 
                transition duration-300 h-full"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center 
                  bg-gradient-to-r from-lime-600 to-lime-800 text-white rounded-full 
                  text-2xl mb-4 shadow-md"
                  >
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-lime-400 mb-3">
                    {eco.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {eco.desc}
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {eco.list.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
