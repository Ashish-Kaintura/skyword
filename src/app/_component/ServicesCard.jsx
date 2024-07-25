/* eslint-disable jsx-a11y/alt-text */
"use client"; // Add this at the top of your file
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ServicesCard() {
  const [servicecard, setServicecard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center sm:pt-12 py-12 gap-12 lg:mx-8 lg:px-12">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          servicecard.map((item) => (
            <div key={item.name}>
              <div className="border-2">
                <div className="lg:w-[450px] w-[420px] h-72 overflow-hidden flex justify-center">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image1}
                    width={420} // Adjust width as needed
                    height={288} // Adjust height as needed
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-blue-700 font-raleway tracking-widest py-2 text-sm">
                    {item.name}
                  </h2>
                  <p className="w-96 text-xs font-sans font-semibold line-clamp-6">
                   {item.description}
                  </p>
                  <div className="flex items-center gap-x-1 text-sm hover:text-blue-700 font-raleway tracking-widest text-blue-700 mt-4">
                    <button className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white">
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
