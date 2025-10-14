import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, TrendingUp, CheckCircle, Star, BookOpen, Target } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";
import CountUp from "../../components/CountUp";

const GirlEducation = () => {
  const stats = [
    { icon: Users, number: 2000, suffix: "+", label: "Girls Enrolled", color: "text-pink-600" },
    { icon: GraduationCap, number: 450, suffix: "+", label: "In Colleges", color: "text-purple-600" },
    { icon: TrendingUp, number: 60, suffix: "%", label: "Dropout Reduction", color: "text-green-600" },
    { icon: Award, number: 92, suffix: "%", label: "Success Rate", color: "text-blue-600" },
  ];

  const features = [
    {
      title: "Scholarship Programs",
      description: "Financial support for school fees, books, and uniforms",
      icon: Award
    },
    {
      title: "Mentorship & Counseling",
      description: "One-on-one guidance and career counseling sessions",
      icon: Users
    },
    {
      title: "Safe Learning Environment",
      description: "Dedicated girls-only study centers and transportation",
      icon: BookOpen
    },
    {
      title: "Life Skills Training",
      description: "Leadership, communication, and confidence building programs",
      icon: Star
    },
  ];

  const initiatives = [
    "Free education materials and uniforms",
    "Scholarship for higher education",
    "Career guidance and counseling",
    "STEM education focus",
    "Digital literacy programs",
    "Personality development workshops",
    "Parent awareness sessions",
    "Alumni mentorship network"
  ];

  const successMetrics = [
    { label: "Girls continuing to 12th grade", percentage: 85 },
    { label: "Enrolled in higher education", percentage: 70 },
    { label: "Pursuing STEM careers", percentage: 45 },
    { label: "Family support increased", percentage: 90 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-700 via-purple-800 to-fuchsia-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-pink-600/20 rounded-full blur-3xl"
          />
        </div>

        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            >
              <span className="font-semibold">Our Campaigns</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Girl Education Campaign
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-pink-100"
            >
              Empowering girls through education, breaking barriers, creating opportunities
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Breaking Barriers, Building Futures
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Despite progress in education, millions of girls in India still face barriers to accessing 
                quality education. Our Girl Education Campaign addresses these challenges through scholarships, 
                mentorship, and community engagement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We've supported over 2,000 girls in pursuing their educational dreams, with 450+ now enrolled 
                in colleges. Our holistic approach includes not just academic support, but also life skills 
                training, career counseling, and family sensitization.
              </p>
              
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="text-pink-600" size={24} />
                  Our Goal by 2025
                </h3>
                <p className="text-gray-700">
                  Ensure 100% of our enrolled girls complete 12th grade and 75% pursue higher education
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=700" 
                alt="Girls in education"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-pink-600 mb-1">60%</p>
                <p className="text-gray-700 font-semibold">Dropout Reduced</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Campaign Features
            </h2>
            <p className="text-xl text-gray-600">Comprehensive support for girl education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <feature.icon className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Initiatives
            </h2>
            <p className="text-lg text-gray-600">Multi-faceted approach to girl education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {initiatives.map((initiative, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle className="text-pink-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{initiative}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Metrics
            </h2>
            <p className="text-lg text-gray-600">Measuring our impact</p>
          </motion.div>

          <div className="space-y-6">
            {successMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{metric.label}</h3>
                  <span className="text-3xl font-bold text-pink-600">{metric.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                    className="h-full bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sponsor a Girl's Education
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              ₹18,000 per year can provide complete education support to one girl
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Sponsor Now
              </a>
              <a
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GirlEducation;