import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Routelinks = ({component: Component, restricted, ...rest}) => {

    const user = useSelector(selectUser);

     if(user === null && restricted){
            return ( 
                <Route {...rest}  render={props => (
                    <Component {...props} /> )}/>
            );
    }else{
            if(user.admin === true && restricted){
                return ( 
                    <Route {...rest}  render={props => (
                        <Redirect to="/Dashboard-admin" /> )} />
                );
            }else if(user.admin === false && restricted){
                return ( 
                    <Route {...rest}  render={props => (
                        <Redirect to="/Register" /> )} />
                );
            }            
  }

};
export default Routelinks;

