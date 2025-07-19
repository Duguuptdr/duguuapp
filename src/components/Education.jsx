import React, { useState, useEffect } from "react"; // ✅ Import useEffect
import { education } from "../Constant";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";  

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
      offset: 100, // Distance before triggering animation
      delay: 200, // Delay before animation starts
      easing: "ease-in-out", // Type of easing
    });

    AOS.refresh(); // Refresh AOS on component mount
  }, []); // ✅ Empty dependency array to run once on mount

  return (
    <>
      <div className="EducationBox" id="Education">
        <h2 className="EducationBack_ground" data-aos="zoom-in" >
          "My Educational Background and Qualifications"
        </h2>
        <div className="vertical-timeline">
          <div className="vertical-timeline-element-icon"></div>
          <div className="vertical-timeline-element-school"></div>
          <div className="vertical-timeline-element-school-haire"></div>
          <div className="flex flex-wrap gap-4 p-4 Dg_div">
            {education.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div className="StudyBox"  data-aos="fade-up">
                  <img
                    src={tech.icon}
                    alt={tech.company_name}
                    className="w-20 h-20 object-cover rounded-full mb-4"
                  />
                  <p className="mt-2 text-lg font-semibold" id="StudyHEad">
                    {tech.company_name}
                  </p>
                  <p className="mt-2 text-lg font-semibold" id="StudyDate">
                    {tech.date}
                  </p>
                  <p className="mt-2 text-lg font-semibold" id="StudyTitle">
                    {tech.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold" id="StudyED">
                    {tech.points}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 <div className="boxrow"><div className="rowbox"></div></div>
          
          <section className="footermain">
          <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1: Branding */}
            <div>
              <h2 className="text-2xl font-bold">My.Portfolio</h2>
              <p className="text-gray-400 mt-2">Creative Developer & Designer</p>
            </div>
    
            {/* Column 2: Navigation */}
            <div className="navgitget" >
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="mt-2 space-y-2">
              <li><a href="/Home" className="hover:text-gray-300">Home</a></li>
                <li><a href="/About" className="hover:text-gray-300">About</a></li>
                <li><a href="/Education" className="hover:text-gray-300">Education</a></li>
                <li><a href="/Experience" className="hover:text-gray-300">
                Experience</a></li>
                <li><a href="/Works" className="hover:text-gray-300">Works</a></li>
                <li><a href="/Tech" className="hover:text-gray-300">
                Tech</a></li>
                <li><a href="/Extracurricular" className="hover:text-gray-300">Extracurricular</a></li>
                <li><a href="/Contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
    
            {/* Column 3: Social & Contact */}
            <div className="footercontact">
              <h3 className="text-lg font-semibold">Connect with Me</h3>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="fontwossom" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color:"#fff"}} /></a>
                <a href="#" className="fontwossom" aria-label="GitHub"><FontAwesomeIcon icon={faGithub}  style={{color:"#fff"}}/>
                </a>
                <a href="#" className="fontwossom" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter}  style={{color:"#fff"}}/>
                </a>
              </div>
               <p className="text-gray-400 mt-4">duguuptdr22@gmail.com</p>
                    <p className="text-gray-400">indore, india</p>
            </div>
          </div>
    
          {/* Copyright Section */}
          <div className="text-center text-gray-500 mt-6 text-sm">
            © 2025 My.portfolio Designed and Developed By Durgesh Patidar All Rights Reserved.
          </div>
        </footer>
          </section>

    </>
  );
}

export default Education;
