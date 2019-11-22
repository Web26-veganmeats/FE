import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

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
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/restaurantlist' component={RestaurantList} />
        <PrivateRoute path='/restaurantcard/:id' component={RestaurantCard} />
        <PrivateRoute path='/addrestform' component={AddRestForm} />
        <PrivateRoute path='/updaterestform/:id' component={UpdateRestForm} />
      </Switch>
    </div>
  );
}

export default App;
