import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from './Home';

storiesOf('Home', module)
    .add('Home', () => 
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4 white-text text-center">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5"><strong>Fridge to Table</strong></h1>
                <hr className="hr-light my-4"/>
                <h5 className="text-uppercase text-white"><strong>Meal Planning</strong></h5>
            </div>
        </div>
    </div>
)