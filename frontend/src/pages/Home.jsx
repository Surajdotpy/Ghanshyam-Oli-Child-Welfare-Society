import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Users, GraduationCap, Handshake, ArrowRight, Award, TrendingUp, Globe, Play } from "lucide-react";
import CountUp from "../components/CountUp";
import ParallaxSection from "../components/ParallaxSection";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const impactStats = [
    { icon: Heart, number: 5000, suffix: "+", label: "Lives Impacted", color: "text-red-600" },
    { icon: Users, number: 200, suffix: "+", label: "Active Volunteers", color: "text-blue-600" },
    { icon: GraduationCap, number: 1500, suffix: "+", label: "Children Educated", color: "text-green-600" },
    { icon: Handshake, number: 50, suffix: "+", label: "Partner Organizations", color: "text-purple-600" },
  ];

  const programs = [
    {
      title: "Child Education",
      description: "Providing quality education to underprivileged children through innovative learning programs",
      image: "/assets/images/child-education.jpg",
      stats: "1500+ Children",
      link: "/campaigns/child-education"
    },
  ];

  const achievements = [
    { icon: Award, title: "NGO Excellence Award 2023", desc: "Recognized for outstanding contribution" },
    { icon: TrendingUp, title: "60% Growth in Impact", desc: "Year-over-year beneficiary increase" },
    { icon: Globe, title: "3 States Coverage", desc: "Expanding our reach across India" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Local Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ scale }}
            className="w-full h-full"
          >
            {/* Background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/hero.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/images/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Keep the overlay gradients below */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
            
            {/* Animated floating shapes */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-green-600/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-green-500/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30"
            >
              <span className="font-semibold text-yellow-300">✨ Transforming Lives Since 2010</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Empowering Lives,
              <span className="block text-yellow-300 mt-2">Building Futures</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed"
              style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.7)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join us in our mission to provide education, healthcare, and hope to those in need across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link 
                to="/donate" 
                className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart className="group-hover:scale-110 transition-transform" size={24} />
                Donate Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/our-story" 
                className="group bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Our Story
              </Link>
            </motion.div>

            {/* Stats Cards - Floating on Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
            >
              {impactStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/15 backdrop-blur-md border border-white/30 p-6 rounded-2xl hover:bg-white/25 transition-all cursor-pointer"
                >
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-yellow-300" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                  </h3>
                  <p className="text-gray-200 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Quick Impact Section */}
      <section className="py-16 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every number represents a life touched, a dream realized, and a future transformed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section with Parallax */}
      <ParallaxSection offset={30}>
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transforming lives through impactful campaigns across education, healthcare, and empowerment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold bg-yellow-500 px-3 py-1 rounded-full inline-block">
                        {program.stats}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <Link 
                      to={program.link}
                      className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all group"
                    >
                      Learn More 
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Achievements
            </h2>
            <p className="text-lg text-gray-600">Milestones that inspire us to do more</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <item.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-700" size={40} />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <p className="text-lg text-gray-600">- Nelson Mandela</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Be the Change You Want to See
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Your support can transform lives. Join us in making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/donate"
                className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart size={24} />
                Donate Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/get-involved/volunteer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Users size={24} />
                Become a Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;