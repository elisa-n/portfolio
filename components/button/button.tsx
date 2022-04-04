import Link from 'next/link';

import styles from './button.module.scss';

interface ButtonProps {
  children: string;
  helptext: string;
  target: string;
}

export default function LinkButton({
  target,
  helptext,
  children,
}: ButtonProps) {
  return (
    <Link href={target} passHref={true}>
      <a className={`${styles.button} ${styles.visible}`}>
        <span className={styles.visuallyHidden}>{helptext}</span>
        {children}
      </a>
    </Link>
  );
}
