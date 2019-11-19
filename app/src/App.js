import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import ResturantCard from "./components/RestaurantCard";

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import RestaurantList from './components/RestaurantList';
import RestaurantCard from './components/RestaurantCard';
import AddRestForm from './components/AddRestForm';
import UpdateRestForm from './components/UpdateRestForm';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/restaurantlist' component={RestaurantList} />
        <PrivateRoute path='/restaurantcard' component={RestaurantCard} />
        <PrivateRoute path='/addrestform' component={AddRestForm} />
        <PrivateRoute path='/updaterestform' component={UpdateRestForm} />
      </Switch>
    </div>
  );
}

export default App;
