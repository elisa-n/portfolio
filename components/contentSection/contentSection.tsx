import TextContainer from '../textContainer/textContainer';
import SmallImage from '../image/smallImage';

import styles from './contentSection.module.scss';

interface SectionProps {
  alt: string;
  img: string;
  children: any;
  title: string;
}

export default function ContentSection({
  img,
  alt,
  children,
  title,
}: SectionProps) {
  return (
    <section className={styles.container} aria-label={title}>
      <TextContainer title={title}>{children}</TextContainer>
      <SmallImage img={img} alt={alt} />
    </section>
  );
}
