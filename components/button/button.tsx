import Link from 'next/link';

import styles from './button.module.scss';

interface ButtonProps {
  target: string;
  children: string;
}

export default function LinkButton({ target, children }: ButtonProps) {
  return (
    <Link href={target}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
}
