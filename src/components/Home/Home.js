import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Home extends Component { 

render() {
    return (
        <body>
        <header>
          {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
              <a className="navbar-brand" href="#"><strong>MDB</strong></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                  </li>
                </ul>
                <form className="form-inline">
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  </div>
                </form>
              </div>
            </div>
          </nav> */}
            {/* <div className="mask rgba-black-light align-items-center"> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4 white-text text-center">
                    <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>Fridge to Table</strong></h1>
                    <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/>
                    <h5 className="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Meal Planning</strong></h5>
                    {/* <a className="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">portfolio</a>
                    <a className="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">About me</a> */}
                  </div>
                </div>
              </div>
        </header>
        <main className="container">
        <img src="https://i.imgur.com/sRo6yC3.jpg" className="img-fluid" alt="Food on the Table"/>
        </main>
    </body>
        )
    }
}