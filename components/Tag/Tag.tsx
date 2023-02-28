import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({
  size = 'm',
  children,
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.gray]: color == 'gray',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
        [styles.red]: color == 'red',
      })}
    >
      {href ? <a>{children}</a> : <></>}
      {children}
    </div>
  );
};
