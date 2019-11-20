import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormFridge from '../../components/FormFridge/FormFridge';
import FridgeFood from '../../components/FridgeFood/FridgeFood';

export default class Fridge extends Component { 
//constructor: state set as an array: wordArray = ["apple", "banana"] and bind handleFormSubmit
//method: handleFormSubmit(String) make a new variable and set it to the state version of wordArray (https://davidwalsh.name/javascript-clone-array) and .push the String. use this.setState({ wordArray: <new array with String pushed in> })


render() {



    return (
        // <Search array=[2, 3,4]/>
        <div>
            <FormFridge/>
            <FridgeFood/>
        </div>
            )
        }
    }