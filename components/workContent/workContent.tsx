import { PortableText } from '@portabletext/react';
import SmallImage from '../image/smallImage';

import styles from './workContent.module.scss';

interface SectionProps {
  alt: string;
  content: any;
  img: any;
  title: string;
}

export default function CarouselSection({
  img,
  alt,
  title,
  content,
}: SectionProps) {
  return (
    <div className={styles.container}>
      <SmallImage img={img} alt={alt} />
      <div className={styles.textContainer}>
        <h2 className={styles.carouselTitle}>{title}</h2>
        <div className={styles.carouselContent}>
          <PortableText value={content} />
        </div>
      </div>
    </div>
  );
}
