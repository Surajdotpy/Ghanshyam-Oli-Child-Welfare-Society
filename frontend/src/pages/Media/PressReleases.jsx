import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, ExternalLink, Download } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const PressReleases = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Ghanshyam Oli Child Welfare Society Wins National NGO Excellence Award 2024",
      date: "March 20, 2024",
      excerpt: "Recognized for outstanding contribution to child education and women empowerment across India...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
    {
      id: 2,
      title: "New Partnership with Tech Corp India to Digitalize Learning Centers",
      date: "March 10, 2024",
      excerpt: "Strategic collaboration to bring digital learning to 10 learning centers, impacting 1500+ children...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
    {
      id: 3,
      title: "5000+ Lives Impacted: Annual Impact Report 2023 Released",
      date: "February 28, 2024",
      excerpt: "Organization achieves 60% year-on-year growth in beneficiaries with expanded programs...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
    {
      id: 4,
      title: "Expansion to Rajasthan: New Learning Centers Inaugurated",
      date: "February 15, 2024",
      excerpt: "Two new learning centers opened in rural Rajasthan, expanding our reach to the third state...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
    {
      id: 5,
      title: "Women Empowerment Program Achieves 85% Success Rate",
      date: "January 30, 2024",
      excerpt: "Independent assessment shows 85% of program participants gained economic independence...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
    {
      id: 6,
      title: "Annual Fundraising Gala Raises ₹50 Lakhs for Education Programs",
      date: "January 15, 2024",
      excerpt: "Record-breaking fundraising event attended by 500+ supporters and corporate partners...",
      content: "Full press release content here...",
      downloadLink: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-blue-800 to-cyan-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Press Releases
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100"
            >
              Latest news and announcements from our organization
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Press Releases List */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {pressReleases.map((release, idx) => (
              <motion.article
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                {/* Date */}
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Calendar size={18} />
                  <time className="text-sm font-medium">{release.date}</time>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-indigo-700 transition-colors">
                  {release.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {release.excerpt}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <FileText size={18} />
                    Read Full Release
                  </button>
                  <a
                    href={release.downloadLink}
                    className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              3
            </button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              For press inquiries, interviews, or additional information
            </p>
            <div className="space-y-3">
              <p className="text-lg">
                <strong>Email:</strong> media@ghanshyamoli.org
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> +91 90000 00000
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PressReleases;