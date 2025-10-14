import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, TrendingUp, Users, CheckCircle, Mail } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description: "CSR initiatives, employee engagement programs, and cause marketing",
      benefits: ["Tax benefits under CSR", "Brand visibility", "Employee volunteering opportunities"]
    },
    {
      icon: Users,
      title: "NGO Collaborations",
      description: "Joint programs, resource sharing, and knowledge exchange",
      benefits: ["Expanded reach", "Shared expertise", "Collective impact"]
    },
    {
      icon: TrendingUp,
      title: "Government Partnerships",
      description: "Policy advocacy, program implementation, and community development",
      benefits: ["Scale and sustainability", "Policy influence", "Funding opportunities"]
    },
    {
      icon: Handshake,
      title: "Academic Partnerships",
      description: "Research collaborations, student projects, and knowledge creation",
      benefits: ["Research support", "Internship pool", "Innovation"]
    },
  ];

  const currentPartners = [
    { name: "Tech Corp India", logo: "https://via.placeholder.com/150x60?text=Tech+Corp", type: "Corporate" },
    { name: "Education Foundation", logo: "https://via.placeholder.com/150x60?text=Education+Foundation", type: "NGO" },
    { name: "State Government", logo: "https://via.placeholder.com/150x60?text=State+Govt", type: "Government" },
    { name: "University of Mumbai", logo: "https://via.placeholder.com/150x60?text=University", type: "Academic" },
    { name: "Green Energy Ltd", logo: "https://via.placeholder.com/150x60?text=Green+Energy", type: "Corporate" },
    { name: "Health Alliance", logo: "https://via.placeholder.com/150x60?text=Health+Alliance", type: "NGO" },
  ];

  const successStories = [
    {
      partner: "Tech Corp India",
      impact: "Digitalized 10 learning centers, trained 50 teachers in technology integration",
      year: "2023"
    },
    {
      partner: "Education Foundation",
      impact: "Joint scholarship program benefiting 500+ girl students",
      year: "2022"
    },
    {
      partner: "State Government",
      impact: "Implemented health checkup camps reaching 2000+ children",
      year: "2023"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Partner With Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100"
            >
              Together, we can create exponential impact
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600">Multiple ways to collaborate for social good</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-gray-700 text-sm">Benefits:</p>
                  {type.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">Trusted organizations we collaborate with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentPartners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center"
              >
                <img src={partner.logo} alt={partner.name} className="mb-3 grayscale hover:grayscale-0 transition-all" />
                <p className="text-xs text-gray-500 text-center">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Partnership Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {story.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{story.partner}</h3>
                <p className="text-gray-600">{story.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Partner?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can create impact together
            </p>
            <a
              href="mailto:partnerships@ghanshyamoli.org"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Mail size={24} />
              partnerships@ghanshyamoli.org
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;