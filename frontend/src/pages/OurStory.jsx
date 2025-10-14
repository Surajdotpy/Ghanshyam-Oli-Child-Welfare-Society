import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, Award } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

const OurStory = () => {
  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Started with 20 children in a small room", icon: Heart },
    { year: "2013", title: "First Milestone", desc: "Reached 500 beneficiaries across 3 villages", icon: Users },
    { year: "2016", title: "Recognition", desc: "Received state NGO excellence award", icon: Award },
    { year: "2020", title: "Expansion", desc: "Expanded operations to 3 states", icon: Calendar },
    { year: "2024", title: "Today", desc: "Impacting 5000+ lives annually", icon: Heart },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl"
            >
              A journey of hope, perseverance, and impact
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Story Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              In 2010, what started as a small initiative by Ghanshyam Oli to educate 20 underprivileged 
              children in his neighborhood has grown into a movement touching thousands of lives across India.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Witnessing the struggles of children who couldn't afford education and women who lacked 
              opportunities for economic independence, Ghanshyam decided to make a change. With just 
              ₹5,000 in savings and an unwavering determination, he rented a small room and started 
              teaching children after his work hours.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Today, Ghanshyam Oli Child Welfare Society operates 12 learning centers across 3 states, 
              has trained over 800 women in vocational skills, and continues to grow its impact every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
            
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-green-600" size={24} />
                      <span className="text-2xl font-bold text-green-700">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                
                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;