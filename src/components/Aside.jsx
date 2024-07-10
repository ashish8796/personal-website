import React from "react";
import { useNavigate } from "react-router-dom";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { RiFileDownloadFill } from "react-icons/ri";

const Aside = () => {
  const navigate = useNavigate();
    
  const handleContactButton = ()=>{
       navigate('/contact')
  }


  return (
    <aside className="sidebar !px-4">
        <div className="sidebar-info">
          <figure className="avatar-box">
            {/* <img
              src={"/images/Profile-Pic-Square.png"}
              alt="Abhishek Singh Rathore"
              width="80"
            /> */}
          </figure>

          <div className="info-content text-white">
            <h1 className="name text-center text-wrap font-medium mb-2" title="Ashish Kumar Saini">
              Ashish Kumar Saini
            </h1>

            <p className="title text-lg font-normal w-max py-[3px] px-3 bg-onyx rounded-lg ">Fullstack Developer</p>

          <a   href="/documents/Ashish_Kumar_Saini_Resume.pdf" download={true}>
            <button 
            className="resume-btn" 
            type="submit">
            <RiFileDownloadFill/>
            <span>
              Resume
            </span>
          </button>
          </a>
          </div>

          <button className="info_more-btn" data-sidebar-btn  onClick={handleContactButton}>
            <span>Show Contacts</span>
           <GiClawSlashes />
            
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title text-[14px]">Email</p>

                <a href="mailto:ashishsaini.ak@gmail.com" className="text-white text-[14px]">
                  ashishsaini.ak@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="text-white text-[14px]">
                  +91-7500762013
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23" className="text-white text-[14px]">October 16, 1996</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info text-white text-[14px]">
                <p className="contact-title">Location</p>

                <address className="not-italic">Sambhal, U.P. India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside;