import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How can Fitness Blueprint help me to reach my fitness goals",
    answer:
      "Fitness Blueprint is able to build a specific Fitness Programm for you based on your needs."
  },
  {
    question: "Other Questions regarding Fitness Bluprint?",
    answer:
      "Scroll a bit further down to find the contact information for our support team."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Frequently Asked Questions</h1>
        </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
    
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex items-center justify-between px-4 py-2"
              onClick={() => toggleActiveIndex(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;