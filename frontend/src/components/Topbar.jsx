import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, Search, ArrowRight, FileText, Target, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { performSearch } from "../data/searchIndex";

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search with debouncing
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const results = performSearch(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  const handleResultClick = (result) => {
    navigate(result.path);
    setSearchQuery("");
    setIsSearchFocused(false);
    
    if (result.path.includes('#')) {
      setTimeout(() => {
        const hash = result.path.split('#')[1];
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('highlight-flash');
          setTimeout(() => element.classList.remove('highlight-flash'), 2000);
        }
      }, 100);
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'program': return Book;
      case 'article': return FileText;
      case 'objective': 
      case 'goal': return Target;
      default: return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'program': return 'text-blue-600 bg-blue-50';
      case 'article': return 'text-purple-600 bg-purple-50';
      case 'objective':
      case 'goal': return 'text-orange-600 bg-orange-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://facebook.com",
      color: "hover:text-blue-400" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com",
      color: "hover:text-pink-400" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com",
      color: "hover:text-red-400" 
    },
    { 
      name: "Twitter/X", 
      icon: Twitter, 
      url: "https://twitter.com",
      color: "hover:text-blue-300" 
    },
  ];

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-yellow-200 text-gray-900 font-semibold px-0.5 rounded">{part}</span> : 
        part
    );
  };

  return (
    <div className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white text-xs md:text-sm py-2.5 px-4 md:px-6 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Left Side: Contact Info */}
        <div className="hidden lg:flex gap-4">
          <motion.a 
            href="mailto:info@ghanshyamoli.org" 
            className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors group"
            aria-label="Email us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={14} className="group-hover:animate-bounce" /> 
            <span>info@ghanshyamoli.org</span>
          </motion.a>
          <motion.a 
            href="tel:+917525838880" 
            className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors group"
            aria-label="Call us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={14} className="group-hover:animate-shake" /> 
            <span>+917525838880</span>
          </motion.a>
        </div>

        {/* Mobile Contact */}
        <motion.a 
          href="tel:+917525838880" 
          className="flex lg:hidden items-center gap-1.5 hover:text-yellow-300 transition-colors"
          aria-label="Call us"
          whileHover={{ scale: 1.05 }}
        >
          <Phone size={14} /> 
          <span className="hidden sm:inline">+91 7525838880</span>
        </motion.a>

        {/* Right Side: Search Box + Social Media */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Box */}
          <motion.div 
            ref={searchRef} 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSearchSubmit}>
              <div className="relative flex items-center">
                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 pl-9 pr-10 py-2 rounded-full 
                    bg-white/10 backdrop-blur-sm
                    border border-white/20
                    text-white placeholder:text-white/60
                    focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-white/20
                    transition-all duration-300
                    hover:bg-white/15
                    text-sm font-normal"
                  style={{ caretColor: 'white' }}
                />
                
                {/* Search Icon - Positioned Absolutely Inside Input */}
                <Search 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none z-10" 
                  size={15} 
                  strokeWidth={2.5}
                />
                
                {/* Loading Spinner - Right Side */}
                {isSearching && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isSearchFocused && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-96 bg-white rounded-xl shadow-2xl overflow-hidden right-0 border border-gray-200 z-50"
                  >
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 text-xs font-semibold">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((result, index) => {
                        const TypeIcon = getTypeIcon(result.type);
                        return (
                          <motion.button
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(result.type)} group-hover:scale-110 transition-transform`}>
                                <TypeIcon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-gray-500 font-medium">{result.page}</span>
                                  <ArrowRight size={10} className="text-gray-400" />
                                  <span className="text-xs text-gray-500">{result.section}</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
                                  {highlightText(result.title, searchQuery)}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  {highlightText(result.snippet, searchQuery)}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${getTypeColor(result.type)} font-medium capitalize`}>
                                    {result.type}
                                  </span>
                                  {result.score > 80 && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                                      Best Match
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                    <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center border-t">
                      Press Enter to go to first result
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No Results */}
              {isSearchFocused && searchQuery && searchResults.length === 0 && !isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-80 bg-white rounded-xl shadow-2xl p-6 right-0 border border-gray-200 z-50"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search size={24} className="text-gray-400" />
                    </div>
                    <p className="text-gray-700 font-medium mb-1">No results found</p>
                    <p className="text-gray-500 text-sm">
                      No matches for "<span className="font-semibold">{searchQuery}</span>"
                    </p>
                    <p className="text-gray-400 text-xs mt-2">Try different keywords or check spelling</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/30"></div>

          {/* Social Media Icons */}
          <div className="flex gap-2 md:gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className={`transition-all duration-300 ${social.color} p-1.5 rounded-full hover:bg-white/10`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={16} strokeWidth={2} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;