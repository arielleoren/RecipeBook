// next step have a login page which saves to firebase
// import React from 'react';
// // import { Link, NavLink } from "react-router-dom";
// // import NewUser from './NewUser';
// import firebase from './firebase'; 
// import NavBar from './NavBar'

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '', 
//             user: ''
//         }
//         this.login = this.login.bind(this); 
//         this.handleChange = this.handleChange.bind(this); 
//         this.signup = this.signup.bind(this);
//     }

//     login(e) {
//     e.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).catch((error) => {
//         console.log(error);
//       });
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//     signup(e){
//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).then((u)=>{console.log(u)})
//     .catch((error) => {
//         console.log(error);
//       })
//   }

//   componentDidMount(){
//     document.getElementById('navbarId').style.display = "none"; 
//  }

//  componentWillUnmount(){
//     document.getElementById('navbarId').style.display = "flex";
//  }
    
//   handleSubmit(e) {
//         const itemsRef = firebase.database().ref('user');
//         const userInfo = {
//           email: this.state.email, 
//           password: this.state.password
//         }
//         alert("hello there")
//         itemsRef.push(userInfo);
//         console.log("firebase success");
//         console.log(user.email)
//         this.setState({
//           user: 1, 
//         });
//     }

//     render() {
//     return <div style={{ marginTop: '100px' }}>
//     <form >
//       <div class="form-group">
//        <label for="exampleInputEmail1">Email address</label>
//        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//       </div>
//        <div class="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//       </div>
//       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
//       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
//     </form>
//     {/* <button> <NavLink to={{pathname: "/new-user"}}> New User Click Here </NavLink> </button> */}
//         </div> 
//     }
// }

// export default Login;

