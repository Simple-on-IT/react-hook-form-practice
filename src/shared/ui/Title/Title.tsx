import classNames from 'classnames';
import styles from './Title.module.scss';
import { PropsWithChildren } from 'react';

export const Title = ({
  className,
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>) => {
  return (
    <h1 className={classNames(styles.title, className)} {...props}>{children}</h1>
  )
}