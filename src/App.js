import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Fridge from "./components/Fridge/Fridge";
import Recipes from "./components/Recipe/Recipes";
import User from "./components/User/User";
import FridgeRecipeRender from "./components/FridgeRecipeRender/FridgeRecipeRender";
import { RSA_NO_PADDING } from "constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      ingredients: [],
      isLoggedIn: false,
      email: ""
    };

    this.handleAddFridge = this.handleAddFridge.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }

  async retrieveFridge() {
    if (!this.state.isLoggedIn) {
      let defaultFridge = {
        user: "default",
        recipes: [],
        ingredients: []
      };
      await fetch("http://fridge-to-table-cab.herokuapp.com/fridge", {
        method: "POST",
        body: defaultFridge,
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            fridge: res,
            email: "default"
          });
        });
    } else {
      await fetch(
        `http://fridge-to-table-cab.herokuapp.com/fridge/${this.state.email}`,
        {
          mode: "no-cors"
        }
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            fridge: res
          });
        });
    }
  }

  async handleAddRecipe(recipe) {
    //handles when a recipe is added to the fridge
  }

  async handleAddIngredient(ingredient) {
    //handles when an ingredient is added to the fridge
    let newIngre = this.ingredients.filter(ingre => {
      return ingre.name === ingredient;
    });
    let newIngreOb = newIngre[0];
    await fetch(
      `http://fridge-to-table-cab.herokuapp.com/fridge/${this.state.email}/ingredients`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        body: { newIngreOb },
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          fridge: res
        });
      });
  }

  async componentDidMount() {
    await fetch("http://fridge-to-table-cab.herokuapp.com/fridge/default", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    }).then();
    await this.retrieveFridge();
    let hasMore = true;
    let recipeArray = [];
    let ingredientArray = [];
    let nextUrl = "";
    while (hasMore === true) {
      if (recipeArray.length === 0) {
        await fetch("http://fridge-to-table-cab.herokuapp.com/recipe", {
          mode: "no-cors"
        })
          .then(res => res.json())
          .then(res => {
            // hasMore = res.has_more;
            console.log(res);
            res.data.forEach(dat => {
              recipeArray.push(dat);
            });
            nextUrl = res.next_page;
            if (res.has_more === false) {
              hasMore = false;
            }
          });
      } else {
        await fetch(nextUrl, {
          mode: "no-cors"
        })
          .then(res => res.json())
          .then(res => {
            // hasMore = res.has_more;
            console.log(res);
            res.data.forEach(dat => {
              recipeArray.push(dat);
            });
            nextUrl = res.next_page;
            if (res.has_more === false) {
              hasMore = false;
            }
          });
      }
    }
    hasMore = true;
    while (hasMore === true) {
      if (ingredientArray.length === 0) {
        await fetch("http://fridge-to-table-cab.herokuapp.com/ingredient", {
          mode: "no-cors"
        })
          .then(res => res.json())
          .then(res => {
            // hasMore = res.has_more;
            console.log(res);
            res.data.forEach(dat => {
              ingredientArray.push(dat);
            });
            nextUrl = res.next_page;
            if (res.has_more === false) {
              hasMore = false;
            }
          });
      } else {
        await fetch(nextUrl, {
          mode: "no-cors"
        })
          .then(res => res.json())
          .then(res => {
            // hasMore = res.has_more;
            console.log(res);
            res.data.forEach(dat => {
              ingredientArray.push(dat);
            });
            nextUrl = res.next_page;
            if (res.has_more === false) {
              hasMore = false;
            }
          });
      }
    }

    this.setState({
      recipes: recipeArray,
      ingredients: ingredientArray
    });
  }

  handleAddFridge() {} //handles setting fridge state when a fridge is added to the database

  handleSignIn() {} //handles when a user is signed in and sets the fridge state to the users fridge

  render() {
    let recipeObs = this.state.recipes.map(recipe => {
      return <p>{recipe.name}</p>;
    });
    let ingredientObs = this.state.ingredients.map(ingredient => {
      return <p>{ingredient.name}</p>;
    });
    return (
      <Router>
        <div className="container" style={{ marginTop: 20 }}>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fridge" className="nav-link" href="#">
                Your Fridge
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link" href="#">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign_in" className="nav-link" href="#">
                Sign In
              </Link>
            </li>
          </ul>

          <Route
            path="/home"
            exact
            render={() => {
              return (
                <div>
                  <Home />
                  <h1>Recipes</h1>
                  {recipeObs}
                  <h1>ingredients</h1>
                  {ingredientObs}
                </div>
              );
            }}
          />
          <Route
            path="/fridge"
            render={() => {
              return (
                <Fridge
                  ingredients={this.state.ingredients}
                  handleAddIngredient={this.handleAddIngredient}
                />
              );
            }}
          />
          <Route
            path="/recipes"
            render={() => {
              return <Recipes recipes={this.state.recipes} />;
            }}
          />
          <Route path="/sign_in" component={User} />
        </div>
      </Router>
    );
  }
}
export default App;

{
  /* <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/home" className="nav-link active" href="#">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/fridge" className="nav-link" href="#">Your Fridge</Link>
  </li>
  <li className="nav-item">
    <Link to="/recipes" className="nav-link" href="#">Recipes</Link>
  </li>
  <li className="nav-item">
    <Link to="/sign_in" className="nav-link" href="#">Sign In</Link>
  </li>
</ul> */
}
