import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


export default class Recipes extends Component { 

    // axios.post('localhost:4000/movie', newMovie)
    // .then(res => console.log(res.data));

    //     this.setState({
    //         title: String,
    //         overview: String,
    //         releaseDate: String,
    //         voteAverage: Number
    //     })
    // }

render() {
        return (
            <header className="container-fluid p-3 mb-2 bg-light text-dark">
                <h1>Choose your yummy recipe!</h1>
            </header>
        )
    }
}