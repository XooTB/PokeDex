import React from "react";
import './Pokemon.styles.scss';

import Carousel from "../Carousel/Carousel.component";
import Stats from "../stats/Stats.component";
import OtherInfo from "../otherInfo/OtherInfo.component";

function Pokemon({ data }) {
    const stats = ['height', 'weight', 'order']
    return (
        <div className="pokemon">
            <div className="hero">
                <Carousel images={data.sprites} />
                <div className="info">
                    <div className="name">
                        <h1>Name: {data.name}</h1>
                    </div>
                    <Stats stats={data.stats} />
                    <OtherInfo />
                </div>
            </div>
        </div>
    )
}

export default Pokemon; 