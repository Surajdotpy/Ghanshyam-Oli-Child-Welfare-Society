import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Handshake, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Globe, 
  Play,
  BookOpen,
  Stethoscope,
  Home as HomeIcon,
  Briefcase,
  CheckCircle,
  Quote,
  MapPin,
  Calendar,
  Target,
  Sparkles
} from "lucide-react";
import CountUp from "../components/CountUp";
import ParallaxSection from "../components/ParallaxSection";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const impactStats = [
    { icon: Heart, number: 8000, suffix: "+", label: "Lives Impacted", color: "text-red-600", gradient: "from-red-500 to-red-700" },
    { icon: Users, number: 200, suffix: "+", label: "Active Volunteers", color: "text-blue-600", gradient: "from-blue-500 to-blue-700" },
    { icon: GraduationCap, number: 2500, suffix: "+", label: "Children Educated", color: "text-green-600", gradient: "from-green-500 to-green-700" },
    { icon: Handshake, number: 50, suffix: "+", label: "Partner Organizations", color: "text-purple-600", gradient: "from-purple-500 to-purple-700" },
  ];

  const programs = [
    {
      title: "Child Education",
      description: "Providing quality education and holistic development to underprivileged children through innovative learning centers and scholarship programs",
      image: "/assets/images/child-education.jpg",
      stats: "1500+ Children",
      icon: BookOpen,
      link: "/campaigns/child-education",
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Women Empowerment",
      description: "Skill development, vocational training, and entrepreneurship programs enabling women to achieve economic independence",
      image: "/assets/images/women-empowerment.jpg",
      stats: "800+ Women",
      icon: Users,
      link: "/campaigns/women-empowerment",
      color: "pink",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      title: "Healthcare & Nutrition",
      description: "Ensuring access to basic healthcare services, nutrition programs, and health awareness in underserved communities",
      image: "/assets/images/healthcare.jpg",
      stats: "3000+ Beneficiaries",
      icon: Stethoscope,
      link: "/campaigns/healthcare-nutrition",
      color: "red",
      gradient: "from-red-500 to-red-700"
    },
  ];

  const achievements = [
    { 
      icon: Award, 
      title: "NGO Excellence Award 2023", 
      desc: "Recognized for outstanding contribution to social welfare",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    { 
      icon: TrendingUp, 
      title: "60% Growth in Impact", 
      desc: "Year-over-year beneficiary increase demonstrating scalability",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      icon: Globe, 
      title: "3 States Coverage", 
      desc: "Expanding our reach across India with sustainable programs",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
  ];

  const testimonials = [
    {
      quote: "This organization changed my daughter's life. She now dreams of becoming a doctor and has the support to make it happen.",
      author: "Priya Sharma",
      role: "Parent from Bihar",
      image: "/assets/images/testimonial-1.jpg"
    },
    {
      quote: "The skill training program gave me confidence and a livelihood. I now run my own tailoring business and support my family.",
      author: "Meera Devi",
      role: "Women Empowerment Beneficiary",
      image: "/assets/images/testimonial-2.jpg"
    },
    {
      quote: "Volunteering here has been the most rewarding experience. Seeing children's faces light up when they learn something new is priceless.",
      author: "Rahul Verma",
      role: "Active Volunteer",
      image: "/assets/images/testimonial-3.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Impact-Driven Approach",
      description: "Every program is designed with measurable outcomes and transparent reporting"
    },
    {
      icon: CheckCircle,
      title: "100% Transparency",
      description: "Track your donations and see exactly how funds are utilized"
    },
    {
      icon: Users,
      title: "Community-Centric",
      description: "We work with communities, not for them, ensuring sustainable change"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over a decade of consistent impact and recognized excellence"
    }
  ];

  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "Annual Fundraising Gala",
      location: "New Delhi",
      type: "Fundraiser"
    },
    {
      date: "Dec 22",
      title: "Educational Workshop",
      location: "Aligarh, UP",
      type: "Workshop"
    },
    {
      date: "Jan 5",
      title: "Health Camp",
      location: "Bihar",
      type: "Health"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
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

            {/* Overlay gradients */}
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
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-yellow-500/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center"
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
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8 border border-white/30"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="font-semibold text-yellow-300 text-sm md:text-base">Transforming Lives Since 2010</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight"
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.7)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join us in our mission to provide education, healthcare, and hope to those in need across India. Together, we can create lasting change.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link 
                to="/donate" 
                className="group bg-yellow-500 hover:bg-yellow-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart className="group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6" />
                Donate Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link 
                to="/our-story" 
                className="group bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                Our Story
              </Link>
            </motion.div>

            {/* Stats Cards - Floating on Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto px-4"
            >
              {impactStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/15 backdrop-blur-md border border-white/30 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/25 transition-all cursor-pointer"
                >
                  <stat.icon className="w-6 h-6 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-yellow-300" />
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">
                    <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Partner With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine passion with professionalism to create sustainable impact
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="bg-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-green-700" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Enhanced Design */}
      <ParallaxSection offset={30}>
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Impact Programs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming lives through targeted campaigns across education, healthcare, and empowerment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {programs.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden h-56 md:h-64">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.gradient} p-3 rounded-xl shadow-lg`}>
                      <program.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs md:text-sm font-bold bg-yellow-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-flex items-center gap-2 shadow-lg">
                        <CheckCircle size={14} />
                        {program.stats}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
                      {program.description}
                    </p>
                    <Link 
                      to={program.link}
                      className={`inline-flex items-center gap-2 text-${program.color}-700 font-semibold hover:gap-3 transition-all group/link text-sm md:text-base`}
                    >
                      Learn More 
                      <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Programs CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link 
                to="/campaigns"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                View All Programs
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Milestones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">Achievements that inspire us to do more</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`${item.bgColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6`}>
                  <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Stories of Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Hear from the people whose lives we've touched
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-green-600/20 mb-6" />
              <blockquote className="text-lg md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-base md:text-lg">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm md:text-base text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                    activeTestimonial === idx ? 'bg-green-600 w-8 md:w-10' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">Join us in making a difference</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-600"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 px-3 py-2 rounded-lg text-center flex-shrink-0">
                    <div className="text-xl md:text-2xl font-bold text-green-700">{event.date.split(' ')[1]}</div>
                    <div className="text-xs text-gray-600">{event.date.split(' ')[0]}</div>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-2">
                      {event.type}
                    </span>
                    <h3 className="font-bold text-gray-800 text-base md:text-lg">{event.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin size={16} className="text-green-600" />
                  <span>{event.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 md:mt-12"
          >
            <Link 
              to="/media/events"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all text-base md:text-lg"
            >
              View All Events
              <ArrowRight className="transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
              <span className="font-semibold text-yellow-300 text-sm md:text-base">Make an Impact Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Be the Change You Want to See
            </h2>
            <p className="text-base md:text-xl mb-8 md:mb-10 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your support can transform lives. Whether through donations, volunteering, or partnerships, every contribution creates lasting impact. Join our community of changemakers today.
            </p>

            {/* Impact Promise */}
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-xs md:text-sm text-green-100">Transparent</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">Direct</div>
                <div className="text-xs md:text-sm text-green-100">Impact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">Verified</div>
                <div className="text-xs md:text-sm text-green-100">Programs</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/donate"
                className="group bg-yellow-500 hover:bg-yellow-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                Donate Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/get-involved/volunteer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users size={20} className="md:w-6 md:h-6" />
                Become a Volunteer
              </Link>
              <Link 
                to="/get-involved/partners"
                className="bg-white text-green-700 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Handshake size={20} className="md:w-6 md:h-6" />
                Partner With Us
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/20"
            >
              <p className="text-xs md:text-sm text-green-200 mb-4">Trusted by thousands of donors and partners worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {[
                  { icon: CheckCircle, text: "80G Tax Benefits" },
                  { icon: Award, text: "Certified NGO" },
                  { icon: Globe, text: "Pan-India Presence" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-green-100 text-xs md:text-sm">
                    <item.icon size={16} className="md:w-5 md:h-5 text-yellow-300" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Subscribe to receive updates, impact stories, and ways to get involved
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full border-2 border-gray-300 focus:border-green-600 focus:outline-none text-sm md:text-base"
              />
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg text-sm md:text-base">
                Subscribe
              </button>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners/Supporters Logo Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
              Our Partners & Supporters
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Working together to create sustainable change
            </p>
            
            {/* Placeholder for partner logos - replace with actual logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
              {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                <div key={idx} className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Handshake className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                </div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 md:mt-10"
            >
              <Link 
                to="/get-involved/partners"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all text-sm md:text-base"
              >
                Become a Partner
                <ArrowRight className="transition-transform" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;