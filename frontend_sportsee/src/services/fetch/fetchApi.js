import {mainData, activityData, averageSessionsData, performanceData} from "../ClassModelisation"
const url = "http://localhost:3000/user";

console.log (url)

const getData = async (id, categorie) => {
    let urlDemande = categorie ? url + `/${id}/${categorie}/` : url+ `/${id}/`;
    console.log (urlDemande)

    const data = await fetch(urlDemande);
    console.log (data)

    const dataFetch = await data.json();
    console.log(dataFetch)
    
    switch (categorie) {
        case "activity": return new activityData(dataFetch.data);
        case "average-sessions": return new  averageSessionsData(dataFetch.data);
        case "performance": return new performanceData(dataFetch.data);

        default: return new mainData(dataFetch.data);
    }}

export default getData