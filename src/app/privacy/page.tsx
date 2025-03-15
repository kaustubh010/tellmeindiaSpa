"use client";
import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #000000 25%, #1f2937 100%)",
      }}
      className="bg-tech text-gray-100 font-sans"
    >
      <Navbar />
      <div className="container mx-auto p-4 sm:p-8 ios-style bg-opacity-75">
        <header className="text-center py-4 sm:py-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 mt-2">
            Effective Date: 08-01-2025
          </p>
        </header>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            1. Introduction
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            Welcome to TELL ME INDIA. Your privacy is critically important to
            us. This Privacy Policy explains how we collect, use, and protect
            your personal data when you use our services.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            2. Information We Collect
          </h2>
          <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            <li>
              Personal information you provide (e.g., name, email, phone
              number).
            </li>
            <li>Content you create, share, or communicate on the platform.</li>
            <li>Usage data, device information, and location data.</li>
          </ul>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            <li>To provide, improve, and maintain our services.</li>
            <li>
              To personalize your experience and deliver relevant content.
            </li>
            <li>To ensure security and prevent fraud.</li>
          </ul>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            4. Sharing Your Information
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            We do not sell your personal data. However, we may share your
            information with:
          </p>
          <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            <li>Service providers who assist in operating our platform.</li>
            <li>Law enforcement, if required by law.</li>
            <li>Third parties, with your explicit consent.</li>
          </ul>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            5. Your Rights
          </h2>
          <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Restrict or object to the processing of your data.</li>
          </ul>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            6. Data Security
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            We implement robust measures to protect your information from
            unauthorized access, alteration, or disclosure. However, no method
            of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            7. Changes to This Policy
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
            We may update this Privacy Policy from time to time. Changes will be
            communicated via email or a notice on our platform.
          </p>
        </section>

        <footer className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 Tell Me India. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default page;
