import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Tv, Radio, ExternalLink } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Coverage = () => {
  const mediaTypes = [
    { icon: Newspaper, label: "Print Media", count: 45, color: "text-blue-600" },
    { icon: Tv, label: "TV Coverage", count: 12, color: "text-purple-600" },
    { icon: Radio, label: "Online Media", count: 68, color: "text-green-600" },
  ];

  const mediaCoverage = [
    {
      id: 1,
      outlet: "Times of India",
      type: "Print",
      title: "NGO Transforms Lives Through Education in Rural India",
      date: "March 18, 2024",
      excerpt: "Ghanshyam Oli Child Welfare Society's innovative approach to education is making waves...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=Times+of+India"
    },
    {
      id: 2,
      outlet: "NDTV India",
      type: "TV",
      title: "Special Report: Women Empowerment in Action",
      date: "March 10, 2024",
      excerpt: "A closer look at how skill development programs are changing women's lives...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=NDTV"
    },
    {
      id: 3,
      outlet: "The Hindu",
      type: "Print",
      title: "Girl Education Initiative Wins National Recognition",
      date: "February 28, 2024",
      excerpt: "Organization's girl education program recognized for exceptional impact...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=The+Hindu"
    },
    {
      id: 4,
      outlet: "India Today",
      type: "Online",
      title: "Breaking Barriers: The Story of Rural Education Reform",
      date: "February 20, 2024",
      excerpt: "How one NGO is revolutionizing education access in rural communities...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=India+Today"
    },
    {
      id: 5,
      outlet: "Economic Times",
      type: "Print",
      title: "CSR Partnership Model Shows Promising Results",
      date: "February 10, 2024",
      excerpt: "Corporate partnerships driving social impact in education sector...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=Economic+Times"
    },
    {
      id: 6,
      outlet: "Zee News",
      type: "TV",
      title: "Ground Report: Education Changing Lives in Gujarat",
      date: "January 25, 2024",
      excerpt: "On-ground coverage of learning centers and their impact on communities...",
      link: "#",
      image: "https://via.placeholder.com/400x200?text=Zee+News"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-700 via-red-800 to-pink-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Media Coverage
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100"
            >
              Our work in the media spotlight
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Media Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {mediaTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
              >
                <type.icon className={`w-16 h-16 mx-auto mb-4 ${type.color}`} />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{type.count}</h3>
                <p className="text-gray-600 font-medium">{type.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-600">Our stories featured across leading media outlets</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((coverage, idx) => (
              <motion.article
                key={coverage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                {/* Media Outlet Logo/Image */}
                <div className="relative h-40 bg-gray-200">
                  <img 
                    src={coverage.image} 
                    alt={coverage.outlet}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      coverage.type === 'Print' ? 'bg-blue-600' :
                      coverage.type === 'TV' ? 'bg-purple-600' : 'bg-green-600'
                    }`}>
                      {coverage.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800">{coverage.outlet}</h4>
                    <span className="text-sm text-gray-500">{coverage.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition-colors line-clamp-2">
                    {coverage.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {coverage.excerpt}
                  </p>

                  <a
                    href={coverage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read Article
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
              Load More Coverage
            </button>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Media Press Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Download our official press kit including logos, fact sheets, and high-resolution images
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
              Download Press Kit
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Media Team */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-700 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to Cover Our Story?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get in touch with our media team for interviews, stories, and information
            </p>
            <div className="space-y-3">
              <p className="text-lg">
                <strong>Email:</strong> media@ghanshyamoli.org
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> +91 90000 00000
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;