import React, { Component } from 'react';
import styled from '@src/styled-components';
import { FlattenInterpolation } from 'styled-components';

export type Props = {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  className?: string;
  checkedStyle?: FlattenInterpolation<any>[];
};

const Container = styled<Props, 'span'>('span')`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${p => (p.checked ? p.checkedStyle : '')};
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

class CheckboxBase extends Component<Props, { checked: boolean }> {
  readonly state = {
    checked: false,
  };

  private isControlled = false;

  constructor(props: Props) {
    super(props);

    this.isControlled = props.checked != null;
    if (!this.isControlled) {
      this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (!this.isControlled) {
      this.setState({
        checked,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(e, checked);
    }
  };

  render() {
    const { icon, checkedIcon, checked: checkedProp, className, checkedStyle } = this.props;
    const checked = this.isControlled ? checkedProp : this.state.checked;
    const checkboxIcon = checked ? checkedIcon : icon;

    return (
      <Container checked={checked} className={className} checkedStyle={checkedStyle}>
        {checkboxIcon}
        <Input checked={checked} type="checkbox" onChange={this.handleOnChange} />
      </Container>
    );
  }
}

export default CheckboxBase;
