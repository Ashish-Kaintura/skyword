import React from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function SideLink() {
  return (
    <div>
      <a className="whats-app" href="https://wa.me/8452336465" target="_blank">
        <FaWhatsapp className=" animate-bounce my-float text-3xl" />
      </a>
    </div>
  );
}
