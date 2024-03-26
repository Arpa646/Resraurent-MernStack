import React, {  useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProvateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    

if(loading)
{
    <h1>loading</h1>
}
if(user){
    return children;
}
    return <Navigate replace to='/signup' state={{from:location}}></Navigate>
};

export default ProvateRoute;