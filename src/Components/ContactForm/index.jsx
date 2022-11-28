import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.scss"

const ContactForm = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k44p1gp', 'template_g3hde9g', form.current, 'umsUa9FrGA1jU2Ck3')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            setDisplayForm(true)
        });
    }
    return(
        <section className="container__contactForm">
            <div className="container__contactForm-description">
                <h4>Contact us</h4>
                <h2>LET'S WORK TOGETHER</h2>
                <p>You want to get in touch?<br/>You're welcome to contact us via this form for any inquiries related to A.C. Ventures. We will be glad to hear from you and we'll make sure to get back to you as soon as possible. <br/></p>
            </div>
            {(displayForm && emailSent === false) ? (
            <form ref={form} onSubmit={sendEmail}>
                <input type={"text"} placeholder={"First Name"} name="user_name" required/>
                <input type={"text"} placeholder={"Last Name"} name="user_lastName" required/>
                <input type={"email"} placeholder={"Your Email"} name="user_email" required/>
                <input type={"tel"} placeholder={"Phone Number"} name="user_tel" />
                <input type={"text"} placeholder={"Subject"} name="user_subject" />
                <textarea name="message" id="" cols="30" rows="10" placeholder={"Your Message"} required></textarea>
                <button className="submit-btn" type="submit"><span>Send the message</span><img src="/assets/icons/Union.svg" alt="Arrow going right" /></button>
            </form>
            ) : (
                <div className="form-thanks">
                <span>Your emails has been sent!<br/>Thanks for reaching out!</span>
            </div>
            )}
            
        </section>
    )
}

export default ContactForm;