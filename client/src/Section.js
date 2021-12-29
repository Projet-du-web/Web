import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import DashboardAdmin from './Components/Dashboard/Dashboard';
import AnomalieForm from './Components/AnomalieForm';
import Routelinks from './Components/Routes/Routelinks';
import PrivateRoute from './Components/Routes/PrivateRoute';
import PrivateAdminRoute from './Components/Routes/PrivateAdminRoute';
import { Provider } from 'react-redux';
import store from './Components/app/store'


const Section = withRouter(({ location }) => {

  return (
    <section>
       <Provider store={store}>
       <Switch>
          <Route path="/" exact component={Login}/>
          <Routelinks restricted ={true} path="/Login" exact component={Login}/>
          <Routelinks restricted ={true} path="/Register" exact component={Register}/>
          <PrivateRoute restricted ={false} path="/Dashboard"/>
          <PrivateAdminRoute restricted ={false} path="/Dashboard-admin" exact component={DashboardAdmin}/>
          <Route restricted ={false} path="/Dash" exact component={DashboardAdmin}/>
       </Switch>
       </Provider>
    </section>  
  );
});

export default Section;
