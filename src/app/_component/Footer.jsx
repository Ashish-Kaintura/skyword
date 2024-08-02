// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="sm:py-14 py-12 bg-[#f2f2f2] w-full sm:flex block sm:justify-around justify-center sm:gap-32 shadow-inner">
        <div className="flex justify-center gap-8 sm:gap-32">
          <div className="font-sans block text-xl gap-2 justify-center sm:text-left text-center mb-4 sm:mb-0">
            <h1 className="font-semibold font-sans mb-2">Address</h1>
            <p className="text-[15px] font-semibold text-slate-600">
              Skyworldtour Corp
            </p>
            <p className="text-[15px] font-semibold text-slate-600">
              47 5th Street, New Hyde Park, NY 11040
            </p>
            <p className="text-[15px] font-semibold text-slate-600">
              Phone: +1 8452336465
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4255446950233!2d-73.6947364150042!3d40.730660897624105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262f28f669d73%3A0xdfc658572446d900!2s47%20S%205th%20St%2C%20New%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sin!4v1721906465741!5m2!1sen!2sin"
                width="270"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex justify-center gap-8 sm:gap-32">
          <div className="font-sans flex flex-col text-xl gap-2">
            <h1 className="font-semibold font-sans mb-2">Quick Links</h1>
            <Link href="/" className="text-[15px] font-semibold text-slate-600">
              Home
            </Link>
            <Link
              href="/About-skyworldtour"
              className="text-[15px] font-semibold text-slate-600"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-slate-600"
            >
              Services
            </Link>
            <Link
              href="/contactus"
              className="text-[15px] font-semibold text-slate-600"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[15px] font-semibold text-slate-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Blogs"
              className="text-[15px] font-semibold text-slate-600"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="text-[15px] font-semibold text-slate-600"
            >
              Career
            </Link>
          </div>
        </div>

        <div className="sm:hidden flex flex-col justify-center pb-5">
          <div className="font-sans flex flex-col justify-center text-center text-xl gap-2 ">
            <h1 className="font-semibold font-sans mb-2">Quick Links</h1>
            <Link href="/" className="text-[15px] font-semibold text-slate-600">
              Home
            </Link>
            <Link
              href="/About-skyworldtour"
              className="text-[15px] font-semibold text-slate-600"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-slate-600"
            >
              Services
            </Link>
            <Link
              href="/contactus"
              className="text-[15px] font-semibold text-slate-600"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[15px] font-semibold text-slate-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Blogs"
              className="text-[15px] font-semibold text-slate-600"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="text-[15px] font-semibold text-slate-600"
            >
              Career
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-8 sm:gap-32">
          <div className="font-sans flex flex-col text-xl gap-2 text-center">
            <h1 className="font-semibold font-sans mb-2">Follow us on</h1>
            <div className="flex">
              <ul className="flex gap-4">
                <li>
                  <Link
                    href="https://www.facebook.com/risezonictravel/?mibextid=ZbWKwL"
                    className="text-slate-600"
                  >
                    <FaFacebookF className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/risezonictravel/?igshid=MzRlODBiNWFlZA%3D%3D"
                    className="text-slate-600"
                  >
                    <FaInstagram className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/risezonic-travel/"
                    className="text-slate-600"
                  >
                    <FaLinkedinIn className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600">
                    <FaWhatsapp className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/@risezonictravel"
                    className="text-slate-600"
                  >
                    <FaYoutube className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer>
        <div className="flex justify-center py-2 font-sans">
          <h2>© Risezonic. All Rights Reserved. Designed by Risezonic.com</h2>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
