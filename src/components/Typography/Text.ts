import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LineHeightProps,
  LetterSpacingProps,
} from 'styled-system';
import styled from '@src/styled-components';
import Box from '@src/components/Grid/Box';

export type Props = FontFamilyProps &
  FontWeightProps &
  TextAlignProps &
  LineHeightProps &
  LetterSpacingProps;

const Text = styled(Box)<Props>`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${props => props.theme.Text}
`;
Text.displayName = 'Text';

export default Text;
