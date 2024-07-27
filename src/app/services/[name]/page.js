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
      <section>
        <div className="pt-28">
          <h1>{service.Title}</h1>
          <img src={service.image1} alt={service.name} />
          <p>{service.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
