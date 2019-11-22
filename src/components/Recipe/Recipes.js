import React, { Component } from "react";
import { Link } from "react-router-dom";
// import RecipeItem from "../RecipeItem/RecipeItem";
// import axios from 'axios';

export default class Recipes extends Component {
  render() {
    console.log(this.props.recipes);
    let recipes = this.props.recipes.map(recipe => {
      let ingre = recipe.ingredients.map(ingred => {
        return <li>{ingred}</li>;
      });
      return (
        <div>
          <h3>{recipe.name}</h3>
          <ul>{ingre}</ul>
        </div>
      );
    });
    return <div>{recipes}</div>;
  }
}
