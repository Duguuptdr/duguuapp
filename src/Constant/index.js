import {
    // mobile,
    // backend,
    // web,
    // fullstack,
    javascript,
    // java,
    html,
    // css,
    // reactjs,
    // ubuntu,
    // tailwind,
    // mysql,
    // linux,
    // git,
    // samaritans,
    // oist,
    // nextinnovation,
  Cognizant,
    // internshala,
    // linkedin,
    // hackerrank,
    // karate,
    // portfolio,
    // pglife,
    // sortingvisualiser,
    aws,
    MyPortfolio,
    // schoollogo,
    // reactnative,
    // CDGI,
    // Eminent,
    // DPS,
  } from "../assests/tech";


  import { linkedin } from "../assests/tech";
  import { hackerrank } from "../assests/tech"; 
  import { internshala } from "../assests/tech";
import { karate } from "../assests/tech";  

import   { Clg } from "../assests/tech";
import { saraswati} from "../assests/tech";
import { Project1 } from "../assests/tech";
import { Project2 } from "../assests/tech";
import { devloper1 } from "../assests/tech";








const education = [
    // {
    //   title: "Bachelor of Computer Applications",
    //   company_name: "CHAMELI DEVI GROUP OF INSTITUTIONS, Indore",
    //   icon: CDGI,
    //   iconBg: "#fff",
    //   date: "2022-2024",
    //   points: [
    //     "Courses undertaken: Web Devlopments, React.js,  Computer Programing,  Internet of Things.",
    //     "Percentage:85%",
    //   ],
    // },
    {
      title: "Bachelor of Computer Applications",
      company_name: "Government Nirbhay Singh Patel Science College Indore",
      icon: Clg,
      iconBg: "#fff",
      date: "2024-2025",
      "points": [
        "Courses undertaken: Computer Fundamentals and Architecture,",
        "Programming Methodology and Data Structure,", "Operating System,","Discrete Mathematics, ","Web Designing",
        "Fist Year Runing"
      ],
    },
    {
      title: "Higher Secondary",
      company_name: "Sarswati Shishu Vidya Mandir H.S.School,Karnawad,Dewas,(M.P)",
      icon: saraswati,
      iconBg: "#fff",
      date: "2023-2024",
      "points": [
        "Courses undertaken: ECONOMICS,",
        "ACCOUNTANCY,", "BUSINESS STUDIES,",
      ],
    },
    {
      title: "Senior Secondary",
      company_name: "Sarswati Shishu Vidya Mandir H.S.School,Karnawad,Dewas,(M.P)",
      icon: saraswati,
      iconBg: "#fff",
      date: "2021-2022",
      points: [
        "Courses undertaken: Science, Social Studies, English and Mathematics.",
       
      ],
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
  
    // {
    //   name: "React Native",
    //   icon: reactnative,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant Technology Solutions",
      // icon: Cognizant,
      iconBg: "#fff",
      date: "May 2024 - present",
      points: [
        "Achieved ServiceNow Certified Risk and Compliance certification.",
        "Specialized in GRC/IRM (Governance, Risk, and Compliance/Integrated Risk Management) within ServiceNow, gaining hands-on experience in this product line.",
      ],
    },
    {
      title: "Intern",
      company_name: "Cognizant Technology Solutions",
      // icon: Cognizant,
      iconBg: "#fff",
      date: "Dec 2023 - Apr 2024",
      points: [
        "Internship at Cognizant focused on ServiceNow domain.",
        "Achieved ServiceNow Certified System Administrator and ServiceNow Certified Application Developer certifications.",
        "Specialized in GRC/IRM (Governance, Risk, and Compliance/Integrated Risk Management) within ServiceNow, gaining hands-on experience in this product line.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Next Innovation Technology",
      // icon: nextinnovation,
      iconBg: "#fff",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Developed a web application using HTML, CSS, Javascript, PHP, and Bootstrap for the client.",
        "Designed user-friendly UI/UX with responsive designs to make it easy for users to navigate through the website. ",
        "Designed various different websites with responsive designs and dynamic content. ",
      ],
    },
    // {
    //   title: "Campus Ambassador Intern: WFH",
    //   company_name: "Internshala",
    //   icon: internshala,
    //   iconBg: "#1294C8",
    //   date: "Apr 2021 - Jun 2021",
    //   points: [
    //     "Raised awareness about Internshala across the entire campus.",
    //     "Encouraged students to explore Internshala training programs and internships.",
    //     "Motivated students to enhance their skills by utilizing the opportunities provided by Internshala.",
    //     "I stood 279 out of 21,963 students selected from different colleges across India",
    //   ],
    // },
  ];
 
  const extracurricular = [
    {
      title: " Connections on LinkedIn",
      type: "Achievements",
      icon: linkedin,
      iconBg: "#007BB5",
      date: "April 2023",
      points: ["Credential ID: Durgesh Patidar"],
      credential: "linkedin.com/in/durgesh-patidar-71134b30b",
    },
    {
      title: "Html,  CSS,  Reactjs",
      type: "Certification",
      icon: hackerrank,
      iconBg: "#050C18",
      date: "2022-2023",
      points: [
        "Credential ID: aac000e38dc9",
        "Credential ID: a274bb1292eb",
        "Credential ID: b024370fa737",
      ],
      credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
    },
    {
      title: "Web Development-Internshala",
      type: "Certification",
      icon: internshala,
      iconBg: "#1294C8",
      date: "Sept 2021",
      points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
      credential:
        "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
    },
    // {
    //   title: "Combat Sport-Karate",
    //   type: "Extracurricular(Hobby)/Combat Sport",
    //   icon: karate,
    //   iconBg: "#CCCFD8",
    //   date: "2006-2020",
    //   points: [
    //     "State level Gold medalist in Kumite.",
    //     "Renshi Cup National Championship Bronze medalist in Kumite.",
    //   ],
    // },
  ];
  
  const projects = [
    {
      name: "Figma Project",
      description:
      "A Figma Project created using Figma, HTML, CSS, JS, and Bootstrap 4.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstarp",
          color: "blue-text-gradient",
        },
      ],
      image: Project1,
      source_code_link: "https://github.com/Duguuptdr/project1.git",
      live_project_link: "https://duguuptdr.github.io/project1/",
    },
    {
      name: "RatherApp",
      description:
        "A clone website created using HTML, CSS, JS, and Bootstrap 4.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: Project2,
      source_code_link: "https://github.com/Duguuptdr/project2.git",
      live_project_link: "https://duguuptdr.github.io/project2/index.html",
    },
    {
      name: "My.PortFolio",
      description:
        "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: devloper1,
      source_code_link:
        "https://github.com/mohitrajput2002/sorting-visualizer-project.github.io.git",
      live_project_link: "https://sorting-visuallizer.netlify.app/",
    },
  ];
  
  export {
    technologies,
    experiences,
    extracurricular,
    projects,
    education,
  }; // backend,