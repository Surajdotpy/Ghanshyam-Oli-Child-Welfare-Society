import React from "react";
import { Eye, Sparkles } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Eye className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h1>
          <p className="text-lg md:text-xl">
            Building a future where every child has access to education and every woman is empowered
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A society where every child, regardless of their background, has access to quality 
              education and opportunities to thrive; where women are empowered to make independent 
              decisions and lead fulfilling lives; and where communities are self-sufficient, 
              resilient, and inclusive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education for All",
                description: "Every child attending school and completing their education"
              },
              {
                title: "Women Empowerment",
                description: "Women leading change and contributing to economic growth"
              },
              {
                title: "Sustainable Communities",
                description: "Self-reliant communities with access to essential services"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 p-6 rounded-lg">
                <Sparkles className="w-10 h-10 text-green-700 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;