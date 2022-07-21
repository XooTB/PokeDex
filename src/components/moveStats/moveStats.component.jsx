import React from "react";
import { useState, useEffect } from "react";
import './moveStats.styles.scss';

import { FadingBalls } from "react-cssfx-loading/lib";


export default function MoveStats({ moveName }) {
    const [stats, setSats] = useState(null);

    useEffect(() => {
        setSats(null)
        fetch(process.env.REACT_APP_API + `/move/${moveName}`)
            .then(response => response.json())
            .then(data => setSats(data));
    }, [moveName]);

    const list = ['name', 'accuracy', 'power', 'pp', 'piority', 'effect_chance']



    if (stats) {
        const generalStats = list.map((item, i) => {
            return (
                <div className="row" key={i}>
                    <div className="stat">{item} :</div>
                    <div className="value">{stats[item]}</div>
                </div>
            );
        });

        //Conditional Arguments

        //Actual HTML and JSX
        return (
            <div className="MoveStats">
                {generalStats}
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
