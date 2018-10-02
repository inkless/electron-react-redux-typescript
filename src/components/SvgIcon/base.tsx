import React, { createElement } from 'react';
import { fontSize, textColor, FontSizeProps, TextColorProps } from 'styled-system';
import styled, { css, ThemedProps } from '@src/styled-components';
import { filterProps } from '@src/utils/filterProps';

export type Props = {
  variant?: 'primary' | 'secondary';
  viewBox?: string;
  focusable?: boolean;
} & FontSizeProps &
  TextColorProps;

const transitionStyle = css<ThemedProps<Props>>`
  transition: ${props =>
    props.theme.transitions.create('fill', {
      duration: props.theme.transitions.duration.shorter,
    })};
`;

const Svg: React.SFC<Props> = props => {
  const next = filterProps(props);
  return createElement('svg', next);
};

const SvgIcon = styled(Svg)`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  color: ${p => (p.variant ? p.theme.colors[p.variant].main : 'inherit')};
  ${fontSize}
  ${textColor}
  ${transitionStyle}
`;

SvgIcon.defaultProps = {
  focusable: false,
  viewBox: '0 0 24 24',
  fontSize: 6,
  variant: 'primary',
};

export default SvgIcon;
