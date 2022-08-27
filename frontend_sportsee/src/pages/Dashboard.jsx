import "./../style/Dashboard.css"
import React from 'react';
import Calories from "./../assets/calories-icon.png"
import Proteines from "./../assets/proteines-icon.png"
import Glucides from "./../assets/glucides-icon.png"
import Lipides from "./../assets/lipides-icon.png"
//import { useParams } from "react-router-dom"
//import { getIdUser } from "./../services/DataMock"



function Dashboard() {
    //const {DataUserId} = useParams ()
    //const userId = getIdUser(DataUserId)
    return (
        <div className="pageDashboard">

            <div className="Bonjour">
                <h1>Bonjour
                    <span> Thomas
                    </span> 
                </h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="graphiques">
                <section className="HorizonGauche">
                <div className="Poids">

                </div>

                <section className="carre">
                    <div className="Objectifs">

                    </div>
                    <div className="Radar">

                    </div>
                    <div className="Kpi">

                    </div>
                </section>
                </section>
                <section className="VerticalDroite">

                    <div className="Calories">
                        <img src={Calories} alt="" />
                    </div>
                    <div className="Proteines">
                        <img src={Proteines} alt="" />
                    </div>
                    <div className="Glucides">
                        <img src={Glucides} alt="" />
                    </div>
                    <div className="Lipides">
                        <img src={Lipides} alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;