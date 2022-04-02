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
    <div className={styles.container}>
      <SmallImage img={img} alt={alt} />
      <div className={styles.textContainer}>
        <h2 className={styles.workTitle}>{title}</h2>
        <div className={styles.workContent}>
          <PortableText value={content} />
        </div>
      </div>
    </div>
  );
}
