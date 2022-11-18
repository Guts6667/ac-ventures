import React from "react";
import "./Home.scss"

const Home = () => {

    return(
        <section className="container__home" id="home">
            <div className="container__home-title">
            <img src="/assets/Logo-ACVentures.png" alt="Logo AC Ventures" />
                <span>INVESTMENTS</span>
            </div>
            <div className="container__home-description">
                <div className="container description">
                    <h1>ENABLING AND BUILDING VENTURES</h1>
                    <p>Creating Value for Ventures through seed investments, access to a worldwide network, and expertise.</p>
                    <p>
                    Access to a worldwide network of entrepreneurs, industry experts, investors, business leaders, and many more located in North and South-America, Europe, Asia & Middle East.
                    </p>
                    <p>
                    Expertise in business development, marketing, product development, finance, fundraising, blockchain & more.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home;