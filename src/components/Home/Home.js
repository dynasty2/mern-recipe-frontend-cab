import React, {Component} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Home extends Component { 

render() {
    return (
        <body className="container">
        <header style={{ marginTop: -20 }}>
            <div className="mask rgba-black-light align-items-center">
              <div className="container">
                <div className="row">
                  <div className="homeTitle sticky-top col-md-12 mb-4 white-text text-center">
                    <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-2 pt-5"><strong>Fridge to Table</strong></h1>
                    <hr className="hr-light my-4"/>
                    <h5 className="mealPlan text-uppercase text-dark"><strong>Meal Planning</strong></h5>
                  </div>
                </div>
              </div>
            </div>
        </header>
        <main className="container" style={{ marginBottom: 25 }}>
        <img src="https://i.imgur.com/sRo6yC3.jpg?2" className="img-fluid" alt="Food on the Table"/>
        </main>
    </body>
        )
    }
}