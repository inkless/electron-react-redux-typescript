import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@src/styled-components';
import { theme } from '@src/theme';
import injectStyle from '@src/renderer/injectStyle';

injectStyle();

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global configuration for the info addon across all of your stories.
addDecorator(
  withInfo({
    inline: true,
    // typescript docgen cannot generate proptypes correctly
    // so turn it off for now
    // propTables: false,
  })
);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);
