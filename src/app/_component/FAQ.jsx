"use client"

// components/FAQ.js
import { useState } from 'react';

const FAQ = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl font-manrope text-center font-raleway text-blue-700 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${openIndex === index ? 'bg-indigo-50 border-indigo-600' : ''} mb-8 lg:p-4`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 ${openIndex === index ? 'font-medium text-indigo-600' : ''}`}
                aria-controls={`collapse-${index}`}
              >
                <h5 className='font-sans'>{item.question}</h5>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === index ? 'hidden' : 'block'} group-hover:text-indigo-600 origin-center`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === index ? 'block' : 'hidden'} group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`collapse-${index}`}
                className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ${openIndex === index ? 'max-h-[250px]' : 'max-h-0'}`}
                aria-labelledby={`heading-${index}`}
              >
                <p className="text-base text-gray-900 font-sans leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample FAQ items (replace these with your actual questions and answers)
const faqItems = [
  {
    question: 'How can I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to reset your password.'
  },
  {
    question: 'How do I update my billing information?',
    answer: 'To update your billing information, log in to your account and navigate to the "Billing" section in your account settings. Update your information and save changes.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact customer support through the "Contact Us" page on our website, or by sending an email to support@example.com.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'To delete your account, please contact our support team through the "Contact Us" page and request account deletion. Follow the instructions provided by our support team.'
  }
];

export default FAQ;
