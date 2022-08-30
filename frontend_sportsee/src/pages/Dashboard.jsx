import "./../style/Dashboard.css"
import React, { useEffect, useState } from 'react';
import Calories from "./../assets/calories-icon.png"
import Proteines from "./../assets/proteines-icon.png"
import Glucides from "./../assets/glucides-icon.png"
import Lipides from "./../assets/lipides-icon.png"
import Poids from "../components/rechart/Poids"
import Objectifs from "../components/rechart/Objectifs"
import Radar from "../components/rechart/Radar"
import Kpi from "../components/rechart/Kpi"
import {userHeaderData} from "./../services/provider/provuserMainData";
import {useParams } from "react-router-dom"



function Dashboard() {
    const {id} = useParams ()
    // eslint-disable-next-line no-empty-pattern
    const [, setDatas]= useState("")
    useEffect(() => {
        (async() => {
            try{
                const userData = await userHeaderData(id)
                setDatas({userData})
                console.log(id)

            }
            catch(error){
                console.log("***error***")
            }
        })
        ()},
        [id]);
    return (
        <div className="pageDashboard">

            <div className="Bonjour">
                <h1>Bonjour {""}
                    <span>{/*`${data.userFirstName}`*/}
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


