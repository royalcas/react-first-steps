import React from "react";
import { DiseaseApi } from "../../api/DiseaseApi";
import { DiseaseModel } from "../../models";
import { DiseaseCard } from "./DiseaseCard";


export type IndexState = {
    loading: boolean;
    diseases: DiseaseModel[];
    selectedId: number;
};

export class DiseasesLifeCycle extends React.Component<any, IndexState>  {

    private readonly _diseaseApi: DiseaseApi;

    constructor(props: any) {
        super(props);
        this._diseaseApi = new DiseaseApi();
        this.state = {
            loading: true,
            diseases: [],
            selectedId: 0,
        };
    }
    async componentDidMount() {
        console.log('[DiseasesLifeCycle] componentDidMount');
        const response = await this._diseaseApi.getAllDiseases();

        this.setState({
            ...this.state,
            loading: false,
            diseases: response
        });

    }

    deleteDisease = (id: number) => {
        this.setState({
            diseases: this.state.diseases.filter((disease) => disease.id !== id)
        })
    }

    selectDisease = (selectedId: number) => {
        this.setState({
            selectedId
        })
    }

    render() {
        console.log('[DiseasesLifeCycle] render');
        const diseaseCards = this.state?.diseases.map(disease => <DiseaseCard
            key={disease.id}
            isActive={this.state.selectedId === disease.id}
            disease={disease}
            delete={this.deleteDisease}
            select={this.selectDisease}></DiseaseCard>);

        return <div className="disease-list">
            {diseaseCards}
        </div>;
    }
} 