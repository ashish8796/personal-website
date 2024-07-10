import { useEffect, useState } from "react"
import { FaAward } from "react-icons/fa6";
import Testimonial from "./Testimonial";
import Service from "./Service";
import Gallery from "./Gallery";

const servicesData = [
  {
    icon: "/images/Web-Design.svg",
    title: "Frontend Web Development",
    description: "The most modern and high-quality design and development at a professional level."
  },
  {
    icon: "/images/API.svg",
    title: "Backend Web Development",
    description: "High-quality and secure API and SSR app development at the professional level."
  },
  {
    icon: "/images/Mobile.svg",
    title: "Mobile App Development",
    description: "Professional development of applications for iOS and Android using React Native."
  },
  {
    icon: "/images/CWV.svg",
    title: "Core Web Vitals and SEO",
    description: "Keeps knowledge about CWV and SEO to improve performance and indexing."
  }
];

const awardsData = [
  {
    title: "High-Five Award",
    description: "For quarter July-September of 2023, I got High-Five award from Mordor Intelligence."
  },
  {
    title: "High-Five Award",
    description: "For quarter April-June of 2023, I got High-Five award from Mordor Intelligence."
  },
  {
    title: "Extra-Miler Award",
    description: "For quarter October-December of 2022, I got High-Five award from Mordor Intelligence."
  },
  {
    title: "IV Rank",
    description: "Got IV rank in Hackathon conducted by Github and Incubate India in June 2021."
  }
];

const About = () => {
  const [testimonials , setTestimonials ] = useState([]);

  useEffect(()=> {
    fetch('data/testimonials.json').then(res => res.json()).then(data => {
      setTestimonials(data)
    });
  }, [])

  return (
    <article className="about active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p style={{fontSize:"16px", fontStyle:"italic", fontWeight:"bold"}}>
         Hey there !
      </p>
      <p>
      I'm Ashish Kumar Saini, a passionate Fullstack Developer from Sambhal, India, specializing in the MERN Stack and modern web technologies. Currently,
      I'm making strides in web development at Gutes Leben, where I've been instrumental in projects like App, CMS, and the backend.
      </p>
      <p>
      I thrive on transforming complex challenges into elegant solutions with intuitive and visually appealing designs.
      My goal is to develop websites that are not only functional and user-friendly but also aesthetically pleasing.
      By adding a personal touch, I ensure your product stands out and is easy to navigate.
      </p>
      <p>
      My mission is to effectively communicate your message and identity through creative and innovative web solutions. 
      Let's connect and bring your ideas to life!
      </p>

    </section>

    {/* <section className="gallery-section">
      <Gallery/>

      <div  className="gallery-text">
     <p> When I'm not coding, I'm exploring the great outdoors. 
      Trekking and mountaineering are my passions, offering a fresh perspective and the thrill of overcoming new challenges—parallels to the problem-solving I love in software development.
      </p>

     <p> Gadgets are another interest of mine, merging my enthusiasm for cutting-edge technology with the joy of adventure.
       Whether it's navigating rugged trails or cruising through city streets, I embrace the blend of innovation and excitement.
       </p>

     <p>  There's nothing quite like the tranquility of watching a sunrise or sunset. 
      These moments of peace and reflection recharge my spirit, fueling my creativity and drive for my next tech project.
      </p>
      </div>
    </section> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>

    {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => {

          return <Testimonial
              key={index}
              name={testimonial.name}
              profile={testimonial.profile}
              designation={testimonial.designation}
              testimonial={testimonial.testimonial}
            />
      })}

      </ul>

    </section> */}

    {/* <section className="clients">

      <h3 className="h3 clients-title">Achievements</h3>

      <ul className="clients-list has-scrollbar">

        { awardsData.map((award, index)=>{
           return <li className="award">
              
           <h1>{award.title}</h1>
           <p>{award.description}  </p>

           <div className="award-icon-container">
             <FaAward style={{color:"#F5A231", fontSize:"26px"}}/>
           </div>
         </li>
        })

        }

      </ul>

    </section> */}

  </article>
  )
}

export default About