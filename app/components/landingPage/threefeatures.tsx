import { Link } from "@remix-run/react";

const THREEFEATURES = () => {
  
    return (
        <section className="text-gray-600 body-font" id="features">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Fitness Blueprint</h2>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex-shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h3 className="text-gray-900 text-2xl title-font font-medium mb-2">Personalized AI Fitness Coach</h3>
                <p className="leading-relaxed text-base">Answer a few simple questions about your fitness level, goals, and preferences. Our advanced AI technology builds a custom workout and nutrition plan optimized specifically for you — no one-size-fits-all approaches.</p>
                <Link to="/howitworks" className="mt-3 text-indigo-600 inline-flex items-center">
                  Learn How It Works
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h3 className="text-gray-900 text-2xl title-font font-medium mb-2">Science-Based Approach</h3>
                <p className="leading-relaxed text-base">Tired of fitness myths and fads? Every recommendation in Fitness Blueprint is backed by peer-reviewed research and fact-checked by experts. Get trustworthy guidance based on the latest exercise science and nutritional studies.</p>
                <Link to="/research" className="mt-3 text-indigo-600 inline-flex items-center">
                  Read Our Research
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white flex-shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white flex-shrink-0 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h3 className="text-gray-900 text-2xl title-font font-medium mb-2">Complete Fitness Solution</h3>
                <p className="leading-relaxed text-base">Get everything you need to succeed: customized workout routines, meal plans tailored to your goals, progress tracking, and ongoing adjustments as you improve. Your all-in-one fitness companion available anytime on iOS.</p>
                <Link to="/getNotified" className="mt-3 text-indigo-600 inline-flex items-center">
                  Join the Waitlist
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
  export default THREEFEATURES;
  