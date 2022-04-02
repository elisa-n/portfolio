import Image from 'next/image';

import { urlForImage } from '../../utils/sanity';
import { HeaderContent } from '../../utils/contentTypes';

import styles from './header.module.scss';

interface HeaderProps {
  header: HeaderContent;
}

export default function Header({ header }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerImageContainer}>
        <Image
          src={urlForImage(header.image).url()}
          alt="header image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <span className={styles.halfTrapezoid}>
        <span className={styles.triangleDown} />
        <span className={styles.triangleUp} />
      </span>
      <header className={styles.titleContainer}>
        <h1 className={styles.title}>{header.title}</h1>
        <p className={styles.subtitle}>{header.subtitle}</p>
      </header>
    </div>
  );
}
