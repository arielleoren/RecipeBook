import React from 'react';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";
import firebase from './firebase';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.logout = this.logout.bind(this); 
    }

    logout() {
        firebase.auth().signOut()
    }
    render() {
    return ( 
    <div id="navbarId" style={{height: '100px', border: '2px solid black'}}> 
    <ul style={{listStyle: 'none', display: 'flex'}}> 
    <li style={{}}> RecipeBook </li>
    <div style={{marginLeft: '800px', display: 'flex', flexDirection: 'row'}}>
    {/* next steps: I want to make a home page which shows the name of the individual user */}
    {/* <li> <NavLink to='/home' className="noUnderlineLink" activeClassName="activeBold">Home</NavLink> </li>  */}
    <li style={{marginLeft: '30px'}}><NavLink to='/all-recipes' className="noUnderlineLink" activeClassName="activeBold">All Recipes</NavLink></li> 
    <li style={{marginLeft: '30px'}}><NavLink to='/new-recipe' className="noUnderlineLink" activeClassName="activeBold">New Recipe</NavLink> </li>
    {/* next steps: I want to have a logout function*/}
    {/* <li style={{marginLeft: '30px'}} onClick={this.logout}><NavLink to ='/login'> Logout </NavLink> </li>  */}
    </div> 
    </ul> 
    </div> 
    )
    }
}; 



export default NavBar;