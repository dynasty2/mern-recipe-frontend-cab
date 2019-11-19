import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Fridge extends Component { 

render() {
        return (
            <div className="container">
            <form style={{ marginTop: 20 }}>
            {/* <div className="form-group">
              <label for="exampleInputEmail1">Type of Food</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Type"/>
            </div> */}
            <div className="form-group">
              <label for="exampleInputPassword1">Name of Food</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Name"/>
            </div>
            {/* <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Add to Fridge</button>
          </form>
          <table className="table" style={{ marginTop: 20 }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Food Name</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          </table>
          </div>
        )
    }
}
