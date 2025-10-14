import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import ParallaxSection from "../../components/ParallaxSection";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Events", "Community", "Workshops", "Success Stories"];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      title: "Children in Classroom",
      category: "Education",
      description: "Students engaged in interactive learning at our Mumbai center"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800",
      title: "Girl Education Program",
      category: "Education",
      description: "Empowering girls through quality education"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      title: "Annual Fundraising Gala",
      category: "Events",
      description: "Our successful 2024 fundraising event"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
      title: "Volunteer Day",
      category: "Community",
      description: "Volunteers making a difference in local communities"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      title: "Women Skills Training",
      category: "Workshops",
      description: "Vocational training workshop for women"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
      title: "Entrepreneurship Training",
      category: "Workshops",
      description: "Building business skills for sustainable livelihoods"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
      title: "Community Gathering",
      category: "Community",
      description: "Community members celebrating together"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      title: "Success Story",
      category: "Success Stories",
      description: "Former student now a successful professional"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
      title: "Health Camp",
      category: "Community",
      description: "Free health checkup camp in rural area"
    },
  ];

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-700 via-rose-800 to-red-900 text-white py-24 px-6">
        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Photo Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-pink-100"
            >
              Visual stories of impact and transformation
            </motion.p>
          </div>
        </ParallaxSection>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white sticky top-[128px] md:top-[108px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-pink-400 transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-pink-400 transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="bg-white/10 backdrop-blur-md p-6 mt-4 rounded-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download size={18} />
                    Download
                  </button>
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;