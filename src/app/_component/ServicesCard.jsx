/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"; // Add this at the top of your file
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal"; // Import the Modal component

export default function ServicesCard() {
  const [servicecard, setServicecard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null); // State for modal data
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    fetch("/api/servicecard", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error: ${response.status}`);
      })
      .then((data) => {
        setServicecard(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the services!", error);
        setError(
          `There was an error fetching these services! ${error.message}`
        );
        setLoading(false);
      });
  }, []);

  const handleKnowMoreClick = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg:px-12 px-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          servicecard.map((item) => (
            <div key={item.name}>
              <div className="border-2 sm:w-[450px] ">
                <div className="sm:w-[450px] sm:h-72 overflow-hidden flex justify-center">
                  <img
                    alt="skyworldtour"
                    className="w-full h-full object-cover"
                    src={item.image1}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-blue-700 font-raleway tracking-widest py-2 text-sm">
                    {item.name}
                  </h2>
                  <p className="sm:w-96 text-xs font-sans font-semibold line-clamp-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-x-1 text-sm hover:text-blue-700 font-raleway tracking-widest text-blue-700 mt-4">
                    <button
                      onClick={() => handleKnowMoreClick(item)}
                      className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white"
                    >
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal} item={modalData} />
      )}
    </div>
  );
}
