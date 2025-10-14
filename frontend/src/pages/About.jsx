import React from "react";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Empowering communities through education, healthcare, and sustainable development
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, Ghanshyam Oli Child Welfare Society has been at the forefront of 
                social change, working tirelessly to improve the lives of underprivileged children, 
                women, and communities across India.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a small initiative to educate 20 children has grown into a 
                movement impacting over 5,000 lives annually. Our holistic approach addresses 
                education, healthcare, women empowerment, and community development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe every child deserves access to quality education and every woman 
                deserves the opportunity to lead a dignified, independent life.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600" 
                alt="Children in classroom"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                description: "We work with communities, not for them"
              },
              {
                icon: Target,
                title: "Impact Driven",
                description: "Every action is measured by its impact"
              },
              {
                icon: Eye,
                title: "Transparency",
                description: "Open communication and accountability"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to the highest standards"
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <value.icon className="w-12 h-12 mx-auto text-green-700 mb-4" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & President", image: "https://i.pravatar.cc/300?img=12" },
              { name: "Priya Sharma", role: "Executive Director", image: "https://i.pravatar.cc/300?img=5" },
              { name: "Amit Patel", role: "Program Director", image: "https://i.pravatar.cc/300?img=13" },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;