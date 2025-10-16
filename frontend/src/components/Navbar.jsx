import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Heart, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Who We Are",
      path: "/about",
      subItems: [
        { name: "About Us", path: "/about", description: "Learn about our organization" },
        { name: "Our Mission", path: "/mission", description: "Our purpose and goals" },
        { name: "Our Vision", path: "/vision", description: "Our future aspirations" },
        { name: "Our Story", path: "/our-story", description: "How we started" },
        { name: "Our Approach", path: "/our-approach", description: "Our methodology" },
        { name: "Our Impact", path: "/our-impact", description: "The difference we make" },
      ],
    },
    {
      name: "What We Do",
      path: "/campaigns",
      subItems: [
        { name: "Child Education", path: "/campaigns/child-education", description: "Quality education for children" },
        { name: "Girl Education", path: "/campaigns/girl-education", description: "Empowering girls through education" },
        { name: "Women Empowerment", path: "/campaigns/women-empowerment", description: "Skill development campaigns" },
        { name: "Healthcare", path: "/campaigns/healthcare", description: "Healthcare initiatives" },
        { name: "Livelihood", path: "/campaigns/livelihood", description: "Sustainable livelihoods" },
      ],
    },
    {
      name: "Get Involved",
      path: "/get-involved",
      subItems: [
        { name: "Volunteering & Internship", path: "/get-involved/volunteer", description: "Join our team" },
        { name: "Partners", path: "/get-involved/partners", description: "Collaborate with us" },
        { name: "Careers", path: "/get-involved/careers", description: "Work opportunities" },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      subItems: [
        { name: "Blog", path: "/resources/blog", description: "Latest insights and stories" },
        { name: "Our Research", path: "/resources/research", description: "Research and publications" },
        { name: "Annual Reports", path: "/resources/reports", description: "Financial transparency" },
        { name: "Photo Gallery", path: "/resources/gallery", description: "Visual stories" },
      ],
    },
    {
      name: "Media Center",
      path: "/media",
      subItems: [
        { name: "Press Releases", path: "/media/press-releases", description: "Latest announcements" },
        { name: "Events & Workshops", path: "/media/events", description: "Upcoming events" },
        { name: "Print/Online Media", path: "/media/coverage", description: "Media coverage" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className={`bg-white fixed w-full z-40 top-[36px] sm:top-[40px] md:top-[44px] transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50 group" onClick={handleMobileLinkClick}>
          <motion.div 
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-base sm:text-lg">GS</span>
          </motion.div>
          <div className="hidden sm:block">
            <span className="font-bold text-sm sm:text-base lg:text-lg text-green-700 leading-tight block">
              Ghanshyam Oli
            </span>
            <span className="text-[10px] sm:text-xs text-gray-600">Child Welfare Society</span>
          </div>
        </Link>

        {/* Mobile Quick Actions (Donate + Contact) - Visible on mobile/tablet */}
        <div className="flex lg:hidden items-center gap-2 mr-2">
          <Link 
            to="/donate" 
            className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg"
            onClick={handleMobileLinkClick}
          >
            <Heart size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Donate</span>
          </Link>
          
          <Link 
            to="/contact" 
            className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg"
            onClick={handleMobileLinkClick}
          >
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Call</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          <ul className="flex items-center space-x-1 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-all duration-200 ${
                    location.pathname === item.path ? 'text-green-700 bg-green-50' : ''
                  }`}
                >
                  <span className="text-sm">{item.name}</span>
                  {item.subItems && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                      dropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Desktop Dropdown - Mega Menu Style */}
                <AnimatePresence>
                  {item.subItems && dropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 min-w-[280px] z-50"
                    >
                      <div className="p-2">
                        {item.subItems.map((sub, index) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-3 hover:bg-green-50 rounded-lg transition-all duration-200 group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 group-hover:scale-150 transition-transform"></div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                                  {sub.name}
                                </h4>
                                {sub.description && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {sub.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Desktop Donate Button */}
          <Link 
            to="/donate" 
            className="ml-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2.5 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-green-700 z-50 p-2 hover:bg-green-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="sm:w-[26px] sm:h-[26px]" /> : <Menu size={24} className="sm:w-[26px] sm:h-[26px]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 lg:hidden z-30"
              style={{ top: '0' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto z-40"
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 shadow-md z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Menu</h3>
                    <p className="text-xs text-green-100">Navigate our site</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="px-6 py-6">
                {/* Quick Contact Info in Mobile Menu */}
                <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-100">
                  <h4 className="font-semibold text-green-800 text-sm mb-3 flex items-center gap-2">
                    <Phone size={16} />
                    Quick Contact
                  </h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+917525838880" 
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone size={14} className="text-green-600" />
                      </div>
                      <span>+91 7525838880</span>
                    </a>
                    <a 
                      href="mailto:info@ghanshyamoli.org" 
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="truncate">info@ghanshyamoli.org</span>
                    </a>
                  </div>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.name} className="border-b border-gray-100 last:border-b-0">
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="w-full flex items-center justify-between py-3.5 font-semibold text-gray-800 hover:text-green-700 transition-colors text-left"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                mobileDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileDropdown === item.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 mb-3 space-y-1 border-l-2 border-green-200 pl-3">
                                  {item.subItems.map((sub) => (
                                    <li key={sub.name}>
                                      <Link
                                        to={sub.path}
                                        className="block py-2.5 px-3 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg text-sm transition-all duration-200"
                                        onClick={handleMobileLinkClick}
                                      >
                                        <div className="font-medium">{sub.name}</div>
                                        {sub.description && (
                                          <div className="text-xs text-gray-500 mt-0.5">
                                            {sub.description}
                                          </div>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </div>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block py-3.5 font-semibold hover:text-green-700 transition-colors ${
                            location.pathname === item.path ? 'text-green-700' : 'text-gray-800'
                          }`}
                          onClick={handleMobileLinkClick}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Mobile Action Buttons */}
                <div className="mt-8 space-y-3 pb-6">
                  <Link
                    to="/donate"
                    className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                    onClick={handleMobileLinkClick}
                  >
                    <Heart size={18} />
                    Donate Now
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full text-center bg-green-600 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
                    onClick={handleMobileLinkClick}
                  >
                    <Phone size={18} />
                    Contact Us
                  </Link>
                </div>

                {/* Footer in Mobile Menu */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <p className="text-xs text-gray-500 text-center">
                    © 2025 Ghanshyam Oli Child Welfare Society
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;