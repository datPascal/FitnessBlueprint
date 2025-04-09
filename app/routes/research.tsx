import { Link } from "@remix-run/react";

export default function Research() {
  return (
    <div className="bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fitness Blueprint is built on a foundation of scientific evidence. Here's how we ensure our recommendations are effective and trustworthy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Research Area 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <div className="h-14 w-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Optimized Training Protocols</h3>
            <p className="text-gray-600 mb-4">
              Our workout algorithms are based on research in exercise physiology and sports science. We incorporate principles of 
              progressive overload, specificity, and periodization to maximize results while minimizing injury risk.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Evidence-based training frequency for different fitness goals</li>
              <li>Optimal set and rep schemes for strength, hypertrophy, and endurance</li>
              <li>Research-backed rest periods and recovery protocols</li>
            </ul>
          </div>
          
          {/* Research Area 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center text-white mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nutrition Science</h3>
            <p className="text-gray-600 mb-4">
              Our nutritional recommendations are based on peer-reviewed research in metabolic science and sports nutrition. 
              We focus on sustainable, balanced approaches rather than extreme or fad diets.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Macronutrient calculations based on individual metabolism and goals</li>
              <li>Micronutrient guidance for optimal health and performance</li>
              <li>Meal timing strategies supported by current research</li>
            </ul>
          </div>
          
          {/* Research Area 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <div className="h-14 w-14 bg-gradient-to-br from-rose-500 to-orange-400 rounded-lg flex items-center justify-center text-white mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Behavioral Psychology</h3>
            <p className="text-gray-600 mb-4">
              Our app incorporates research from behavioral psychology to help you build lasting habits and overcome 
              common barriers to consistency with exercise and nutrition.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Implementation of habit formation science</li>
              <li>Evidence-based motivation and adherence strategies</li>
              <li>Psychological approaches to overcoming fitness plateaus</li>
            </ul>
          </div>
          
          {/* Research Area 4 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI and Machine Learning</h3>
            <p className="text-gray-600 mb-4">
              Our proprietary algorithms continuously learn from user data to improve recommendations and 
              personalization, while maintaining strict privacy standards.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Pattern recognition to identify optimal training responses</li>
              <li>Predictive modeling for progression planning</li>
              <li>Continuous improvement through aggregate anonymized data analysis</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Scientific Advisory Board</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Fitness Blueprint collaborates with leading researchers, exercise physiologists, and nutrition scientists to ensure our 
            recommendations are always based on current, peer-reviewed evidence.
          </p>
          
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