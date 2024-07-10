
import React,{useState} from "react";
import { FaUserTie } from "react-icons/fa";
import Modal from "../../components/Modal";

const Testimonial = ({ name, profile,designation,testimonial }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal =()=>{
    setIsModalOpen(true)
   }

  return (
    <li className="testimonials-item"> 
      <div className="content-card" data-testimonials-item onClick={openModal}>
        <figure className="testimonials-avatar-box">
          <FaUserTie style={{color:"rgb(245, 162, 49)", fontSize:"45"}} />
        </figure>
        <h4 className="h4 testimonials-item-title" data-testimonials-title>{name}</h4>
        <div className="testimonials-text" data-testimonials-text>
          <p>{testimonial}</p>
        </div>
      </div>
     {
     isModalOpen && <Modal name={name} profile={profile} designation={designation} testimonial={testimonial} setIsModalOpen={setIsModalOpen}/>
     }

    </li>
  );
}

export default Testimonial;