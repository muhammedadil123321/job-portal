import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Briefcase,
  FileText,
  MapPin,
  CheckCircle,
  X,
  Plus,
  Target,
} from "lucide-react";

export default function PostJob() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    jobStatus: "active",
    jobShiftType: "",
    workingTimeStart: "",
    workingTimeEnd: "",
    salaryMin: "",
    salaryMax: "",
    salaryType: "",
    jobSummary: "",
    responsibilities: [""],
    requiredSkills: [],
    city: "",
    state: "",
    country: "",
    workplaceAddress: "",
  });

  const [currentSkill, setCurrentSkill] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResponsibilityChange = (index, value) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, ""],
    });
  };

  const removeResponsibility = (index) => {
    const newResponsibilities = formData.responsibilities.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  const addSkill = () => {
    if (
      currentSkill.trim() &&
      !formData.requiredSkills.includes(currentSkill.trim())
    ) {
      setFormData({
        ...formData,
        requiredSkills: [...formData.requiredSkills, currentSkill.trim()],
      });
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      requiredSkills: formData.requiredSkills.filter(
        (skill) => skill !== skillToRemove
      ),
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Job posted successfully!");
  };

  const steps = [
    { number: 1, title: "Basic Information", icon: Briefcase },
    { number: 2, title: "Job Description", icon: FileText },
    { number: 3, title: "Location Details", icon: MapPin },
  ];

  return (
    <div className="min-h-full  py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-outfit font-bold text-gray-900 mb-2">
            Post a New Job
          </h1>
          <p className="text-gray-600 text-md ">
            Complete the form below to create your job listing
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.number}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        step >= s.number
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {step > s.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium ${
                        step >= s.number ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {s.title}
                    </p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 transition-all ${
                        step > s.number ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      style={{ maxWidth: "120px" }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-8 py-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {step === 1 && "Basic Information"}
              {step === 2 && "Job Description"}
              {step === 3 && "Location Details"}
            </h2>
          </div>

          <div className="p-8">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Delivery Boy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Season-Time</option>
                      <option value="internship">Hourly</option>
                      
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Status
                    </label>
                    <div className="w-full px-4 py-2.5 bg-green-50 border border-green-300 rounded-md text-green-700 font-medium flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Active
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-base font-medium text-gray-900 mb-4">
                    Working Hours
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shift Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="jobShiftType"
                        value={formData.jobShiftType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select shift type</option>
                        <option value="fixed-time">Fixed Time</option>
                        <option value="day-shift">Day Shift</option>
                        <option value="evening-shift">Evening Shift</option>
                        <option value="night-shift">Night Shift</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="workingTimeStart"
                        value={formData.workingTimeStart}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="workingTimeEnd"
                        value={formData.workingTimeEnd}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-base font-medium text-gray-900 mb-4">
                    Salary Range
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Period <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="salaryType"
                        value={formData.salaryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select payment period</option>
                        <option value="monthly">Monthly</option>
                        <option value="hourly">Hourly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minimum Salary <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="salaryMin"
                        value={formData.salaryMin}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Monthly / Hourly"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Salary <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="salaryMax"
                        value={formData.salaryMax}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Monthly / Hourly"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Job Description */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="jobSummary"
                    value={formData.jobSummary}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Provide a comprehensive overview of the position..."
                  />
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Key Responsibilities <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {formData.responsibilities.map((resp, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-10 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {index + 1}.
                          </span>
                        </div>
                        <input
                          type="text"
                          value={resp}
                          onChange={(e) =>
                            handleResponsibilityChange(index, e.target.value)
                          }
                          placeholder="Enter responsibility..."
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {formData.responsibilities.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeResponsibility(index)}
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={addResponsibility}
                    className="mt-4 flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Another Responsibility
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Required Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3 mb-4">
                    <input
                      type="text"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addSkill())
                      }
                      placeholder="Type a skill and press Enter"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-6 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>

                  {formData.requiredSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {formData.requiredSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-300"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="hover:text-gray-900"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-md border border-gray-200">
                      <Target className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500 text-sm">
                        No skills added yet
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Work Location */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. San Francisco"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. California"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. United States"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Workplace Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="workplaceAddress"
                    value={formData.workplaceAddress}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Enter the complete workplace address"
                  />
                </div>

                {formData.workplaceAddress && (
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Location Preview
                    </label>
                    <div className="w-full h-80 bg-gray-100 rounded-md overflow-hidden border border-gray-300">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                          formData.workplaceAddress
                        )}&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Job Location Map"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                className={`flex items-center px-5 py-2.5 rounded-md font-medium ${
                  step === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                disabled={step === 1}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center px-6 py-2.5 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Post Job
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}