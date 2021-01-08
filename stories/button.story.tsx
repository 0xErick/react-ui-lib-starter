import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Btn2 from '../src/components/Btn2';

storiesOf('Button', module).add('End Section', () => (
  <Btn2 icon="fa-times" name="End Section" onClick={() => console.log('click')} />
));
