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
   
              <Link to="/home" className="nav-link">Home</Link>
           
              <Link to="/fridge" className="nav-link">Your Fridge</Link>
         
              <Link to="/recipes" className="nav-link">Recipes</Link>

              <Link to="/sign-in" className="nav-link">Sign In</Link>
     
    <Route path="/" exact component={Home} />
    <Route path="/fridge" component={Fridge} />
    <Route path="/recipes" component={Recipes} /> 
    <Route path="/user" component={User} />
    </div> 
    </Router>
  
  )
};
  }
export default App;

