// src/components/Modal.js
import React from 'react';
import Image from 'next/image';

const Modal = ({ show, onClose, item }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20 p-4">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <div className="flex flex-col items-center">
          <Image
            alt={item.name}
            className="w-full h-64 object-cover rounded"
            src={item.image1}
            width={512} // Adjust width as needed
            height={256} // Adjust height as needed
          />
          <h2 className="text-xl font-bold mb-4 mt-4">{item.name}</h2>
          <p className="text-center">{item.description}</p>
          <div className="mt-4 flex justify-end w-full">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
