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
//import dataUser from "../services/fetch/fetchApi"

/**
 * 
 * @returns Dashboard include components
 */

function Dashboard() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [userMain, setUserMain] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessions, setUserSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    
    useEffect(() => {
        dataUser(id)

            .then(data => {
                if (typeof data !== "undefined") {
                    setUserMain(data)

                    dataUser(id, "activity")
                    .then(data => setUserActivity(data))
                    .catch(error => console.log("erreur activity",error))

                    dataUser(id, "sessions")
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
    [id, navigate])
    
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null
    }

    return (
        <div className="pageDashboard">

            <div className="Bonjour">
                <h1>Bonjour {""} 
                    <span>{userMain.firstName}</span> 
                </h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="graphiques">
                <section className="HorizonGauche">
                <div className="activity">
                    <Activity userActivity={userActivity.sessions}/>
                </div>
                <section className="carre">

                    <div className="sessions">
                    <Sessions userSessions={userSessions.sessions}/>
                    </div>

                    <div className="performance">
                    <Performance userPerformance={userPerformance.data}/>
                    </div>

                    <div className="score">
                    <Score userMain={userMain.todayScore*100}/>
                    </div>

                </section>
                </section>
                <section className="VerticalDroite">

                    <div className="Calories">
                        <img src={Calories} alt="" />
                        <div className="Infos">
                            <h3>{userMain.calorie}kCal</h3>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div className="Proteines">
                        <img src={Proteines} alt="" />
                        <div className="Infos">
                            <h3>{userMain.proteine}g</h3>
                            <p>Proteines</p>
                        </div>
                    </div>
                    <div className="Glucides">
                        <img src={Glucides} alt="" />
                        <div className="Infos">
                            <h3>{userMain.glucide}g</h3>
                            <p>Glucides</p>
                        </div>
                    </div>
                    <div className="Lipides">
                        <img src={Lipides} alt="" />
                        <div className="Infos">
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


