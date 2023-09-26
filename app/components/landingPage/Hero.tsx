import { Link } from "@remix-run/react";

import HeroImage from './../../assets/devHero.png';

function HeroHome() {
  return (
    <section className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
          <svg className="hidden 2xl:block" width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            The Ultimate Personal AI Assistant to <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Reach your Fitnessgoals</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Our AI-powered tool is packed with the most up to date fitness knowledge. 
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link
                    to="/getNotified"
                    className="btn btn-primary mr-4 "
                  >
                    Get notified, when we launch
                  </Link>
                </div>
                
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto rounded-2xl" src={HeroImage} width="768" height="432" alt="Hero" />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;