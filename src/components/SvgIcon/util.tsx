import React from 'react';
import { fontSize, textColor, FontSizeProps, TextColorProps } from 'styled-system';
import styled, { css, ThemedProps } from '@src/styled-components';

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

function createSvgIcon(Component: React.SFC<Props>) {
  const SvgIcon = styled(Component)`
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

  SvgIcon.displayName = `${Component.name.replace(/^Svg/, '')}Icon`;

  return SvgIcon;
}

export default createSvgIcon;
