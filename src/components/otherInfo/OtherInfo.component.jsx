import React from "react";
import './OtherInfo.styles.scss';

export default function OtherInfo({ info, stats }) {
    const rows = stats.map((stat, i) => {
        return (
            <div className="row">
                <div className="stat">{stat}</div>
                <div className="info">{info[i]}</div>
            </div>
        )
    })

    return (
        <div className="otherInfo">
            <h3>Additional Info</h3>
            {rows}
        </div>
    )
}