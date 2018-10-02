import React, { Component } from 'react';
import styled, { ThemedProps } from '@src/styled-components';
import CheckboxBase from './base';
import CheckBoxIcon from '@src/components/SvgIcon/CheckBox';
import CheckBoxOutlineBlankIcon from '@src/components/SvgIcon/CheckBoxOutlineBlank';

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

const StyledCheckboxBase = styled(CheckboxBase)`
  width: 48px;
  height: 48px;
`;

export class Checkbox extends Component<Props> {
  static defaultProps = {
    variant: 'primary',
  };

  render() {
    const { variant, checked, className, ...next } = this.props;
    return (
      <StyledCheckboxBase
        className={className}
        checked={checked}
        icon={<CheckBoxOutlineBlankIcon color="rgba(0, 0, 0, 0.54)" />}
        checkedIcon={<CheckBoxIcon variant={variant} />}
        {...next}
      />
    );
  }
}

export default Checkbox;
