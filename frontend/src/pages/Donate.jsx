import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CreditCard, Building2, Smartphone, CheckCircle, AlertCircle, Download, Shield, Copy, Check, QrCode, Info } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import QRCode from 'qrcode';

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    donationType: 'one-time',
    purpose: 'general',
    isAnonymous: false
  });

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online'); // 'online', 'upi', 'bank'
  const [upiQR, setUpiQR] = useState('');
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedTxnId, setCopiedTxnId] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  // UPI Details
  const UPI_ID = "ghanshyamoli@paytm"; // Replace with your actual UPI ID
  const UPI_NAME = "Ghanshyam Oli Child Welfare Society";

  const donationPurposes = [
    { value: 'general', label: 'General Donation', description: 'Support our overall mission' },
    { value: 'child-education', label: 'Child Education', description: 'Sponsor a child\'s education' },
    { value: 'girl-education', label: 'Girl Education', description: 'Support girl education' },
    { value: 'women-empowerment', label: 'Women Empowerment', description: 'Skill training for women' },
    { value: 'healthcare', label: 'Healthcare', description: 'Medical camps and treatment' },
    { value: 'livelihood', label: 'Livelihood', description: 'Sustainable income programs' },
  ];

  const handleAmountClick = (value) => {
    setSelectedAmount(value);
    setFormData({ ...formData, amount: value });
    if (value && paymentMethod === 'upi') {
      generateUpiQR(value);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (name === 'amount') {
      setSelectedAmount(null);
      if (value && paymentMethod === 'upi') {
        generateUpiQR(value);
      }
    }
  };

  // Generate UPI QR Code
  const generateUpiQR = async (amount) => {
    if (!amount || amount < 100) return;

    const upiString = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(UPI_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Donation to ${UPI_NAME}`)}`;
    
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(upiString, {
        width: 300,
        margin: 2,
        color: {
          dark: '#15803d',
          light: '#ffffff'
        }
      });
      setUpiQR(qrCodeDataUrl);
    } catch (err) {
      console.error('QR generation error:', err);
    }
  };

  // Copy UPI ID
  const copyUpiId = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  // Copy Transaction ID
  const copyTransactionId = (txnId) => {
    navigator.clipboard.writeText(txnId);
    setCopiedTxnId(true);
    setTimeout(() => setCopiedTxnId(false), 2000);
  };

  const validateForm = () => {
    if (!formData.amount || formData.amount < 100) {
      setError('Minimum donation amount is ₹100');
      return false;
    }
    if (!formData.name || formData.name.trim().length < 3) {
      setError('Please enter a valid name');
      return false;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan.toUpperCase())) {
      setError('Please enter a valid PAN number (for 80G certificate)');
      return false;
    }
    setError('');
    return true;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleOnlinePayment = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Check if amount exceeds ₹10,000 for card payment
    if (formData.amount > 10000) {
      setError('For donations above ₹10,000, please use UPI or Bank Transfer for better success rate.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        setError('Payment gateway failed to load. Please try again.');
        setLoading(false);
        return;
      }

      // Create order on backend
      const response = await fetch('YOUR_BACKEND_URL/api/donations/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: formData.amount,
          currency: 'INR',
          donorInfo: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pan: formData.pan,
            address: formData.address,
            isAnonymous: formData.isAnonymous,
            purpose: formData.purpose,
            donationType: formData.donationType
          }
        }),
      });

      const order = await response.json();

      if (!order.success) {
        throw new Error(order.message || 'Failed to create order');
      }

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID',
        amount: order.data.amount,
        currency: order.data.currency,
        name: 'Ghanshyam Oli Child Welfare Society',
        description: donationPurposes.find(p => p.value === formData.purpose)?.label || 'Donation',
        image: '/logo.png',
        order_id: order.data.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch('YOUR_BACKEND_URL/api/donations/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donorInfo: formData
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              window.location.href = `/donation-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`;
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch (err) {
            console.error('Verification error:', err);
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          purpose: formData.purpose,
          donation_type: formData.donationType,
        },
        theme: {
          color: '#15803d',
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            setError('Payment cancelled');
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        setError(`Payment failed: ${response.error.description}`);
        setLoading(false);
      });
      
      paymentObject.open();
      setLoading(false);

    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleUpiPayment = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Generate QR code if not already generated
    if (!upiQR) {
      await generateUpiQR(formData.amount);
    }

    setPaymentMethod('upi');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl"
          />
        </div>

        <ParallaxSection offset={50}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Make a Difference Today
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                Your donation helps us continue our mission to empower lives and build futures
              </p>
            </motion.div>
          </div>
        </ParallaxSection>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold text-gray-800">Secure Payment</h3>
              <p className="text-sm text-gray-600">256-bit SSL Encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold text-gray-800">80G Tax Benefit</h3>
              <p className="text-sm text-gray-600">50% Tax Deduction</p>
            </div>
            <div className="flex flex-col items-center">
              <Download className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold text-gray-800">Instant Receipt</h3>
              <p className="text-sm text-gray-600">Email & Download</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold text-gray-800">100% Impact</h3>
              <p className="text-sm text-gray-600">75% to Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Method Tabs */}
      <section className="py-8 px-6 bg-gray-50 sticky top-[140px] md:top-[120px] z-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setPaymentMethod('online')}
              className={`py-4 px-6 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                paymentMethod === 'online'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CreditCard size={24} />
              <span className="text-sm">Card/Net Banking</span>
              <span className="text-xs opacity-75">Up to ₹10,000</span>
            </button>
            <button
              onClick={() => {
                setPaymentMethod('upi');
                if (formData.amount) generateUpiQR(formData.amount);
              }}
              className={`py-4 px-6 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                paymentMethod === 'upi'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Smartphone size={24} />
              <span className="text-sm">UPI Payment</span>
              <span className="text-xs opacity-75">Any Amount</span>
            </button>
            <button
              onClick={() => setPaymentMethod('bank')}
              className={`py-4 px-6 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                paymentMethod === 'bank'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Building2 size={24} />
              <span className="text-sm">Bank Transfer</span>
              <span className="text-xs opacity-75">Large Donations</span>
            </button>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={paymentMethod === 'online' ? handleOnlinePayment : handleUpiPayment} className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                <p className="text-red-700">{error}</p>
              </motion.div>
            )}

            {/* Large Amount Notice */}
            {formData.amount > 10000 && paymentMethod === 'online' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg flex items-start gap-3"
              >
                <Info className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-blue-800 font-semibold mb-1">Large Donation Detected</p>
                  <p className="text-blue-700 text-sm">For donations above ₹10,000, we recommend using <strong>UPI Payment</strong> or <strong>Bank Transfer</strong> for better success rate and no transaction limits.</p>
                </div>
              </motion.div>
            )}

            {/* Donation Type */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-gray-800 mb-4">Donation Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, donationType: 'one-time' })}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    formData.donationType === 'one-time'
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  One-Time Donation
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, donationType: 'monthly' })}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    formData.donationType === 'monthly'
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly Donation
                </button>
              </div>
            </div>

            {/* Donation Amount */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-gray-800 mb-4">
                Choose Donation Amount *
              </label>
              
              {/* Predefined Amounts */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleAmountClick(value)}
                    className={`py-4 px-4 rounded-xl font-bold transition-all ${
                      selectedAmount === value
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ₹{value >= 1000 ? `${value/1000}k` : value}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">₹</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  min="100"
                  required
                  placeholder="Enter custom amount (Min ₹100, No Max Limit)"
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-semibold"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                💡 For donations above ₹10,000, UPI or Bank Transfer recommended
              </p>
            </div>

            {/* Donation Purpose */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-gray-800 mb-4">
                Donation Purpose *
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
              >
                {donationPurposes.map(purpose => (
                  <option key={purpose.value} value={purpose.value}>
                    {purpose.label} - {purpose.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Your Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="9999999999"
                    maxLength="10"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PAN Number (For 80G Certificate)
                  </label>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    placeholder="ABCDE1234F"
                    maxLength="10"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address (For Receipt)
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Your complete address"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isAnonymous"
                  checked={formData.isAnonymous}
                  onChange={handleChange}
                  id="anonymous"
                  className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                />
                <label htmlFor="anonymous" className="text-gray-700">
                  Make my donation anonymous
                </label>
              </div>
            </div>

            {/* UPI Payment Section */}
            {paymentMethod === 'upi' && formData.amount >= 100 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <QrCode className="text-blue-600" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Scan & Pay via UPI</h3>
                    <p className="text-gray-600">Use any UPI app to complete your donation</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* QR Code */}
                  <div className="text-center">
                    {upiQR ? (
                      <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
                        <img src={upiQR} alt="UPI QR Code" className="w-64 h-64 mx-auto" />
                        <p className="text-sm text-gray-600 mt-3">Scan with any UPI app</p>
                      </div>
                    ) : (
                      <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
                        <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                          <button
                            type="button"
                            onClick={() => generateUpiQR(formData.amount)}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                          >
                            Generate QR Code
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* UPI Details */}
                  <div>
                    <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                      <h4 className="font-bold text-gray-800 mb-4">Or Pay Directly via UPI ID</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">UPI ID</p>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 bg-gray-100 px-4 py-3 rounded-lg font-mono text-sm">
                              {UPI_ID}
                            </code>
                            <button
                              type="button"
                              onClick={copyUpiId}
                              className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                              {copiedUPI ? <Check size={20} /> : <Copy size={20} />}
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Amount</p>
                          <div className="bg-gray-100 px-4 py-3 rounded-lg font-bold text-2xl text-green-700">
                            ₹{formData.amount ? parseInt(formData.amount).toLocaleString() : '0'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> After payment, email the screenshot/transaction ID to{' '}
                        <a href="mailto:donate@ghanshyamoli.org" className="underline font-semibold">
                          donate@ghanshyamoli.org
                        </a>{' '}
                        to receive your 80G certificate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular UPI Apps */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-3">Supported UPI Apps:</p>
                  <div className="flex flex-wrap gap-3">
                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map(app => (
                      <span key={app} className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button - Only for Online Payment */}
            {paymentMethod === 'online' && (
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:shadow-xl transform hover:scale-[1.02]'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={24} />
                    Pay ₹{formData.amount ? parseInt(formData.amount).toLocaleString() : '0'}
                  </>
                )}
              </button>
            )}

            {/* UPI Payment Confirmation Note */}
            {paymentMethod === 'upi' && (
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                  Complete your UPI payment using the QR code or UPI ID above
                </p>
                <a
                  href="mailto:donate@ghanshyamoli.org?subject=UPI Donation Confirmation&body=Transaction Details:%0D%0AAmount: ₹{formData.amount}%0D%0ATransaction ID: %0D%0AName: {formData.name}%0D%0AEmail: {formData.email}"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
                >
                  Email Transaction Details
                </a>
              </div>
            )}

            {/* Security Note */}
            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Your payment is secured with 256-bit SSL encryption
            </p>
          </form>

          {/* Tax Benefits Info */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <CheckCircle size={20} />
              Tax Benefits Under Section 80G
            </h3>
            <p className="text-blue-800">
              Donations to Ghanshyam Oli Child Welfare Society are eligible for 50% tax deduction 
              under Section 80G of the Income Tax Act. You will receive an 80G certificate via email 
              immediately after successful donation confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Bank Transfer Option */}
      {paymentMethod === 'bank' && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-green-600" size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Direct Bank Transfer</h2>
                  <p className="text-gray-600">Recommended for large donations (above ₹10,000)</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Name</p>
                  <p className="font-bold text-gray-800">Ghanshyam Oli Child Welfare Society</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Number</p>
                  <p className="font-bold text-gray-800">1234567890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                  <p className="font-bold text-gray-800">ABCD0001234</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                  <p className="font-bold text-gray-800">State Bank of India</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Branch</p>
                  <p className="font-bold text-gray-800">Mumbai Main Branch</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Type</p>
                  <p className="font-bold text-gray-800">Current Account</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">After Making the Transfer:</h4>
                <ul className="text-sm text-yellow-800 space-y-1 ml-4">
                  <li>1. Email transaction details to <a href="mailto:donate@ghanshyamoli.org" className="underline font-semibold">donate@ghanshyamoli.org</a></li>
                  <li>2. Include your PAN number for 80G certificate</li>
                  <li>3. You'll receive confirmation within 24 hours</li>
                  <li>4. 80G certificate will be emailed within 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Donate;