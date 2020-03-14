export class DiseaseApi {
    async getAllDiseases() {
        const res = await fetch("/api/diseases.json");
        return await res.json();
    }
}