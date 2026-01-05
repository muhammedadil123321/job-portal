import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* Layouts */
import UserLayout from "../src/layouts/UserLayout";
import AuthLayout from "../src/layouts/AuthLayout";
import EmployerLayout from "../src/layouts/EmployerLayout";

/* User or job seeker Pages  */
import Home from "./pages/User/Home";
import About from "./pages/User/About";
import FindJob from "./pages/User/FindJob";


/* Auth Pages */
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ViewJobDetails from "./pages/User/ViewJobDetails";

import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import PostJob from "./pages/Employer/PostJob";
import ManageJobs from "./pages/Employer/ManageJobs";
import Candidates from "./pages/Employer/Candidates";
import Profile from "./pages/Employer/Profile";
import ViewPostJobDetails from "./pages/Employer/ViewPostJobDetails";
import EditPostJob from "./pages/Employer/EditPostJob";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Routes>

        {/* AUTH ROUTES (no navbar/footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* USER ROUTES (with navbar/footer) */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findjob" element={<FindJob />} />
         <Route path="/view-job/:id" element={<ViewJobDetails />} />
        </Route>

        {/* Emplyer ROUTES (with navbar/footer) */}
        <Route path="/employer" element={<EmployerLayout />}>
        
          <Route index element={<EmployerDashboard />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route path="/employer/manage-jobs" element={<ManageJobs />} />
          <Route path="/employer/applicants" element={<Candidates />} />
          <Route path="/employer/company-profile" element={<Profile />} />
           {/* <Route path="/employer/manage-jobs/view-job/:id" element={<ViewPostJobDetails/>} /> */}
            <Route path="manage-jobs/view-job/:id" element={<ViewPostJobDetails />} />
            <Route path="manage-jobs/edit-job/:id" element={<EditPostJob />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
