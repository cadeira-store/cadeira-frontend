import cn from 'classnames';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.scss';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(className, styles.header)} {...props}>
      Header
    </div>
  );
};
