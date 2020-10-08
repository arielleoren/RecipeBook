import React from 'react';
// import './App.css';
import firebase from './firebase'; // <--- add this line
import { Link, NavLink } from "react-router-dom";

class AllRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          username: '', 
          items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
          user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
          currentItem: '',
          username: ''
        });
      }

      componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              name: items[item].name,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
      }
      removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
      }
      seeAllInfo(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        props = 
      }

      render() {
        return (
    <section className='display-item'>
              <div className="wrapper">

                     <h1> name </h1> 
                <ul style={{listStyleType: "none"}}>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3><button onclick={() => this.seeAllInfo(item.id)}>
                            <Link to='/recipe-details'> {item.name} </Link>
                            </button></h3>
                            <p>
                            {/* brought by: {item.username} */}
                          <button onClick={() => this.removeItem(item.id)}>delete Item</button>
                        </p>
                      </li>
                    //   <div style={{width:"100%", height: "47px", borderBottom: "1px solid black"}}> </div> 
                    )
                  })}
                </ul>
              </div>
          </section>
          )
}
}

export default AllRecipes; 