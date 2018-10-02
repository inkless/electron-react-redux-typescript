import { StringAnyMap } from '@src/types/utils';

function omit(obj: StringAnyMap, props: string[]) {
  const newObj: StringAnyMap = {};

  Object.keys(obj).forEach(key => {
    if (props.includes(key)) return;
    newObj[key] = obj[key];
  });

  return newObj;
}

/**
 * We have to omit properties from styled-system to prevent it be passed down
 * to native dom element.
 *
 * It will trigger errors like:
 * Warning: React does not recognize the `borderRadius` prop on a DOM element.
 *
 * The reason is in styled-component's BaseStyleComponent, it has:
 * ```
 * createElement(target, propsForElement)
 * ```
 * where target could be a ReactComponent instead of primitive element.
 * If the target has some special attribute like `borderRadius`, the error will
 * occur.
 *
 * To workaround this issue, we have to omit tons of possible properties. They
 * are not valid properities for htmlElement anyway.
 *
 * @todo use `import { styles } from 'styled-system'`
 * After @types/styled-system is updated to match the latest styled-system, we
 * can use `Object.keys(styles)` directly
 *
 * @param {StringAnyMap} props
 */
export const filterProps = (props: StringAnyMap) =>
  omit(props, [
    'theme',
    'space',
    'width',
    'fontSize',
    'textColor',
    'bgColor',
    'color',
    'fontFamily',
    'textAlign',
    'lineHeight',
    'fontWeight',
    'fontStyle',
    'letterSpacing',
    'display',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
    'sizeWidth',
    'sizeHeight',
    'size',
    'ratioPadding',
    'ratio',
    'verticalAlign',
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexBasis',
    'flexDirection',
    'flex',
    'justifySelf',
    'alignSelf',
    'order',
    'gridGap',
    'gridColumnGap',
    'gridRowGap',
    'gridColumn',
    'gridRow',
    'gridAutoFlow',
    'gridAutoColumns',
    'gridAutoRows',
    'gridTemplateColumns',
    'gridTemplateRows',
    'gridTemplateAreas',
    'gridArea',
    'border',
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borders',
    'borderColor',
    'borderRadius',
    'boxShadow',
    'opacity',
    'overflow',
    'background',
    'backgroundImage',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'position',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left',
    'textStyle',
    'colorStyle',
    'buttonStyle',
  ]);
