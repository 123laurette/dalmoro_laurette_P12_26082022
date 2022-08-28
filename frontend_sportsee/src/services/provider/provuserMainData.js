import GetMainData from "../fetch/fetchuserMaindata";
import MainData from "../modelisation/moduserMainData";



async function userHeaderData(id){
    let mainData = {}
    mainData = await GetMainData(id);
    const userData = new MainData(mainData);
    console.log(userData)
    return userData;
}

export  {userHeaderData}