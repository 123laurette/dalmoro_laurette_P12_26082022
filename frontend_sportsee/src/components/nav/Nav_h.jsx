import "./Nav_h.css"
import React from "react"
import logo from "./../../assets/logo.png"
import { NavLink } from 'react-router-dom';


function NavHorizon (){
    return (
        <div className="Horizon">
            <header>
                <NavLink to="/">
                <img src={logo} alt="logo SportSee" />
                </NavLink>
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
