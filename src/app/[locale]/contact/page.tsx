'use client';

import { useState } from "react";
import emailjs from "emailjs-com";
import Loading from "../projects/loading";

const ContactForm = () => {
  const [formData, setFormData] = useState({ from_name: "", message: "" });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setResponseMessage("Form submitted successfully!");
      setFormData({ from_name: "", message: "" });

    } catch (error) {
      console.error("FAILED...", error);
      setResponseMessage("Failed to send form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h1 className="text-xl font-bold text-center text-black">Contact Us</h1>

        {isLoading && <Loading />}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Submit
        </button>

        {responseMessage && (
          <p
            className={`text-center text-sm mt-4 ${
              responseMessage.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
