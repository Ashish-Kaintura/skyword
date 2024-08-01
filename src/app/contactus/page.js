import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../_component/Header";
import Footer from "../_component/Footer";
export default function page() {
  return (
    <>
      <Header />
      <div className="mt-8 sm:mx-12 sm-px-12 pt-28  px-2">
        <h1 className="font-raleway tracking-wide text-blue-700 text-center mt-5 pt-5 text-3xl uppercase">
          Contact us
        </h1>
        <div className="sm:mx-12 sm-px-12">
          <p className=" text-center font-sans pt-8  pb-1 text-sm">
            Feel free to send us your queries regarding service. Complaints are
            welcome as well, we take them as a note for improvement.
          </p>

          <p className="text-center font-sans  text-sm">
            At Skyworldtour crop, our passion is helping people experience the
            wonders of travel. Whether you dream about relaxing on exotic
            beaches, exploring vibrant cities rich in culture and history, or
            enjoying outside undertakings in adventures in scenic locales, we
            can assist you with planning the ideal excursion. As a full-service
            travel agency based in the United States, we offer flights, hotels,
            car rentals and more deals across the globe at best costs customized
            to your budget.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-12 sm-px-12 pt-8 ">
        <div className="sm:mx-12 sm-px-12 sm:flex block flex-wrap justify-center gap-5 sm:gap-32 items-center">
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <FaLocationDot className="size-7 text-blue-700" />
            </div>
            <p>
              Skyworldtour Corp 47 5th Street, New Hyde Park,
              <br />
              NY 11040
            </p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <FaPhoneAlt className="size-7 text-blue-700" />
            </div>
            <p>+18452336465</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <IoMail className="size-7 text-blue-700" />
            </div>
            <p>Support@skyworldtourcorp.com</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap sm:justify-around justify-center sm:gap-32  sm:py-12 items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4255446950233!2d-73.6947364150042!3d40.730660897624105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262f28f669d73%3A0xdfc658572446d900!2s47%20S%205th%20St%2C%20New%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sin!4v1721906465741!5m2!1sen!2sin"
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:w-[600px] w-[410px] sm:h-[450px] h-[450px]"
            ></iframe>
          </div>
          <div>
            <form>
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-xl font-bold leading-tight  text-blue-700 md:text-2xl  uppercase tracking-widest">
                     Get in Touch
                    </p>

                    {/* Name Field */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 font-sans">
                        Your Name
                      </label>
                      <input
                        placeholder="John Doe"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        id="username"
                        type="text"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 font-sans">
                        Your Email
                      </label>
                      <input
                        placeholder="example@example.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        id="email"
                        type="email"
                      />
                    </div>

                    {/* Phone Number Field */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 font-sans">
                          Your Phone Number
                        </label>
                        <input
                          placeholder="123-456-7890"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="phone"
                          type="tel"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 font-sans">
                          Your Message
                        </label>
                        <textarea
                          placeholder="Write your message here..."
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="message"
                          rows="4"
                        />
                    </div>

                    <button
                      className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
