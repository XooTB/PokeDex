import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './PokemonContainer.styles.scss';

import { FadingBalls } from 'react-cssfx-loading';
import Pokemon from "../../components/pokemon/Pokemon.component";


function PokemonContainer() {
    const pokemonName = useParams().name;
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null)
        fetch(process.env.REACT_APP_API + `/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [pokemonName])

    if (data) {
        if (!data.error) {
            return (
                <Pokemon data={data} />
            )
        } else if (data.error === 404) {
            return (
                <div>
                    <h1>{data.message}</h1>
                </div>
            )
        }
    } else {
        return (
            <div>
                <FadingBalls />
            </div>
        )
    }
}


export default PokemonContainer; 