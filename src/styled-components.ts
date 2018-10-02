import * as styledComponents from 'styled-components';
import { theme } from '@src/theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

export type ThemedProps<P> = styledComponents.ThemedStyledProps<P, typeof theme>;

export { theme, css, injectGlobal, keyframes, ThemeProvider };
export default styled;
