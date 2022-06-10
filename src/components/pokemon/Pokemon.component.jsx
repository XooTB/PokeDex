import React from "react";
import './Pokemon.styles.scss';

import Carousel from "../Carousel/Carousel.component";
import Stats from "../stats/Stats.component";

function Pokemon({ data }) {
    return (
        <div className="pokemon">
            <div className="hero">
                <Carousel images={data.sprites} />
                <div className="info">
                    <h1 className="name">Name: {data.name}</h1>
                    <Stats stats={data.stats} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon; 