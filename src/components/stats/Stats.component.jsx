import React from "react";
import './stats.styles.scss';

import Stat from "../stat/stat.component";


function Stats({ stats }) {
    const list = stats.map((stat, i) => {
        return <Stat name={stat.stat.name} baseStat={stat.base_stat} key={i} />
    })
    return (
        <div className="stats">
            {list}
        </div>
    )
}


export default Stats;