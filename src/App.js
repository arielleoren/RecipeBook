import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';  
import LogIn from './Components/LogIn'; 
import NewUser from './Components/NewUser';
import NewRecipe from './Components/NewRecipe';
import Childd from './Components/Childd.jsx';
import Home from './Components/Home.jsx';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path = "/" component={LogIn}/>
        <Route exact path = "/home" component={Home}/>
        <Route exact path = "/new-user" component={NewUser}/>
        <Route exact path = "/new-recipe" component={NewRecipe}/>
        <Route exact path = "/childd" component={Childd}/>
      </Router>
    </div>
  );  
}

export default App;
