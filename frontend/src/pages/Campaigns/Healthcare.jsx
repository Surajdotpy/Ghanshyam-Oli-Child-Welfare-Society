import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Activity, Stethoscope, CheckCircle, Pill, Eye, Smile } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";
import CountUp from "../../components/CountUp";

const Healthcare = () => {
  const stats = [
    { icon: Users, number: 3000, suffix: "+", label: "Patients Served", color: "text-red-600" },
    { icon: Activity, number: 25, suffix: "+", label: "Health Camps", color: "text-blue-600" },
    { icon: Stethoscope, number: 50, suffix: "+", label: "Medical Staff", color: "text-green-600" },
    { icon: Heart, number: 90, suffix: "%", label: "Treatment Success", color: "text-pink-600" },
  ];

  const services = [
    {
      title: "General Health Checkups",
      description: "Free basic health screenings and consultations",
      icon: Stethoscope,
    },
    {
      title: "Child Immunization",
      description: "Complete vaccination programs for children",
      icon: Heart,
    },
    {
      title: "Women's Health",
      description: "Maternal health, prenatal and postnatal care",
      icon: Users,
    },
    {
      title: "Eye Care",
      description: "Eye checkups and free spectacles distribution",
      icon: Eye,
    },
    {
      title: "Dental Care",
      description: "Dental checkups and basic treatments",
      icon: Smile,
    },
    {
      title: "Medicine Distribution",
      description: "Free essential medicines for chronic conditions",
      icon: Pill,
    },
  ];

  const initiatives = [
    "Monthly health camps in rural areas",
    "Free medicine distribution",
    "Health awareness workshops",
    "Vaccination drives",
    "Maternal and child health programs",
    "Chronic disease management",
    "Nutritional support programs",
    "Health insurance linkages"
  ];

  const impactAreas = [
    { area: "Rural Villages", camps: 15, patients: 1800 },
    { area: "Urban Slums", camps: 8, patients: 900 },
    { area: "Tribal Communities", camps: 2, patients: 300 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-pink-800 to-rose-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-red-500/20 rounded-full blur-3xl"
          />
        </div>

        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            >
              <span className="font-semibold">Our Campaigns</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Healthcare Campaign
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-red-100"
            >
              Ensuring access to quality healthcare for underserved communities
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Healthcare for All
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Millions in rural India lack access to basic healthcare facilities. Our Healthcare 
                Campaign bridges this gap by organizing regular health camps, providing free medical 
                checkups, medicines, and health education to underserved communities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 health camps conducted annually, we've served 3,000+ patients across 
                rural villages, urban slums, and tribal areas. Our services include general health 
                checkups, child immunization, women's health, eye care, dental care, and chronic 
                disease management.
              </p>
              
              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-2">Free Services Include:</h3>
                <p className="text-gray-700">
                  Consultations, Basic Medicines, Health Screenings, Vaccinations, and Referrals to specialists
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700" 
                alt="Healthcare camp"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-red-600 mb-1">
                  <CountUp end={3000} suffix="+" />
                </p>
                <p className="text-gray-700 font-semibold">Lives Touched</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Health Services
            </h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare support</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Health Initiatives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {initiatives.map((initiative, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{initiative}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Reach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{area.area}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-red-600 mb-1">
                      <CountUp end={area.camps} />
                    </p>
                    <p className="text-gray-600 font-medium">Health Camps</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-pink-600 mb-1">
                      <CountUp end={area.patients} suffix="+" />
                    </p>
                    <p className="text-gray-600 font-medium">Patients Served</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-700 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Support Healthcare Access
            </h2>
            <p className="text-xl mb-8 text-red-100">
              ₹10,000 can organize a health camp serving 100+ patients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Organize a Camp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;