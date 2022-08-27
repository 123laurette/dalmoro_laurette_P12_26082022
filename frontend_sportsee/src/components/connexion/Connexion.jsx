import React from 'react';
import { Link } from 'react-router-dom'
import {getDataUser} from "./../../services/DataMock"


function LienConnexion() {
    return (
        <div>
        {getDataUser().map((user) => (
            <Link to={`/PageConnexion/${user.id}`} key={user.id}>
            </Link> 
        ))}
        </div>
    )
}

export default LienConnexion;

