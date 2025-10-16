import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, GraduationCap, Heart, Building, MapPin } from "lucide-react";
import CountUp from "../components/CountUp";
import ParallaxSection from "../components/ParallaxSection";

const OurImpact = () => {
  const impactMetrics = [
    { icon: Users, number: 5000, suffix: "+", label: "Lives Transformed Annually", color: "text-blue-600" },
    { icon: GraduationCap, number: 1500, suffix: "+", label: "Children in School", color: "text-green-600" },
    { icon: Heart, number: 800, suffix: "+", label: "Women Empowered", color: "text-red-600" },
    { icon: Building, number: 12, suffix: "", label: "Learning Centers", color: "text-purple-600" },
    { icon: MapPin, number: 3, suffix: "", label: "States Covered", color: "text-yellow-600" },
    { icon: TrendingUp, number: 60, suffix: "%", label: "Year-on-Year Growth", color: "text-indigo-600" },
  ];

  const stateWiseImpact = [
    {
      state: "Uttarakhand",
      beneficiaries: 2500,
      centers: 6,
      programs: ["Child Education", "Women Empowerment", "Healthcare"]
    },
    {
      state: "Gujarat",
      beneficiaries: 1500,
      centers: 4,
      programs: ["Girl Education", "Livelihood", "Child Education"]
    },
    {
      state: "Rajasthan",
      beneficiaries: 1000,
      centers: 2,
      programs: ["Girl Education", "Women Empowerment"]
    },
  ];

  const successStories = [
    {
      name: "Manju",
      story: "From our first batch of girl students, now a software engineer at a leading tech company",
      image: "https://i.pravatar.cc/300?img=5",
      year: "2015"
    },
    {
      name: "Krishna",
      story: "Started with our child education program, now runs his own business employing 10 people",
      image: "https://i.pravatar.cc/300?img=12",
      year: "2016"
    },
    {
      name: "Pooja",
      story: "Completed our women empowerment program, now trains other women in her village",
      image: "https://i.pravatar.cc/300?img=9",
      year: "2018"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Impact
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100"
            >
              Measuring change, celebrating transformation
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Impact Metrics with Counter */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Impact by Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2 border border-gray-100"
              >
                <metric.icon className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 ${metric.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                  <CountUp end={metric.number} suffix={metric.suffix} duration={2.5} />
                </h3>
                <p className="text-gray-600 font-medium text-sm md:text-base">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              State-wise Reach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stateWiseImpact.map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="text-green-600" />
                  {state.state}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Beneficiaries:</span>
                    <span className="text-2xl font-bold text-green-700">
                      <CountUp end={state.beneficiaries} suffix="+" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Centers:</span>
                    <span className="text-2xl font-bold text-green-700">{state.centers}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Active Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {state.programs.map((program, pIdx) => (
                      <span key={pIdx} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                        {program}
                      </span>
                    ))}
                  </div>
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
              Stories of Change
            </h2>
            <p className="text-xl text-gray-600">Real people, real transformations</p>
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
                <div className="relative h-64">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {story.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{story.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Help Us Create More Success Stories
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Your contribution can transform more lives
            </p>
            <motion.a
              href="/donate"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Cause
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;