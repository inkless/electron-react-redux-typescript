import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '@src/components/Checkbox/Checkbox';

class CheckboxContainer extends Component<{}, { checked: boolean }> {
  readonly state = {
    checked: false,
  };

  handleOnChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return <Checkbox checked={this.state.checked} onChange={this.handleOnChange} />;
  }
}

storiesOf('Components', module).add('Checkbox', () => (
  <div>
    <h3>Internal State:</h3>
    <Checkbox />
    <Checkbox variant="secondary" />
    <Checkbox />

    <h3>With DDAU</h3>
    <CheckboxContainer />
  </div>
));
