import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerImageContainer}>
        <Image
          src="/images/viljami1.jpg"
          alt="header image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className={styles.halfTrapezoid}>
        <span className={styles.triangleDown} />
        <span className={styles.triangleUp} />
      </span>
      <header className={styles.titleContainer}>
        <h1 className={styles.title}>Elisa</h1>
        <p className={styles.subtitle}>
          Front-end <br />
          developement <br /> And cats
        </p>
      </header>
    </div>
  );
}
