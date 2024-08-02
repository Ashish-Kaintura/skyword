/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "/public/Images/ServicesImage/BB1.jpg";
import Header from "../_component/Header";
import Footer from "../_component/Footer";
import FAQ from "../_component/FAQ";

export default function ServicePage() {
  const [servicebox, setServicebox] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/servicebox", {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log
        setServicebox(data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the services!", error);
        setError(
          `There was an error fetching these services! ${error.message}`
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="sm:h-[700px] overflow-hidden flex justify-center">
          <Image
            alt="skyworldtour"
            className="w-full h-full object-cover"
            layout="responsive"
            src={Banner}
          />
        </div>
      </section>
      <section>
        <div className="block text-center justify-center gap-x-6 items-center pt-20 py-20">
          <div className=" font-raleway tracking-widest">
            <h1 className="text-3xl text-blue-700">OUR SERVICES</h1>
            <h2 className="text-lg pt-2 tracking-wide">
              Travel Services to Simplify Your Journey
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="sm:w-[900px] font-sans text-sm">
              <span className="text-4xl"> A</span>t Skyworldtour, we are
              committed to providing excellent travel services to help make your
              vacations seamless and enjoyable. Whether it is flight,
              accommodation, car rental or other activities required for the
              travel – our team of professional consultants can coordinate and
              manage all aspects to ensure a pleasant trip.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg:px-12 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            servicebox.map((item) => (
              <div key={item.name} className="border-2 sm::w-[450px]">
                <div className="sm:w-[450px] sm:h-72 overflow-hidden flex justify-center">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover"
                    src={item.image1}
                  
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-blue-700 font-raleway tracking-widest py-2 text-sm">
                    {item.Title}
                  </h2>
                  <p className="sm:w-96 text-xs font-sans font-semibold line-clamp-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-x-1 text-sm hover:text-blue-700 font-raleway tracking-widest text-blue-700 mt-4">
                    <Link href={`/services/${item.name}`}>
                      <button className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white">
                        Know more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <section>
        <FAQ />
      </section>
      <Footer />
    </>
  );
}
