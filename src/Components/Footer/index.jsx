import React from "react";
import "./Footer.scss"


const Footer = () => {

    return(
        <footer>
            <a href="https://twitter.com/Alx_Cte?s=20&t=Ac7-awezAWiN-bB8E30slA" target={"_blank"} rel="noopener noreferrer">
                <img src="/assets/icons/Icon-Twitter.png" alt="Icon Twitter" />
            </a>
            <a href="https://www.instagram.com/alx.cte/" target={"_blank"} rel="noopener noreferrer">
                <img src="/assets/icons/Icon-Instagram.png" alt="Icon Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-cotte/" target={"_blank"} rel="noopener noreferrer">
                <img src="/assets/icons/Icon-Linkedin.png" alt="Icon Linkedin" />
            </a>
        </footer>
    )
}

export default Footer;