import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';  
import LogIn from './Components/LogIn'; 
import NewUser from './Components/NewUser';
import NewRecipe from './Components/NewRecipe';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LogIn /> */}
      {/* <NewUser /> */}
      <NewRecipe /> 
    </div>
  );  
}

export default App;
