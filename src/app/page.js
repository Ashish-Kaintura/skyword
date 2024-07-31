/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./_component/Header";
import HomeBanner from "./_component/HomeBanner";
import ServicesCard from "./_component/ServicesCard";
import WhyUs from "/public/Images/HomeImage/banner4.jpg";
import Footer from "./_component/Footer";
import FAQ from "./_component/FAQ";
import Link from "next/link";
import Testimonials from "./_component/Testimonials";
import SideLink from "./_component/SideLink";
import PopupForm from "./_component/PopupForm";
export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <Header />
      <HomeBanner />
      <section>
        <div className=" px-2 pb-20 sm:py-20">
          <div className="sm:flex sm:justify-around justify-center gap-x-6 items-center">
            <div className=" font-raleway tracking-widest">
              <h1 className="text-3xl text-blue-700 ">
                Welcome to Skyworldtour
              </h1>
              <h2 className="text-lg pt-2   tracking-wide">
                Your Global Travel Companion
              </h2>
              <Link href="/About-skyworldtour">
                <button className="px-4 py-2  border-2  bg-blue-600 mt-4 rounded-lg text-white font-sans text-sm">
                  More Info
                </button>
              </Link>
            </div>
            <div>
              <p className="sm:w-[600px] font-sans text-sm">
                <span className="text-4xl"> A</span>t Skyworldtour, our passion
                is helping people experience the wonders of travel. Whether you
                dream about relaxing on exotic beaches, exploring vibrant cities
                rich in culture and history, or enjoying outside undertakings in
                adventures in scenic locales, we can assist you with planning
                the ideal excursion. As a full-service travel agency based in
                the United States, we offer flights, hotels, car rentals and
                more deals across the globe at best costs customized to your
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center py-4">
          <h2 className="text-3xl font-raleway tracking-widest text-center pb-2 text-blue-700 border-b-2 uppercase">
            Wha we Provide
          </h2>
        </div>
        <ServicesCard />
      </section>
      <section>
        <div className="sm:flex sm:justify-around justify-center py-16 px-4 bg-gray-200">
          <div className=" font-raleway ">
            <h2 className="text-lg  tracking-wide">Why Choose</h2>
            <h2 className="text-4xl mt-1 text-blue-700 tracking-wide">
              Skyworldtour
            </h2>
            <p className="sm:w-[600px] font-sans text-sm mt-2">
              <span className="text-2xl"> W</span>ith our company as your
              full-service travel agency, guests are assured of a stress-free
              travel planning process that is founded on our expertise. The
              appeal of cheap prices, professional performances, and good
              attitude towards customers has led to hundreds of positive
              reviews. Customers enjoy our friendly approach and quick response
              to all their inquiries. If you need a free, no obligation quote on
              your next vacation, feel free to get one of our representatives on
              the phone now.
            </p>
            <br />
            <p className="sm:w-[600px] font-sans text-sm mt-2">
              The purpose of Skyworldtour is to help people make their traveling
              dreams around the world come true. It is our conviction that
              memorable travel experiences can alter us to the very core and
              become the basis for a lifetime narrative. Let our team of travel
              guides help in planning your travel, in order to take you to your
              dream destination all in style and within your budget. Together,
              lets start planning your next exciting adventure!
            </p>
            <div className="flex items-center gap-x-1 text-sm hover:text-blue-700 font-raleway tracking-widest text-blue-700 m-4">
              <Link href="/About-skyworldtour">
                {" "}
                <button className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white">
                  More Info
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center sm:w-[420px] overflow-hidden shadow-lg border-2 mt-4 sm:mt-0">
            <Image
              alt="skyworldtour"
              className="w-full h-full object-cover"
              src={WhyUs}
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center">
          <h3 className="text-center pt-12 font-raleway tracking-widest uppercase pb-4 border-b-2 border-gray-400 text-blue-700 text-3xl">
            Testimonials
          </h3>
        </div>
        <Testimonials />
      </section>
      <section className="bg-gray-200">
        <FAQ />
      </section>
      <section>
      <PopupForm isVisible={isPopupVisible} onClose={closePopup} />
      </section>
      <section>
        <SideLink />
      </section>
      <Footer />
    </>
  );
}
