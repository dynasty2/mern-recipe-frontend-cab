import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Fridge from './components/Fridge/Fridge';
import Recipes from './components/Recipe/Recipes';
import User from './components/User/User';
import SignUp from './components/User/SignUp';
import LogIn from './components/User/LogIn';
import LogOut from './components/User/LogOut';
import FridgeRecipeRender from './components/FridgeRecipeRender/FridgeRecipeRender';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      recipes: [],
      ingredients: []
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleAddFridge = this.handleAddFridge.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }
  async componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
    await this.retrieveFridge();
    let hasMore = true;
    let recipeArray = [];
    let ingredientArray = [];
    let nextUrl = "";
    while (hasMore === true) {
      if (recipeArray.length === 0) {
        await fetch("http://fridge-to-table-cab.herokuapp.com/recipe")
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
        await fetch(nextUrl)
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
        await fetch("http://fridge-to-table-cab.herokuapp.com/ingredient")
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
        await fetch(nextUrl)
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
  
  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
  })

  }

  handleSignUp(e) {
      e.preventDefault()
      console.log(this.state)
    axios.post('https://fridge-to-table-cab.herokuapp.com/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(Response => {
      localStorage.token = Response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn(e) {
    e.preventDefault()
    console.log("click")
    axios.post('https://fridge-to-table-cab.herokuapp.com/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
      console.log(this.state.isLoggedIn)
    })
    .catch(err => console.log(err))

    console.log(this.state.isLoggedIn)
  }
  
  async retrieveFridge() {
    if (!this.state.isLoggedIn) {
      let defaultFridge = {
        user: "default",
        recipes: [],
        ingredients: []
      };
      await fetch("http://fridge-to-table-cab.herokuapp.com/fridge", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: defaultFridge,
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
        `http://fridge-to-table-cab.herokuapp.com/fridge/${this.state.email}`
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
  handleAddFridge() {} //handles setting fridge state when a fridge is added to the database

  handleSignIn() {} //handles when a user is signed in and sets the fridge state to the users fridge
  
render() {
  return (
    <Router>
      <main>
    <div className="container fixed-top" style={{ marginTop: 20 }}>
   
    <ul className="nav breadcrumb justify-content-center" style={{ marginBottom: 20 }}>
  <li className="nav-item">
    <Link to="/home" className="nav-link active" href="#">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/fridge" className="nav-link" href="#">Fridge</Link>
  </li>
  <li className="nav-item">
    <Link to="/recipes" className="nav-link" href="#">Recipes</Link>
  </li>
  <li className="nav-item">
    <Link to="/signup" className="nav-link" href="#">Sign Up</Link>
  </li>
  <li className="nav-item">
    <Link to="/signin" className="nav-link" href="#">Log In</Link>
  </li>
  <li className="nav-item">
    <Link to="/logout" className="nav-link" href="#">Log Out</Link>
  </li>
</ul>

    <Route path="/">
      <Redirect to="/home" />
    </Route>
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
    <Route path="/signup" render={signUpProp => (
              <SignUp
                signUpProp = {this.handleInput}               
              />)}
              />
    <Route path="/signin" render={logInProp => (
              <LogIn 
              logInProp = {this.handleInput}
              />
            )} />
    <Route path="/logout" render={logOutProp => (
      <LogOut 
      logOutProp = {this.handleLogOut}/>
    )} />
    </div> 
    </main>
    </Router>
  
  )
};
  }
export default App;

