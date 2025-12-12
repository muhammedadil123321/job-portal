import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import About from './pages/About';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import FindJob from './pages/FindJob';


const App = () => {
  const location = useLocation(); // ← detect current route

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  // Check if current path is /auth
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className='overflow-x-hidden scroll-smooth'>

      {/* Hide Navbar on /auth */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findjob" element={<FindJob/>}/>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Hide Footer on /auth */}
      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
