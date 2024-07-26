"use client"; // Ensure this is at the top of the file

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13 with App Router
import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";

export default function ServiceDetailPage() {
  const router = useRouter();
  const { name } = router.query || {}; // Provide fallback to handle undefined

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return; // Exit early if name is not available

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/servicebox/${name}`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the service detail!", error);
        setError(`There was an error fetching the service detail! ${error.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <Header />
      <div className="pt-28 px-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h1 className="text-2xl font-bold">{service.Title}</h1>
            <p className="mt-4 text-lg">{service?.description}</p>
            {/* Add more details and styling as needed */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
