"use client";
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/Images/logo/logo.png";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";

export default function Header({ setShowPopup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [isNav1Hidden, setIsNav1Hidden] = useState(false);
  const [isNav2Sticky, setIsNav2Sticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsNav1Hidden(scrollTop > 0); // Hide Nav1 if scrolled down
      setIsNav2Sticky(scrollTop > 0); // Make Nav2 sticky if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
      </Head>
      <nav
        className={`Nav1 flex sm:justify-between justify-between  mx-auto sm:px-8 px-2 bg-[#F4F4F5] py-4 items-center z-10 ${
          isNav1Hidden ? "hidden" : ""
        }`}
        style={{
          background: "rgb(244,244,245)",
          background:
            "linear-gradient(90deg, rgba(244,244,245,1) 0%, rgba(244,244,245,1) 78%)",
        }}
      >
        <div className="flex items-center ">
          <div>
            <ul className="flex justify-between  pr-5 font-raleway py-1 flex-wrap">
              <div className="flex font-raleway sm:gap-4 gap-2 sm:ml-2 items-center text-center sm:text-sm text-xs ">
                <div className="flex items-center">
                  <IoMail className=" sm:size-5 size-4 mr-2" />
                  <Link href="">Support@skyworldtourcorp.com</Link>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="  sm:size-5 size-4 mr-2" />
                  <Link href="">+1 8452336465</Link>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="md:flex hidden gap-x-2 items-center text-black">
          {/* <div className="flex items-center gap-x-4">
            <Link href="/">
              <FaFacebook className="sm:size-7 size-4 text-blue-800" />
            </Link>
            <Link href="/">
              <FaInstagramSquare className="sm:size-7 size-4 text-pink-700" />
            </Link>
            <Link href="/">
              <FaLinkedin className="sm:size-7 size-4 text-blue-900" />
            </Link>
            <Link href="/">
              <FaYoutube className="sm:size-7 size-4 text-red-700" />
            </Link>
          </div> */}
          <button
            className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white sm:text-sm text-xs font-sans"
            onClick={() => setShowPopup(true)}
          >
            Book Now
          </button>
        </div>
      </nav>

      <nav
        className={`Nav2 flex justify-between mx-auto lg:px-8 px-2 py-4 shadow-lg items-center fixed w-full z-[10] bg-white ${
          isNav2Sticky ? "top-0" : ""
        }`}
      >
        <div className="">
          <div className="w-[200px]  overflow-hidden">
            <Link href="/">
              <Image className="w-full h-full object-fill " alt="logo" src={Logo}></Image>
            </Link>
          </div>
        </div>
        <div className="">
          <ul className="sm:flex hidden gap-x-8 font-kepler">
            <li>
              <Link
                className="text-sm  font-sans hover:border-b-2 border-zinc-400 transition-all ease-in dealy-300 active"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-sm  font-sans hover:border-b-2 border-zinc-400 transition-all ease-in dealy-300"
                href="/About-skyworldtour"
              >
                About
              </Link>
            </li>
            <li>
              <Link className="" href="/services">
                <ServicesDropdown />
              </Link>
            </li>

            <li>
              <Link
                className="text-sm  font-sans hover:border-b-2 border-zinc-400 transition-all ease-in dealy-300"
                href="/blogs"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                className="text-sm  font-sans hover:border-b-2 border-zinc-400 transition-all ease-in dealy-300"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="sm:flex hidden font-kepler">
            <li>
              <Link href="/contactus">
                <button className="px-4 py-2 border-blue-700 border-2 text-sm font-sans  rounded-lg">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:hidden block">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <TiTimes className=" size-8" />
            ) : (
              <TiThMenu className=" size-8" />
            )}
          </button>
        </div>
      </nav>
      {/* phone nav  */}
      <div
        className={`sidenav ${isMenuOpen ? "open" : ""} block z-20`}
        style={{ top: isScrolled ? 0 : 70 }}
      >
        <div className="flex justify-center">
          <ul className="pt-16">
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/">Home</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/About-skyworldtour">About SkyworldTour</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/services">Services</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/career">Career</Link>
            </li>
            <li className=" font-sans mt-3 text-black text-2xl font-semibold hover:text-[#be9343] ">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
          <div>
            <button onClick={toggleMenu} className="cursor-pointer closebtn">
              {isMenuOpen ? (
                <TiTimes className=" size-8" />
              ) : (
                <TiThMenu className=" size-8" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
