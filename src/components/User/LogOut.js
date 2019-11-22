import React, { Component } from 'react';

export default class LogOut extends Component {

    render() {
        <div>
            <h1>Log Out</h1>

            <form>
                <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
            </form>
        </div>
    }
}