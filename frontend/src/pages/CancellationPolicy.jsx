import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cancellation Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: April 20, 2025</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">1. Event Cancellations by You</h2>
        <p className="text-gray-600">
          You may cancel your event registration by contacting us at cancellations@eventplatform.com. Refunds are subject to the following conditions:
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Cancellations made more than 30 days before the event: Full refund, minus a 5% processing fee.</li>
            <li>Cancellations made 15–30 days before the event: 50% refund.</li>
            <li>Cancellations made less than 15 days before the event: No refund.</li>
          </ul>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">2. Event Cancellations by Us</h2>
        <p className="text-gray-600">
          We reserve the right to cancel an event due to insufficient registrations, unforeseen circumstances, or other reasons. In such cases, you will receive a full refund or the option to transfer your registration to another event.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">3. Non-Refundable Items</h2>
        <p className="text-gray-600">
          Certain items, such as service fees, merchandise, or special add-ons, are non-refundable unless otherwise stated at the time of purchase.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">4. How to Request a Refund</h2>
        <p className="text-gray-600">
          To request a refund, email us at cancellations@eventplatform.com with your registration details. Refunds will be processed within 7–10 business days to the original payment method.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">5. Contact Us</h2>
        <p className="text-gray-600">
          For questions about our Cancellation Policy, contact us at cancellations@eventplatform.com or by mail at Event Management Platform, 123 Event Street, City, Country.
        </p>
      </section>
    </div>
  );
};

export default CancellationPolicy;