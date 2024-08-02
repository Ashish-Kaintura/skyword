"use client";
/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function Testimonials() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-white">
          {/* <h1 className="sm:text-6xl text-3xl uppercase font-bold text-center pt-12">
            Testimonials
          </h1> */}
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="sm:h-12 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="sm:text-normal font-sans text-normal text-gray-900 ">
                  Skyworld Tour Travel Agency is the agency of my trust for all
                  my travel requirements, both domestic and international. Their
                  team is full of professional knowledge, always works fast and
                  quickly finds the best prices on the airline tickets, no
                  matter how difficult is plan. I highly recommend it.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Lucci
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    USA
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          {/* <h1 className="sm:text-6xl text-3xl uppercase font-bold text-center pt-12">
            Testimonials
          </h1> */}
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 b">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="sm:h-12 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="sm:text-normal font-sans text-normal text-gray-900 ">
                  “I made bookings for our family trip to the USA easy when I
                  met Skyworld Tour Travel Agency and I cannot thank them
                  enough.” I and my wife Priya can never thank them enough
                  because of smooth execution of tasks like international flight
                  booking, special assistance etc. The quality in their service
                  is impeccable, and well certainly hire them again.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    larry
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    USA
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          {/* <h1 className="sm:text-6xl text-3xl uppercase font-bold text-center pt-12">
            Testimonials
          </h1> */}
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 b">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="sm:h-12 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="sm:text-normal font-sans text-normal text-gray-900 ">
                  Skyworld Tour is my go-to online travel agency for all
                  domestic flight bookings in India during my frequent business
                  travel from Sydney, Australia. Their efforts to hunt for the
                  most convenient departure or arrival time and their attention
                  to details have been the cause of my time savings. They truly
                  understand the needs of a busy professional on the go.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  lixa
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    USA (New york)
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
