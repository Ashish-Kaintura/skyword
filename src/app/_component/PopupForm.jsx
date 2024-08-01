// components/PopupForm.js
import { useEffect, useState } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className=" flex justify-end">
          <TiTimes  onClick={() => setShowPopup(false)} className="size-7 font-thin cursor-pointer" />
        </div>
        <h2 className="text-xl mb-4 font-raleway  uppercase text-gray-700 ">
          Get In Touch{" "}
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 font-sans"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 font-sans"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 font-sans mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              id="message"
              rows="4"
            />
          </div>

          <div className="flex justify-end">
            {/* <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md font-sans text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
