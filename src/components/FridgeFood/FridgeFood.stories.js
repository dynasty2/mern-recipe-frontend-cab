import React from 'react';
import { storiesOf } from '@storybook/react';

import FridgeFood from './FridgeFood';

storiesOf('FridgeFood', module)
    .add('FridgeFood', () => 

<table class="table">
  <thead>
    <tr>
      <th scope="col">Food</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Food</td>
      <td>Remove</td>
    </tr>
  </tbody>
</table>

)