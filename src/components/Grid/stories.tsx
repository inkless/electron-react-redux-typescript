import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@src/components/Grid/Box';
import Flex from '@src/components/Grid/Flex';
import styled from '@src/styled-components';

const StyledBox = styled(Box)`
  opacity: 0.5;
`;

storiesOf('Components', module).add('Box', () => (
  <div>
    <Box borderRadius="10px" p={5} fontSize={4} width={[1, 1, 1 / 2]} color="black" bg="magenta">
      Box
    </Box>
    <Flex fontSize={2} p="10px" flexDirection="row">
      <Box border="1px solid black" width="30%" boxShadow={5}>
        box 1
      </Box>
      <Box border="1px solid black" width="70%" boxShadow={2}>
        box 2
      </Box>
      <StyledBox border="1px solid black" fontSize={1}>
        opacity
      </StyledBox>
    </Flex>
  </div>
));
