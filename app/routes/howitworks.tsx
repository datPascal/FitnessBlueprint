import { Link } from "@remix-run/react";

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How Fitness Blueprint Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform creates personalized fitness plans in just a few simple steps
          </p>
        </div>
        
        <div className="flex flex-col gap-20 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-10 text-white text-center shadow-lg">
                <span className="text-5xl font-bold">01</span>
                <h3 className="text-2xl font-semibold mt-4">Tell Us About Yourself</h3>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Your Profile</h3>
              <p className="text-lg text-gray-600">
                Answer a short questionnaire about your fitness experience, goals, available equipment, 
                time commitment, and any health considerations. This takes less than 5 minutes but provides 
                our AI with the crucial information needed to build your custom plan.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-10 text-white text-center shadow-lg">
                <span className="text-5xl font-bold">02</span>
                <h3 className="text-2xl font-semibold mt-4">Get Your Blueprint</h3>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Receive Your Personalized Plan</h3>
              <p className="text-lg text-gray-600">
                Our advanced AI analyzes your profile and generates a comprehensive fitness blueprint. 
                This includes progressive workout routines, nutrition guidance, and recovery protocols - 
                all scientifically optimized for your specific needs and goals.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-gradient-to-br from-rose-500 to-orange-400 rounded-2xl p-10 text-white text-center shadow-lg">
                <span className="text-5xl font-bold">03</span>
                <h3 className="text-2xl font-semibold mt-4">Track & Evolve</h3>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Monitor Progress & Adapt</h3>
              <p className="text-lg text-gray-600">
                As you follow your plan, log your workouts and track your progress directly in the app. 
                Our AI continuously learns from your feedback and results, automatically adjusting your 
                plan as you get stronger, achieve milestones, or if your goals change.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link to="/getNotified" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition-colors">
            Join the Waitlist
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 