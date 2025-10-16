import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Heart, 
  Home, 
  Briefcase,
  ArrowRight,
  MapPin,
  TrendingUp,
  Award
} from "lucide-react";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projects = [
    {
      id: "child-education",
      icon: BookOpen,
      title: "Child Education",
      description: "Providing quality education to underprivileged children through our learning centers and scholarship programs. We focus on holistic development including academics, sports, and arts.",
      image: "/assets/child-education.jpg",
      stats: { 
        beneficiaries: "1500+", 
        centers: "12", 
        states: "3" 
      },
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      statBg: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      statText: "text-blue-700"
    },
    {
      id: "women-empowerment",
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development, vocational training, and entrepreneurship programs for women to achieve economic independence. We provide mentorship, financial literacy, and business support.",
      image: "/assets/women-empowerment.jpg",
      stats: { 
        beneficiaries: "800+", 
        programs: "15", 
        success: "85%" 
      },
      color: "pink",
      gradient: "from-pink-500 to-pink-700",
      statBg: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
      statText: "text-pink-700"
    },
    {
      id: "girls-education",
      icon: GraduationCap,
      title: "Girls Education",
      description: "Breaking barriers and creating opportunities for girls through education, mentorship, and support programs. Fighting dropout rates and ensuring higher education access.",
      image: "/assets/girls-education.jpg",
      stats: { 
        beneficiaries: "2000+", 
        dropout: "-60%", 
        colleges: "450+" 
      },
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      statBg: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      statText: "text-purple-700"
    },
    {
      id: "healthcare-nutrition",
      icon: Heart,
      title: "Healthcare & Nutrition",
      description: "Ensuring access to basic healthcare services, nutrition programs, and health awareness campaigns in underserved communities. Regular health check-ups and medical camps.",
      image: "/assets/healthcare.jpg",
      stats: { 
        beneficiaries: "3000+", 
        camps: "24", 
        villages: "50+" 
      },
      color: "red",
      gradient: "from-red-500 to-red-700",
      statBg: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
      statText: "text-red-700"
    },
    {
      id: "rural-development",
      icon: Home,
      title: "Rural Development",
      description: "Comprehensive rural development programs focusing on infrastructure, clean water, sanitation, and sustainable livelihood opportunities for rural communities.",
      image: "/assets/rural-development.jpg",
      stats: { 
        villages: "35+", 
        families: "1200+", 
        projects: "18" 
      },
      color: "green",
      gradient: "from-green-500 to-green-700",
      statBg: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      statText: "text-green-700"
    },
    {
      id: "skill-employment",
      icon: Briefcase,
      title: "Skill Development & Employment",
      description: "Bridging the gap between education and employment through industry-relevant skill training, placement assistance, and career counseling for youth.",
      image: "/assets/skill-development.jpg",
      stats: { 
        trained: "950+", 
        placed: "720+", 
        partners: "40+" 
      },
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
      statBg: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      statText: "text-orange-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
          >
            <span className="font-semibold text-yellow-300">🌟 Impact-Driven Initiatives</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Programs & Campaigns
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Transforming lives through education, empowerment, and opportunity across multiple social impact areas
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">6</div>
              <div className="text-sm text-green-100">Active Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">8K+</div>
              <div className="text-sm text-green-100">Lives Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">100+</div>
              <div className="text-sm text-green-100">Locations</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group scroll-mt-24"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} p-3 rounded-xl shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-gray-800">
                    Active Program
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats Grid - FIXED */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div 
                        key={key} 
                        className={`text-center ${project.statBg} p-3 rounded-lg border`}
                      >
                        <div className={`text-xl font-bold ${project.statText}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize mt-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link 
                      to={`/campaigns/${project.id}`}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/donate"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      Donate
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Highlights */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Our Programs Work
            </h2>
            <p className="text-lg text-gray-600">
              Evidence-based approaches with measurable impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Ground-Level Execution",
                desc: "Direct community engagement ensuring real impact"
              },
              {
                icon: TrendingUp,
                title: "Data-Driven Results",
                desc: "Continuous monitoring and transparent reporting"
              },
              {
                icon: Award,
                title: "Sustainable Model",
                desc: "Long-term solutions, not temporary fixes"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Support any of our programs and be part of the transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/donate"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart size={24} />
                Donate Now
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/get-involved/volunteer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Users size={24} />
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;