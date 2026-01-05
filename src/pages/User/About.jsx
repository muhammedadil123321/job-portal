import React, { useState, useEffect, useRef } from "react";
import { Target, Eye, Award, Users, Briefcase, Building2 } from "lucide-react";

const About = () => {


  
  // Counter animation component with easeOut effect
  const AnimatedCounter = ({ target, duration = 2000, className = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        },
        { threshold: 0.1 }
      );
  
      if (countRef.current) {
        observer.observe(countRef.current);
      }
  
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let startTime;
      let animationFrame;
  
      // EaseOut cubic function for smoother animation
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Apply easing function
        const easedProgress = easeOutCubic(progress);
  
        if (progress < 1) {
          setCount(Math.floor(target * easedProgress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
  
      animationFrame = requestAnimationFrame(animate);
  
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isVisible, target, duration]);
  
    useEffect(() =>{
      window.scrollTo(0,0);
      console.log("hello");
    },[])
    return (
      <p ref={countRef} className={`font-bold ${className}`}>
        {count.toLocaleString()}
      </p>
    );
  };

  const aboutcontent = [
    {
      title: "Our Mission",
      paragraph:
        "To bridge the gap between local job seekers and employers by providing a simple, fast, and reliable platform for daily wage and part-time employment opportunities.",
      icon: Target,
    },
    {
      title: "Our Vision",
      paragraph:
        "To become India's leading job portal for local and flexible work, empowering workers to earn with dignity and employers to find trusted talent instantly.",
      icon: Eye,
    },
    {
      title: "Our Values",
      paragraph:
        "Trust, Transparency, Speed, and Accessibility. We believe in supporting real people with real opportunities and creating meaningful employment connections.",
      icon: Award,
    },
  ];

  const JOBSOVERALL = [
    { icon: Briefcase, count: 25, title: "Jobs", gradient:"from-green-600 to-green-900 "},
    { icon: Users, count: 256, title: "Workers" , gradient:"from-teal-600 to-teal-900" },
    { icon: Building2, count: 256, title: "Employers" ,gradient:"from-gray-600 to-gray-900",}
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div  className="relative flex justify-center items-center w-full bg-cover bg-center bg-no-repeat bg pt-32 pb-24 bg-[url('src/assets/images/bgimage1.jpg')]">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-center text-white/95 max-w-2xl mx-auto">
            Connecting Local Talent with Opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* About Our Earnease Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            About Our Earnease
          </h2>

          {/* Image and Description Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Image */}
            <div
              className="rounded-lg h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://learnenglishteens.britishcouncil.org/sites/teens/files/field/image/RS9447_GettyImages-1326171173-hig.jpg')",
              }}
            ></div>

            {/* Right Side - Description */}
            <div>
              <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-4">
                Your Local Job Connection Platform
              </h3>
              <p className="font-poppins text-md md:text-lg text-gray-800 leading-relaxed mb-3 text-justify">
                Earnease helps local workers find quick part-time, daily, and
                short-term jobs based on their skills, availability, and
                location. Workers can easily explore nearby opportunities and
                start earning without long registration or waiting periods.
              </p>

              <p className="font-poppins text-md md:text-lg text-gray-800 leading-relaxed mb-6 text-justify">
                Employers can post jobs instantly and hire workers when needed,
                whether it's for shops, cafés, delivery, household tasks,
                events, or seasonal work. Our platform makes hiring faster,
                simpler, and more reliable for every business or individual.
              </p>

             <div className="hidden md:flex max-w-xl mx-auto w-full flex-wrap gap-5 justify-start">
                {JOBSOVERALL.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative group flex items-center gap-4 px-6 py-5 rounded-2xl  hover:shadow-xl transition-all duration-300 shadow-sm  overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className={`relative z-10 bg-linear-to-br ${item.gradient} p-3 rounded-xl shadow-md`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="relative z-10 ">
                      <AnimatedCounter target={item.count} duration={2000} className="text-2xl text-gray-900" />
                      <p className="text-sm text-gray-700 font-semibold font-poppins">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aboutcontent.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg p-8"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
      <div className="relative  rounded-lg shadow-lg  p-12 text-center">

  {/* Content */}
  <div className="relative z-10">
    <h3 className="font-outfit text-2xl md:text-3xl font-bold text-black mb-4">
      Ready to Get Started?
    </h3>

    <p className="font-poppins text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
      Whether you're looking for work or need to hire, Earnease makes it simple
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

      {/* Find Jobs Button (Black Border White Background) */}
      <button className="  font-semibold px-8 py-3 rounded-sm bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 cursor-pointer">
        <span>Find Jobs</span>
      </button>

      {/* Post a Job Button (Black background) */}
      <button className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-sm hover:bg-blue-800 transition-all duration-300 cursor-pointer">
        <span>Post a Job</span>
      </button>

    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default About;