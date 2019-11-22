import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';

export default class LogOut extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Log Out</h1>

                <form>
                    <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                </form>
                <Footer />
            </div>
        );
    }
}