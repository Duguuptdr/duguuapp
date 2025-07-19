import React from 'react';
import { technologies } from '../Constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact , faHtml5,faCss3Alt , faGitAlt,faGithub,faJs,faBootstrap,faFigma, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { 
  faReact, 
  faHtml5, 
  faCss3Alt, 
  faGitAlt, 
  faGithub,  // Keep only one
  faJs, 
  faBootstrap, 
  faFigma, 
  faLinkedin, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";

  
function Tech() {
  return (
    <>
    <div className="heedTech">
          <h2 className='cardedh2'>skills</h2>
         <div className="carded">
  <ul>
    <div className="duguuRam">
    <div className="ramicon">
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
     
        <svg
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
          >
         <FontAwesomeIcon icon={faReact} color="#66FCF1"  />
           </svg>
         
      <div className="text">React</div>
    </li><br />
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
   <FontAwesomeIcon icon={faHtml5} color="#66FCF1"  />
          </svg>
      
      <div className="text">Html</div>
    </li><br />
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
         <FontAwesomeIcon icon={faCss3Alt } color="#66FCF1"  /> </svg>
      
      <div className="text">Css</div>
    </li>
    </div>

<div className="twoicon">
<li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <FontAwesomeIcon icon={ faGitAlt} color="#66FCF1" />
          </svg>
      
      <div className="text">Git</div>
    </li><br />
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
              <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
           <FontAwesomeIcon icon={faGithub} color="#66FCF1" />  </svg>
      
      <div className="text">Github</div>
    </li>
</div>

    <div className="durgeshicon">
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <FontAwesomeIcon icon={faJs}  color="#66FCF1"  />  </svg>
      <div className="text">Java Script</div>
    </li><br />
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
         <FontAwesomeIcon icon={faBootstrap} color="#66FCF1" />
          </svg>
      
      <div className="text">Bootstrap</div>
    </li><br />
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
         <FontAwesomeIcon icon={faFigma} color="#66FCF1"  />  </svg>
      
      <div className="text">Figma</div>
    </li>
    </div></div>
  </ul></div>
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
                <li><a href="/home" className="hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/education" className="hover:text-gray-300">Education</a></li>
                <li><a href="/experience" className="hover:text-gray-300">
                Experience</a></li>
                <li><a href="/works" className="hover:text-gray-300">Works</a></li>
                <li><a href="/tech" className="hover:text-gray-300">
                Tech</a></li>
                <li><a href="/extracurriclar" className="hover:text-gray-300">Extracurricular</a></li>
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

export default Tech;
