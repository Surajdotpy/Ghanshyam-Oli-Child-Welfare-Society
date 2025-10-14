import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

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

  return (
    <nav className={`bg-white fixed w-full z-40 top-[40px] md:top-[44px] transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50 group">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-lg">GS</span>
          </motion.div>
          <div className="hidden md:block">
            <span className="font-bold text-base lg:text-lg text-green-700 leading-tight block">
              Ghanshyam Oli
            </span>
            <span className="text-xs text-gray-600">Child Welfare Society</span>
          </div>
        </Link>

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
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 min-w-[280px]"
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

          {/* Donate Button */}
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
          {isOpen ? <X size={26} /> : <Menu size={26} />}
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
              className="fixed inset-0 bg-black/50 lg:hidden z-30"
              style={{ top: '0' }}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto z-40"
            >
              <div className="pt-20 pb-6 px-6">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.name} className="border-b border-gray-100 pb-1">
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="w-full flex items-center justify-between py-3 font-semibold text-gray-800 hover:text-green-700 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
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
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-1 overflow-hidden"
                              >
                                {item.subItems.map((sub) => (
                                  <li key={sub.name}>
                                    <Link
                                      to={sub.path}
                                      className="block py-2 px-3 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg text-sm transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="block py-3 font-semibold text-gray-800 hover:text-green-700 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Mobile Donate Button */}
                <Link
                  to="/donate"
                  className="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-full mt-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;