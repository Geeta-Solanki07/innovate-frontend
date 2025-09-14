import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { products, industries, subsidiaries } from "../data/menuData";
import logo from "../assets/Dousoft Universe logo(Full).png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-[rgb(48,67,40)] text-white sticky top-0 z-50 shadow-lg border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://dousoft.in/assets/Logo/Dousoft Universe logo(Full).png"
              alt="Logo"
              className="w-32 bg-white rounded-lg p-1 shadow-md"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-lg">
            {["Home", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="relative hover:text-lime-400 transition-colors after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            ))}

            {/* Products Mega Menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-lime-400">
                Products <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-6 bg-[#1a1a1a] text-gray-200 rounded-lg shadow-2xl p-6 w-[900px] border border-gray-700">
                {products.slice(0, 3).map((prod) => (
                  <div key={prod.category}>
                    <h4 className="text-lime-300 font-bold mb-2 border-b border-gray-700 pb-1">
                      {prod.category}
                    </h4>
                    {prod.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block hover:text-lime-400 relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
                {/* Ecommerce single column */}
                <div className="col-span-3 mt-4">
                  <h4 className="text-lime-300 font-bold mb-2 border-b border-gray-700 pb-1">
                    Ecommerce
                  </h4>
                  <div className="flex flex-col gap-2">
                    {products[3].items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="hover:text-lime-400 relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Subsidiaries Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-lime-400">
                Subsidiaries <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 top-full mt-3 hidden group-hover:flex flex-col bg-[#1a1a1a] text-gray-200 rounded-lg shadow-xl p-4 w-72 border border-gray-700">
                {subsidiaries.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="hover:text-lime-400 relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full p-2 rounded"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-lime-400">
                Industries <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 top-full mt-3 hidden group-hover:flex flex-col bg-[#1a1a1a] text-gray-200 rounded-lg shadow-xl p-4 w-64 border border-gray-700">
                {industries.map((ind) => (
                  <a
                    key={ind}
                    href="#"
                    className="hover:text-lime-400 relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full py-1"
                  >
                    {ind}
                  </a>
                ))}
              </div>
            </div>

            {/* Blog */}
            <a
              href="#"
              className="relative hover:text-lime-400 transition-colors after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-lime-600 after:to-lime-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-lime-700 to-lime-400 hover:from-lime-400 hover:to-lime-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
              Get in Touch
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[rgb(87,111,45)] text-white transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-28  rounded-lg" />
          <button onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 font-semibold text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>

          {/* Products Accordion */}
          <li>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between items-center w-full hover:text-lime-300"
            >
              Products{" "}
              <ChevronDown
                size={16}
                className={`${
                  productsOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {productsOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-gray-200">
                {products.map((cat) => (
                  <li key={cat.category}>
                    <span className="font-semibold">{cat.category}</span>
                    <ul className="pl-4 mt-1 flex flex-col gap-1">
                      {cat.items.map((item) => (
                        <li key={item} className="hover:text-lime-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Subsidiaries Accordion */}
          <li>
            <button
              onClick={() => setSubsidiariesOpen(!subsidiariesOpen)}
              className="flex justify-between items-center w-full hover:text-lime-300"
            >
              Subsidiaries{" "}
              <ChevronDown
                size={16}
                className={`${
                  subsidiariesOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {subsidiariesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-gray-200">
                {subsidiaries.map((sub) => (
                  <li key={sub} className="hover:text-lime-300">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Industries Accordion */}
          <li>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex justify-between items-center w-full hover:text-lime-300"
            >
              Industries{" "}
              <ChevronDown
                size={16}
                className={`${
                  industriesOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {industriesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-1 text-gray-200">
                {industries.map((ind) => (
                  <li key={ind} className="hover:text-lime-300">
                    {ind}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <a href="#">Blog</a>
          <button className="bg-gradient-to-r from-lime-700 to-lime-400 hover:from-lime-400 hover:to-lime-700 px-4 py-2 rounded-full font-semibold mt-4 shadow-md hover:scale-105 transition">
            Get in Touch
          </button>
        </ul>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
