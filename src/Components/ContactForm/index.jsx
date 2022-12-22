import React from "react";
import { useState } from "react";
import "./ContactForm.scss"

const ContactForm = () => {
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const myForm = e.target;
        const formData = new FormData(myForm);
    
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(Object.fromEntries(formData)).toString(),
        })
          .then(() =>{
            setDisplayForm(false);
                    setEmailSent(true)
          } )
          .catch((error) => {
            console.log(error);
            setEmailSent(false);
            setDisplayForm(true)
          } );

    }
    return(
        <section className="container__contactForm">
            <div className="container__contactForm-description">
                <h4>Contact us</h4>
                <h2>LET'S WORK TOGETHER</h2>
                <p>You want to get in touch?<br/>You're welcome to contact us via this form for any inquiries related to A.C. Ventures. We will be glad to hear from you and we'll make sure to get back to you as soon as possible. <br/></p>
            </div>
            {(displayForm && emailSent === false) ? (
            <form name="contact" onSubmit={handleSubmit} method="POST" data-netlify="true" netlify>
                <input type={"text"} placeholder={"First Name"} name="name" required/>
                <input type={"text"} placeholder={"Last Name"} name="lastName" required/>
                <input type={"email"} placeholder={"Your Email"} name="email" required/>
                <input type={"tel"} placeholder={"Phone Number"} name="tel" />
                <input type={"text"} placeholder={"Subject"} name="subject" />
                <textarea name="message" id="" cols="30" rows="10" placeholder={"Your Message"} required></textarea>
                <button className="submit-btn" type="submit"><span>Send the message</span><img src="/assets/icons/Union.svg" alt="Arrow going right" /></button>
                <input type="hidden" name="form-name" value="contact" hidden />
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
