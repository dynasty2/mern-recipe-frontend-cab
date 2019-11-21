import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button label="Submit" />)

storiesOf('Button', module)
    .add('Remove', () => 
    <button className="btn-sml btn-outline-danger">Remove</button>
    )