import { Link } from "@remix-run/react";

const THREEFEATURES = () => {
  
    return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-base-200 text-indigo-600 flex-shrink-0">
                <p className="text-8xl text-black">⚡️</p> 
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Made to be Simple</h2>
                <p className="leading-relaxed text-base">After sign up you have to answer a few questions about yourself and your goals. Our AI does the rest.</p>
                <a className="mt-3 text-indigo-600 inline-flex items-center" ><Link to="/databaseSetupBlog">Learn More</Link>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Packed with knowledge</h2>
                <p className="leading-relaxed text-base">Our AI Model is trained on up to Date Knowledge</p>
                <a className="mt-3 text-indigo-600 inline-flex items-center">
                  
                </a>
              </div>
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-base-200 text-indigo-600 flex-shrink-0">
                <p className="text-8xl text-black">📚</p> 
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-base-200 text-indigo-600 flex-shrink-0">
                    <p className="text-8xl text-black">💪</p> 
                </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Made for Gains</h2>
                <p className="leading-relaxed text-base">We will give you everything you need to get started.</p>
                <a className="mt-3 text-indigo-600 inline-flex items-center">                  
                  
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
  export default THREEFEATURES;
  