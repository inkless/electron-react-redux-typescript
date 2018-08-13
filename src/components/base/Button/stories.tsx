import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

storiesOf('Components', module).add(
  'Button',
  withInfo({ inline: true })(() => (
    <div>
      <Button isActive={true} onClick={action('onClick')}>
        Active Button
      </Button>
      <Button onClick={action('onClick')}>Inactive Button</Button>
    </div>
  )),
);
