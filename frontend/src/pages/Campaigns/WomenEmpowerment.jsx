import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Award, CheckCircle, Lightbulb, DollarSign, Heart } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";
import CountUp from "../../components/CountUp";

const WomenEmpowerment = () => {
  const stats = [
    { icon: Users, number: 800, suffix: "+", label: "Women Trained", color: "text-purple-600" },
    { icon: Briefcase, number: 15, suffix: "", label: "Skill Programs", color: "text-blue-600" },
    { icon: TrendingUp, number: 85, suffix: "%", label: "Employment Rate", color: "text-green-600" },
    { icon: DollarSign, number: 70, suffix: "%", label: "Income Increase", color: "text-yellow-600" },
  ];

  const skillPrograms = [
    {
      title: "Tailoring & Fashion Design",
      description: "Professional training in garment making and fashion design",
      icon: Award,
      duration: "6 months"
    },
    {
      title: "Beauty & Wellness",
      description: "Cosmetology, spa therapy, and salon management",
      icon: Heart,
      duration: "4 months"
    },
    {
      title: "Computer & Digital Skills",
      description: "MS Office, tally, graphic design, and digital marketing",
      icon: Lightbulb,
      duration: "3 months"
    },
    {
      title: "Handicrafts & Artisan",
      description: "Traditional crafts, jewelry making, and home decor",
      icon: Briefcase,
      duration: "5 months"
    },
  ];

  const supportServices = [
    "Free vocational training",
    "Tool kits and equipment",
    "Business development training",
    "Micro-finance linkages",
    "Market linkage support",
    "Entrepreneurship guidance",
    "Legal and financial literacy",
    "Ongoing mentorship"
  ];

  const successStories = [
    {
      name: "Meera Devi",
      story: "Started her own tailoring business, now employs 5 women",
      impact: "₹25,000/month income",
      image: "https://i.pravatar.cc/300?img=9"
    },
    {
      name: "Sunita Sharma",
      story: "Became a certified beautician, runs her own salon",
      impact: "₹30,000/month income",
      image: "https://i.pravatar.cc/300?img=26"
    },
    {
      name: "Radha Patel",
      story: "Digital marketing expert, working with 3 companies",
      impact: "₹35,000/month income",
      image: "https://i.pravatar.cc/300?img=24"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-600/20 rounded-full blur-3xl"
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
              Women Empowerment Campaign
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100"
            >
              Skill development for economic independence and self-reliance
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
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
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
              className="relative order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700" 
                alt="Women empowerment training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-purple-600 mb-1">
                  <CountUp end={85} suffix="%" />
                </p>
                <p className="text-gray-700 font-semibold">Employed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Economic Independence Through Skills
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Women Empowerment Campaign provides vocational training and entrepreneurship 
                support to women from marginalized communities. We've trained over 800 women in 
                various skills, with 85% achieving employment or starting their own businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Beyond skill training, we provide comprehensive support including business development, 
                micro-finance linkages, market connections, and ongoing mentorship to ensure sustainable 
                livelihoods.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-100 px-6 py-3 rounded-full">
                  <p className="font-bold text-purple-800">15 Skill Programs</p>
                </div>
                <div className="bg-blue-100 px-6 py-3 rounded-full">
                  <p className="font-bold text-blue-800">3-6 Months Duration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Skill Programs
            </h2>
            <p className="text-xl text-gray-600">Diverse training opportunities for sustainable livelihoods</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <program.icon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="bg-white px-4 py-2 rounded-full inline-block">
                  <p className="text-sm font-semibold text-purple-700">Duration: {program.duration}</p>
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
              Complete Support System
            </h2>
            <p className="text-lg text-gray-600">Beyond training - comprehensive support for success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {supportServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle className="text-purple-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-white">
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
            <p className="text-xl text-gray-600">Real women, real transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                  <img src={story.image} alt={story.name} className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="bg-green-100 px-4 py-2 rounded-full inline-block">
                    <p className="text-sm font-bold text-green-700">{story.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empower a Woman Today
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              ₹20,000 can provide complete skill training to one woman
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
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;