import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, ValidationError } from '@formspree/react';
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Earth 3D Component
const Earth3D = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg");

    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "relative" }} />;
};

// Contact Form Component
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwpbkevj");
  const [message, setMessage] = useState("");

  const handleNavigation = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setMessage("Form submitted successfully! ✅");
    setTimeout(() => {
      setMessage("");
    }, 1000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 200,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <div className="contactDAta">
        <div style={{ display: "flex", height: "100%", width: "100%", margin: "0 auto" }}>
          {/* Contact Form */}
          <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <section id="Contact" data-aos="fade-right">
              <form className="formd" onSubmit={handleNavigation}>
                <p className="titled">Contact</p>

                <div className="flexd">
                  <label>
                    <input className="inputd" type="text" name="firstName" required />
                    <span>Firstname</span>
                  </label>
                  <label>
                    <input className="inputd" type="text" name="lastName" required />
                    <span>Lastname</span>
                  </label>
                </div>

                <label>
                  <input className="inputd" type="email" name="email" required />
                  <span>Email</span>
                </label>

                <label>
                  <input className="inputd" type="tel" name="phone" required />
                  <span>Mobile Number</span>
                </label>

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button className="submitd" type="submit" disabled={state.submitting}>
                  Submit
                </button>
                {message && <p className="text-green-600 text-lg">{message}</p>}

                <p className="pContact">
                  Copyright © 2024 <span id="portCont"> My.Portfolio</span> Designed and Developed by{" "}
                  <span id="portCont">Durgesh Patidar.</span>
                </p>
              </form>
            </section>
          </div>

          {/* Earth 3D */}
          <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }} data-aos="zoom-in">
            <Earth3D />
          </div>
        </div>
      </div>

      <div className="boxrow">
        <div className="rowbox"></div>
      </div>

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
                <li><a href="/Home" className="hover:text-gray-300">Home</a></li>
                <li><a href="/About" className="hover:text-gray-300">About</a></li>
                <li><a href="/Education" className="hover:text-gray-300">Education</a></li>
                <li><a href="/Experience" className="hover:text-gray-300">Experience</a></li>
                <li><a href="/Works" className="hover:text-gray-300">Works</a></li>
                <li><a href="/Tech" className="hover:text-gray-300">Tech</a></li>
                <li><a href="/Extracurricular" className="hover:text-gray-300">Extracurricular</a></li>
                <li><a href="/Contact" className="hover:text-gray-300">Contact</a></li>
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
};

// Final Export
const Contact = () => <ContactForm />;
export default Contact;
