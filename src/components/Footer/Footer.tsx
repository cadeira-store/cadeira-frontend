import cn from 'classnames';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      Footer
    </footer>
  );
};
