import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Fridge extends Component { 

render() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Food Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Name"/>
                </div> 
                    <button type="submit" class="btn btn-primary">Add to Fridge</button>
            </form>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                             <td>Mark</td>
                             <td>Edit</td>
                        </tr>

                    </tbody>
                </table>
        </div>
            )
        }
    }