import cn from 'classnames';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(className, styles.header)} {...props}>
      Header
    </div>
  );
};
