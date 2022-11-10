import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarouselCard from "../../Components/CarouselCard";
import "./Portfolio.scss"

const Portfolio = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('/data/portfolio.json')
        .then((datas) => datas.json())
        .then((datas) => setDatas(datas))
    
    }, [])
    return(
        datas && (
            <section id="portfolio" className="container__portfolio">
                <div className="container__carousel">
                {datas.map((data) => {
                    return(
                        <CarouselCard key={`${data.id}--${data.name}`} name={data.name} description={data.description} logo={data.logo} link={data.link} picture={data.picture} />
                    )
                })}
                </div>
                
            </section>
        )
        
    )
}

export default Portfolio;