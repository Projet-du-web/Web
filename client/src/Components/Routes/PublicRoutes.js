import React from 'react';
import {Route, Navigate} from 'react-router-dom';

const PublicRoutes = ({component: Component, restricted, ...rest}) => {

    return (
        <Route {...rest} render={props => (
              restricted ? 
              <Route {...rest} render={() => {<Navigate replace to="/home" />} } />
              :<Component {...props}/>
     )} />
    );
};

export default PublicRoutes;