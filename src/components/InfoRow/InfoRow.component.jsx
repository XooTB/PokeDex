import React from "react";
import './InfoRow.styles.scss';


export default function InfoRow({ info }) {
    console.log(info)
    return (
        <div className="infoRow">
            <p>{info.version_group.name} / {info.move_learn_method.name}</p>
        </div>
    )
}