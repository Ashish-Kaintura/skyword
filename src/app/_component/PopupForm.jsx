"use client";
// components/PopupForm.js
import { useState } from "react";

const PopupForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold font-raleway mb-4">Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-sans">Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-sans">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label className="block mb-2  text-gray-700 font-sans">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              id="message"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
