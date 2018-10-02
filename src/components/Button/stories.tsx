import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@src/components/Button/Button';
import Flex from '@src/components/Grid/Flex';

storiesOf('Components', module).add('Button', () => (
  <div>
    <Flex>
      <Button mr={3} variant="primary" onClick={action('onClick')}>
        Primary Button
      </Button>
      <Button disabled={true} variant="primary" onClick={action('onClick')}>
        Disabled Primary Button
      </Button>
    </Flex>
    <Flex>
      <Button mr={3} onClick={action('onClick')}>
        Default Button
      </Button>
      <Button disabled={true} onClick={action('onClick')}>
        Disabled Button
      </Button>
    </Flex>
    <Flex>
      <Button mr={3} onClick={action('onClick')} />
      <Button label="My Button" variant="primary" mr={3} onClick={action('onClick')} />
    </Flex>
  </div>
));
