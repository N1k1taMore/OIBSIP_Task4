import React from 'react';
import {Link} from 'react-router-dom';

const AuthContainer = ({children}) =>{

    return (
        <div className=" Auth">
            <Link to="/" className=" ">               
            </Link>   
            {children} 
        </div>
    )
}

export default AuthContainer;
