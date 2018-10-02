import { SFC, createElement } from 'react';
import {
  space,
  color,
  width,
  flex,
  order,
  alignSelf,
  fontSize,
  display,
  border,
  borderRadius,
  boxShadow,
  SpaceProps,
  ColorProps,
  WidthProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  FontSizeProps,
  DisplayProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
} from 'styled-system';
import styled from '@src/styled-components';
import { filterProps } from '@src/utils/filterProps';

export type Props = {
  css?: string;
  as?: string;
} & SpaceProps &
  ColorProps &
  WidthProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  FontSizeProps &
  DisplayProps &
  BorderProps &
  BorderRadiusProps &
  BoxShadowProps;

const Div: SFC<Props> = props => {
  const next = filterProps(props);
  return createElement(props.as || 'div', next);
};

const Box = styled(Div)`
  box-sizing: border-box;
  ${props => props.theme.Box}
  ${display}
  ${space}
  ${color}
  ${width}
  ${fontSize}
  ${flex}
  ${order}
  ${alignSelf}
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${props => props.css}
`;
Box.displayName = 'Box';

export default Box;
