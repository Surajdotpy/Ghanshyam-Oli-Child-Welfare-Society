import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Users, BarChart } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Research = () => {
  const publications = [
    {
      title: "Impact of Early Childhood Education in Rural India",
      authors: "Dr. Priya Sharma, Dr. Rajesh Kumar",
      date: "January 2024",
      type: "Research Paper",
      description: "A comprehensive study on the long-term impact of early childhood education programs in rural communities.",
      pages: 45,
      downloads: 1250,
      file: "#"
    },
    {
      title: "Women Empowerment Through Skill Development: A Case Study",
      authors: "Anita Desai, Team Research",
      date: "December 2023",
      type: "Case Study",
      description: "Analysis of our women empowerment program and its impact on economic independence.",
      pages: 32,
      downloads: 890,
      file: "#"
    },
    {
      title: "Girl Education and Community Development",
      authors: "Dr. Neha Singh, Amit Patel",
      date: "November 2023",
      type: "Research Paper",
      description: "Exploring the correlation between girl education and overall community development indicators.",
      pages: 56,
      downloads: 1450,
      file: "#"
    },
    {
      title: "Digital Learning in Low-Resource Settings",
      authors: "Tech Team, Education Department",
      date: "October 2023",
      type: "White Paper",
      description: "Best practices and lessons learned from implementing digital learning in resource-constrained environments.",
      pages: 28,
      downloads: 720,
      file: "#"
    },
    {
      title: "Community-Based Livelihood Programs: Success Factors",
      authors: "Field Research Team",
      date: "September 2023",
      type: "Report",
      description: "Identifying key success factors in community-based livelihood programs across three states.",
      pages: 38,
      downloads: 650,
      file: "#"
    },
  ];

  const researchAreas = [
    {
      icon: Users,
      title: "Child Development",
      description: "Research on early childhood development, learning outcomes, and educational interventions"
    },
    {
      icon: BarChart,
      title: "Impact Assessment",
      description: "Measuring and evaluating the impact of our programs on beneficiaries and communities"
    },
    {
      icon: FileText,
      title: "Policy Research",
      description: "Evidence-based research to inform policy decisions in education and social development"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Research
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100"
            >
              Evidence-based insights driving social change
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Research Focus Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <area.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-600">Download our research papers and reports</p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="text-white" size={40} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {pub.type}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {pub.date}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-gray-600 mb-3">
                      <span className="font-semibold">Authors:</span> {pub.authors}
                    </p>

                    <p className="text-gray-600 mb-4">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span>{pub.pages} pages</span>
                        <div className="flex items-center gap-1">
                          <Download size={16} />
                          {pub.downloads} downloads
                        </div>
                      </div>

                      <a
                        href={pub.file}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Download size={18} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Collaborate on Research
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Interested in collaborating on social impact research? Get in touch with our research team.
            </p>
            <a
              href="mailto:research@ghanshyamoli.org"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Research Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;