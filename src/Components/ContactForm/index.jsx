import React from "react";
import "./ContactForm.scss"

const ContactForm = () => {

    return(
        <section className="container__contactForm">
            <div className="container__contactForm-description">
                <h4>Contact us</h4>
                <h2>LET'S WORK TOGETHER</h2>
                <p>Ideoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt. et exitiale hoc vitium, quod in aliis non numquam intepescit.</p>
            </div>
            <form action="">
                <input type={"text"} placeholder={"First Name"} required/>
                <input type={"text"} placeholder={"Last Name"} required/>
                <input type={"email"} placeholder={"Your Email"}required/>
                <input type={"tel"} placeholder={"Phone Number"} />
                <input type={"country"} placeholder={"Country"} />
                <textarea name="" id="" cols="30" rows="10" placeholder={"Your Message"}required></textarea>
                <button className="submit-btn"><span>Send the message</span><img src="/assets/icons/Union.svg" alt="Arrow going right" /></button>
            </form>
        </section>
    )
}

export default ContactForm;