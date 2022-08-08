import React from "react";
import { useState } from "react";
import './moves.styles.scss';

import MoveStats from "../../components/moveStats/moveStats.component";
import { useEffect } from "react";

export default function Moves({ data }) {
    const movelist = data.map(move => move.move.name);

    const [currentMove, setCurrentMove] = useState(movelist[0]);
    const [moveInfo, setMoveInfo] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentMove(e.target.textContent);

    }

    useEffect(() => {
        data.filter((move) => {
            if (move.move.name === currentMove) {
                setMoveInfo(move.version_group_details);
            };
        });
    }, [currentMove, data])

    const list = movelist.map(move => {
        return (
            <div className="moveName" onClick={handleClick}>{move}</div>
        )
    })


    return (
        <div className="moves_container">
            <div className="title">
                <h2>Moves:</h2>
            </div>
            <div className="moves_info">
                <div className="moveList">
                    {list}
                </div>
                <MoveStats moveName={currentMove} moveInfo={moveInfo} />
            </div>
        </div>
    )
}