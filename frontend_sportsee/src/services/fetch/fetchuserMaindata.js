

const mockeDatas = false;
const getMainData = async(userId) => {
    let url = `http://localhost:3000/user/${userId}`
    
        if(mockeDatas){
            url = `/mockUserData.json`
        }else{}
        const response = await fetch(url);
        const mainData = await response.json();
        console.log(mainData)

        return mainData.data;
    }



export default getMainData