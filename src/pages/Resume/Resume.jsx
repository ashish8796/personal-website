import React, { useState, useEffect } from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import Skills from "../../components/Skills";

const experience = [
  {
    title: "Full Stack Developer(APP - React Native) - Gutes Leben",
    date: "May, 2023 — Present",
    description: [
      "Upgraded React Native to the latest version and implemented performance optimization techniques, utilizing tools such as Flashlight and react-native-fast-image.",
      "Enhanced app performance by effectively using a combination of memo and useCallback to reduce unnecessary re-renders.",
      "Implemented CI/CD pipelines for the app using Expo EAS builds, streamlining the deployment process and ensuring consistent delivery.",
    ],
    links: [
      {
        title: "Android",
        link: "https://play.google.com/store/apps/details?id=com.gutesleben",
      },
      {
        title: "IOs",
        link: "https://apps.apple.com/in/app/gutes-leben/id1541165124",
      },
    ],
  },
  {
    title: "Full Stack Developer (CMS - Next Js, React Js) - Gutes Leben",
    date: "May, 2023 — Present",
    description: [
      "Migrated the static React app served using Node.js to Next.js 13, leveraging server-side rendering (SSR) and static site generation (SSG) for better performance.",
      "Improved the overall performance of the CMS, resulting in faster load times and better SEO capabilities.",
      "Optimized the architecture of the CMS, enhancing scalability and maintainability.",
    ],
    links: [],
  },
  {
    title:
      "Full Stack Developer (Backend - Node Js, Express Js, MongoDB) - Gutes Leben",
    date: "May, 2023 — Present",
    description: [
      "Developed new APIs to support enhanced functionalities for both the CMS and the mobile app.",
      "Refactored existing large APIs into smaller, significantly improving performance and maintainability.",
      "Successfully migrated the entire system from Azure to AWS, utilizing services such as EC2, S3, Lambda, DocumentDB, and more, to enhance scalability and reliability.",
    ],
    links: [],
  },
  {
    title: "SDE I - Meesho",
    date: "Sep, 2021 — Apr, 2023",
    description: [
      "Built a Mini-Games App from scratch using Next.js and integrated it into the Mobile App community feature using iframe and webview, enhancing user engagement and functionality.",
      "Enabled e-commerce on WhatsApp by extending the add-to-cart feature from WhatsApp to Meesho's website, expanding reach to millions of users and driving significant growth in sales.",
      "Implemented web notifications by integrating Clevertap into the website, improving real-time communication and user experience.",
      "Analyzed and worked with analytics tools such as Mixpanel, Clevertap, and GA4, contributing to data-driven decision-making and strategic planning.",
    ],
    links: [],
  },
  {
    title: "Intern Full Stack Web Developer - Masai School",
    date: "Jan, 2021 — Sep, 2021",
    description: [
      "Completed an intensive Full Stack Development Internship.",
      "Developed high-performance, responsive web applications using React.JS and Express.JS, showcasing expertise in the MERN stack.",
      "Deployed projects on platforms like GitHub Pages, Netlify, Vercel, Heroku, and Firebase, ensuring optimal accessibility and functionality, and utilized Git for version control.",
      "Collaborated in building Masai School platform, contributing to design, development, and enhancement of user-centric features.",
    ],
    links: [],
  },
];

const education = [
  {
    title: "HLD, LLD, System Design - Scaler Academy",
    date: "Feb, 2023 - Present",
    description: [
      "Studying High-Level Design (HLD) to understand the architecture and components of complex systems.",
      "Learning Low-Level Design (LLD) to gain detailed knowledge of system components and their interactions.",
      "Enhancing skills in System Design to create scalable and efficient systems.",
      "Mastering SQL for effective database management and data manipulation.",
      "Improving proficiency in Data Structures and Algorithms (DSA) to solve complex problems efficiently.",
    ],
  },
  {
    title: "Bachelor Of Technology - IET MJP Rohilkhand University",
    date: "2017 - 2020",
    description: [],
  },
];

const Resume = () => {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience?.map((item) => {
            return (
              <TimelineItem
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
                links={item.links}
              />
            );
          })}
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>

          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education?.map((item) => {
            return (
              <TimelineItem
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </ol>
      </div>

      <div className="skill">
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
