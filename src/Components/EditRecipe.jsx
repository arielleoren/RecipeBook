import React from 'react';
// import React, { Component } from 'react';
// import './App.css';
import firebase from './firebase'; // <--- add this line

class EditRecipe extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // name: this.props.state.name,
      // name: ''
      // ingredients: this.props.location.state.ingredients,
      // // url: '',
      // directions: '', 
      // comments: '',
      // username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

  // componentDidMount() {
  //   const itemsRef = firebase.database().ref('items');
  //   itemsRef.on('value', (snapshot) => {
  //     let items = snapshot.val();
  //     let newState = [];
  //     for (let item in items) {
  //       newState.push({
  //         id: item,
  //         name: items[item].name,
  //         ingredients: items[item].ingredients, 
  //         directions: items[item].directions, 
  //         comments: items[item].comments
  //         // user: items[item].user
  //       });
  //     }
  //     this.setState({
  //       items: newState
  //     });
  //   });
  // }

  handleChange(e) {
    console.log("hello there handlechange")
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("hello there handlesubmit")
    // const itemRef = firebase.database().ref(`/items/${this.state.name}`); 
    // const itemRef = firebase.database().ref(`/items/${this.props.location.state.ingredients}`); 
    const itemsRef = firebase.database().ref(`items/${this.props.location.state.id}`);
    console.log(this.props.location.state.id); 
    const item = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      // url: this.state.url,
      directions: this.state.directions,
      comments: this.state.comments
      // id: this.props.location.state.id
      // username: this.state.username
    }
    alert("hello")
    console.log(this.state.name)
    // itemsRef.push(item);
    itemsRef.update(item)
    console.log("hello number 3")
    console.log(this.state.ingredients)
    console.log("firebase success");
    // console.log(this.state.username);
    this.setState({
      name: '',
      ingredients: '',
      // url: '',
      directions: '',
      comments: ''
    });
  }

    render() {
      return <div>      
      <div style={{border: '2px solid black', margin: '0 500px 0 500px', display: 'flex', justifyContent: 'center'}}> Recipe Form! </div>
 <form onSubmit={this.handleSubmit}>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Recipe name*:
    <input type="text" name="name" onChange={this.handleChange} defaultValue={this.props.location.state.name} value={this.state.name} required/> 
  </label>
  {/* having issues with this
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Image:
    <input type="image" name="image" />
  </label> */}
  <label style={{display: 'flex', justifyContent: 'center'}}>
    ingredients
    <input type="text" name="ingredients" onChange={this.handleChange} defaultValue={this.props.location.state.ingredients} value={this.state.ingredients} />
  </label>
  {/* <label style={{display: 'flex', justifyContent: 'center'}}>
    url:
    <input type="url" name="url" onChange={this.handleChange} value={this.state.url}/>
  </label>  */}
  <label style={{display: 'flex', justifyContent: 'center'}}> 
    directions:
    <input type="text" name="directions" onChange={this.handleChange} defaultValue={this.props.location.state.directions} value={this.state.directions} />
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    comments:
    <input type="text" name="comments" onChange={this.handleChange} defaultValue={this.props.location.state.comments} value={this.state.comments}/>
  </label>
  <div style={{display: 'flex', justifyContent: 'center'}}> 
  <input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
  </div> 
</form>
</div>
    }
}

  export default EditRecipe;