import React from "react";
import './Stats.styles.scss';

export default function Stats({ stats }) {
    const arr = stats.map(item => {
        return (
            <div className="stat">
                <div className="statName">
                    {item.stat.name}
                </div>
                <div className="statAmount">
                    {item.base_stat}
                </div>
            </div>
        )
    })
    return (
        <div className="stats">
            <h3>Stats: </h3>
            {arr}
        </div>
    )
}