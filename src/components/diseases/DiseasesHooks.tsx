import React, { useEffect, useState } from "react";
import { DiseaseApi } from "../../api/DiseaseApi";
import { DiseaseModel } from "../../models";
import { DiseaseCard } from "./DiseaseCard";




export const DiseasesHooks = () => {
    const [diseases, setDiseases] = useState([] as DiseaseModel[]);
    const [selectedDiseaseId, setSelectedDisease] = useState(0);
    const api = new DiseaseApi();

    const deleteDisease = (id: number) => setDiseases(diseases.filter(disease => disease.id !== id));
    const selectDisease = (id: number) => setSelectedDisease(id);

    useEffect(() => {
        api.getAllDiseases().then((diseasesResponse) => {
            console.log('[DiseasesHooks] Init');
            setDiseases(diseasesResponse);
        });
        return () => {
            console.log('[DiseasesHooks] Cleanup');
        }
    }, [1]);

    const diseaseCards = diseases.map(disease => <DiseaseCard
        key={disease.id}
        disease={disease}
        isActive={selectedDiseaseId === disease.id}
        delete={deleteDisease}
        select={selectDisease}></DiseaseCard>);

    return <div className="disease-list">
        {diseaseCards}
    </div>;
}