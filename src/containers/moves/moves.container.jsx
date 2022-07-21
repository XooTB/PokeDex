import React from "react";
import { useState } from "react";
import './moves.styles.scss';

import MoveStats from "../../components/moveStats/moveStats.component";

export default function Moves({ data }) {
    const moveList = data.map(move => move.move.name);
    const [showMove, setMove] = useState(moveList[0]);

    const handleClick = (e) => {
        e.preventDefault();

        setMove(e.target.textContent);
    }

    const moves = data.map((move, i) => {
        return <div onClick={handleClick} key={i} className='movename'>{move.move.name}</div>
    })

    return (
        <div className="moves">
            <div className="moveList">
                {moves}
            </div>
            <div>
                <MoveStats moveName={showMove} />
            </div>
        </div>
    )
}