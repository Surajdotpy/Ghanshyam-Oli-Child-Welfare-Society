import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projects = [
    {
      id: "child",
      icon: BookOpen,
      title: "Child Education",
      description: "Providing quality education to underprivileged children through our learning centers and scholarship programs.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      stats: { beneficiaries: "1500+", centers: "12", states: "3" }
    },
    {
      id: "women",
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development, vocational training, and entrepreneurship programs for women to achieve economic independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      stats: { beneficiaries: "800+", programs: "15", success: "85%" }
    },
    {
      id: "girls",
      icon: GraduationCap,
      title: "Girls Education",
      description: "Breaking barriers and creating opportunities for girls through education, mentorship, and support programs.",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600",
      stats: { beneficiaries: "2000+", dropout: "-60%", colleges: "450+" }
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg md:text-xl">
            Transforming lives through education, empowerment, and opportunity
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              id={project.id}
              className="scroll-mt-24"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <project.icon className="w-12 h-12 text-green-700 mb-4" />
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <button className="btn-primary">Learn More</button>
                </div>
                
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;