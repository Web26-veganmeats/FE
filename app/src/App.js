import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import ResturantList from './components/ResturantList';
import ResturantCard from './components/ResturantCard';
import AddRestForm from './components/AddRestForm';
import UpdateRestForm from './components/UpdateRestForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/resturantlist' component={ResturantList} />
        <Route path='/resturantcard' component={ResturantCard} />
        <Route path='/addrestform' component={AddRestForm} />
        <Route path='/updaterestform' component={UpdateRestForm} />
      </Switch>
    </div>
  );
}

export default App;
