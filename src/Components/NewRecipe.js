import React from 'react';
// import React, { Component } from 'react';
// import './App.css';
import firebase from './firebase'; // <--- add this line

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: '',
      url: '',
      directions: '', 
      comments: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      name: this.state.name,
      ingredients: this.state.ingredients, 
      url: this.state.url, 
      directions: this.state.directions, 
      comments: this.state.comments
    }
    alert("hello")
    console.log(this.state.name)
    itemsRef.push(item);
    console.log("firebase success");
    this.setState({
      name: '',
      ingredients: '', 
      url: '', 
      directions: '', 
      comments: ''
    });
  }

//   <form onSubmit={this.handleSubmit}>
//   <input type="text" name="name" placeholder="What's your name?" onChange={this.handleChange} value={this.state.name} />
//   <input type="text" name="currentItem" placeholder="What are you bringing ?" onChange={this.handleChange} value={this.state.currentItem} />
//   <button>Add Item</button>
// </form>

    render() {
      return <div> 
      <div style={{border: '2px solid black', margin: '0 500px 0 500px', display: 'flex', justifyContent: 'center'}}> Recipe Form! </div>
 <form onSubmit={this.handleSubmit}>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Recipe name*:
    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} required/>
  </label>
  {/* having issues with this
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Image:
    <input type="image" name="image" />
  </label> */}
  <label style={{display: 'flex', justifyContent: 'center'}}>
    ingredients
    <input type="text" name="ingredients" onChange={this.handleChange} value={this.state.ingredients} />
  </label>
  {/* <label style={{display: 'flex', justifyContent: 'center'}}>
    url:
    <input type="url" name="url" onChange={this.handleChange} value={this.state.url}/>
  </label> */}
  <label style={{display: 'flex', justifyContent: 'center'}}>
    directions:
    <input type="text" name="directions" onChange={this.handleChange} value={this.state.directions}/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    comments:
    <input type="text" name="comments" onChange={this.handleChange} value={this.state.comments}/>
  </label>
  <input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
</form>
</div>
    }
}

  export default NewRecipe; 