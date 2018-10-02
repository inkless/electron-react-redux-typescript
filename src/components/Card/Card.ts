import {
  borders,
  borderColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  BordersProps,
  BorderColorProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  OpacityProps,
} from 'styled-system';
import styled from '@src/styled-components';
import Box from '@src/components/Grid/Box';

type Props = BordersProps &
  BorderColorProps &
  BackgroundImageProps &
  BackgroundSizeProps &
  BackgroundPositionProps &
  BackgroundRepeatProps &
  OpacityProps;

export const Card = styled(Box)<Props>`
  ${borders}
  ${borderColor}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${opacity}
  ${props => props.theme.Card}
`;

Card.defaultProps = {
  boxShadow: 1,
};

Card.displayName = 'Card';

export default Card;
