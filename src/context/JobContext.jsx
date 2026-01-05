// src/context/JobContext.jsx
import { createContext, useState } from "react";
import { INITIALJOBS } from "../jobDetails/jobCardDetails";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(INITIALJOBS);

  // UPDATE JOB
  const updateJob = (id, updatedData) => {
    setJobs(prev =>
      prev.map(job =>
        job.id === id ? { ...job, ...updatedData } : job
      )
    );
  };

  // DELETE JOB
  const deleteJob = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  // CLOSE JOB
  const closeJob = (id) => {
    setJobs(prev =>
      prev.map(job =>
        job.id === id ? { ...job, jobStatus: "closed" } : job
      )
    );
  };

  return (
    <JobContext.Provider
      value={{ jobs, updateJob, deleteJob, closeJob }}
    >
      {children}
    </JobContext.Provider>
  );
}

  