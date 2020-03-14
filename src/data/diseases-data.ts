import { DiseaseModel } from './../models/disease-model';
export const diseases: DiseaseModel[] = [
    {
        id: 1,
        name: "Coronavirus",
        notes: [],
        imgSrc: "https://www2.deloitte.com/content/dam/insights/us/articles/6677_covid-19/images/6677_banner1.jpg/_jcr_content/renditions/cq5dam.web.1440.660.jpeg",
        scientificNotation: "COVID-19",
        description: "Coronavirus disease 2019 (COVID-19) is an infectious disease caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).[10] The disease has spread globally since 2019, resulting in the 2019–20 coronavirus pandemic.[11][12] Common symptoms include fever, cough and shortness of breath. Muscle pain, sputum production and sore throat are less common symptoms.[6][13] While the majority of cases result in mild symptoms,[14] some progress to pneumonia and multi-organ failure.[11][15] The deaths per number of diagnosed cases is estimated at between 1% and 5% but varies by age and other health conditions.[16][17]",
    },
    {
        id: 2,
        name: "Influenza A virus subtype H1N1",
        notes: [],
        imgSrc: "https://img.medscape.com/pi/features/slideshow-slide/h1n1-influenza/fig1.jpg",
        scientificNotation: "A/H1N1",
        description: "Influenza A virus subtype H1N1 (A/H1N1) is the subtype of influenza A virus that was the most common cause of human influenza (flu) in 2009, and is associated with the 1918 outbreak known as the Spanish flu. It is an orthomyxovirus that contains the glycoproteins haemagglutinin and neuraminidase.",
    },
    {
        id: 3,
        name: "Yellow Fever",
        notes: [],
        imgSrc: "https://gualeguaychu.gov.ar/apps/dashboard/ftp/web/images/landscape_h__Gualeguaychu_1545229626.jpg",
        scientificNotation: "Yellow Fever Virus",
        description: "Yellow fever is a viral disease of typically short duration.[3] In most cases, symptoms include fever, chills, loss of appetite, nausea, muscle pains particularly in the back, and headaches.[3] Symptoms typically improve within five days.[3] In about 15% of people, within a day of improving the fever comes back, abdominal pain occurs, and liver damage begins causing yellow skin.[3][6] If this occurs, the risk of bleeding and kidney problems is increased.[3]",
    },
];