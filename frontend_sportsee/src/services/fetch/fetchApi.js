const url = "http://localhost:3000/user";

const getData = async (id, categorie) => {
    let urlDemande = categorie ? url + `/${id}/${categorie}` : url+ `/${id}`

    const data = await fetch(urlDemande)
    const dataFetch = await data.json()
    return dataFetch
}

export default getData