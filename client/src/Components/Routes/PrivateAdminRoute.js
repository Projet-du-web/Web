import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const PrivateAdminRoute = ({component: Component, restricted, ...rest}) => {

    const user = useSelector(selectUser) ;

    if(user === null ){
        return ( 
            <Route {...rest}  render={props => (
                <Redirect to="/Login" /> )}/>
        );
    }else{
        if(user.admin && !restricted){
            return ( 
                <Route {...rest}  render={props => (
                    <Component {...props}/> )} />
            );
        }else if(!user.admin && !restricted){
            return ( 
                <Route {...rest}  render={props => (
                    <Redirect to="/Login" /> )}/>
            );
        }   
    }

   
};
export default PrivateAdminRoute;
