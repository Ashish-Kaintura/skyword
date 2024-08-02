// // components/PopupForm.js
// import { useEffect, useState } from "react";
// import { TiThMenu, TiTimes } from "react-icons/ti";
// const PopupForm = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 10000); // 10 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <div className=" flex justify-end">
//           <TiTimes
//             onClick={() => setShowPopup(false)}
//             className="size-7 font-thin cursor-pointer"
//           />
//         </div>
//         <h2 className="text-xl mb-4 font-raleway  uppercase text-gray-700 ">
//           Get In Touch{" "}
//         </h2>
//         <form>
//           <div className="flex justify-between gap-x-4">
//             {/* Name Field */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
//                 Your Name
//               </label>
//               <input
//                 placeholder="John Doe"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                 id="username"
//                 type="text"
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
//                 Your Email
//               </label>
//               <input
//                 placeholder="example@example.com"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                 id="email"
//                 type="email"
//               />
//             </div>
//           </div>
//           <div className="flex justify-between gap-x-4">
//             {/* Phone Number Field */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
//                 Your Phone Number
//               </label>
//               <input
//                 placeholder="123-456-7890"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                 id="phone"
//                 type="tel"
//               />
//             </div>
//             {/* company Name*/}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
//                 Your Company Name
//               </label>
//               <input
//                 placeholder="ZYX ltd"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//                 id="company Name"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 font-sans mb-2">
//               Your Message
//             </label>
//             <textarea
//               placeholder="Write your message here..."
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//               id="message"
//               rows="4"
//             />
//           </div>

//           <div className="flex justify-end">
//             {/* <button
//               type="button"
//               className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
//               onClick={() => setShowPopup(false)}
//             >
//               Cancel
//             </button> */}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-md font-sans text-sm"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;

import { TiTimes } from "react-icons/ti";

const PopupForm = ({ showPopup, setShowPopup }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[20] sm:p-0 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <TiTimes
            onClick={() => setShowPopup(false)}
            className="size-7 font-thin cursor-pointer"
          />
        </div>
        <h2 className="text-xl mb-4 font-raleway uppercase text-gray-700">
          Get In Touch
        </h2>
        <form>
          <div className="flex justify-between gap-x-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                Your Name
              </label>
              <input
                placeholder="John Doe"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="username"
                type="text"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                Your Email
              </label>
              <input
                placeholder="example@example.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                Your Phone Number
              </label>
              <input
                placeholder="123-456-7890"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="phone"
                type="tel"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                Your Company Name
              </label>
              <input
                placeholder="ZYX ltd"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="company"
                type="text"
              />
            </div>
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
