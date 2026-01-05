import React, { useEffect, useState } from "react";
import jobData from "../../jobDetails/jobCardDetails";
import { NavLink, useNavigate } from "react-router-dom";

function FindJob() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setJobs(jobData);
    setFilteredJobs(jobData);
  }, []);

  const applyFilters = () => {
    let result = jobs;

    // Filter by job type
    if (selectedJobTypes.length > 0) {
      result = result.filter((job) => selectedJobTypes.includes(job.tags));
    }

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((job) =>
        selectedCategories.includes(job.category)
      );
    }

    setFilteredJobs(result);
  };

  const handleJobTypeChange = (jobType) => {
    if (selectedJobTypes.includes(jobType)) {
      setSelectedJobTypes([]);
    } else {
      setSelectedJobTypes([jobType]);
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([category]);
    }
  };

  const clearAllFilters = () => {
    setSelectedJobTypes([]);
    setSelectedCategories([]);
    setFilteredJobs(jobs);
  };

  const handleJobDetails = (jobId) => {
    navigate(`/view-job/${jobId}`);
  };

  return (
    <div className="w-full min-h-screen pt-10">
      {/* Main Layout */}
      <div className="max-w-[1400px] w-full mx-auto flex gap-10 mt-16 px-4 pb-12">
        {/* LEFT FILTER SIDEBAR */}
        <div className="w-1/5 bg-white h-fit border-2 border-gray-200 p-4 shadow-sm rounded-md">
          {/* Job Type Filter */}

          <h3 className="text-gray-800  font-semibold  mb-4 text-sm">
            Filter by Job Type
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedJobTypes.includes("Part-Time")}
                onChange={() => handleJobTypeChange("Part-Time")}
              />
              Part-time
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedJobTypes.includes("Full-Time")}
                onChange={() => handleJobTypeChange("Full-Time")}
              />
              Full-time
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedJobTypes.includes("Seasonal")}
                onChange={() => handleJobTypeChange("Seasonal")}
              />
              Seasonal
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedJobTypes.includes("Hourly")}
                onChange={() => handleJobTypeChange("Hourly")}
              />
              Hourly
            </label>
          </div>

          {/* Category Filter */}
          <h3 className="text-gray-800 font-semibold mt-6 mb-4 text-sm">
            Filter by Category
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes(
                  "Household & Domestic Services"
                )}
                onChange={() =>
                  handleCategoryChange("Household & Domestic Services")
                }
              />
              Household & Domestic Services
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes("Delivery & Logistics")}
                onChange={() => handleCategoryChange("Delivery & Logistics")}
              />
              Delivery & Logistics
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes("Cleaning & Maintenance")}
                onChange={() => handleCategoryChange("Cleaning & Maintenance")}
              />
              Cleaning & Maintenance
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes("Shop / Store Jobs")}
                onChange={() => handleCategoryChange("Shop / Store Jobs")}
              />
              Shop / Store Jobs
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes("Restaurant / Café Jobs")}
                onChange={() => handleCategoryChange("Restaurant / Café Jobs")}
              />
              Restaurant / Café Jobs
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes("Event & Temporary Work")}
                onChange={() => handleCategoryChange("Event & Temporary Work")}
              />
              Event & Temporary Work
            </label>
          </div>

          {/* Action Buttons */}
          <button
            onClick={applyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-sm mt-6"
          >
            Apply Filters
          </button>

          <button
            onClick={clearAllFilters}
            className="block text-center bg-blue-50 p-2.5 rounded-sm w-full mt-3 text-gray-700  border border-gray-200 text-sm font-semibold"
          >
            Clear All
          </button>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 bg-white p-2">
          <div className="flex gap-6 pb-2">
            {/* Showing Results */}
            <p className="text-sm text-gray-900 mb-4 bg-gray-50 w-fit px-2 py-3.5 rounded-sm shadow-sm">
              Available{" "}
              <span className="font-medium">{filteredJobs.length}</span> jobs
            </p>
            {/* Search Bar */}
            <div className="flex items-center bg-gray-50 border border-gray-200 gap-2 h-[46px] px-6 rounded-sm shadow-sm flex-1  ">
              <svg width="24" height="24" fill="#6B7280" viewBox="0 0 30 30">
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
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
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
              >
                {/* Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${job.logoColor} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">
                      {job.companyLogo}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-800 font-semibold text-sm">
                    {job.companyName}
                  </h4>
                  {/* Job Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {job.jobTitle}
                  </h3>
                </div>
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13 21.314 8.343 16.657a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {job.location}
                </div>

                {/* Salary */}
                <div className="flex items-center gap-2 text-gray-700 text-sm mb-3">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10V4m0 16v-4"
                    />
                  </svg>
                  {job.salary}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-gray-600 font-medium">
                    {job.tags}
                  </span>
                </div>

                {/* Button */}

                <button
                  onClick={() => handleJobDetails(job.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
                >
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
