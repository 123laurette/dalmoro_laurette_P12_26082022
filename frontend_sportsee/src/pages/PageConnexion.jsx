import React from 'react';
import "./../style/pageConnexion.css"
import { NavLink } from 'react-router-dom';


function PageConnexion(id) {
    return (
        <div className="pageConnexion">
            <div className="cart">
                <NavLink to={`/user/${12}`}><p>Karl Dovineau</p></NavLink>
                <NavLink to={`/user/${18}`}><p>Cecilia Ratorez</p></NavLink> 
                <NavLink to={`/user/${20}`}><p>Julien Gallet</p></NavLink> 
            </div>
        </div>
    );
};

export default PageConnexion;

