import React,{useState, useEffect} from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const experience = [
  {
    title: "Software Engineer - Mordor Intelligence",
    date:"Jan, 2022 — Present",
    description: [
                  "Developed RD Pages for the MI official website serving about 50k daily users, utilised EJS for streamlined creation. This pages gives massive lead counts.",
                  "Added Sharing and Embeding options in MI website, from where user can share to social medias and embed code to some website. We can track share and views count on these.",
                  "Significantly improved Core Web Vitals (CWV), maintaining a performance rating of above 80%.",
                  "Developed architecture of CMS-Synapse platform and User Creation part. Here we can create users and manage access for Synapse users.",
                  "Developed Companies Section and Dashboards on Synapse platform, where user can access Hubs and RDs based on the access type.",
                  "Developed Lorien frontend which aimed to build Hubs and provide an intuitive way for the analyst to gather and organize the data. Here we can generate and edit RDs and can download whole RDs along with Table of Content(TOC) in PPT and PDF format.",
                  "Created Market Activities section where we can manage the meta part of RD pages and Created a Robust from from where we can feed media and other data for Hub Landing Page. We can make drafts for these two and Publish them on MI official website as well from Lorien.",
                  "Worked on Fusion Charts, with it's help we are generating different graphs which are being used across different Platforms in Mordor.",
                  "Having experience on working all the core projects demonstrating leadership and teamwork abilities."
                ]
  },
  {
     title:"Intern Full Stack Engineer - Alt Campus",
     date:"Jan, 2021 — Dec, 2021",
     description: [
                   "Completed an intensive Full Stack Development Internship.",
                   "Developed high-performance, responsive web applications using React.JS and Express.JS, showcasing expertise in the MERN stack.",
                   "Deployed projects on platforms like GitHub Pages, Netlify, Vercel, Heroku, and Firebase, ensuring optimal accessibility and functionality, and utilized Git for version control."
                  ]
  }
];

const education = [
  {
    title:"Bachelor Of Technology - IET MJP Rohilkhand University",
    date:"2016 - 2020",
    description:["Scored 81.10%", "Internship in Indian Railways", "Worked on Hybrid Braking System for Electric Vehicles"]
  },
  {
    title:"Intermediate - Sacred Hearts Public School",
    date:"2015 - 2016",
    description: ["Scored 81.50%"]
  },
  {
    title:"High School - JP Public School",
    date:"2013 — 2014",
    description: ["Scored 70.50%"]
  }
];

const Resume = () => {
    const [skills, setSkills] = useState(null);
    useEffect(()=> {
      fetch('data/skills.json').then(res => res.json()).then(data => {
        setSkills(data)
      });
    }, [])

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
          {
            experience?.map((item)=>{
              return <TimelineItem
                       key={item.title}
                       title={item.title}
                       date={item.date}
                       description={item.description}/>
            })
          }
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
          {
            education?.map((item)=>{
              return <TimelineItem 
                        key={item.title}
                        title={item.title}
                        date={item.date}
                        description={item.description}/>
            })
          }
        </ol>

      </div>

 

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {
            skills?.map((skill)=>{
              return <SkillItem key={skill.title} title={skill.title} value={skill.value} />
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Resume;
