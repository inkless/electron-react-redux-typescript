import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBoxIcon from '@src/components/SvgIcon/CheckBox';
import CheckBoxOutlinedIcon from '@src/components/SvgIcon/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@src/components/SvgIcon/CheckBoxOutlineBlank';

storiesOf('Components', module).add('SvgIcon', () => (
  <div>
    <h3>CheckBox</h3>
    <CheckBoxOutlineBlankIcon fontSize={4} color="red" />
    <CheckBoxIcon />
    <CheckBoxOutlinedIcon />
    <CheckBoxOutlineBlankIcon />

    <CheckBoxOutlinedIcon fontSize={7} variant="secondary" />
    <CheckBoxIcon fontSize={7} color="#07c" />
    <CheckBoxOutlineBlankIcon fontSize={7} color="rgba(0, 0, 0, 0.54)" />
  </div>
));
