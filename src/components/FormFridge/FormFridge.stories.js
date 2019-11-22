import React from 'react';
import { storiesOf } from '@storybook/react';

import FormFridge from './FormFridge';

storiesOf('FormFridge', module)
    .add('FormFridge', () =>  <div className="form-group">
    <label htmlFor="food">Food Name</label>
    <input 
           type="text" 
           className="form-control" 
           id="food" 
           aria-describedby="foodHelp" 
           placeholder="Enter Food Name"
           />
</div> )