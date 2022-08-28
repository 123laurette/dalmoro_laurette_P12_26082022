const mockeDatas = false;
const getMainData = async(userId) => {
    let url = `http://localhost:3000/user/${12}`
    try{
        if(mockeDatas){
            url = `/mockUserData.json`
        }
        const response = await fetch(url);
        const mainData = await response.json();
        console.log(mainData)

        return mainData.data;
    }

    catch(error){
        console.log("***error***")
    }
    // eslint-disable-next-line no-undef
    console.log(mainData)

}

export default getMainData