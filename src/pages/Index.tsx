import React from "react";
import { DiseaseApi } from "../api/DiseaseApi";
import { DiseaseCard } from "../components/DiseaseCard";
import { DiseaseModel } from "../models";

export type IndexState = {
    loading: boolean;
    diseases: DiseaseModel[];
};

export class Index extends React.Component<any, IndexState>  {

    private readonly _diseaseApi: DiseaseApi;


    constructor(props: any) {
        super(props);
        this._diseaseApi = new DiseaseApi();
        this.state = {
            loading: true,
            diseases: [],
        };
    }
    async componentDidMount() {
        const response = await this._diseaseApi.getAllDiseases();

        this.setState({
            ...this.state,
            loading: false,
            diseases: response
        });

    }
    render() {
        const diseaseCards = this.state?.diseases.map(disease => <DiseaseCard key={disease.id} disease={disease}></DiseaseCard>);

        return <div className="disease-list">
            {diseaseCards}
        </div>;
    }
} 