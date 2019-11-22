import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export default class SignUp extends Component {
    render() {
        return(
            <div>
                <h1>Sign Up</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.props.handleInput}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.props.handleInput}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.props.handleSignUp}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}