import "./../style/Dashboard.css"
import Calories from "./../assets/calories-icon.png"
import Proteines from "./../assets/proteines-icon.png"
import Glucides from "./../assets/glucides-icon.png"
import Lipides from "./../assets/lipides-icon.png"
import Poids from "../components/rechart/Poids"
import Objectifs from "../components/rechart/Objectifs"
import Radar from "../components/rechart/Radar"
import Kpi from "../components/rechart/Kpi"
import DataUser from "../services/fetch/fetchMock"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


function Dashboard() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [userMain, setUserMain] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessions, setUserSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    useEffect(() => {
        DataUser(id)
            .then(data => {
                if (typeof data.data !== "undefined") {
                    setUserMain(data)

                    DataUser(id, "activity")
                    .then(data => setUserActivity(data))
                    .catch(error => console.log("erreur activity",error))

                    DataUser(id, "sessions")
                    .then(data => setUserSessions(data))
                    .catch(error => console.log("erreur sessions", error))

                    DataUser(id, "performance")
                    .then(data => setUserPerformance(data))
                    .catch(error => console.log("erreur performance", error))
                }else{
                    navigate("/Error")
                }
            })
            .cath(error => console.log("erreur données id", error))
    },
    [id, navigate])
    
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null
    }

    return (
        <div className="pageDashboard">

            <div className="Bonjour">
                <h1>Bonjour {userMain.data.userInfos.firstName}
                    <span>{}
                    </span> 
                </h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="graphiques">
                <section className="HorizonGauche">
                <div className="Poids">
                    <Poids/>
                </div>

                <section className="carre">
                    <div className="Objectifs">
                    <Objectifs/>

                    </div>
                    <div className="Radar">
                    <Radar/>

                    </div>
                    <div className="Kpi">
                    <Kpi/>

                    </div>
                </section>
                </section>
                <section className="VerticalDroite">

                    <div className="Calories">
                        <img src={Calories} alt="" />
                        <div className="Infos">
                            <h3>1.930kCal</h3>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div className="Proteines">
                        <img src={Proteines} alt="" />
                        <div className="Infos">
                            <h3>155g</h3>
                            <p>Proteines</p>
                        </div>
                    </div>
                    <div className="Glucides">
                        <img src={Glucides} alt="" />
                        <div className="Infos">
                            <h3>290g</h3>
                            <p>Glucides</p>
                        </div>
                    </div>
                    <div className="Lipides">
                        <img src={Lipides} alt="" />
                        <div className="Infos">
                            <h3>50g</h3>
                            <p>Lipides</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;


