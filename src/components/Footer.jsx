import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#304328] text-white relative border-t border-lime-800/30 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/Dousoft Universe logo(Full).png"
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
              <a href="#" className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-lime-600 transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-lime-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-lime-600 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-lime-600 transition">
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
              {["Home","About Us","Services","Products","Industries","Eduverse","Blog","Partners"].map((link,i)=>(
                <li key={i}><a href="#" className="hover:text-lime-300">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 pb-2">
              Our Products
            </h3>
            <ul className="space-y-3">
              {["AVK App","ShareIt","PDF Generator","Parental Control","LMS Platform","E-learning Solutions","Student CRM","Digital Libraries"].map((item,i)=>(
                <li key={i}><a href="#" className="hover:text-lime-300">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 pb-2">
              Contact Us
            </h3>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> 123 Tech Park, Innovation Road, Bangalore, India - 560001</p>
            <p className="flex items-center gap-3"><FaPhone /> +91 9876543210</p>
            <p className="flex items-center gap-3"><FaEnvelope /> info@dousoftuniverse.com</p>
            <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="border-t border-lime-800/20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Dousoft Universe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-300">Privacy Policy</a>
            <a href="#" className="hover:text-lime-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
