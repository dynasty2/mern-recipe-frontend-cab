import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Home extends Component { 

render() {
    return (
        <header className="container-fluid p-3 mb-2 bg-light text-dark">
            <h1>This is the Home page. Sit back and relax.</h1>
        </header>
        )
    }
}