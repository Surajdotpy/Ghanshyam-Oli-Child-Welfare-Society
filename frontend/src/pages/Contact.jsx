import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronDown, Clock, MessageCircle } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["Rai, Near Hnauman mandir", "Pithoragarh, Uttarakhand - 262501", "India"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 753388880 (Main)", "+91 753388880 (Donations)"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@ghanshyamoli.org", "media@ghanshyamoli.org",],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-purple-500 to-violet-600"
    },
  ];

  const faqs = [
    {
      question: "How can I donate to your organization?",
      answer: "You can donate through our website using online payment methods (UPI, Card, Net Banking), or through direct bank transfer. Visit our Donate page for detailed information and secure payment options. All donations are tax-deductible under 80G."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, Ghanshyam Oli Child Welfare Society is registered under Section 80G of the Income Tax Act. All donations are eligible for 50% tax deduction. We provide donation receipts for your tax filing."
    },
    {
      question: "How can I volunteer with your organization?",
      answer: "We welcome volunteers! Visit our 'Get Involved' section and fill out the volunteer registration form. We have various opportunities including teaching, community outreach, event coordination, and skill development training. Our team will contact you within 48 hours."
    },
    {
      question: "Can I visit your learning centers?",
      answer: "Yes, we encourage visits to our learning centers. Please schedule an appointment at least 3 days in advance by contacting us via email or phone. Visitors are welcome during working hours (Monday-Saturday)."
    },
    {
      question: "Do you accept in-kind donations (books, clothes, etc.)?",
      answer: "Yes, we accept in-kind donations including books, educational materials, computers, clothes, and other useful items. Please contact us beforehand to confirm the items we currently need and arrange for drop-off or pickup."
    },
    {
      question: "How can I partner with your organization?",
      answer: "We welcome partnerships with corporates, NGOs, government bodies, and academic institutions. Please email partnerships@ghanshyamoli.org with your proposal or contact our partnerships team at +91 85000 00000."
    },
    {
      question: "How do you ensure transparency in fund utilization?",
      answer: "We maintain complete financial transparency. Our annual reports, audited financial statements, and impact reports are publicly available on our website. 75% of all donations go directly to program implementation. We also have regular third-party audits."
    },
    {
      question: "Can I sponsor a child's education?",
      answer: "Yes, we have a child sponsorship program where you can sponsor a child's complete education including books, uniforms, and learning materials. The sponsorship amount is ₹15,000 per year. Contact us for more details."
    },
    {
      question: "Do you provide internship opportunities?",
      answer: "Yes, we offer internships for students and recent graduates in various domains including program management, research, communications, and field operations. Check our Careers page for current openings or send your resume to careers@ghanshyamoli.org."
    },
    {
      question: "How can I get updates about your work?",
      answer: "Subscribe to our newsletter, follow us on social media (Facebook, Instagram, Twitter), or download our mobile app. We regularly share updates, success stories, and upcoming events through these channels."
    },
  ];

  const offices = [
    {
      city: "Pithoragarh, Uttarakhand",
      address: "Rai, Near Hanuman Mandir, Pithoragarh - 262501",
      phone: "+91 75388880",
      email: "Uk@ghanshyamoli.org"
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-cyan-100"
            >
              We'd love to hear from you. Let's start a conversation.
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="text-teal-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Priya"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="pth@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donation">Donation</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Send size={20} />
                  Send Message
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </form>
            </motion.div>

            {/* Map and Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Locations</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-80 mb-8 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d111020.60482997706!2d80.13997813073455!3d29.592233555777845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39a1258292c3a4d7%3A0x5f7c6ee54ffcdade!2sOli%20Niwas%2C%20dhanaura%2C%20Dharchula%20road%2C%20near%20maa%20kripa%20barat%20ghar%2C%20Pithoragarh%2C%20Uttarakhand%20262501!3m2!1d29.592259!2d80.2223795!5e0!3m2!1sen!2sin!4v1760595745732!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                {offices.map((office, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-600"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{office.city}</h3>
                    <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                      <a href={`tel:${office.phone}`} className="text-teal-700 hover:text-teal-800 font-medium">
                        {office.phone}
                      </a>
                      <span className="hidden sm:inline text-gray-400">|</span>
                      <a href={`mailto:${office.email}`} className="text-teal-700 hover:text-teal-800 font-medium">
                        {office.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-teal-600 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-teal-50 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <a
              href="mailto:info@ghanshyamoli.org"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Connect With Us on Social Media
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Follow our journey and stay updated with our latest work
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;