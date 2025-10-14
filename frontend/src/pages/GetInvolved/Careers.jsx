import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Users, Heart, TrendingUp } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Careers = () => {
  const openPositions = [
    {
      title: "Program Manager - Education",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead and manage child education programs across multiple centers"
    },
    {
      title: "Field Coordinator",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      description: "Coordinate field operations and community engagement activities"
    },
    {
      title: "Women Empowerment Trainer",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "2-3 years",
      description: "Conduct skill development training for women beneficiaries"
    },
    {
      title: "Fundraising Manager",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
      description: "Develop and execute fundraising strategies, donor relations"
    },
    {
      title: "Social Media Manager",
      location: "Mumbai / Remote",
      type: "Full-time",
      experience: "2-3 years",
      description: "Manage social media presence, content creation, and digital campaigns"
    },
    {
      title: "Monitoring & Evaluation Officer",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "Design and implement M&E frameworks, impact assessment"
    },
  ];

  const benefits = [
    { icon: Heart, title: "Meaningful Work", desc: "Make real difference in people's lives" },
    { icon: Users, title: "Great Team", desc: "Work with passionate, like-minded people" },
    { icon: TrendingUp, title: "Growth Opportunities", desc: "Continuous learning and career development" },
    { icon: DollarSign, title: "Competitive Salary", desc: "Fair compensation aligned with NGO standards" },
  ];

  const culture = [
    "Mission-driven and impact-focused",
    "Collaborative and inclusive work environment",
    "Work-life balance with flexible timings",
    "Regular training and skill development",
    "Field visits and community engagement",
    "Annual team retreats and celebrations"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Careers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100"
            >
              Join our mission to transform lives across India
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Join Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <benefit.icon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">Join our growing team</p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-purple-600" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-purple-600" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 group-hover:gap-3 whitespace-nowrap">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in creating an environment where everyone can thrive while making a difference.
              </p>
              
              <div className="space-y-3">
                {culture.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Don't See a Fit?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Send us your resume anyway! We're always looking for talented, passionate individuals.
            </p>
            <a
              href="mailto:careers@ghanshyamoli.org"
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;