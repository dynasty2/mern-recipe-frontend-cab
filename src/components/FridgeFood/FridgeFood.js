import React, { Component } from 'react';

class FridgeFood extends Component {
    
    render() {
        const items = this.props.items;
        let itemArray = [];
        if(items) {
            itemArray = items.map((item, index) => {
                return (
                  <tr key={index} data-key={index}>
                    <td>{item}</td>
                    <td>
                    <button onClick={this.deleteFood}  
                            className="btn-sml btn-outline-danger">Remove</button>
                    </td>
                  </tr>
                );
              })
        }
        
        return (
            <table className="table table">
                <thead>
                    <tr>
                        <th scope="col">Food Item</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody onSubmit={this.props.handleFormSubmit} 
                       onClick={this.props.deleteFood}>
                {itemArray}
                </tbody>
            </table>
        )
    }
}

export default FridgeFood;