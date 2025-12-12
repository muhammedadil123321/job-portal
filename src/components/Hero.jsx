import React from "react";


export default function Hero() {
  return (
    <div>
      <section
        className=" bg-linear-to-tr from-white  to-slate-100 backdrop-blur-md bg-white/30
 py-16 px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className={`text-center lg:text-left  `}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Your Local Platform for{" "}
                <span className="bg-linear-to-r from-blue-700 via-blue-700 to-gray-900 bg-clip-text text-transparent">
                  Quick Hiring and Flexible Work
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-800  mb-8 ">
                Workers discover nearby part-time and daily wage jobs, while
                employers post tasks and hire trusted people with ease.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer">
                  Find Jobs
                </button>
                <button className="bg-linear-to-tl from-gray-100 to-gray-300 hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-200 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer">
                  Post a Job
                </button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center sm:justify-center lg:justify-start text-gray-900 mt-6">
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="url(#grad1)"
                      stroke="#15803d"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="url(#grad1-inner)"
                      opacity="0.3"
                    />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="grad1" x1="12" y1="2" x2="12" y2="22">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                      <linearGradient
                        id="grad1-inner"
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Fast Hiring</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="url(#grad2)"
                      stroke="#15803d"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="url(#grad2-inner)"
                      opacity="0.3"
                    />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="grad2" x1="12" y1="2" x2="12" y2="22">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                      <linearGradient
                        id="grad2-inner"
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Secure Platform</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="url(#grad3)"
                      stroke="#15803d"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="url(#grad3-inner)"
                      opacity="0.3"
                    />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="grad3" x1="12" y1="2" x2="12" y2="22">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                      <linearGradient
                        id="grad3-inner"
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Flexible Work</span>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div
               data-aos="fade-left" className={`flex justify-center lg:justify-end transition duration-1000`}
            >
              <div className=" w-full h-auto lg:h-[450px] rounded-2xl bg-amber-300">
                <img
                  className="rounded-2xl h-full"
                  src="https://learnenglishteens.britishcouncil.org/sites/teens/files/field/image/RS9447_GettyImages-1326171173-hig.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
