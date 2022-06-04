import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Pokemon.styles.scss';

import Carousel from "../../components/Carousel/Carousel.component";
import { FadingBalls } from 'react-cssfx-loading';



function Pokemon() {
    const pokemonName = useParams().name;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            process.env.REACT_APP_API + `/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [pokemonName])

    if (data) {


        return (
            <div className="pokemon">
                <Carousel images={data.sprites} />
                <h1>Name: {pokemonName.toUpperCase()}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <FadingBalls />
            </div>
        )
    }
}


export default Pokemon; 