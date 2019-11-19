import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Fridge from './components/Fridge/Fridge';
import Recipes from './components/Recipe/Recipes';
import User from './components/User/User';

class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = { 

  //   };
  // }

render() {
  return (
    <Router>
    <div className="container">
   
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link to="/home" class="nav-link active" href="#">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/fridge" class="nav-link" href="#">Your Fridge</Link>
  </li>
  <li class="nav-item">
    <Link to="/recipes" class="nav-link" href="#">Recipes</Link>
  </li>
  <li class="nav-item">
    <Link to="/sign_in" class="nav-link" href="#">Sign In</Link>
  </li>
</ul>
     
    <Route path="/home" exact component={Home} />
    <Route path="/fridge" component={Fridge} />
    <Route path="/recipes" component={Recipes} /> 
    <Route path="/sign_in" component={User} />
    </div> 
    </Router>
  
  )
};
  }
export default App;

{/* <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link to="/home" class="nav-link active" href="#">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/fridge" class="nav-link" href="#">Your Fridge</Link>
  </li>
  <li class="nav-item">
    <Link to="/recipes" class="nav-link" href="#">Recipes</Link>
  </li>
  <li class="nav-item">
    <Link to="/sign_in" class="nav-link" href="#">Sign In</Link>
  </li>
</ul> */}