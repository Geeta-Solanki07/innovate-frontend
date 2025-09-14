
import React from "react";

const blogs = [
  {
    id: 23,
    title: "Innovating Across Industries with Dousoft Universe",
    image: "src/assets/Home/Blog.png",
  },
  {
    id: 24,
    title: "AI-Driven Innovation for the Future",
    image:
      "src/assets/Home/Blog2.jpg",
  },
  {
    id: 25,
    title: "The Future of Digital Marketing in 2025",
    image: "src/assets/Home/Blog3.webp",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-lime-400">
          Blog & News
        </h2>
        <p className="text-gray-400">
          Explore our latest insights, updates, and stories from the digital
          world.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden border border-lime-700/40 hover:shadow-lime-700/30 transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-500 font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="bg-lime-600 hover:bg-lime-700 px-6 py-3 rounded-full text-white font-medium transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
