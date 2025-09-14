import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative bg-[#1a1a1a] py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,142,35,0.1)_0%,transparent_50%)] z-0"></div>

      {/* Heading */}
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c0c86d] to-[#6b8e23] bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover why businesses and institutions trust Dousoft Universe for their technology and education solutions.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10 px-4 md:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="pb-16"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-black/80 border border-lime-700/40 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto hover:shadow-lime-700/20 hover:border-lime-700/70 transition-all duration-300">
                
                {/* Testimonial Text */}
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed border-b border-lime-700/30 pb-6 mb-6 text-center md:text-left">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-lime-500">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-[#c0c86d] font-semibold text-lg">{t.name}</h4>
                    <p className="text-gray-400 text-sm">{t.role}</p>

                    {/* Rating */}
                    <div className="flex text-yellow-400 mt-2 justify-center md:justify-start">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                          {i < Math.floor(t.rating) ? (
                            <i className="fas fa-star"></i>
                          ) : i < t.rating ? (
                            <i className="fas fa-star-half-alt"></i>
                          ) : (
                            <i className="far fa-star"></i>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
