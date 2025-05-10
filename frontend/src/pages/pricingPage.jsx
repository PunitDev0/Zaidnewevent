import React from 'react';
import axios from 'axios';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Wedding Package',
      price: '₹50,000',
      amount: 50000, // Amount in INR (for Razorpay)
      features: ['Event Planning', 'Decor Setup', '1 Event Coordinator', 'Basic Catering'],
      details: 'Perfect for intimate weddings, this package includes essential planning, elegant decor setup, and basic catering for up to 50 guests. A dedicated coordinator ensures your day is seamless and memorable.',
    },
    {
      title: 'Premium Wedding Package',
      price: '₹1,20,000',
      amount: 120000, // Amount in INR
      features: ['Full Event Planning', 'Custom Decor', '2 Event Coordinators', 'Catering & Music'],
      details: 'Designed for grand celebrations, this package offers comprehensive planning, bespoke decor, premium catering, live music, and two coordinators to manage every detail for up to 150 guests.',
    },
    {
      title: 'Corporate Event Package',
      price: '₹80,000',
      amount: 80000, // Amount in INR
      features: ['Event Planning', 'Professional Setup', '1 Coordinator', 'AV Equipment'],
      details: 'Tailored for professional events, this package provides meticulous planning, high-quality AV equipment, and a professional setup for conferences or corporate gatherings for up to 100 attendees.',
    },
    {
      title: 'Luxury Wedding Package',
      price: '₹2,00,000',
      amount: 200000, // Amount in INR
      features: ['Complete Event Management', 'Luxury Decor', '3 Coordinators', 'Gourmet Catering & Entertainment'],
      details: 'For an extravagant wedding, this package delivers end-to-end management, opulent decor, gourmet catering, live entertainment, and three coordinators for a flawless event for up to 300 guests.',
    },
  ];

  // Function to handle Razorpay payment
  const handlePayment = async (plan) => {
    try {
      // Step 1: Call backend to create Razorpay order
      const response = await axios.post('https://aryanevents.com/razorpay/public/api/razorpay/store', {
        amount: plan.amount,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;

      // if (!data.success) {
      //   alert('Error creating order: ' + data.message);
      //   return;
      // }

      // Step 2: Initialize Razorpay checkout
      const options = {
        key: data.key, // Razorpay key from backend
        amount: data.amount * 100, // Amount in paise
        currency: data.currency,
        order_id: data.order_id,
        name: 'Your Company Name',
        description: `Payment for ${plan.title}`,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // Optionally, send response to backend for verification
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error );
      
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Our Event Management Pricing
        </h2>

        {/* Section 1: Left Event Details, Right Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Bring Your Vision to Life</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our event management team specializes in creating extraordinary experiences tailored to your needs. From romantic weddings to high-profile corporate events, we handle every detail with precision and creativity.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With a focus on personalized service, we work closely with you to select the perfect venue, design stunning decor, and coordinate logistics, ensuring a stress-free and unforgettable event.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced planners and trusted vendor network guarantee exceptional quality, whether you're hosting an intimate gathering or a large-scale celebration.
            </p>
            <button className="bg-gray-900 text-white py-3 rounded-lg hover:bg-indigo-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Discover Our Process
            </button>
          </div>
          <div>
            {plans.slice(0, 2).map((plan, index) => (
              <div
                key={index}
                className="mb-8 bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold text-indigo-800 mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{plan.details}</p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-emerald-500 mr-2 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePayment(plan)}
                  className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Section 2: Left Pricing, Right Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            {plans.slice(2).map((plan, index) => (
              <div
                key={index}
                className="mb-8 bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold text-indigo-800 mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{plan.details}</p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-emerald-500 mr-2 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePayment(plan)}
                  className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Why We Stand Out</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 15 years of experience, we’ve mastered the art of event planning. Our team is passionate about delivering seamless events that exceed expectations, no matter the scale or complexity.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We offer flexible packages, transparent pricing, and a commitment to sustainability. Our partnerships with top vendors ensure high-quality services, from catering to entertainment, at competitive rates.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let us take the stress out of planning so you can focus on enjoying your event. Our goal is to create moments that you and your guests will cherish for years to come.
            </p>
            <button className="bg-gray-900 text-white py-3 rounded-lg hover:bg-indigo-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Request a Consultation
            </button>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Plan Your Perfect Event Today</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Ready to start planning? Our team is here to guide you every step of the way. Contact us to discuss your vision, customize a package, or schedule a free consultation with our expert planners.
          </p>
          <button className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-indigo-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;