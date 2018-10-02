import { injectGlobal } from '@src/styled-components';
import AvantGardeFont from '@src/assets/Avant_Garde_Gothic_LT_Medium.ttf';
import LatoFont from '@src/assets/LatoLatin-Regular.woff2';
import { theme } from '@src/theme';

export default function injectStyle() {
  injectGlobal`
    @font-face {
      font-family: ${theme.fonts.AvantGarde};
      src: url('${AvantGardeFont}') format('truetype');
    }
    @font-face {
      font-family: ${theme.fonts.Lato};
      src: url('${LatoFont}') format('woff2');
    }

    body {
      font-family: ${theme.fonts.font};
    }
  `;
}
