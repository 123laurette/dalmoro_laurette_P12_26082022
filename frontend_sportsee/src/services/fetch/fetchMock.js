import {userMainData, userActivityData, userAverageSessionsData, userPerformanceData } from "../../data/mockData"
import {mainData, activityData, averageSessionsData, performanceData} from "../ClassModelisation"

function getUserMainData(id) {
    const data = userMainData.find(value => value.id.toString() === id);
    const userMain = new mainData(data);
    return userMain;
}

function getUserActivity(id) {
    const data = userActivityData.find (value => value.userId.toString() === id);
    const userActivity = new activityData(data);
    return userActivity;
}

function getUserAverageSessions(id) {
    const data = userAverageSessionsData.find (value => value.userId.toString() === id);
    const userSessions = new averageSessionsData(data);
    return userSessions;
    ;
}
function getUserPerformance(id) {
    const data = userPerformanceData.find (value => value.userId.toString() === id);
    const userPerformance = new performanceData(data);
    return userPerformance;
}
const getData = async (id, categorie) => {
    switch (categorie) {
        case "activity": return getUserActivity(id);
        case "sessions": return getUserAverageSessions(id);
        case "performance": return getUserPerformance(id);

        default: return getUserMainData(id);
    }
}

export default getData