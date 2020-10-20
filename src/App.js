import React from 'react';
import './App.css';
import firebase from './Components/firebase';
// import Home from './Components/Home.jsx';
import Login from './Components/Login'; 
import NavBar from './Components/NavBar';  
// import NewUser from './Components/NewUser';
import NewRecipe from './Components/NewRecipe';
import AllRecipes from './Components/AllRecipes.jsx'; 
import RecipeDetails from './Components/RecipeDetails.jsx'; 
import EditRecipe from './Components/EditRecipe.jsx';
import { BrowserRouter as Router, Route, Redirect,} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}, 
    }
    this.authListener = this.authListener.bind(this); 
    // this.checkUser = this.checkUser.bind(this)
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null }); 
      }
    })
  }


// checkUser() {
//   if (this.state.user = "" ) //check condition
//   {
//     let redirectToUrl = <Redirect to={<Login />}/>
//   }
// }; 

render() {
  return (
    <div> 
        <Router>
        <NavBar /> 
        {/* next steps have a login page that shows up if a user isn't signed in */}
        {/* {!(this.state.user) && <Redirect to="/login" />} */}
        {
                  // <Router> 
        // <Route exact path="/login" render={() => <Redirect to="/login" />} />
        // </Router>
        }
        {/* {if (!this.state.user)  (Continue) : (<Login />)} */}
        {/* <Route exact path = "/login" component={Login}/>  */}
        {/* <Route exact path = "/home" component={Home}/>  */}
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
