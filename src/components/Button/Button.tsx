import React, { HTMLAttributes } from 'react';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  FontWeightProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  ButtonStyleProps,
} from 'styled-system';
import styled, { ThemedProps } from '@src/styled-components';
import Box, { Props as BoxProps } from '@src/components/Grid/Box';

export type Props = {
  variant?: 'default' | 'primary';
  disabled?: boolean;
  label?: string;
} & HTMLAttributes<HTMLDivElement> &
  FontWeightProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  ButtonStyleProps &
  BoxProps;

type ComponentProps = ThemedProps<Props>;

function getCursorStyle(p: ComponentProps) {
  return `cursor: ${p.disabled ? 'not-allowed' : 'pointer'};`;
}

const variantStyle: { [key: string]: any } = {
  default: {
    default: (p: ComponentProps) => `
      border: 1px solid ${p.theme.colors.grays[5]};
      background-color: ${p.theme.colors.common.white};
      color: ${p.disabled ? p.theme.colors.disabled.main : p.theme.colors.common.black};
      ${getCursorStyle(p)}
    `,
    active: (p: ComponentProps) => `
      ${p.disabled ? '' : `background-color: ${p.theme.colors.grays[0]};`}
    `,
    hover: (p: ComponentProps) => `
      ${p.disabled ? '' : `background-color: ${p.theme.colors.grays[0]};`}
    `,
  },
  primary: {
    default: (p: ComponentProps) => `
      border: 1px solid ${p.disabled ? p.theme.colors.disabled.main : p.theme.colors.primary.main};
      background-color: ${p.disabled ? p.theme.colors.disabled.main : p.theme.colors.primary.main};
      color: ${p.disabled ? p.theme.colors.disabled.contrast : p.theme.colors.primary.contrast};
      ${getCursorStyle(p)}
    `,
    active: (p: ComponentProps) => `
      ${p.disabled ? '' : `opacity: 0.85;`}
    `,
    hover: (p: ComponentProps) => `
      ${p.disabled ? '' : `opacity: 0.85;`}
    `,
  },
};

function getStyles(props: ComponentProps, selector: string) {
  return variantStyle[props.variant || 'default'][selector];
}

const Button: React.SFC<Props> = props => (
  <Box {...props}>
    <span>{props.children || props.label}</span>
  </Box>
);

const StyledButton = styled<Props>(Button)`
  text-decoration: none;
  transform: skew(15deg);

  span {
    display: inline-block;
    transform: skew(-15deg);
  }
  ${p => getStyles(p, 'default')};
  &:hover {
    ${p => getStyles(p, 'hover')};
  }
  &:active {
    ${p => getStyles(p, 'active')};
  }
  &:focus {
    ${p => getStyles(p, 'focus')};
  }

  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
`;

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  p: '12px 24px',
  label: 'Button',
  fontWeight: 700,
  fontSize: 4,
  display: 'inline-block',
};

StyledButton.displayName = 'Button';

export default StyledButton;
