import React, { Component } from 'react';

class FridgeFood extends Component {
    
    render() {
        const items = this.props.items;
        let itemArray = [];
        if(items) {
            itemArray = items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item}</td>
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
                <tbody>
                {itemArray}
                </tbody>
            </table>
        )
    }
}

export default FridgeFood;

{/* <td>
<button type="submit" class="btn-sm btn-danger">Remove</button>
</td> */}