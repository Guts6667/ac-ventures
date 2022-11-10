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
                    <h1>AD COACTUSQUE TAMQUAM SI INTROIERIS</h1>
                    <p>Ideoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt. et exitiale hoc vitium, quod in aliis non numquam intepescit, in illo aetatis progressu effervescebat, obstinatum eius propositum accendente adulatorum cohorte.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;