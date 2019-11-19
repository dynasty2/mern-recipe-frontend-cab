import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Fridge extends Component { 

render() {
    return (
        <div>
            <form style={{ margin: 20 }}>
                <div class="form-group">
                    <label for="food">Food Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Name"/>
                </div> 
                    <button type="submit" class="btn btn-primary">Add to Fridge</button>
            </form>
                <table class="table table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                             <td>Apple</td>
                             <td>
                             <button type="submit" class="btn-sm btn-danger">Remove</button>
                             </td>
                        </tr>

                    </tbody>
                </table>
        </div>
            )
        }
    }