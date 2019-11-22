import React, {Component} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component { 

    render() {
        return (
            <nav aria-label="breadcrumb" className="fixed-bottom">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">A C.A.B. Project</li>
            </ol>
          </nav>
            )
        }
    }

    export default Footer;