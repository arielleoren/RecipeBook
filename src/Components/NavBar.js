import React from 'react';
import './NavBar.css'; 
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return ( 
    <div style={{height: '100px', border: '2px solid black'}}> 
    <ul style={{listStyle: 'none', display: 'flex'}}> 
    <li style={{}}> RecipeBook </li>
    <div style={{marginLeft: '800px', display: 'flex', flexDirection: 'row'}}>  
    <li><NavLink to='/home' className="noUnderlineLink" activeClassName="activeBold">Home</NavLink> </li> 
    <li style={{marginLeft: '30px'}}><NavLink to='/all-recipes' className="noUnderlineLink" activeClassName="activeBold">All Recipes</NavLink></li> 
    <li style={{marginLeft: '30px'}}><NavLink to='/new-recipe' className="noUnderlineLink" activeClassName="activeBold">New Recipe</NavLink> </li> 
    {/* <li style={{marginLeft: '30px'}}><NavLink to='/childd' className="noUnderlineLink" activeClassName="activeBold">Childd</NavLink> </li>  */}
    </div> 
    </ul> 
    </div> 
    )
}; 



export default NavBar;