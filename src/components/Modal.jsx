import React from "react"
import {FaLinkedin} from "react-icons/fa6";

const Modal = ({name, profile,designation,testimonial, setIsModalOpen})=> {
    return (
      <div className='modalBackground'>
          <div className='modalContainer'>
            <div>
            <cite>
                  {name}
              </cite>

              <a href={profile} target="_blank">
                  <FaLinkedin className="testimonial-icon"/>
              </a>
                
            </div>
            
            <p className="designation">{designation}</p>
          
  
          
  
              <p className="testimonial-text">
                  {testimonial}
              </p>
  
  <p>
  <button onClick={()=>{
            setIsModalOpen(false)
            }}>
              Close
           </button>
  </p>
         
          </div>
  
      </div>
    )
  }

  export default Modal;
