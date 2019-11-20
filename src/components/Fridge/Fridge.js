import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormFridge from '../../components/FormFridge/FormFridge';
import FridgeFood from '../../components/FridgeFood/FridgeFood';

class Fridge extends Component { 
//constructor: state set as an array: wordArray = ["apple", "banana"] and bind handleFormSubmit
//method: handleFormSubmit(String) make a new variable and set it to the state version of wordArray (https://davidwalsh.name/javascript-clone-array) and .push the String. use this.setState({ wordArray: <new array with String pushed in> })

constructor() {
    super();

    this.state = {
        food: "",
        item: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
};

  handleFormSubmit = (e) => {
      e.preventDefault();

      let items = this.state.item.slice(0);

      items.push(this.state.food);

    this.setState({
        item: items
    })
  }

deleteFood = (e) => {
    e.preventDefault();

    let items = this.state.item.slice(0);
    items.pop(this.state.food);

    this.setState({
        item: items
    })
}

  handleInputChange = (e) => {
    let value = e.target.value;
    this.setState({
      food: value
    })
  }

render() {

    return (
        <div>
            <FormFridge handleFormSubmit={ this.handleFormSubmit } 
                        handleInputChange={ this.handleInputChange }
                        food={ this.state.food } />
            <FridgeFood items={ this.state.item } 
                        deleteFood={this.deleteFood}/>
        </div>
            )
        }
    }

    export default Fridge;