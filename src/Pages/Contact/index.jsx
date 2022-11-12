import React from "react";
import { useState } from "react";
import ContactForm from "../../Components/ContactForm";
import "./Contact.scss"

const Contact = () => {
const [isClicked, setIsClicked] = useState(false)
    function toggleForm(){
        let contactSection = document.querySelector(".container__contact")
        contactSection.classList.toggle('visible')
        if (contactSection.classList.contains('visible')) {
            contactSection.classList.remove("hidden")
            setIsClicked(true)
        } else {
            setIsClicked(false)
            contactSection.classList.add('hidden')
        }
    }

    return(
        !isClicked ? (
        <section className="container__contact visible" id="contact">        
            <span>Have a project in mind?</span>    
                <h2>LET'S TALK</h2>
                <button className=".displayBtn" onClick={toggleForm} >
                    <span>Here</span> <img src="/assets/icons/union.svg" alt="Arrow going right" />
                    <span className="slider"></span>
                </button>
        </section>
        ) : (
            <ContactForm />
        )

        
    )      
    
    
}

export default Contact;