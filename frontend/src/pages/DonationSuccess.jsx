import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Download, Share2, Home, Heart, Sparkles } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

const DonationSuccess = () => {
  const [searchParams] = useSearchParams();
  const [donationData, setDonationData] = useState(null);
  const [loading, setLoading] = useState(true);

  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    // Fetch donation details
    const fetchDonationDetails = async () => {
      try {
        const response = await fetch(`YOUR_BACKEND_URL/api/donations/donation-details/${orderId}`);
        const data = await response.json();
        if (data.success) {
          setDonationData(data.donation);
        }
      } catch (error) {
        console.error('Error fetching donation details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchDonationDetails();
    } else {
      setLoading(false);
    }
  }, [orderId]);

  const downloadReceipt = () => {
    window.open(`YOUR_BACKEND_URL/api/donations/download-receipt/${orderId}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading donation details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: -100, 
              x: Math.random() * window.innerWidth,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
          >
            <Heart 
              className="text-green-400" 
              size={Math.random() * 20 + 10}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        >
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative w-24 h-24 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={60} />
            </div>
          </motion.div>

          {/* Sparkles Animation */}
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2"
            >
              <Sparkles className="text-yellow-400" size={40} />
            </motion.div>
          </div>

          {/* Thank You Message */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Thank You for Your Generosity!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 mb-8"
          >
            Your donation has been received successfully. You're making a real difference in people's lives.
          </motion.p>

          {/* Donation Details */}
          {donationData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-8 text-left"
            >
              <h3 className="font-bold text-gray-800 mb-4 text-center">Donation Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-2xl text-green-700">₹{donationData.amount?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600 text-sm">Transaction ID:</span>
                  <span className="font-mono text-xs text-gray-800">{paymentId}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-800">{new Date().toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Purpose:</span>
                  <span className="text-gray-800 capitalize">{donationData.purpose?.replace(/-/g, ' ')}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 80G Certificate Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8"
          >
            <p className="text-blue-800 text-sm">
              <strong>80G Tax Certificate:</strong> Your 80G certificate has been sent to your email address. 
              You can also download it below.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button
              onClick={downloadReceipt}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download size={20} />
              Download Receipt
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <Share2 size={20} />
              Share
            </button>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            <Link
              to="/donate"
              className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              <Heart size={20} />
              Donate Again
            </Link>
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What Happens Next?</h3>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email Confirmation</h4>
                <p className="text-gray-600">You'll receive a confirmation email with your donation receipt and 80G certificate within 5 minutes.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Impact Updates</h4>
                <p className="text-gray-600">We'll keep you updated on how your donation is making a difference through monthly newsletters.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Annual Report</h4>
                <p className="text-gray-600">You'll receive our annual impact report showing the collective impact of all donors like you.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">Join thousands of donors making a difference</p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.4 + i * 0.1 }}
              >
                <Heart className="text-red-500" size={24} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DonationSuccess;