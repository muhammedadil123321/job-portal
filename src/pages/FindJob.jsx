import React from "react";

function FindJob() {
  const jobData = [
    {
      id: 1,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Delivery Boy",
      location: "San Francisco, CA",
      salary: "$18/hour",
      tags:"Part-Time",
      logoColor: "bg-gray-900",
    },
    {
      id: 2,
      companyLogo: "L",
      companyName: "LogiCorp",
      jobTitle: "Warehouse Associate",
      location: "Oakland, CA (12 mi)",
      salary: "$22/hour",
      tags: "Full-Time",
      logoColor: "bg-green-700",
    },
    {
      id: 3,
      companyLogo: "Q",
      companyName: "QuickMart",
      jobTitle: "Retail Cashier",
      location: "San Mateo, CA (8 mi)",
      salary: "$19.50/hour",
      tags:"Seasonal",
      logoColor: "bg-gray-300",
    },
    {
      id: 4,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Barista",
      location: "San Francisco, CA (3 mi)",
      salary: "$18/hour",
      tags: "Part-Time",
      logoColor: "bg-gray-900",
    },
    {
      id: 5,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Barista",
      location: "San Francisco, CA (3 mi)",
      salary: "$18/hour",
      tags:"Hourly",
      logoColor: "bg-gray-900",
    },
        {
      id: 6,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Barista",
      location: "San Francisco, CA (3 mi)",
      salary: "$18/hour",
      tags:"Seasonal",
      logoColor: "bg-gray-900",
    },
        {
      id: 7,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Barista",
      location: "San Francisco, CA (3 mi)",
      salary: "$18/hour",
      tags:"Full-Time",
      logoColor: "bg-gray-900",
    },
     {
      id: 8,
      companyLogo: "C",
      companyName: "City Cafe",
      jobTitle: "Barista",
      location: "San Francisco, CA (3 mi)",
      salary: "$18/hour",
      tags:"Hourly",
      logoColor: "bg-gray-900",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center w-full bg-black pt-28 pb-12">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Find Jobs
          </h1>
          <p className="text-lg text-center text-white/95 max-w-2xl mx-auto">
            Search for local and part time opportunities in your area
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-[1400px] w-full mx-auto flex gap-10 mt-10 px-4 pb-12">

        {/* LEFT FILTER SIDEBAR */}
        <div className="w-1/5 bg-white border-2 border-gray-200 p-4 rounded-xl">
          <h3 className="text-gray-800 font-semibold mb-4 text-sm">Filter by Job Type</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Part-time
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              Full-time
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Seasonal
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Hourly
            </label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-lg mt-5">
            Apply Filters
          </button>

          <button className="block text-center w-full mt-3 text-gray-500 hover:text-gray-700 text-sm">
            Clear All
          </button>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 bg-white p-2">

          {/* Search Bar */}
          <div className="flex items-center border-b border-gray-400/40 gap-2 h-[46px] max-w-3xl mx-auto mb-6">
            <svg width="24" height="24" fill="#6B7280" viewBox="0 0 30 30">
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
            </svg>

            <input
              type="text"
              placeholder="Find jobs"
              className="w-full h-full outline-none text-gray-500 bg-transparent text-sm"
            />

            <button className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white">
              Search
            </button>
          </div>

          {/* Showing Results */}
          <p className="text-sm text-gray-600 mb-4">
            Showing <span className="font-medium">{jobData.length}</span> jobs
          </p>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {jobData.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
              >
                {/* Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${job.logoColor} rounded-xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{job.companyLogo}</span>
                  </div>
                </div>

                 
    
               <div>
                <h4 className="text-gray-800 font-semibold text-sm">{job.companyName}</h4>
                {/* Job Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.jobTitle}</h3>
                </div>
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13 21.314 8.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>

                {/* Salary */}
                <div className="flex items-center gap-2 text-gray-700 text-sm mb-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10V4m0 16v-4" />
                  </svg>
                  {job.salary}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  
                    <span  className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
                      {job.tags}
                    </span>
                
                </div>

                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition">
                  View Details
                </button>

              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
