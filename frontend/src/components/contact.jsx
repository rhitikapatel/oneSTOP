import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect to home
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-600"
        aria-label="Close"
      >
        ✕
      </button>

      <fieldset className="bg-white border border-gray-300 rounded-xl w-[400px] p-6 shadow-md">
        <legend className="text-lg font-semibold px-2">Contact Us</legend>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Mobile No */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Mobile No.</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Write your message..."
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
          Submit
        </button>
      </fieldset>
    </div>
  );
}

export default Contact;
