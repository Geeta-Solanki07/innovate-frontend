import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#304328] text-white relative border-t border-lime-800/30 pt-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <img
                src="src/assets/Dousoft Universe logo(Full).png"
                alt="Dousoft Universe"
                className="bg-white rounded-lg w-40"
              />
            </div>
            <p className="leading-relaxed mb-6">
              Dousoft Universe is a parent tech company driving innovation in IT
              services, digital products, education, media, and SaaS platforms.
              We build, manage, and scale solutions that power the future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/60 border border-lime-800/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-600 hover:to-lime-800 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/60 border border-lime-800/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-600 hover:to-lime-800 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/60 border border-lime-800/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-600 hover:to-lime-800 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/60 border border-lime-800/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-600 hover:to-lime-800 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Products",
                "Industries",
                "Eduverse",
                "Blog",
                "Partners",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative pl-4 hover:text-lime-300 transition before:content-['→'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 hover:before:left-1 before:transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 pb-2">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                "AVK App",
                "ShareIt",
                "PDF Generator",
                "Parental Control",
                "LMS Platform",
                "E-learning Solutions",
                "Student CRM",
                "Digital Libraries",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative pl-4 hover:text-lime-300 transition before:content-['→'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 hover:before:left-1 before:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" /> 123 Tech Park, Innovation
                Road, Bangalore, India - 560001
              </p>
              <p className="flex items-center gap-3">
                <FaPhone /> +91 9876543210
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope /> info@dousoftuniverse.com
              </p>
              <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-black/60 border border-lime-800/30 rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-lime-300 mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300">
              Stay updated with the latest news, insights, and exclusive offers.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-black/70 border border-lime-800/40 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/30"
            />
            <button className="bg-gradient-to-br from-lime-600 to-lime-800 text-white font-semibold px-6 py-3 rounded-full hover:translate-y-[-3px] transition shadow-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-lime-800/20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Dousoft Universe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lime-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
