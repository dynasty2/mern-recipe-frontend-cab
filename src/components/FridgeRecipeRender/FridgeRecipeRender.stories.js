import React from 'react';
import { storiesOf } from '@storybook/react';

import FridgeRecipeRender from './FridgeRecipeRender';

storiesOf('FridgeRecipeRender', module)
    .add('FridgeRecipeRender', () => 
    <div className="fridgeRecipes container border border-dark rounded-sm">
              <p>This is where possible recipes will update as you input ingredients into your fridge.</p>
    </div>
    )
