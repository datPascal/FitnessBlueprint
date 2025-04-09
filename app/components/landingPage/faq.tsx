import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How does Fitness Blueprint personalize my workout plans?",
    answer:
      "Fitness Blueprint uses advanced AI to analyze your fitness level, goals, body composition, schedule, preferences, and any limitations to create a completely personalized fitness program. Whether you're looking to build muscle, burn fat, train for a marathon, or improve overall fitness, your plan will be specifically tailored to help you achieve your unique goals efficiently."
  },
  {
    question: "What makes Fitness Blueprint different from other fitness apps?",
    answer:
      "Unlike generic fitness apps, Fitness Blueprint is built on scientifically-validated research and provides truly personalized guidance. Our AI coach adapts to your progress, adjusts your plan when needed, and provides fact-checked nutritional advice specifically for your goals. We don't use one-size-fits-all templates - every recommendation is customized for you."
  },
  {
    question: "Do I need any special equipment to use Fitness Blueprint?",
    answer:
      "Not at all! Fitness Blueprint can create plans for any environment - whether you have access to a fully-equipped gym, basic home equipment, or no equipment at all. Your workout plan will be designed around the resources you have available while still maximizing results."
  },
  {
    question: "When will Fitness Blueprint be available?",
    answer:
      "Fitness Blueprint will be launching on iOS in approximately 3 months. Sign up for our waitlist to get early access and be notified as soon as we launch."
  },
  {
    question: "Is the nutritional guidance based on scientific research?",
    answer:
      "Absolutely. All nutritional recommendations in Fitness Blueprint are based on peer-reviewed research and fact-checked by nutrition experts. We stay current with the latest studies and provide evidence-based advice tailored to your specific fitness goals, whether that's muscle gain, fat loss, or athletic performance."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleActiveIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="body-font relative" id="faq">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Everything you need to know about your personal AI fitness coach</p>
        </div>
      <div className="lg:w-2/3 md:w-2/3 mx-auto">
    
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex items-center justify-between px-4 py-4 font-medium"
              onClick={() => toggleActiveIndex(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-600">
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