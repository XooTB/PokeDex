import React, { useEffect } from "react";
import './Pokemon.styles.scss';
import { useParams } from "react-router-dom";

function Pokemon() {
    const pokemonName = useParams().name;
    useEffect(() => {
        const data = pokemonName;
    }, [pokemonName])


    return (
        <div className="pokemon">
            <img></img>
            <h1>Name: {pokemonName.toUpperCase()}</h1>
        </div>
    )
}


export default Pokemon; 