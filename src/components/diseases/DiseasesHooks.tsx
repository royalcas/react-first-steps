import React, { useEffect, useState } from "react";
import { DiseaseApi } from "../../api/DiseaseApi";
import { DiseaseModel } from "../../models";
import { DiseaseCard } from "./DiseaseCard";




export const DiseasesHooks = () => {
    const [diseases, setDiseases] = useState([] as DiseaseModel[]);
    const [loading, setloading] = useState(true);
    const api = new DiseaseApi();

    const deleteDisease = (id: number) => setDiseases(diseases.filter(disease => disease.id !== id));

    useEffect(() => {
        api.getAllDiseases().then((diseasesResponse) => {
            console.log('[DiseasesHooks] Init');
            setDiseases(diseasesResponse);
            setloading(false);
            return () => {
                console.log('[DiseasesHooks] Cleanup');
            }
        });
    }, [1]);

    const diseaseCards = diseases.map(disease => <DiseaseCard key={disease.id} disease={disease} delete={deleteDisease}></DiseaseCard>);

    return <div className="disease-list">
        {diseaseCards}
    </div>;
}