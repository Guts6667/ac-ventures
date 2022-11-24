import React from "react";
import { useState } from "react";
import ContactForm from "../../Components/ContactForm";
import "./Contact.scss"

const Contact = () => {
const [isClicked, setIsClicked] = useState(false)
    function toggleForm(){
        let contactSection = document.querySelector(".container__contact")
        
        if (contactSection.classList.contains('visible')) {
            contactSection.classList.toggle('visible')
            contactSection.classList.remove("hidden")
            setIsClicked(true)
        } else {
            contactSection.classList.toggle('visible')
            setIsClicked(false)
            contactSection.classList.add('hidden')
        }
    }

    return(
        <section className="container__contact visible" id="contact">   
        {!isClicked ? (   
            <div className="container__contact-transition">
                <span>Have a project in mind?</span>    
                <h2>LET'S TALK</h2>
                <button className="displayBtn displayBtn-contact slide" onClick={toggleForm} >
                    <div className="displayBtn-content">
                        <span>Here</span> <img src="/assets/icons/union.svg" alt="Arrow going right" />
                    </div>
                    
                    <span className="slider"></span>
                </button>
            </div> 
            ) :(
                <ContactForm />
            )}
        </section>

        
    )      
    
    
}

export default Contact;