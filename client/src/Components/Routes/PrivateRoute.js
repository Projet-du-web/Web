import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const PrivateRoute = ({component: Component, restricted, ...rest}) => {

    const user  = useSelector(selectUser) ;

 if(user === null && !restricted){
    return ( 
        <Route {...rest}  render={props => (
            <Redirect to="/Login" /> )}/>
    );
 }else if(user && !restricted){
        return ( 
            <Route {...rest}  render={props => (
                <Component {...props}/> )} />
        );

    }
   
};
export default PrivateRoute;
