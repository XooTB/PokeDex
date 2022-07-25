import React from "react";
import './learningInfo.styles.scss';


export default function LearningInfo({ data }) {

    const infoList = data.map(info => {
        return (
            <div>
                <div>{info.version_group.name}</div>
            </div>
        )
    })

    return (
        <div className="learningInfo">
            {infoList}
        </div>
    )
}