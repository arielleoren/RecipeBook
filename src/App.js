import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';  
import NewUser from './Components/NewUser';
import Login from './Components/Login'; 
import NewRecipe from './Components/NewRecipe';
import Home from './Components/Home.jsx';
import AllRecipes from './Components/AllRecipes.jsx'; 
import RecipeDetails from './Components/RecipeDetails.jsx'; 
import EditRecipe from './Components/EditRecipe.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from './Components/firebase';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user}); 
      } else {
        this.setState({user: null})
      }
    }); 
  }

render() {
  return (
    <div>
      {this.state.user ? (<Home />) : (<Login/>)};
      <Router>
        <NavBar />
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/home" component={Home}/>
        <Route exact path = "/new-user" component={NewUser}/>
        <Route exact path = "/new-recipe" component={NewRecipe}/>
        <Route exact path = "/all-recipes" component={AllRecipes}/>
        <Route exact path = "/edit-recipe" component={EditRecipe} />
        <Route exact path ="/recipe-details" component={RecipeDetails}/>
      </Router>
    </div>
  );  
}

}

export default App;
