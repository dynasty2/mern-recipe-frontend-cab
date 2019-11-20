import React, { Component } from 'react';

class FridgeFood extends Component {
    
    render() {
        return (
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
        )
    }
}

export default FridgeFood;