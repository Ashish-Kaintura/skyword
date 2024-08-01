// src/components/ServicesDropdown.js
import Link from 'next/link';

const ServicesDropdown = () => {
  return (
    <div className="relative group">
      <Link href="/services">
        <span className="text-sm font-sans hover:border-b-2 border-zinc-400 transition-all ease-in delay-300">
          Services
        </span>
      </Link>
      <ul className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
        <li>
          <Link href="/services/B2B-Corporate-Travel-Management">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">B2B Corporate Travel</span>
          </Link>
        </li>
        <li>
          <Link href="/services/Flight-Bookings">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">Flight Bookings</span>
          </Link>
        </li>
        <li>
          <Link href="/services/Car-Rentals">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">Car Rentals</span>
          </Link>
        </li>
        {/* <li>
          <Link href="/services/Online-Resources">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">Online Resources</span>
          </Link>
        </li> */}
        {/* <li>
          <Link href="/services/Excursion-Bookings">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">Excursion Bookings</span>
          </Link>
        </li> */}
        <li>
          <Link href="/services/Hotel-Reservations">
            <span className="block px-4 py-2 text-sm hover:bg-gray-100">Hotel Reservations</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesDropdown;
