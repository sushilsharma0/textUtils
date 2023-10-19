// src/components/About.js

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-2xl font-semibold">About Us</h1>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Our History</h2>
        <p className="mt-4">
          Founded in 20XX, our company has a rich history of providing top-notch
          services to our clients. We've evolved and adapted over the years to meet
          changing demands and technology trends.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="mt-4">
          Our mission is to deliver innovative solutions and outstanding value to our
          customers. We aim to create a positive impact on society through our work.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Our Team</h2>
        <p className="mt-4">
          Meet the talented individuals who drive our success. Our team is comprised of
          experts in various fields, each contributing their unique skills and
          perspectives to our projects.
        </p>
        <ul className="mt-4">
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Alice Johnson - Marketing Director</li>
          {/* Add more team members as needed */}
        </ul>
      </section>
    </div>
  );
};

export default About;
