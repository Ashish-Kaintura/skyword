/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../_component/Header";
import Footer from "../_component/Footer";
import Banner from "/public/Images/privacy/banner.jpg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <section>
        <div className="pt-28">
          <div className="sm:w-full sm:h-[700px] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={Banner}
              alt="Banner"
              width={800}
              height={700}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="my-5 px-12">
          <div className="sm:flex block sm:justify-around justify-center items-center text-center">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h1 className="text-3xl mb-2 pb-2 font-raleway tracking-wide text-blue-700 ">
                We Respect Your Right to Privacy
              </h1>
              <p className="text-nomal font-sans">
                Skyworldtour.com is committed to protecting the privacy of your
                personal information. Com understands how important it is to
                protect your personal information. This security plan describes
                how we gather, use, and safeguard the information you give to
                us. Please read it carefully.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="text-3xl font-raleway tracking-wide text-blue-700 mb-2 pb-2">
                What Information We Compile
              </h2>
              <p className="text-normal font-sans">
                During the process of creating an account, processing payments,
                and interacting with our website or services, personal
                information is gathered. Examples of this data include your
                name, phone number, email address, physical address, and payment
                details. In addition to your personal information, we also have
                the right to collect non-personal information such as your IP
                address, operating system, and browser type.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="text-3xl font-raleway tracking-wide text-blue-700 mb-2 pb-2">
                Our Approach to Managing Your Information
              </h2>
              <p className="text-normal font-sans">
                We utilize the personal information you give us to deliver the
                products and services you need. Apart from the previously
                mentioned purposes, we could additionally employ it for handling
                payments, interacting with you about our offerings, and
                enhancing our website and services. Both scientific and user
                experience upgrading uses are made of non-personal data.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="text-3xl font-raleway tracking-wide text-blue-700 mb-2 pb-2">
                Sharing Your Information
              </h2>
              <p className="text-normal font-sans">
                We never sell, transfer, or lease any of your personal data to
                any parties. In spite of the fact that we might share your
                personal information with respectable companies that assist us
                with website support and service provision, we wont ever sell
                your information to unaffiliated outsiders. These parties are
                simply permitted to use your information for the purposes listed
                and are expected to keep it private
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">
                Cookies and tracking technology
              </h2>
              <p className="text-normal font-sans">
                We use cookies and other tracking technologies to further
                develop your surfing experience and gather scientific data.
                Thanks to this technology, we can observe precisely the way in
                which users draw in with our website and services. This helps us
                roll out the necessary improvements to further develop user
                communication and responsiveness on our systems. To alter your
                treat settings, go to the browsers settings.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">
                Connections to Outside Parties
              </h2>
              <p className="text-normal font-sans">
                Our website could have links to other websites or services show
                to other parties. We have zero power over these outside websites
                security protocols or content. Notwithstanding our website,
                sympathetically consider the privacy policies of some other
                websites you might visit. Childrens Privacy: This website and
                its services are expected for users who are something like 13
                years old. We never purposefully assemble personal information
                about minors without getting permission from their parents.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">
                Data Protection
              </h2>
              <p className="text-normal font-sans">
                We use industry-standard security protocols to monitor your
                personal information against unapproved access, disclosure,
                change, and destruction. Albeit each procedure strives to be as
                safe as possible, data transmission and storage are innately
                unsafe processes, subsequently there is as of now no 100 percent
                safe choice.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">
                Changes to This Policy
              </h2>
              <p className="text-normal font-sans">
                This privacy statement may be updated from time to time to
                reflect changes to our policies or changes required by law. It
                is highly recommended that you check this policy for updates on
                a regular basis.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">
                Reach out to us
              </h2>
              <p className="text-normal font-sans">
                If you have any questions or concerns about our privacy
                statement or the way your personal information is treated,
                please contact us.
              </p>
            </div>
          </div>
          <div className="sm:flex block sm:justify-around justify-center items-center text-center mt-5">
            <div className="block justify-center text-center sm:px-12 py-5">
              <h2 className="sm:text-3xl text-xl mb-2 pb-2 font-raleway tracking-wide text-blue-700">To sum up</h2>
              <p className="text-normal font-sans">
                At Skyworldtour.com, we cherish your trust and are dedicated to
                safeguarding your privacy. We try to be transparent and truthful
                about the kinds of data we gather and the ways in which we apply
                it. Do not hesitate to get in touch with us if you have any more
                questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
