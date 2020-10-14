import React from 'react';
import AllRecipes from './AllRecipes'; 
import firebase from './firebase'; // <--- add this line
import { render } from '@testing-library/react';
import { Link, NavLink } from "react-router-dom";


class RecipeDetails extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
        this.consoleLog = this.consoleLog.bind(this);
      }

    // componentDidMount() {
    //     console.log("product props is", this.props.location.productdetailProps);
    //   }

    
    consoleLog(itemName) {
        const itemRef = firebase.database().ref(`/items/${itemName}`); 
        console.log(itemName); 
    }

    render() {
    return (
        <div> 
        Recipe details 
       {/* recipe name: {props.item.name} */}
       <div> 
       <div> 
       recipe name: 
       {this.props.location.state.name}
       </div> 
       <div> 
       ingredients: 
       {this.props.location.state.ingredients}
       </div> 
       <div> 
       directions: 
       {this.props.location.state.directions}
       </div> 
        <div> 
        comments: 
        {this.props.location.state.comments}
        </div> 

        </div> 

        <button onClick={() => this.consoleLog(this.props.location.state.name)}> 
        <Link to={{

            pathname: "/edit-recipe", 
            // component: {RecipeDetails}, 
            state: {
                name: this.props.location.state.name,
                ingredients: this.props.location.state.ingredients, 
                directions: this.props.location.state.directions, 
                comments: this.props.location.state.comments,
                id: this.props.location.state.id
            }
        }}> 
            edit recipe
    </Link>
     </button>

        </div> 
    
        )
    }
}

export default RecipeDetails;