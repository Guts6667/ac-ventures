import React from "react";
import "./CarouselCard.scss"

const CarouselCard = ({name, description, logo, link, picture}) => {
    return(
            <article className="box__carousel">
                <img className="box__carousel-bg" src={`/assets/images/bg-nanolive.png`} alt={`Illustration of ${name}`} />
                <div className="box__carousel-content">
                    <div className="box__carousel-title">
                        <h4>{name}</h4>
                        <img src={`/assets/Logos/${logo}`} alt="" />
                    </div>
                    <div className="box__carousel-description">
                        <p>{description}</p>
                        <a href={link} target={"_blank"} rel="noopener noreferrer">
                            <span>Website</span>
                        </a>
                    </div>
                </div>
            </article>
    )
}

export default CarouselCard;