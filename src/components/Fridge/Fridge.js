import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Fridge extends Component { 

render() {
        return (
            <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Type of Food</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Type"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Name of Food</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Name"/>
            </div>
            {/* <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )
    }
}
