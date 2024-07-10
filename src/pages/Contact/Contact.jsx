import React, {useState, useEffect} from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast} from 'react-toastify';
import emailjs from '@emailjs/browser';
import { FaSquareWhatsapp,FaSquareGithub,FaSquareXTwitter,FaLinkedin} from "react-icons/fa6";



const Contact = () => {
    const [contacts, setContacts] = useState(null)
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
      fetch('data/contacts.json')
        .then(response => response.json())
        .then(data => {
          setContacts(data);
        })
        .catch(error => console.error('Error loading contacts data:', error));
    }, []);

    const handleInput= (event)=>{
      const {name, value} = event.target;
      if(name === "user_name"){
        setUserName(value);
      }else if(name === "user_email"){
        setUserEmail(value);
      }else if(name === "message"){
        setMessage(value);
      }
    }

  const sendEmail = (event) => {
    event.preventDefault();
     if(userName == "" ||  userEmail == "" || message == ""){
      toast.warn("Please fill all the fields.", {
        position: "top-center",
        autoClose:5000,
        theme:'dark'
      });
      return;
     }

    let  service_id= import.meta.env.VITE_MAILJS_SERVICE_ID
    let  template_id= import.meta.env.VITE_MAILJS_TEMPLATE_ID
    let  public_key= import.meta.env.VITE_MAILJS_PUBLIC_KEY

    let  template_params= {
      'user_name': userName,
      'user_email': userEmail,
      'to_name': 'Abhishek Singh Rathore',
      'message': message
    }

    emailjs.send(service_id, template_id, template_params, public_key)
           .then(() => {
                ('REQUEST SUCCESS !');
                toast.success("Message sent successfully !", {
                  position: "top-center",
                  autoClose:5000,
                  theme:'dark'
                });
            })
            .catch((error) => {
                console.error('REQUEST FAILED !');
                toast.error("Something went wrong !", {
                  position: "top-center",
                  autoClose:5000,
                  theme:'dark'
                });
        }).finally(()=>{
          setUserName("");
          setUserEmail("");
          setMessage("");
        })
  }

  return (
    <section className="contact" data-page="contact">

      <header>

        <h2 className="h2 article-title">Contact</h2>

      </header>

      <h3 className="h3 form-title">Explore My Location</h3>

      <section className="mapbox" data-mapbox>
        <figure>
            <iframe src={contacts?.location}
             width="400" height="300" loading="lazy" title="Google Map"referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </figure>

      </section>

      <h3 className="h3 form-title">Get In Touch</h3>
      <section className="contact-box" data-mapbox>
  <h3>Let's Connect on Social Media !</h3>

  <nav className="social-contacts">
   <a href={contacts?.linkedin} target="_blank">
    <FaLinkedin className="social-icons"/>
   </a>
   <a href={contacts?.x} target="_blank">
    <FaSquareXTwitter className="social-icons" />
   </a>
   <a href={contacts?.whatsapp} target="_blank">
   <FaSquareWhatsapp className="social-icons" />
   </a>
   <a href={contacts?.github} target="_blank" >
    <FaSquareGithub className="social-icons" />
   </a>
   </nav>
   <h3>Let's Make Something Amazing Together !</h3>


   <nav>
    <a href={contacts?.email} className="hide-large">
      <button className="contact-button hide-large">
       Mail Me: abhishek.990914@gmail.com  
      </button>
    </a>
    <a href={contacts?.phone} className="hide-large" >
      <button className="contact-button">
      Call Me: +91-9389732668
      </button>
    </a>
  
    <a href={contacts?.email} className="hide-small">
      <button className="contact-button hide-small">
       Mail Me
      </button>
    </a>
    <a href={contacts?.phone} className="hide-small">
      <button className="contact-button">
      Call Me
      </button>
    </a>

   </nav>


   <h3>Want To Know More !</h3>

   <nav>
    <a href="/documents/Abhishek-Singh-Rathore-Resume.pdf" download={true}>
      <button className="contact-button">
        Download Resume
      </button>
    </a>
    <a href="/documents/Abhishek-Singh-Rathore-Resume.pdf" target="_blank">
      <button className="contact-button">
        View Resume
      </button>
    </a>
   </nav>

</section>

<h3 className="h3 form-title">Let's Talk</h3>
      <section className="contact-form">

      

        <form className="form" data-form > 

          <div className="input-wrapper">
            <input 
             type="text" 
             name="user_name" 
             className="form-input" 
             placeholder="Name"
             value={userName} 
             onChange={handleInput}
             required data-form-input />

            <input 
             type="email" 
             name="user_email" 
             className="form-input" 
             placeholder="Email" 
             value={userEmail}
             onChange={handleInput}
             required data-form-input />
             
          </div>

          <textarea 
           name="message" 
           className="form-input" 
           placeholder="Message" 
           value={message}
           onChange={handleInput}
           required data-form-input></textarea>

          <button 
            className="form-btn" 
            type="submit" 
            onClick={sendEmail}
            data-form-btn>
            <FaPaperPlane/>
            <span>
              Send Message
            </span>
          </button>

        </form>
      
      </section>

    </section>
  );
};

export default Contact;
