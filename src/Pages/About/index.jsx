import React from "react";
import "./About.scss"

const About = () => {
    return(
        <section className="container__about" id="about">
            <div className="circle"></div>
            <div className="container__about-content">
            <h2>ABOUT US</h2>
            <div className="container__about-block">
                <h3>WHAT A.C. VENTURES IS LOOKING FOR</h3>
                <p>A.C. Ventures invests in startups looking for seed funding that have or will have :<br/>
                A great product<br/>
                A competitive advantage in a growing market <br/>
                A great business economics and an understanding for making data driven decisions<br/>
                Founder-market-fit
                </p>
            </div>
            <div className="container__about-block">
                <h3>HOW A.C. VENTURES CAN HELP</h3>
                <p>With our expertise, we also help founders meet these criteria in order to succeed in a highly competitive environment.<br/>
                You want to work with us? <a href="#contact">Reach out here.</a>
                </p>
            </div>
            </div>
            
        </section>
    )
}
export default About;