import './App.css';
import React, { Component } from 'react';
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
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
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

    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/fridge" render={() => {
      return <Fridge />
    }
      } />
    <Route path="/recipes" component={Recipes} /> 
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