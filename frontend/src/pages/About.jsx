import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Heart,
  TrendingUp,
  Shield,
  Lightbulb,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Started with just 20 children in a small rented space",
      image: "/assets/images/child-education.jpg"
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Opened 5 learning centers across 3 states",
      image: "/assets/images/girls-education.jpg"
    },
    {
      year: "2018",
      title: "Women Empowerment",
      description: "Launched skill development programs for 500+ women",
      image: "/assets/images/women-empowerment.jpg"
    },
    {
      year: "2024",
      title: "8000+ Lives Impacted",
      description: "Reached our biggest milestone with sustainable impact",
      image: "/assets/images/healthcare.jpg"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Children Educated", icon: Users },
    { number: "80+", label: "Women Empowered", icon: Award },
    { number: "500+", label: "Villages Reached", icon: MapPin },
    { number: "14", label: "Years of Service", icon: Calendar }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Leading with empathy and understanding in every interaction",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining transparency and accountability in all operations",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Finding creative solutions to complex social challenges",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description: "Building long-term solutions for lasting community impact",
      color: "from-green-500 to-teal-500"
    }
  ];

  const workingAreas = [
    {
      title: "Education Excellence",
      description: "We don't just focus on basic literacy. Our comprehensive curriculum includes STEM education, creative arts, sports, and life skills. We provide scholarships, uniforms, learning materials, and nutritious meals to ensure no child drops out due to financial constraints.",
      stats: ["1500+ students enrolled", "12 learning centers", "95% attendance rate"],
      image: "/assets/images/child-education.jpg"
    },
    {
      title: "Healthcare & Nutrition",
      description: "Regular health check-ups, vaccination drives, and nutrition programs ensure children and families stay healthy. Our mobile medical units reach remote villages, providing free consultations, medicines, and health awareness sessions on hygiene, sanitation, and disease prevention.",
      stats: ["24 medical camps/year", "3000+ beneficiaries", "50+ villages covered"],
      image: "/assets//images/healthcare.jpg"
    },
    {
      title: "Women's Empowerment",
      description: "Through vocational training in tailoring, handicrafts, beauty services, and digital literacy, we help women achieve economic independence. Our programs include business mentorship, micro-finance support, and market linkages to ensure sustainable livelihoods.",
      stats: ["800+ women trained", "85% employment rate", "15+ skill programs"],
      image: "/assets/images/women-empowerment.jpg"
    },
    {
      title: "Community Development",
      description: "Working at the grassroots level, we facilitate clean water access, sanitation facilities, solar lighting, and infrastructure development. Our community mobilization programs encourage local participation in development planning and implementation.",
      stats: ["35+ villages developed", "1200+ families impacted", "18 active projects"],
      image: "/assets/images/rural-development.jpg"
    }
  ];

  const team = [
    { 
      name: "Ajay Oli", 
      role: "Founder & President", 
      image: "/assets/team1.jpg",
      bio: "15 years of grassroots development experience"
    },
    { 
      name: "Dr. Priya Sharma", 
      role: "Executive Director", 
      image: "/assets/team2.jpg",
      bio: "Former UN consultant with expertise in child welfare"
    },
    { 
      name: "Amit Patil", 
      role: "Program Director", 
      image: "/assets/team3.jpg",
      bio: "10+ years in NGO program management"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
          >
            <span className="font-semibold text-yellow-300">🌟 Since 2010</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Lives,<br />Building Futures
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8">
            A decade-long journey of empowering communities through education, healthcare, and sustainable development
          </p>

          {/* Quick Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <achievement.icon className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{achievement.number}</div>
                <div className="text-xs md:text-sm text-green-100">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Story with Image */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  In 2010, <strong>Ghanshyam Oli</strong> witnessed children begging on streets instead of attending school. 
                  That moment sparked a mission that would change thousands of lives.
                </p>
                <p>
                  Starting with just <span className="font-semibold text-green-700">20 children in a rented room</span>, 
                  armed with nothing but determination and community support, we began our journey. The first year was challenging – 
                  limited resources, skeptical parents, and societal barriers.
                </p>
                <p>
                  But persistence paid off. Word spread about free quality education, and soon we had waiting lists. 
                  Today, we operate <span className="font-semibold text-green-700">12 learning centers across 3 states</span>, 
                  impacting over 8,000 lives annually.
                </p>
                <p className="text-lg font-semibold text-green-800">
                  Our vision: A society where every child receives quality education and every woman leads a dignified, 
                  independent life.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <span className="font-semibold text-green-800">14 Years of Impact</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-blue-700" />
                  <span className="font-semibold text-blue-800">8000+ Lives Changed</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/child-education.jpg" 
                  alt="Children learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold">Every Child Deserves Education</p>
                  <p className="text-sm text-gray-200">Classroom session at our Delhi center</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-500 rounded-2xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-lg text-gray-600">Principles that guide every decision we make</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Working Areas - Detailed Sections */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What We Do</h2>
            <p className="text-lg text-gray-600">Comprehensive programs addressing root causes of social challenges</p>
          </motion.div>

          <div className="space-y-16">
            {workingAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3">
                    {area.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Journey</h2>
            <p className="text-lg text-gray-600">Major milestones that shaped our organization</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-green-700"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:order-2'}`}>
                    <div className="inline-block bg-green-700 text-white px-6 py-2 rounded-full font-bold text-xl mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-600 text-lg">{milestone.description}</p>
                  </div>

                  {/* Image */}
                  <div className={`${idx % 2 === 0 ? 'md:order-2' : ''}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Leadership</h2>
            <p className="text-lg text-gray-600">Meet the passionate team driving our mission forward</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=400&background=059669&color=fff`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-green-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic">"{member.bio}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Know More?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get in touch with us to learn about our programs, volunteer opportunities, or partnership options
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:info@ghanshyamoli.org"
              className="flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a 
              href="tel:+911234567890"
              className="flex items-center gap-3 bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;