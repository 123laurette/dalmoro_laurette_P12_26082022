import "./Nav_h.css"
import React from "react"
import logo from "./../../assets/logo.png"

/**
 * horizontal nav bar
 * @component
 * @returns component jsx
 */
function NavHorizon (){
    return (
        <div className="horizon">
            <header>
                <img src={logo} alt="logo SportSee" />
                <nav>
                    <p> Accueil </p>
                    <p> Profil </p>
                    <p> Réglage </p>
                    <p> Communauté </p>
                </nav>
            </header>
        </div>
    )
}
export default NavHorizon
