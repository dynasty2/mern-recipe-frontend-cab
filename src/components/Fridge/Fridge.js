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
        item: [],
        ingrName: ["apple", "salt"]
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
        item: items,
        food: ""
    })
  }

deleteFood = (e) => {
    e.preventDefault();

    let items = this.state.item.slice(0);
    let index = e.target.parentNode.parentNode.dataset.key;
    items[index] = items[items.length - 1];
    items.pop();
    let temp = items[index];
    let past = false;
    items.forEach((item, i) => {
        if(parseInt(index, 10) === i){
            past = true;
            items[i] = items[i + 1];
           
        } else if(past && i !== (items.length - 1)) {
            items[i] = items[i + 1];
        } else if (i === items.length - 1) {
            items[i] = temp;
        } else {
            items[i] = item;
        }
    })
    

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