import React from 'react';
import "./../style/pageConnexion.css"
import Connexion from "./../components/connexion/Connexion";


function PageConnexion() {
    return (
        <div className="pageConnexion">
            <div className="cart">
                <Connexion   name='Karl Dovineau' id="12"/>
                <Connexion   name='Cecilia Ratorez' id="18"/>
                <Connexion   name='Mocked Person' id="13"/>
            </div>
        </div>
    );
};

export default PageConnexion;

