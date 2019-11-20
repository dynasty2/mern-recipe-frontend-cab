import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormFridge from './components/FormFridge/FormFridge';
import PossibleRecipes from './components/PossibleRecipes/PossibleRecipes';

export default class Fridge extends Component { 
//constructor: state set as an array: wordArray = ["apple", "banana"] and bind handleFormSubmit
//method: handleFormSubmit(String) make a new variable and set it to the state version of wordArray (https://davidwalsh.name/javascript-clone-array) and .push the String. use this.setState({ wordArray: <new array with String pushed in> })


render() {



    return (
        // <Search array=[2, 3,4]/>
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