import React from "react";
import "./ContactForm.scss"

const ContactForm = () => {

    return(
        <section className="container__contactForm">
            <div>
                <h4>Contact us</h4>
                <h2>LET'S WORK TOGETHER</h2>
                <p>Ideoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt. et exitiale hoc vitium, quod in aliis non numquam intepescit.</p>
            </div>
            <form action="">
                <input type={"text"} />
                <input type={"text"} />
                <input type={"email"} />
                <input type={"tel"} />
                <input type={"country"} />
            </form>
        </section>
    )
}

export default ContactForm;