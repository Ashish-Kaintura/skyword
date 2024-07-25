/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "./_component/Header";
import HomeBanner from "./_component/HomeBanner";
import ServicesCard from "./_component/ServicesCard";
import WhyUs from "/public/Images/HomeImage/Biz-flights.jpg";
import Footer from "./_component/Footer";
import FAQ from "./_component/FAQ";
export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <section>
        <div className=" px-2 pb-20 sm:py-20">
          <div className="sm:flex sm:justify-around justify-center gap-x-6 items-center">
            <div className=" font-raleway tracking-widest">
              <h1 className="text-3xl text-blue-700 ">
                Welcome to Skyworldtour{" "}
              </h1>
              <h2 className="text-lg pt-2   tracking-wide">
                Your Global Travel Companion
              </h2>
              <button className="px-4 py-2  border-2  bg-blue-600 mt-4 rounded-lg text-white font-sans text-sm">
                More Info
              </button>
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
            Services
          </h2>
        </div>
        <ServicesCard />
      </section>
      <section>
        <div className=" px-2 pb-20 sm:pt-12 pt-5 bg-gray-200">
          <div className="sm:flex sm:justify-around justify-center gap-x-6 items-center">
            <div className=" font-raleway ">
              <h2 className="text-lg  tracking-wide">Why Choose</h2>
              <h2 className="text-4xl mt-1 text-blue-700 tracking-wide">
                Skyworldtour
              </h2>

              <p className="sm:w-[600px] font-sans text-sm mt-2">
                <span className="text-4xl"> W</span>ith our company as your
                full-service travel agency, guests are assured of a stress-free
                travel planning process that is founded on our expertise. The
                appeal of cheap prices, professional performances, and good
                attitude towards customers has led to hundreds of positive
                reviews. Customers enjoy our friendly approach and quick
                response to all their inquiries. If you need a free, no
                obligation quote on your next vacation, feel free to get one of
                our representatives on the phone now.
              </p>
              <br />
              <p className="sm:w-[600px] font-sans text-sm mt-2">
                The purpose of Skyworldtour is to help people make their
                traveling dreams around the world come true. It is our
                conviction that memorable travel experiences can alter us to the
                very core and become the basis for a lifetime narrative. Let our
                team of travel guides help in planning your travel, in order to
                take you to your dream destination all in style and within your
                budget. Together, lets start planning your next exciting
                adventure!
              </p>
              <div className="flex items-center gap-x-1 text-sm hover:text-blue-700 font-raleway tracking-widest text-blue-700 mt-4">
                <button className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-blue-700 hover:bg-blue-700 hover:text-white">
                  More Info
                </button>
              </div>
            </div>
            <div>
              <div className="flexc justify-center sm:w-[420px] overflow-hidden shadow-lg border-2">
                <Image
                  className="w-full h-full object-cover"
                  src={WhyUs}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
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
              <p className="text-2xl font-medium text-gray-900 dark:text-white font-sans">
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
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
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-gray-200">
        <FAQ/>
      </section>
      <Footer />
    </>
  );
}
