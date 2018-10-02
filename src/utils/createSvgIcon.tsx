import React from 'react';
import SvgIcon, { Props as SvgIconProps } from '@src/components/SvgIcon/base';

function createSvgIcon(path: React.ReactNode, displayName: string) {
  const Icon: React.SFC<SvgIconProps> = props => <SvgIcon {...props}>{path}</SvgIcon>;

  Icon.displayName = `${displayName}Icon`;
  return Icon;
}

export default createSvgIcon;
