import "./Nav_v.css"
import React from "react"
import iconePersonne from "./../../assets/icon personne.png"
import iconeNage from "./../../assets/icon nage.png"
import iconeVelo from "./../../assets/icon velo.png"
import iconePoids from "./../../assets/icon poids.png"
import copy from "./../../assets/Copiryght, SportSee 2020.png"

/**
 * vertical nav bar
 * @component
 * @returns component jsx
 */

function NavVertical () {
    return (
        <div className="Vertical">
            <section className="NavIcone">
                <img src={iconePersonne} alt="représente une personne" />
                <img src={iconeNage} alt="représente une personne qui nage" />
                <img src={iconeVelo} alt="représente une personne en vélo" />
                <img src={iconePoids} alt="représente une altère" />
            </section>
            <img className="copy" src={copy} alt="copiryght SportSee" />
        </div>
    )
}
export default NavVertical
