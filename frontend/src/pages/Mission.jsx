import React from "react";
import { Target, CheckCircle } from "lucide-react";

const Mission = () => {
  const objectives = [
    "Provide quality education to underprivileged children",
    "Empower women through skill development programs",
    "Ensure access to healthcare in rural communities",
    "Promote sustainable livelihood opportunities",
    "Advocate for child rights and protection",
    "Build strong, self-reliant communities"
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg md:text-xl">
            Creating lasting change through education, empowerment, and community development
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To empower underprivileged children, women, and communities by providing access to 
              quality education, healthcare, and sustainable livelihood opportunities, enabling 
              them to lead dignified and self-reliant lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to creating an inclusive society where every individual has the 
              opportunity to realize their full potential and contribute to nation-building.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Objectives</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;