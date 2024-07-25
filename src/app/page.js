import Image from "next/image";
import Header from "./_component/Header";
import HomeBanner from "./_component/HomeBanner";
import ServicesCard from "./_component/ServicesCard";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <section>
        <div className=" px-2 pb-20 sm:pt-12 pt-5">
          <div className="sm:flex sm:justify-around justify-center gap-x-6 items-center">
            <div className=" font-raleway tracking-widest">
              <h1 className="text-3xl text-blue-700 ">
                Welcome to Skyworldtour{" "}
              </h1>
              <h2 className="text-lg pt-2   tracking-wide">
                Your Global Travel Companion
              </h2>
              <button className="px-4 py-2  border-2  bg-blue-600 mt-4 rounded-lg text-white font-sans text-sm" >More Info</button>
            </div>
            <div>
              <p className="sm:w-[600px] font-sans text-sm">
                At Skyworldtour, our passion is helping people experience the
                wonders of travel. Whether you dream about relaxing on exotic
                beaches, exploring vibrant cities rich in culture and history,
                or enjoying outside undertakings in adventures in scenic
                locales, we can assist you with planning the ideal excursion. As
                a full-service travel agency based in the United States, we
                offer flights, hotels, car rentals and more deals across the
                globe at best costs customized to your budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServicesCard/>
      </section>
      <section className="h-[100vh] bg-black"></section>
    </>
  );
}
