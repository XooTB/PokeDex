import React from "react";
import { useState, useEffect } from "react";
import './moveStats.styles.scss';

import { FadingBalls } from "react-cssfx-loading/lib";
import LearningInfo from "../learningInfo/learningInfo.component";


export default function MoveStats({ moveName, moveInfo }) {
    const [stats, setSats] = useState(null);
    const list = ['name', 'accuracy', 'power', 'pp', 'piority', 'effect_chance']

    //UseEffect Hooks and others
    useEffect(() => {
        setSats(null)
        fetch(process.env.REACT_APP_API + `/move/${moveName}`)
            .then(response => response.json())

            .then(data => setSats(data));
    }, [moveName]);

    // Conditional Arguments


    //Actual HTML and JSX

    if (stats) {
        const generalStats = list.map((item, i) => {
            return (
                <div className="statRow" key={i}>
                    <div className="stat">{item} :</div>
                    <div className="value">{stats[item]}</div>
                </div>
            );
        });
        return (
            <div className="MoveStats">
                <div className="gStats">
                    {generalStats}
                </div>
                <div className="learningInfo">
                    <LearningInfo data={moveInfo} />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <FadingBalls />
            </div>
        );
    };

};
