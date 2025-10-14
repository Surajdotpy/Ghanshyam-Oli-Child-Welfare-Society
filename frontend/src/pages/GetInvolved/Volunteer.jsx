import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '', availability: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const opportunities = [
    {
      icon: Heart,
      title: "Teaching Volunteer",
      description: "Help children with education, homework, and life skills",
      commitment: "4-6 hours/week",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engage with communities and conduct awareness programs",
      commitment: "Flexible",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Skill Development Trainer",
      description: "Train women in vocational skills and entrepreneurship",
      commitment: "2-3 days/week",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      title: "Event Coordinator",
      description: "Help organize fundraising events and workshops",
      commitment: "Project-based",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const benefits = [
    "Certificate of appreciation",
    "Skill development opportunities",
    "Networking with like-minded people",
    "Making real impact in communities",
    "Letter of recommendation",
    "Exclusive volunteer events"
  ];

  const internshipPrograms = [
    {
      title: "Summer Internship Program",
      duration: "2-3 months",
      eligibility: "College students (any stream)",
      stipend: "Certificate + Stipend for selected positions"
    },
    {
      title: "Project Internship",
      duration: "3-6 months",
      eligibility: "Graduate/Post-graduate students",
      stipend: "Performance-based stipend"
    },
    {
      title: "Research Internship",
      duration: "4-6 months",
      eligibility: "Research scholars, PhD students",
      stipend: "Research grant + Publication support"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-green-600/20 rounded-full blur-3xl"
          />
        </div>

        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Volunteer & Internship
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100"
            >
              Be the change. Join our team of passionate changemakers.
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600">Choose what matches your passion and schedule</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${opp.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${opp.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <opp.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {opp.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {opp.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-green-700 font-semibold">
                    <Clock size={18} />
                    <span>{opp.commitment}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Volunteer With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join a community of passionate individuals making real impact. Gain valuable experience while giving back to society.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600" 
                alt="Volunteers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold mb-1">200+</p>
                <p className="text-green-100">Active Volunteers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600">Structured learning experiences with real-world impact</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {program.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-semibold text-gray-800">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Eligibility</p>
                    <p className="font-semibold text-gray-800">{program.eligibility}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Benefits</p>
                    <p className="font-semibold text-gray-800">{program.stipend}</p>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Register Your Interest
            </h2>
            <p className="text-lg text-gray-600">Fill out the form and we'll get back to you</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="+91 99999 99999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest *</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select...</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="internship">Internship</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Availability *</label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="e.g., Weekends, 10 hours/week"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join us? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Tell us about your motivation..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Submit Application
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;