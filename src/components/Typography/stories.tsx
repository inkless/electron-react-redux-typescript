import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@src/components/Grid/Box';
import Text from '@src/components/Typography/Text';
import Heading from '@src/components/Typography/Heading';

storiesOf('Components', module).add('Typography', () => (
  <Box border={1}>
    <Heading>This is Heading</Heading>
    <Text>This is some text</Text>
  </Box>
));
