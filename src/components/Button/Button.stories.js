import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Add To Fridge', () => 
    <button type="submit" value="Submit" className="btn btn-primary">Add to Fridge</button>
    )

storiesOf('Button', module)
    .add('Remove', () => 
    <button className="btn-sml btn-outline-danger">Remove</button>
    )