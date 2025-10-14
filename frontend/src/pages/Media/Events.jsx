import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Learning Workshop",
      date: "April 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Mumbai Learning Center",
      type: "Workshop",
      description: "Hands-on workshop on integrating technology in teaching for our educators",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616ea1b?w=600",
      capacity: "50 participants",
      registration: "Open"
    },
    {
      id: 2,
      title: "Women Entrepreneurship Summit",
      date: "April 25, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Ahmedabad Convention Center",
      type: "Summit",
      description: "Empowering women entrepreneurs with networking and skill-building sessions",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600",
      capacity: "200 participants",
      registration: "Open"
    },
    {
      id: 3,
      title: "Annual Volunteer Meet 2024",
      date: "May 5, 2024",
      time: "11:00 AM - 6:00 PM",
      location: "Multiple Locations",
      type: "Volunteer Event",
      description: "Celebrating our volunteers and planning for the year ahead",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      capacity: "300+ volunteers",
      registration: "Open"
    },
    {
      id: 4,
      title: "Girl Education Awareness Campaign",
      date: "May 20, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Rural Gujarat",
      type: "Campaign",
      description: "Community outreach program promoting girl education in rural areas",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600",
      capacity: "Community event",
      registration: "Not Required"
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Annual Fundraising Gala 2024",
      date: "February 28, 2024",
      location: "Grand Hotel, Mumbai",
      type: "Fundraising",
      description: "Record-breaking fundraising event with 500+ attendees",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      outcome: "Raised ₹50 Lakhs"
    },
    {
      id: 6,
      title: "Teacher Training Program",
      date: "February 15, 2024",
      location: "Learning Centers across 3 states",
      type: "Training",
      description: "Comprehensive training for 100+ teachers on modern teaching methods",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
      outcome: "100 teachers trained"
    },
    {
      id: 7,
      title: "Health & Wellness Camp",
      date: "January 30, 2024",
      location: "Rural Maharashtra",
      type: "Health Camp",
      description: "Free health checkups and awareness sessions for 2000+ beneficiaries",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
      outcome: "2000+ beneficiaries"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-700 via-purple-800 to-fuchsia-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Events & Workshops
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100"
            >
              Join us in creating impact through collaborative events
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Tabs */}
      <section className="py-8 px-6 bg-white sticky top-[128px] md:top-[108px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "upcoming"
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "past"
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {event.type}
                      </span>
                    </div>
                    {event.registration === "Open" && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                          Registration Open
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar size={18} className="text-purple-600" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock size={18} className="text-purple-600" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-purple-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users size={18} className="text-purple-600" />
                        <span className="text-sm">{event.capacity}</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    {event.registration === "Open" && (
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                        Register Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-sm font-semibold">{event.date}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-purple-700">
                        Outcome: {event.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to Host an Event With Us?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Partner with us to organize impactful events in your community
            </p>
            <a
              href="mailto:events@ghanshyamoli.org"
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Events Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;