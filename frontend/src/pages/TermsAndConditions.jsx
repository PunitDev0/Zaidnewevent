import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="text-gray-600 mb-4">Last updated: April 20, 2025</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By accessing or using our Event Management Platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">2. Use of Services</h2>
        <p className="text-gray-600">
          You must be at least 18 years old to use our services. You agree to provide accurate information during registration and to use our platform only for lawful purposes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">3. Event Registration</h2>
        <p className="text-gray-600">
          All event registrations are subject to availability. We reserve the right to refuse registration or cancel events at our discretion, with appropriate refunds as per our Cancellation Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">4. Payments</h2>
        <p className="text-gray-600">
          All payments must be made through our secure payment gateway. You agree to pay all applicable fees for events you register for, as displayed at the time of booking.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">5. Limitation of Liability</h2>
        <p className="text-gray-600">
          We are not liable for any damages arising from your use of our platform or attendance at events, except as required by law. Our liability is limited to the amount paid for the event.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">6. Contact Us</h2>
        <p className="text-gray-600">
          For questions about these Terms and Conditions, contact us at support@eventplatform.com or by mail at Event Management Platform, 123 Event Street, City, Country.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;