import React from 'react';
import firebase from './firebase'; // <--- add this line

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      username: '',
      email: '', 
      password: ''
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
    const itemsRef = firebase.database().ref('userInfo');
    const userInfo = {
      fullName: this.state.fullName, 
      username: this.state.username, 
      email: this.state.email, 
      password: this.state.password
    }
    alert("hello there")
    console.log(this.state.fullName)
    itemsRef.push(userInfo);
    console.log("firebase success");
    this.setState({
      fullName: '', 
      username: '', 
      email: '', 
      password: ''
    });
  }

    render() {
      return <div style={{marginTop: '100px'}}> 
 <form onSubmit={this.handleSubmit}>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Full Name*:
    <input type="text" name="fullName" onChange={this.handleChange} value={this.state.fullName} required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    username*:
    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    email*:
    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    password*:
    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required/>
  </label>
  <input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
</form>
</div> 
    }
  }

  export default NewUser; 

