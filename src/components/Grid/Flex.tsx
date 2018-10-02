import {
  flexWrap,
  flexBasis,
  flexDirection,
  alignItems,
  justifyContent,
  FlexWrapProps,
  FlexBasisProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system';
import styled from '@src/styled-components';
import Box from '@src/components/Grid/Box';

export type Props = FlexWrapProps &
  FlexBasisProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps;

// We cannot do styled<Props>(Box), this is the workaround
// https://github.com/emotion-js/emotion/issues/672
const Flex = styled(Box)<Props>`
  display: flex;
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;
Flex.displayName = 'Flex';

export default Flex;
