/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// export default function ServiceDetail() {
//   const { id } = useParams();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/servicebox/${id}`)
//         .then(response => response.json())
//         .then(data => {
//           setService(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching service data:', error);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!service) return <div>Service not found</div>;

//   return (
//     <div>
//       <h1>{service.Title}</h1>
//       <img src={service.image1} alt={service.name} />
//       <p>{service.description}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";
import Image from "next/image";
export default function ServiceDetail() {
  const { name } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      fetch(`/api/servicebox/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setService(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching service data:", error);
          setLoading(false);
        });
    }
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Header />
      <div className="pt-28">
        <div className="sm:w-full sm:h-[700px] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={service.Banner}
            alt="Banner"
            width={800}
            height={700}
          />
        </div>
      </div>
      <section>
        <div className="pt-8">
          <div className="sm:flex sm:justify-around justify-center items-center p-5">
            <div className="">
              <div className="sm:w-[450px] sm:h-[400px] overflow-hidden flex justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={service.image1}
                  alt={service.name}
                />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-raleway tracking-wide text-blue-500 mb-4 sm:mt-0 mt-4">
                {service.Title}
              </h1>
              <p className="text-sm font-sans mb-4 sm:w-[650px]">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
