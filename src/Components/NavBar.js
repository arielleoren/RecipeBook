import React from 'react';
import './NavBar.css'; 

function NavBar() {
    return ( 
        <div> 
    <ul style={{listStyle: 'none', display: 'flex'}}> 
    <li style={{}}> RecipeBook </li>
    <div style={{marginLeft: '800px', display: 'flex', flexDirection: 'row'}}>  
    <li style={{fontWeight: 'bold'}}> Home </li> 
    <li style={{marginLeft: '30px'}}> Recipes </li> 
    <li style={{marginLeft: '30px'}}> New </li> 
    </div> 
    </ul> 
    <div class="line"></div>
    </div> 

    )
}; 

export default NavBar; 