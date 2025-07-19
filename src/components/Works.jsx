import React, {useState, useEffect  } from "react";
import { projects } from "../Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";  
import { Link } from "react-router-dom";

function Works() {

useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
      offset: 100, // Distance before triggering animation
      delay: 200, // Delay before animation starts
      easing: "ease-in-out", // Type of easing
    });

    AOS.refresh(); // Refresh AOS on component mount
  }, []);

  // console.log("projects",projects)

  // const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  //   const handleMouseMove = (event) => {
  //     const rect = event.currentTarget.getBoundingClientRect();
  //     const x = (event.clientX - rect.left - rect.width / 2) / 10;
  //     const y = (event.clientY - rect.top - rect.height / 2) / 10;
      
  //     setOffset({ x: -x, y: -y }); // Move opposite to cursor
  //   };
  
  //   const handleMouseLeave = () => {
  //     setOffset({ x: 0, y: 0 });
  //   };


  return (
    <>
      <section id="Works" className="projects-section">
        <div className="titleWOrk">
        <h2 className="section-title">My Work</h2>
        <h1 className="projects-heading">Projects.</h1>
        <p className="projects-description">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </p>
        </div>
        <div className="projects-container">
          {/* Project Card 1 */}
          {/* From Uiverse.io by Sashank02 */}
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">Duguu</span> on{" "}
              <span className="date">####</span>
            </p>
          </div>

          {/* Project Card 2 */}
          {/* From Uiverse.io by Sashank02 */}
          <div className="card">
            <div className="card-image1"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">Duguu</span> on{" "}
              <span className="date">#####</span>
            </p>
          </div>

          {/* Project Card 3 */}
          {/* From Uiverse.io by Sashank02 */}
          <div className="card">
            <div className="card-image2"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">Duguu</span> on{" "}
              <span className="date">#####</span>
            </p>
          </div>
        </div>
      </section>

      <section className="project">
        <div className="WorkProject">
          <h2 className="headWork" data-aos="zoom-in"> <span className="workspan">My work</span> Projects.</h2>
          <div className="vertical-timeline">
          <div className="flex flex-wrap gap-4 p-4 Dg_div">
            {projects.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                {/* <div
                  className="StudyBox transition-transform duration-300"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                > */}
                  <div className="StudyBox" data-aos="fade-up">
                  {/* <img src={Congnizant} alt="Cognizant" className="w-16 h-16" /> */}
                  <p className="mt-2 text-lg font-semibold text-white">
  <img src={tech.image} alt="Technology" className="w-16 h-16" />
</p>

                  <p className="mt-2 text-lg font-semibold color-white">
                    {tech.name}
                  </p>
                  <p className="mt-2 text-lg font-semibold color-white">
                    {tech.color}
                  </p>
                  <p className="mt-2 text-lg font-semibold" id='StudyHEad' >
                    Description:{tech.description}
                  </p>
                  <p className="mt-2 text-lg font-semibold" id='StudyDate' >
                    <Link to={tech.live_project_link}>{tech.live_project_link}</Link>
                  </p>
                  <p className="mt-2 text-lg font-semibold" id='StudyTitle' >{tech.name}</p>
                  <p className="mt-2 text-lg font-semibold">
                    <Link to={tech?.source_code_link}>{tech?.source_code_link}</Link>
                  </p>

                  {/* Fixed name */}
                </div>
              </div>
            ))}
          </div></div>
        
        </div>
      </section>

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
                      <li><a href="/home" className="hover:text-gray-300">Home</a></li>
                      <li><a href="/about" className="hover:text-gray-300">About</a></li>
                      <li><a href="/education" className="hover:text-gray-300">Education</a></li>
                      <li><a href="/experience" className="hover:text-gray-300">
                      Experience</a></li>
                      <li><a href="/works" className="hover:text-gray-300">Works</a></li>
                      <li><a href="/tech" className="hover:text-gray-300">
                      Tech</a></li>
                      <li><a href="/extracurricular" className="hover:text-gray-300">Extracurricular</a></li>
                      <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
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

export default Works;
