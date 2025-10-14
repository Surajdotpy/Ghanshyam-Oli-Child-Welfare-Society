import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Women Empowerment", "Success Stories", "Events", "Impact"];

  const blogPosts = [
    {
      id: 1,
      title: "Transforming Rural Education: A Year in Review",
      excerpt: "How our innovative teaching methods are changing the landscape of rural education across three states...",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Meet Meera: From Student to Entrepreneur",
      excerpt: "The inspiring journey of Meera Devi who transformed her life through our women empowerment program...",
      author: "Rajesh Kumar",
      date: "March 10, 2024",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "The Power of Girl Education: Breaking Barriers",
      excerpt: "Exploring how education is empowering girls to dream bigger and achieve more in their communities...",
      author: "Anita Desai",
      date: "March 5, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Annual Fundraising Gala 2024: A Night to Remember",
      excerpt: "Highlights from our successful fundraising event that raised over ₹50 lakhs for our programs...",
      author: "Amit Patel",
      date: "February 28, 2024",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Skill Development: Creating Sustainable Livelihoods",
      excerpt: "How our vocational training programs are helping women achieve economic independence...",
      author: "Neha Singh",
      date: "February 20, 2024",
      category: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Impact Report 2023: By The Numbers",
      excerpt: "A comprehensive look at the lives we've touched and the communities we've transformed in 2023...",
      author: "Data Team",
      date: "February 15, 2024",
      category: "Impact",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      readTime: "7 min read"
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100"
            >
              Stories of impact, insights, and inspiration
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6 bg-white sticky top-[128px] md:top-[108px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all group">
                        Read More
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                3
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get the latest stories and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;