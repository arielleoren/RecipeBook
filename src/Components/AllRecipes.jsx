import React from 'react';
// import './App.css';
import firebase from './firebase'; // <--- add this line
import { Link, NavLink } from "react-router-dom";
// import RecipeDetails from './RecipeDetails';

class AllRecipes extends React.Component {
    constructor(props) {
        super();
        this.state = {
          name: '',
          ingredients: '',
          username: '', 
          id: '', 
          comments: '',
          directions: '',
          items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this); 
        this.seeAllInfo = this.seeAllInfo.bind(this); 
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
          user: this.state.username, 
          ingredients: this.state.ingredients, 
          directions: this.state.direction, 
          id: this.state.id
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
            newState.push
            ({
              id: item,
              name: items[item].name,
              user: items[item].user,
              ingredients: items[item].ingredients, 
              directions: items[item].directions, 
              comments: items[item].comments
            });
          }
          this.setState({
            items: newState
          });
        });
      }
      removeItem(itemId, itemName) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
        console.log(itemId)
      }
      seeAllInfo(itemName) {
        const itemRef = firebase.database().ref(`/items/${itemName}`); 
        console.log(itemName); 
        // {this.props.itemName}; 
        // <RecipeDetails />
        // itemName={this.state.itemName}
      }

    //   propsCall(props) {
    //     <RecipeDetails name={this.state} />  
    //   }


      render() {
     // const itemName = this.state.name; 
        // const hello = "hello"
        // <RecipeDetails name={props.itemRef} /> 

        return (
    <section className='display-item'>
        
              <div className="wrapper">
                     <h1> name </h1> 
                <ul style={{listStyleType: "none"}}>
                  {this.state.items.map((item) => {
                    console.log(item)
                    return ( 
                      <li key={item.id}>

                        <button onClick={() => this.seeAllInfo(item.name)}>
                        <Link to={{
                            pathname: "/recipe-details", 
                            // component: {RecipeDetails}, 
                            state: {
                                name: item.name,
                                ingredients: item.ingredients,
                                directions: item.directions, 
                                comments: item.comments,
                                id: item.id
                            }
                        }}> 
                            {item.name}
                           </Link>
                        </button>



                        {/* <RecipeDetails itemName={this.state.name} /> */}
                              
                            <p>
                            {/* brought by: {item.username} */}
                          <button onClick={() => this.removeItem(item.id, item.name)}>delete Item</button>
                        </p>
                        <div style={{width:"100%", height: "47px", borderBottom: "1px solid black"}}> </div> 
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
          )
}
}

export default AllRecipes; 