import React from "react";
import { DiseaseModel } from "../models";
import "./DiseaseCard.css";

export const DiseaseCard = (props: { disease: DiseaseModel }) => {
    return <div className="card">
        <div className="card-header">
            <h3>{props.disease.name}</h3>
            <div className="card-subtitle">{props.disease.scientificNotation}</div>
        </div>
        <div className="card-image">
            <img src={props.disease.imgSrc} alt={props.disease.name} />
        </div>
        <div className="card-content">
            {props.disease.description}
        </div>
        <div className="card-footer">
            {props.disease.notes}
        </div>
    </div>
} 