import HEADER from "../components/header";
import FOOTER from "../components/footer";
import HERO from "../components/landingPage/Hero";
import FAQ from "../components/landingPage/faq";
import THREEFEATURES from "../components/landingPage/threefeatures";
import BLOG from '../routes/blog';
import { Form } from "@remix-run/react";

import {useRef, useState, useEffect} from "react"
import { motion } from "framer-motion"



export default function Index() {
  const scrollRef = useRef(null)
  const [showButton, setShowButton] = useState(true); 
  const [seconds, setSeconds] = useState(0);

  // For the button animation
  const handleSignup = () => {
    setShowButton(false);
    setSeconds(3);
  };

  // Reset the button state
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setShowButton(true);
    }
  }, [seconds]);

  return (
    
    <main className="flex flex-col bg-base-100">
      <HEADER />
      <HERO/>
      <THREEFEATURES />
      {/* Get Notified Section */}
      <section className="bg-white py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sign up and get notified when we Launch!</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl">Our first Feature will be highly personalized Fitnessplans</p>
            
            <Form method="post" action="/getNotified">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input 
                    className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="Enter your email" 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                  />
                </div>
                <div>
                  {showButton ? (
                    <button type="submit" className="btn btn-secondary" onClick={handleSignup}>
                      Notify me
                    </button>
                  ) : (
                    <div className="btn btn-secondary">
                      See ya! 💪🏽
                    </div>
                  )}
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
                We care about the protection of your data. 
                <a href="/privacy" className="font-medium text-primary-600 hover:underline">
                  Read our Privacy Policy
                </a>.
              </div>
            </Form>
          </div>
        </div>
      </section>
      
      <FAQ />
      <FOOTER />
    </main>
  );
}