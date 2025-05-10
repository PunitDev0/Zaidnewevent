import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: April 20, 2025</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">1. Introduction</h2>
        <p className="text-gray-600">
          Welcome to our Event Management Platform. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">2. Information We Collect</h2>
        <p className="text-gray-600">
          We collect personal information such as your name, email address, phone number, and payment details when you register for events or interact with our platform. We also collect usage data, including IP addresses and browsing behavior, to improve our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">3. How We Use Your Information</h2>
        <p className="text-gray-600">
          Your information is used to process event registrations, send confirmations, provide customer support, and improve our platform. We may also use it to send you promotional materials, with your consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">4. Sharing Your Information</h2>
        <p className="text-gray-600">
          We do not sell your personal information. We may share it with trusted third-party service providers (e.g., payment processors) to facilitate our services, but only under strict confidentiality agreements.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">5. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. Contact us at privacy@eventplatform.com to exercise these rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">6. Contact Us</h2>
        <p className="text-gray-600">
          If you have questions about this Privacy Policy, please contact us at privacy@eventplatform.com or by mail at Event Management Platform, 123 Event Street, City, Country.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;