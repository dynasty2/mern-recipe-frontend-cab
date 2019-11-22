import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormFridge from "../../components/FormFridge/FormFridge";
import FridgeFood from "../../components/FridgeFood/FridgeFood";
import FridgeRecipeRender from "../../components/FridgeRecipeRender/FridgeRecipeRender";

class Fridge extends Component {
  //constructor: state set as an array: wordArray = ["apple", "banana"] and bind handleFormSubmit
  //method: handleFormSubmit(String) make a new variable and set it to the state version of wordArray (https://davidwalsh.name/javascript-clone-array) and .push the String. use this.setState({ wordArray: <new array with String pushed in> })

  constructor(props) {
    super(props);

    this.state = {
      food: "",
      item: [],
      ingredients: props.ingredients,
      ingrName: [],
      noMatchFood: ""
    };
    this.ingredientNames = [];
    this.noMatch = false;
    this.hasMadeNames = false;

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  checkForMatch() {
    if (this.ingredientNames.includes(this.state.food)) {
      return true;
    }
    return false;
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let noMatchFood = "";
    let items = this.state.item.slice(0);
    if (this.checkForMatch()) {
      items.push(this.state.food);
      this.noMatch = false;
    } else {
      this.noMatch = true;
      noMatchFood = this.state.food;
    }

    this.setState({
      item: items,
      food: "",
      noMatchFood: noMatchFood
    });
  };

  deleteFood = e => {
    e.preventDefault();

    let items = this.state.item.slice(0);
    let index = e.target.parentNode.parentNode.dataset.key;
    items[index] = items[items.length - 1];
    let dont = false;
    if (parseInt(index, 10) === items.length - 1) {
      dont = true;
    }
    items.pop();
    let temp = items[index];
    let past = false;
    if (!dont) {
      items.forEach((item, i) => {
        if (parseInt(index, 10) === i) {
          past = true;
          items[i] = items[i + 1];
        } else if (past && i !== items.length - 1) {
          items[i] = items[i + 1];
        } else if (i === items.length - 1) {
          items[i] = temp;
        } else {
          items[i] = item;
        }
      });
    }

    this.setState({
      item: items
    });
  };

  handleInputChange = e => {
    let value = e.target.value;
    this.setState({
      food: value
    });
  };

  render() {
    if (this.hasMadeNames === false && this.props.ingredients.length > 0) {
      this.ingredientNames = this.props.ingredients.map(ingredient => {
        return ingredient.name;
      });
      this.hasMadeNames = true;
    }

    let errorMes = <p></p>;
    if (this.noMatch === true) {
      errorMes = <p>Error: {this.state.noMatchFood} is not an ingredient</p>;
    }
    return (
      <div>
        <div className="float-left">
          <FormFridge
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            food={this.state.food}
            errorMes={errorMes}
          />
          <FridgeFood items={this.state.item} deleteFood={this.deleteFood} />
        </div>
        <div className="float-right" style={{ marginTop: 160 }}>
          <FridgeRecipeRender />
        </div>
      </div>
    );
  }
}

export default Fridge;
