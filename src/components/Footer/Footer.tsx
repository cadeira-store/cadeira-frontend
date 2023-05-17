import cn from 'classnames';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.scss';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      Footer
    </footer>
  );
};
