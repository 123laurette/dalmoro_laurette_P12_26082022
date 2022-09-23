import "./../style/Dashboard.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Calories from "./../assets/calories-icon.png"
import Proteines from "./../assets/proteines-icon.png"
import Glucides from "./../assets/glucides-icon.png"
import Lipides from "./../assets/lipides-icon.png"
import Activity from "./../components/rechart/Activity"
import Sessions from "./../components/rechart/Sessions"
import Performance from "./../components/rechart/Performance"
import Score from "../components/rechart/Score"
import dataUser from "../services/fetch/fetchMock"
//import dataUser from "../services/fetch/fetchApi.js"

/**
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 * @returns Dashboard include components
 */

function Dashboard() {
    const {id} = useParams()
    const {categorie} = useParams()
    const navigate = useNavigate()
    const [userMain, setUserMain] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessions, setUserSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    
    useEffect(() => {
        dataUser(id,categorie)

            .then(data => {
                if (typeof data !== "undefined") {
                    setUserMain(data)

                    dataUser(id, "activity")
                    .then(data => setUserActivity(data))
                    .catch(error => console.log("erreur activity",error))

                    dataUser(id, "average-sessions")
                    .then(data => setUserSessions(data))
                    .catch(error => console.log("erreur sessions", error))

                    dataUser(id, "performance")
                    .then(data => setUserPerformance(data))
                    .catch(error => console.log("erreur performance", error))
                }else{
                    navigate("/Error")
                }
            })

            .catch(error => console.log("erreur données id", error))
    },
    [id, categorie, navigate])
    
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null
    }

    return (
        <div className="pageDashboard">

            <div className="bonjour">
                <h1>Bonjour {""} 
                    <span>{userMain.firstName}</span> 
                </h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="graphiques">
                <section className="horizonGauche">
                    <div className="activity">
                        <Activity userActivity={userActivity.sessions}/>
                    </div>
                    <div className="carre">

                        <div className="sessions">
                            <Sessions userSessions={userSessions.sessions}/>
                        </div>

                        <div className="performance">
                            <Performance userPerformance={userPerformance.data}/>
                        </div>

                        <div className="score">
                            <Score userMain={userMain.todayScore*100}/>
                        </div>

                    </div>
                </section>
                <section className="verticalDroite">

                    <div className="calories">
                        <img src={Calories} alt="" />
                        <div className="infos">
                            <h3>{userMain.calorie}kCal</h3>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div className="proteines">
                        <img src={Proteines} alt="" />
                        <div className="infos">
                            <h3>{userMain.proteine}g</h3>
                            <p>Proteines</p>
                        </div>
                    </div>
                    <div className="glucides">
                        <img src={Glucides} alt="" />
                        <div className="infos">
                            <h3>{userMain.glucide}g</h3>
                            <p>Glucides</p>
                        </div>
                    </div>
                    <div className="lipides">
                        <img src={Lipides} alt="" />
                        <div className="infos">
                            <h3>{userMain.lipide}g</h3>
                            <p>Lipides</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;


