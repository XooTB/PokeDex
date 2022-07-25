import React from "react";
import InfoRow from "../InfoRow/InfoRow.component";
import './learningInfo.styles.scss';


export default function LearningInfo({ data }) {

    const infoList = data.map(info => {
        return (
            <div>
                <InfoRow info={info} />
            </div>
        )
    })

    return (
        <div className="learningInfo">
            {infoList}
        </div>
    )
}