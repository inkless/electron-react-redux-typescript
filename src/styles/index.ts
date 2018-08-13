import * as styledComponents from 'styled-components';
import { theme, ThemeInterface } from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { theme, css, injectGlobal, keyframes, ThemeProvider };
export default styled;
