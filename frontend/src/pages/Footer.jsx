import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  Stethoscope,
  Home as HomeIcon,
  Briefcase,
  FileText,
  Shield,
  Award,
  Globe,
  Clock,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const quickLinks = [
    { name: "About Us", path: "/about", icon: Users },
    { name: "Our Story", path: "/our-story", icon: BookOpen },
    { name: "Team", path: "/about#team", icon: Users },
    { name: "Impact Reports", path: "/media/reports", icon: FileText },
    { name: "Events", path: "/media/events", icon: Clock },
    { name: "News & Updates", path: "/media/news", icon: Globe },
  ];

  const programs = [
    { name: "Child Education", path: "/campaigns/child-education", icon: BookOpen },
    { name: "Women Empowerment", path: "/campaigns/women-empowerment", icon: Users },
    { name: "Girls Education", path: "/campaigns/girls-education", icon: GraduationCap },
    { name: "Healthcare & Nutrition", path: "/campaigns/healthcare-nutrition", icon: Stethoscope },
    { name: "Rural Development", path: "/campaigns/rural-development", icon: HomeIcon },
    { name: "Skill Development", path: "/campaigns/skill-employment", icon: Briefcase },
  ];

  const getInvolved = [
    { name: "Donate Now", path: "/Donate", highlight: true },
    { name: "Volunteer", path: "/get-involved/volunteer" },
    { name: "Partner With Us", path: "/get-involved/partners" },
    { name: "Fundraise", path: "/get-involved/fundraising" },
    { name: "Corporate CSR", path: "/get-involved/partners#csr" },
    { name: "Sponsor a Child", path: "/campaigns/child-education#sponsor" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://facebook.com/ghanshyamoli",
      color: "hover:bg-blue-600"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com/ghanshyamoli",
      color: "hover:bg-sky-500"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/ghanshyamoli",
      color: "hover:bg-pink-600"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/company/ghanshyamoli",
      color: "hover:bg-blue-700"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com/@ghanshyamoli",
      color: "hover:bg-red-600"
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Rai, Pithoragarh", "Uttarakhand, India - 262501"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 752538880", "+91 98765 43211"],
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ghanshyamoli.org", "donate@ghanshyamoli.org"],
      link: "mailto:info@ghanshyamoli.org"
    },
  ];

  const certifications = [
    { icon: Award, text: "80G Certified" },
    { icon: Shield, text: "12A Registered" },
    { icon: FileText, text: "FCRA Approved" },
    { icon: Globe, text: "ISO 9001:2015" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand & About */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-4"
          >
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ghanshyam Oli</h3>
                  <p className="text-xs text-green-400">Child Welfare Society</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering communities through education, healthcare, and sustainable development since 2010. 
              Together, we're building a brighter future for underprivileged children and families across India.
            </p>

            {/* Certifications */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-white mb-3">Certifications & Recognition</p>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10 hover:border-green-500/50 transition-all"
                  >
                    <cert.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-white mb-4">Connect With Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all border border-white/10 hover:border-white/30`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-green-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all group"
                  >
                    <link.icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Programs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-green-400" />
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program, idx) => (
                <li key={idx}>
                  <Link
                    to={program.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all group"
                  >
                    <program.icon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    <span className="text-sm">{program.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Get Involved */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-green-400" />
              Get Involved
            </h4>
            <ul className="space-y-3 mb-8">
              {getInvolved.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between text-sm hover:translate-x-1 transition-all group ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 shadow-lg' 
                        : 'text-gray-400 hover:text-green-400'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.highlight && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white mb-1">{contact.title}</p>
                    {contact.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-xs">{detail}</p>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-green-500/20">
              <Send className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-400">Stay Updated</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get weekly updates on our programs, impact stories, and ways to make a difference
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} <span className="text-white font-semibold">Ghanshyam Oli Child Welfare Society</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Registered under Section 12A & 80G | CIN: U85300DL2010NPL123456
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-xs text-gray-400 hover:text-green-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure Donations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-green-400" />
                <span>80G Tax Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span>Pan-India Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-400" />
                <span>100% Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Made with Love Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-2">
        <p className="text-center text-xs text-white font-medium">
          Made with <Heart className="inline w-3 h-3 mx-1 animate-pulse" fill="currentColor" /> for a better tomorrow
        </p>
      </div>
    </footer>
  );
};

export default Footer;