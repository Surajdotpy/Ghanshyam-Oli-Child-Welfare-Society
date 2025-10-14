import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, BarChart, RefreshCw, Award } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

const OurApproach = () => {
  const approaches = [
    {
      icon: Target,
      title: "Community-Centric",
      description: "We work WITH communities, not FOR them. Local participation is at the heart of everything we do.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Leveraging technology and creative solutions to maximize impact and reach.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BarChart,
      title: "Data-Informed",
      description: "Every decision backed by research, monitoring, and evaluation to ensure effectiveness.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Building strong partnerships with government, corporates, and other NGOs for collective impact.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: RefreshCw,
      title: "Sustainable",
      description: "Creating long-term solutions that communities can sustain independently.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: "Quality-Focused",
      description: "Maintaining the highest standards in program delivery and stakeholder engagement.",
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Assess",
      description: "Comprehensive community needs assessment and baseline surveys"
    },
    {
      step: "02",
      title: "Design",
      description: "Co-create interventions with community participation and expert inputs"
    },
    {
      step: "03",
      title: "Implement",
      description: "Execute programs with trained staff and continuous quality monitoring"
    },
    {
      step: "04",
      title: "Monitor",
      description: "Regular progress tracking using digital tools and field visits"
    },
    {
      step: "05",
      title: "Evaluate",
      description: "Impact assessment and learning documentation for continuous improvement"
    },
    {
      step: "06",
      title: "Scale",
      description: "Replicate successful models and share learnings with stakeholders"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>
        
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Approach
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                A systematic, evidence-based methodology for creating lasting change
              </p>
            </motion.div>
          </div>
        </ParallaxSection>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six fundamental pillars that guide our work and ensure maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${approach.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <approach.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-800 transition-all">
                    {approach.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A six-step process ensuring systematic execution and continuous improvement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-600"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 mt-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "Our approach isn't just about solving problems today—it's about building communities that can sustain progress tomorrow."
            </h2>
            <p className="text-xl text-green-100">
              - Ghanshyam Oli, Founder
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;