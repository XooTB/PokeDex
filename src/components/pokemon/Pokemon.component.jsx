import React from "react";
import './Pokemon.styles.scss';

import Carousel from "../Carousel/Carousel.component";
import Stats from "../stats/Stats.component";
import OtherInfo from "../otherInfo/OtherInfo.component";
import Moves from "../../containers/moves/moves.container";

function Pokemon({ data }) {
    const stats = ['height', 'weight', 'order', 'base_experience'];

    const info = stats.map(stat => {
        return data[stat]
    })
    return (
        <div className="pokemon">
            <div className="hero">
                <Carousel images={data.sprites} />
                <div className="info">
                    <div className="name">
                        <h1>Name: {data.name}</h1>
                    </div>
                    <div className="table">
                        <Stats stats={data.stats} />
                        <OtherInfo info={info} stats={stats} />
                    </div>
                </div>
            </div>
            <div className="movesSection">
                <Moves data={data.moves} />
            </div>
        </div>
    )
}

export default Pokemon; 