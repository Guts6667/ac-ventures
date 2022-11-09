import React from "react";
import { useState } from "react";
import "./Header.scss"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn(){
        let burger = document.querySelector('.burger');
        burger.classList.toggle('open')
        if (burger.classList.contains('open')) {
            burger.classList.remove("close")
            setIsOpen(true)
        } else {
            setIsOpen(false)
            burger.classList.add('close')
        }
    }
    return(
        <header className="container__header">
            <img src="/assets/Logo-ACVentures.svg" alt="Logo AC Ventures" />
            <div className="burger" onClick={toggleBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="container__nav-desktop">
            <a href="#home" >
                        <span>HOME</span>
                    </a>
                    <a href="#about" >
                        <span>ABOUT</span>
                    </a>
                    <a href="#portfolio" >
                        <span>PORTFOLIO</span>
                    </a>
                    <a href="#contact" >
                        <span>CONTACT US</span>
                        <img src="/assets/icons/chevron-top-right.svg" alt="Chevron Top Right" />
                    </a>
            </nav>

            {isOpen && (
                <div className="container__menuMobile">
                <nav>
                    <a href="#home" onClick={toggleBtn}>
                        <span>HOME</span>
                        <img src="/assets/icons/chevron-right.svg" alt="Chevront Right" />
                    </a>
                    <a href="#about" onClick={toggleBtn}>
                        <span>ABOUT</span>
                        <img src="/assets/icons/chevron-right.svg" alt="Chevront Right" />
                    </a>
                    <a href="#portfolio" onClick={toggleBtn}>
                        <span>PORTFOLIO</span>
                        <img src="/assets/icons/chevron-right.svg" alt="Chevront Right" />
                    </a>
                    <a href="#contact" onClick={toggleBtn}>
                        <span>CONTACT US</span>
                        <img src="/assets/icons/chevron-right.svg" alt="Chevront Right" />
                    </a>
                </nav>
            </div>
            )}
        </header>
    )
}

export default Header;