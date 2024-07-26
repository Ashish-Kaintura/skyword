/* eslint-disable jsx-a11y/alt-text */
// src/app/about/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../_component/Header";
import Footer from "../_component/Footer";
import Banner from "/public/Images/About Us/banner.png";
import Aboutus from "/public/Images/About Us/banner.jpg";

const Page = () => {
  return (
    <>
      <Header />
      <div className="  text-gray-900 pt-20">
        <div  className="flex justify-center" >
          <Image
          className="w-full sm:h-600" src={Banner}></Image>
        </div>

        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-raleway text-center text-blue-600 mb-8 uppercase tracking-wide py-8">
            About Us
          </h1>

          <section className="mb-16">
            <div className="sm:flex  sm:justify-between justify-between items-center">
              <div className="">
                <div className="sm:w-[550px] sm:h-[490px] overflow-hidden flex justify-center">
                  <Image
                    src={Aboutus}
                    alt="Travel Experience"
                    layout="responsive"
                    className="rounded-lg shadow-xl w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-raleway tracking-wide text-blue-500 mb-4">
                  Welcome to Skyworldtour Corp
                </h2>
                <p className="text-sm font-sans mb-4 w-[650px]">
                  Welcome to Skyworldtour Corp, where your journey to
                  unforgettable travel experiences begins. Founded with a
                  passion for exploration and a commitment to excellence, we are
                  dedicated to providing exceptional travel services that cater
                  to every type of traveler. Whether youre seeking adventure,
                  relaxation, culture, or luxury, were here to turn your travel
                  dreams into reality.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-100  py-12 rounded-lg shadow-lg mb-16">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl  font-raleway tracking-wide text-center text-blue-600 mb-6">
                Our Mission
              </h2>
              <p className="font-sans text-normal text-center">
                Our mission is to inspire and empower people to explore the
                world. We believe that travel enriches lives by broadening
                perspectives and creating lifelong memories. With this belief at
                our core, we strive to offer personalized travel experiences
                that exceed expectations, providing seamless and enjoyable
                journeys from start to finish.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-raleway tracking-wide text-blue-500 mb-4">
              Our Story
            </h2>
            <p className="text-normal font-sans mb-4">
              Skyworldtour Corp was born out of a love for travel and a desire
              to share that passion with others. Our founders, seasoned
              travelers themselves, saw the need for a travel service that
              combines expertise, personalized service, and unbeatable value.
              From our humble beginnings, weve grown into a trusted name in the
              travel industry, helping thousands of travelers discover the
              worlds beauty and wonder.
            </p>
          </section>

          <section className="bg-gray-100 py-12 rounded-lg shadow-md mb-16">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-raleway tracking-wide text-blue-500 mb-4">
                Meet Our Team
              </h2>
              <p className="text-normal font-sans mb-4">
                Our team is a group of passionate travel enthusiasts with
                extensive industry experience. From our travel consultants to
                our customer service representatives, everyone at Skyworldtour
                Corp shares a common goal: to make your travel experience
                exceptional. We take pride in our personalized approach, working
                closely with each customer to create journeys that are as unique
                as they are memorable.
              </p>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-2xl  font-raleway tracking-wide text-blue-500 mb-4">
              Join Our Community
            </h2>
            <p className="text-normal font-sans mb-4 ">
              Become part of our travel community and connect with fellow
              adventurers. Subscribe to our newsletter for the latest travel
              deals, tips, and stories. Follow us on{" "}
              <Link
                href="https://facebook.com"
                className="text-blue-500 hover:underline"
              >
                Facebook
              </Link>
              ,{" "}
              <Link
                href="https://instagram.com"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </Link>
              ,{" "}
              <Link
                href="https://twitter.com"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </Link>
              , and{" "}
              <Link
                href="https://pinterest.com"
                className="text-blue-500 hover:underline"
              >
                Pinterest
              </Link>{" "}
              to stay inspired and share your travel experiences.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
