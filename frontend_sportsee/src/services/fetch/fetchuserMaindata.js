async function getMainData (userId) {
    //const mockeUser = false
    let url = `http://localhost:3000/user/${userId}`
    /*if(mockeUser){
        url = "./../../data/mockUserData.json"
    }*/

    const response = await fetch (url);
    console.log(response)
    const datas = await response.json();
    console.log (datas)
    console.log(datas.firstname)

    return datas;
}
export default getMainData