import React from "react";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Error from "/public/Images/404/404.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="pt-28 ">
        <div className="flex justify-center overflow-hidden sm:h-[100vh] ">
          <Image
            layout="responsive"
            className="w-full h-full object-contain"
            src={Error}
            alt="404 error"
          ></Image>
        </div>
      </section>
      <Footer />
    </>
  );
}
