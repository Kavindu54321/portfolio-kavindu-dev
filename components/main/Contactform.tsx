"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "a5fc27ac-8902-41ec-964c-b2206218864f");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        Swal.fire("Success!", "Your message has been sent.", "success");
        event.target.reset();
      } else {
        Swal.fire("Error!", "Submission failed. Try again.", "error");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Network Error!", "Check your connection and retry.", "error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12"
    >
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-6">Contact With Me</h1>
      <p className="text-gray-300 text-lg text-center max-w-2xl mb-12">
      If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.!
      </p>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {/* Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-8 rounded-xl shadow-lg border "
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:outline-none h-36"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 bg-gradient-to-r from-purple-500 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-bold text-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left p-10 rounded-xl shadow-xl border "
        >
          {/* Added Image */}
          <div className="mt-6 flex justify-center">
            <img
              src="/1709674937953.gif"
              alt="Animated Contact GIF"
              className="rounded-lg w-64 h-64 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-3xl" />
              <p className="text-lg font-semibold">dananjayakavindu089@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-green-400 text-3xl" />
              <p className="text-lg font-semibold">+94 77 872 7040</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400 text-3xl" />
              <p className="text-lg font-semibold">Horana, Kalutara, Sri Lanka</p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </motion.div>
  );
}
