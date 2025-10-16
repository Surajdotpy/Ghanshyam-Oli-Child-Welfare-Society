import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, TrendingUp } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";
import CountUp from "../../components/CountUp";

const Reports = () => {
  const annualReports = [
    {
      year: "2024",
      title: "Annual Report 2023",
      description: "A comprehensive overview of our programs, impact, and financial performance",
      highlights: {
        beneficiaries: 5000,
        programs: 15,
        states: 3,
        funding: "₹2.5 Cr"
      },
      coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
      file: "#"
    },
    {
      year: "2023",
      title: "Annual Report 2022",
      description: "Year of expansion and increased impact across multiple verticals",
      highlights: {
        beneficiaries: 3500,
        programs: 12,
        states: 3,
        funding: "₹1.8 Cr"
      },
      coverImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400",
      file: "#"
    },
    {
      year: "2022",
      title: "Annual Report 2021",
      description: "Resilience and adaptation during challenging times",
      highlights: {
        beneficiaries: 2500,
        programs: 10,
        states: 2,
        funding: "₹1.2 Cr"
      },
      coverImage: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400",
      file: "#"
    },
  ];

  const impactReports = [
    {
      title: "Girl Education Impact Report 2023",
      description: "Measuring the transformative impact of our girl education programs",
      date: "December 2023",
      type: "Impact Assessment",
      file: "#"
    },
    {
      title: "Women Empowerment: 5-Year Impact Study",
      description: "Long-term impact of skill development programs on women's economic status",
      date: "October 2023",
      type: "Longitudinal Study",
      file: "#"
    },
    {
      title: "Community Development Outcomes Report",
      description: "Comprehensive analysis of community-level changes across program areas",
      date: "August 2023",
      type: "Outcome Report",
      file: "#"
    },
  ];

  const financialTransparency = [
    { category: "Programs & Services", percentage: 75, amount: "₹1.88 Cr" },
    { category: "Administration", percentage: 15, amount: "₹37.5 L" },
    { category: "Fundraising", percentage: 10, amount: "₹25 L" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Annual Reports
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-emerald-100"
            >
              Transparency and accountability in everything we do
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Annual Reports */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Annual Reports
            </h2>
            <p className="text-xl text-gray-600">Our journey, impact, and financials year by year</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {annualReports.map((report, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={report.coverImage} 
                    alt={report.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{report.title}</h3>
                    <p className="text-sm text-gray-200">{report.description}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-700 mb-4">Key Highlights</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <p className="text-2xl font-bold text-emerald-700">
                        <CountUp end={report.highlights.beneficiaries} suffix="+" />
                      </p>
                      <p className="text-xs text-gray-600">Beneficiaries</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700">{report.highlights.programs}</p>
                      <p className="text-xs text-gray-600">Programs</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-700">{report.highlights.states}</p>
                      <p className="text-xs text-gray-600">States</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <p className="text-2xl font-bold text-yellow-700">{report.highlights.funding}</p>
                      <p className="text-xs text-gray-600">Total Funding</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={report.file}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Download
                    </a>
                    <button className="px-4 py-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg font-semibold transition-all">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Impact Reports
            </h2>
            <p className="text-xl text-gray-600">Deep-dive analysis of our program outcomes</p>
          </motion.div>

          <div className="space-y-6">
            {impactReports.map((report, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {report.type}
                      </span>
                      <span className="text-sm text-gray-500">{report.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-gray-600">{report.description}</p>
                  </div>

                  <a
                    href={report.file}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Financial Transparency
            </h2>
            <p className="text-xl text-gray-600">How we utilize your donations (FY 2023)</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {financialTransparency.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{item.category}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-700">{item.percentage}%</p>
                      <p className="text-sm text-gray-600">{item.amount}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-emerald-600 text-white p-8 rounded-2xl text-center"
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">75% Direct Program Impact</h3>
              <p className="text-emerald-100">
                75 paise of every rupee donated goes directly to our programs and beneficiaries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Support Transparent Impact
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Your donation is used efficiently and reported transparently
            </p>
            <a
              href="/donate"
              className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reports;