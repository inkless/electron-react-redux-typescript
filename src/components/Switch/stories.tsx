import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '@src/components/Switch/Switch';

type Props = {
  variant: 'primary' | 'secondary';
};

class SwitchContainer extends Component<Props, { checked: boolean }> {
  static defaultProps = {
    variant: 'primary',
  };

  readonly state = {
    checked: false,
  };

  handleOnChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <Switch
        variant={this.props.variant}
        checked={this.state.checked}
        onChange={this.handleOnChange}
      />
    );
  }
}

storiesOf('Components', module).add('Switch', () => (
  <div>
    <h3>Internal State:</h3>
    <Switch />
    <Switch defaultChecked={true} variant="secondary" />

    <h3>With DDAU:</h3>
    <SwitchContainer />
    <SwitchContainer variant="secondary" />
  </div>
));
