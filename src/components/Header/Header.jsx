import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      // Also always show it at the top of the page
      if (currentScrollY <= 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
        // Close mobile menu when hiding navbar
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-16 flex justify-between items-center mt-4 mx-6 py-4 bg-gray-950/80 backdrop-blur-xl border border-gray-800/30 rounded-full shadow-md">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/images/Logo3.jpg"
            className="h-12"
            alt="Udaan Sathi Logo"
          />
          <div className="flex flex-col ml-2">
            <span className="text-2xl font-bold tracking-tight text-gray-100">
              Udaan Sathi
            </span>
          </div>
        </NavLink>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://tally.so/r/np5g1B"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-gray-950 font-medium bg-gray-100 rounded-full hover:bg-white hover:shadow-sm transition-all flex items-center gap-2"
          >
            Start for Free <ArrowRight size={16} />
          </a>
          <button
            onClick={() => navigate("/book-free-call")}
            className="px-6 py-2 text-gray-300 font-medium border border-gray-700 backdrop-blur bg-gray-900/40 rounded-full hover:border-gray-600 hover:text-white transition-all"
          >
            Book a Call
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-800 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-6 mt-2 bg-gray-950/90 backdrop-blur-xl border border-gray-800/30 rounded-xl px-6 pt-4 pb-6 space-y-4 shadow-md">
          <a
            href="https://tally.so/r/np5g1B"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 font-medium rounded-full bg-gray-100 text-gray-950 hover:bg-white"
          >
            Start for Free
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/book-free-call");
            }}
            className="w-full text-center py-3 font-medium rounded-full border border-gray-700 bg-gray-900/40 text-gray-300 hover:border-gray-600 hover:text-white"
          >
            Book a Call
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
