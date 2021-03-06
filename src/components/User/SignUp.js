import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import { Form, Button } from 'react-bootstrap';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h1>Sign Up</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.props.signUpProp}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.props.signUpProp}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.props.handleSignUp}>
                        Submit
                    </Button>
                </Form>
                <Footer />
            </div>
        );
    }
}