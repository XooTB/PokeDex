import React, { useEffect, useState } from "react";
import './Pokemon.styles.scss';
import { useParams } from "react-router-dom";

function Pokemon() {
    const pokemonName = useParams().name;
    const [data, setData] = useState();

    useEffect(() => {
        fetch(
            process.env.REACT_APP_API + `/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [pokemonName])


    return (
        <div className="pokemon">
            <img></img>
            <h1>Name: {pokemonName.toUpperCase()}</h1>
        </div>
    )
}


export default Pokemon; 