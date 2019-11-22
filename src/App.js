import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Fridge from './components/Fridge/Fridge';
import Recipes from './components/Recipe/Recipes';
import User from './components/User/User';
import SignUp from './components/User/SignUp';
import FridgeRecipeRender from './components/FridgeRecipeRender/FridgeRecipeRender';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  componentDidMount() {
    
  }
  
  handleLogOut() {
    
  }

  handleInput(e) {
    
  }

  handleSignUp(e) {
      e.preventDefault()
      
    axios.post('http://localhost:8080/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn(e) {
    e.preventDefault()
    
  }

render() {
  return (
    <Router>
    <div className="container" style={{ marginTop: 20}}>
   
    <ul className="nav justify-content-center">
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
    <Link to="/account" className="nav-link" href="#">Sign In</Link>
  </li>
</ul>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/fridge" render={() => {
      return <Fridge />
    }
      } />
    <Route path="/recipes" component={Recipes} /> 
    <Route path="/account" component={User} />
    </div> 
    </Router>
  
  )
};
  }
export default App;