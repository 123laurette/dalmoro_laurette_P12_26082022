import GetMainData from "../fetch/fetchuserMaindata";
import MainData from "../modelisation/moduserMainData";

async function userHeaderData(userId){
    let mainData = {}
    mainData = await GetMainData(userId);
    const userData = new MainData(mainData);
    console.log(userData)
    return userData;
}

export  {userHeaderData}