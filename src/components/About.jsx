import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

function About() {
  const DowanlodResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure this file exists in the public/ folder
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="About" className="sectionAbout">
        <div className="AboutContanir">
          <div className="TextAbout">
            <h1 className="AboutHead">Overview.</h1>
            <p className="Aboutp">
              I'm an aspiring software developer with experience in HTML, CSS, and JavaScript, and expertise in frameworks like React and Bootstrap. I'm a quick learner and strive to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring our ideas to life!
            </p>
            <button className="ResumeButton" type="button" onClick={DowanlodResume}>
              Resume
            </button>
          </div>

          <div className="container">
            <div data-text="Web Devloper" style={{ "--r": "-15" }} className="glass">
              <img src="/web-devlopment.png" alt="Software Developer" id='software' />
            </div>

            <div data-text="Forntend Devloper" style={{ "--r": "5" }} className="glass">
              <img src="/Forntend.png" alt="Software Developer" id='software' />
            </div>

            <div data-text="Backend Devloper" style={{ "--r": "25" }} className="glass">
              <img src="/backend-coding.png" alt="Software Developer" id='software' />
            </div>

            <div data-text="SoftWare Devloper" style={{ "--r": "25" }} className="glass">
              <img src="/coding (1).png" alt="Software Developer" id='software' />
            </div>
          </div>
        </div>
      </section>

      <div className="boxrow"><div className="rowbox"></div></div>

      <section className="footermain">
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold">My.Portfolio</h2>
              <p className="text-gray-400 mt-2">Creative Developer & Designer</p>
            </div>

            <div className="navgitget">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/home" className="hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/education" className="hover:text-gray-300">Education</a></li>
                <li><a href="/experience" className="hover:text-gray-300">Experience</a></li>
                <li><a href="/works" className="hover:text-gray-300">Works</a></li>
                <li><a href="/tech" className="hover:text-gray-300">Tech</a></li>
                <li><a href="/extracurricular" className="hover:text-gray-300">Extracurricular</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            <div className="footercontact">
              <h3 className="text-lg font-semibold">Connect with Me</h3>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="fontwossom" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#fff" }} /></a>
                <a href="#" className="fontwossom" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} style={{ color: "#fff" }} /></a>
                <a href="#" className="fontwossom" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} style={{ color: "#fff" }} /></a>
              </div>
              <p className="text-gray-400 mt-4">duguuptdr22@gmail.com</p>
              <p className="text-gray-400">Indore, India</p>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6 text-sm">
            © 2025 My.portfolio Designed and Developed By Durgesh Patidar All Rights Reserved.
          </div>
        </footer>
      </section>
    </>
  );
}

export default About;
