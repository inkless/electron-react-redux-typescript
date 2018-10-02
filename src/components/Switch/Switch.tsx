import React, { Component } from 'react';
import styled, { ThemedProps, css } from '@src/styled-components';
import CheckboxBase from '@src/components/Checkbox/base';

export type Props = {
  variant: 'primary' | 'secondary';
  /** If specified, will control the Checkbox's state */
  checked?: boolean;
  /** When checked is not specified, this will be used to set the default state */
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  className?: string;
};

type PartialProps = Pick<Props, 'variant' | 'checked'>;

export type ComponentProps = ThemedProps<PartialProps>;

const bgColor = css<ComponentProps>`
  background-color: ${p => p.theme.colors[p.variant].main};
`;

function getTransition(p: ComponentProps, props: string) {
  const transitions = p.theme.transitions;
  return `transition: ${transitions.create(props, { duration: transitions.duration.shortest })}`;
}

const Container = styled.span`
  display: inline-flex;
  position: relative;
  width: 62px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

const StyledCheckboxBase = styled(CheckboxBase)<Props>`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 0;
  top: 0;
  z-index: 1;
  ${p => getTransition(p, 'transform')};
`;

const Icon = styled<PartialProps, 'span'>('span')`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: ${p => p.theme.shadows[1]};
  background-color: ${p => p.theme.colors.common.white};
  ${p => getTransition(p, 'background-color')};
`;

const CheckedIcon = styled(Icon)<PartialProps>`
  background-color: ${p => p.theme.colors[p.variant].main};
`;

const Bar = styled<PartialProps, 'span'>('span')`
  display: block;
  width: 34px;
  height: 14px;
  border-radius: 7px;
  opacity: 0.3;
  ${bgColor};
  ${p => getTransition(p, 'background-color')};
`;

const CheckedCheckboxBaseStyle = css<PartialProps>`
  transform: translateX(14px);
  & + ${Bar} {
    opacity: 0.5;
  }
`;

export class Switch extends Component<Props> {
  static defaultProps = {
    variant: 'primary',
  };

  render() {
    const { variant, checked, className, ...next } = this.props;
    return (
      <Container className={className}>
        <StyledCheckboxBase
          variant={variant}
          checked={checked}
          icon={<Icon variant={variant} />}
          checkedIcon={<CheckedIcon variant={variant} />}
          checkedStyle={CheckedCheckboxBaseStyle}
          {...next}
        />
        <Bar checked={checked} variant={variant} />
      </Container>
    );
  }
}

export default Switch;
