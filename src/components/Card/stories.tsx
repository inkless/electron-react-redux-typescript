import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '@src/components/Card/Card';
import Text from '@src/components/Typography/Text';
import Heading from '@src/components/Typography/Heading';

storiesOf('Components', module).add('Card', () => (
  <div>
    <Card mb={4}>
      <Heading>This is a Card</Heading>
      <Text>This is Card Content</Text>
      <Text>Box Shadow 1</Text>
    </Card>

    <Card mb={4} boxShadow={2}>
      Box Shadow 2
    </Card>

    <Card mb={4} boxShadow={10}>
      Box Shadow 10
    </Card>

    <Card mb={5} boxShadow={24}>
      Box Shadow 24
    </Card>
  </div>
));
