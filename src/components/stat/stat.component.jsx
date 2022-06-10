import React from "react";
import './stat.style.scss';

export default function Stat({ name, baseStat }) {
    return (
        <div className="stat">
            <p>{name} : {baseStat}</p>
        </div>
    )
}