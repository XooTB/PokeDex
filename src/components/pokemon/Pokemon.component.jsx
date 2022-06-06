import React from "react";
import './Pokemon.styles.scss';

import Carousel from "../Carousel/Carousel.component";
import Stats from "../stats/Stats.component";

function Pokemon({ data }) {
    return (
        <div className="pokemon">
            <Carousel images={data.sprites} />
            <h1>Name: {data.name}</h1>
            <Stats stats={data.stats} />
        </div>
    )
}

export default Pokemon; 