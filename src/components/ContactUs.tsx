"use client";
import React, { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
    } else {
      setError("");
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
    }
  };

  return (
    <div id="contact" className="pt-32 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">
            <div data-aos="zoom-in-down">Get In Touch</div>
          </h2>
          <p className="text-gray-500 text-lg pt-2">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-3 items-center">
            <IoIosMail size={30} />
            <a href="mailto:ramshelahi111@gmail.com" className="hover:underline">
              ramshelahi111@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <BsFillTelephonePlusFill size={30} />
            <span>(021) 000-111</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaGithub size={30} />
            <a
              href="https://vercel.com/ramsha-elahis-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Projects
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <FaLinkedin size={30} />
            <a
              href="https://www.linkedin.com/in/ramsha-elahi-10057028a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="h-10 border border-gray-300 px-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-10 border border-gray-300 px-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="border border-gray-300 px-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-blue-950 py-2 px-6 rounded-md hover:bg-blue-700 transition text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
