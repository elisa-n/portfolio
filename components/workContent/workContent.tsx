import { PortableText } from '@portabletext/react';
import SmallImage from '../image/smallImage';

import styles from './workContent.module.scss';

interface SectionProps {
  alt: string;
  content: any;
  img: any;
  title: string;
}

export default function WorkContent({
  img,
  alt,
  title,
  content,
}: SectionProps) {
  return (
    <article className={styles.container} aria-label={title}>
      <SmallImage img={img} alt={alt} />
      <div className={styles.textContainer}>
        <h3 id={title} className={styles.workTitle}>
          {title}
        </h3>
        <div className={styles.workContent}>
          <PortableText value={content} />
        </div>
      </div>
    </article>
  );
}
