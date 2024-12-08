import { PropsWithChildren } from "react";
import styles from './Button.module.scss';

export const Button = ({
  children,
  ...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
)