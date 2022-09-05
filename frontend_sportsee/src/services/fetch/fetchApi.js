// eslint-disable-next-line no-template-curly-in-string
//import dataClass from "../ClassModelisation"

const url = "http://localhost:3000/user";
console.log (url)

const getData = async (id, categorie) => {
    let urlDemande = categorie ? url + `/${id}/${categorie}` : url+ `/${id}`
    console.log (urlDemande)

    const data = await fetch(urlDemande)
    console.log (data)

    const dataFetch = await data.json()
    console.log(dataFetch)
    
    return dataFetch
}

export default getData