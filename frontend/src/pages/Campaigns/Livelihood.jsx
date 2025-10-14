import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, DollarSign, CheckCircle, Sprout, Factory, Store } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";
import CountUp from "../../components/CountUp";

const Livelihood = () => {
  const stats = [
    { icon: Users, number: 500, suffix: "+", label: "Families Supported", color: "text-green-600" },
    { icon: Briefcase, number: 10, suffix: "+", label: "Livelihood Programs", color: "text-blue-600" },
    { icon: TrendingUp, number: 80, suffix: "%", label: "Income Increase", color: "text-orange-600" },
    { icon: DollarSign, number: 300, suffix: "+", label: "Micro-enterprises", color: "text-purple-600" },
  ];

  const programs = [
    {
      title: "Agriculture & Farming",
      description: "Modern farming techniques, organic farming, and market linkages",
      icon: Sprout,
      beneficiaries: 200
    },
    {
      title: "Small Scale Industries",
      description: "Setting up small manufacturing units and cottage industries",
      icon: Factory,
      beneficiaries: 150
    },
    {
      title: "Retail & Trading",
      description: "Small shops, kirana stores, and mobile vending units",
      icon: Store,
      beneficiaries: 100
    },
    {
      title: "Service Sector",
      description: "Tailoring, beauty parlors, repair services, and more",
      icon: Briefcase,
      beneficiaries: 50
    },
  ];

  const support = [
    "Skill training and capacity building",
    "Seed capital and micro-finance",
    "Business planning assistance",
    "Raw material procurement support",
    "Market linkage and networking",
    "Quality control and certification",
    "Ongoing mentorship and handholding",
    "Group formation and cooperative models"
  ];

  const successStories = [
    {
      name: "Ramesh Patel",
      occupation: "Organic Farmer",
      story: "Shifted to organic farming, now supplies to 5 stores",
      income: "₹40,000/month",
      image: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "Lakshmi Devi",
      occupation: "Pickle Business",
      story: "Started home-based pickle business, now employs 3 women",
      income: "₹35,000/month",
      image: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Suresh Kumar",
      occupation: "Mobile Repair Shop",
      story: "Opened repair shop after training, serves 50+ customers daily",
      income: "₹45,000/month",
      image: "https://i.pravatar.cc/300?img=33"
    },
  ];

  const impactMetrics = [
    { metric: "Average income increase", value: 80, unit: "%" },
    { metric: "Families lifted above poverty line", value: 65, unit: "%" },
    { metric: "Women-led enterprises", value: 55, unit: "%" },
    { metric: "Sustainable after 2 years", value: 85, unit: "%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-teal-800 to-emerald-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-green-600/20 rounded-full blur-3xl"
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
              Livelihood Campaign
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100"
            >
              Creating sustainable income opportunities for marginalized families
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
                className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
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
                Sustainable Livelihoods for All
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Livelihood Campaign helps marginalized families establish sustainable income sources 
                through skill training, micro-enterprise development, and market linkages. We focus on 
                agriculture, small-scale industries, retail, and service sectors.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With support to 500+ families across multiple livelihood programs, we've helped create 
                300+ micro-enterprises. Our comprehensive approach includes training, seed capital, 
                business planning, and ongoing mentorship to ensure long-term sustainability.
              </p>
              
              <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={24} />
                  Average Impact
                </h3>
                <p className="text-gray-700">
                  Families see an average 80% increase in monthly income within the first year
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
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700" 
                alt="Livelihood program"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-green-600 mb-1">
                  <CountUp end={80} suffix="%" />
                </p>
                <p className="text-gray-700 font-semibold">Income Increase</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Livelihood Programs
            </h2>
            <p className="text-xl text-gray-600">Diverse opportunities across sectors</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <program.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="bg-white px-4 py-2 rounded-full inline-block">
                  <p className="text-sm font-semibold text-green-700">
                    {program.beneficiaries}+ Families
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Support System
            </h2>
            <p className="text-lg text-gray-600">End-to-end assistance for enterprise success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {support.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Impact Metrics
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {impactMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{item.metric}</h3>
                  <span className="text-3xl font-bold text-green-600">
                    {item.value}{item.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                    className="h-full bg-gradient-to-r from-green-600 to-teal-600 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real people, real transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                  <img src={story.image} alt={story.name} className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{story.name}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">{story.occupation}</p>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="bg-green-100 px-4 py-2 rounded-full inline-block">
                    <p className="text-sm font-bold text-green-700">{story.income}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Support Livelihood Creation
            </h2>
            <p className="text-xl mb-8 text-green-100">
              ₹25,000 can help establish one micro-enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Support Now
              </a>
              <a
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Livelihood;