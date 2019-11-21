import React, { Component } from 'react';
import './FridgeRecipeRender.css';

class FridgeRecipeRender extends Component {

    render() {

        return (
            <div className="fridgeRecipes container border border-dark rounded-sm">
              <p>This is where possible recipes will update as you input ingredients into your fridge.</p>
            </div>
                )
            }
}

export default FridgeRecipeRender;