import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { BeatLoader } from "react-spinners";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
  


function Home() {
  const [currentProjects, setCurrentProjects] = useState(0);
  const [typingText, setTypingText] = useState(""); // Store typing text

  // function BoyModel() {
  //   const { scene } = useGLTF(`${process.env.PUBLIC_URL}/boy_model.glb`);
  //   return <primitive object={scene} scale={1.5} />;
  // }

  

  useEffect(() => {
    // Animate Projects Completed Counter
    const targetProjects = 5;
    let count = 0;

    const interval = setInterval(() => {
      if (count < targetProjects) {
        count++;
        setCurrentProjects(count); // Update state
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Typing Animation Logic
    const typingTexts = ["Developer", "Designer", "BCA Student"];
    let index = 0;
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < typingTexts[index].length) {
        setTypingText(typingTexts[index].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 200);
      } else {
        setTimeout(() => {
          setTypingText(""); // Clear the text before starting next word
          charIndex = 0;
          index = (index + 1) % typingTexts.length;
          typeText();
        }, 1000);
      }
    };

    typeText();
  }, []);


  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Retrieve credentials from localStorage
    const storedUserId = localStorage.getItem("userId");
    const storedPassword = localStorage.getItem("password");

    if (storedUserId && storedPassword) {
      setUserId(storedUserId);
      setPassword(storedPassword);
    }
  }, []);


  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(true); // Hide loader after 3 seconds
  }, 3000);
}, []);


  return (
    <>
    <div className="loder">
    <BeatLoader
  color="#246ccc"
  margin={2}
  size={15}
/>
    </div>
      <section id="Home" className="mainContant">
        <div className="mainDiv">
          <h1 className="mainH" >Hi, I'm Durgesh Patidar</h1>
          <span id="typing-animation">{typingText}</span>
          <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 className="nameutoLogin">Hii, <span id="PortFoiloJII">{userId}</span> Welcome to my portfolio! <br />Here, you'll find a showcase of my skills, projects, and experiences that reflect my passion and expertise.
</h2>
      {/* <p>Your stored password: {password}</p> */}
    </div>

     {/* <div style={{ width: "100vw", height: "100vh" }}> 
          <Canvas camera={{ position: [0, 2, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <BoyModel />
            <OrbitControls />
          </Canvas>
        </div>
          Projects Completed Counter */}
          <h2 id="ProjectNumber">
            Projects Completed: {currentProjects}
          </h2>

          {/* Progress Bars */}
          <div className="progress-container">
            <div className="progress-bar" data-percent="80"></div>
          </div>

         
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
            <li><a href="tech" className="hover:text-gray-300">
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

export default Home;

