import TextContainer from '../textContainer/textContainer';
import SmallImage from '../image/smallImage';

import styles from './contentSection.module.scss';

interface SectionProps {
  alt: string;
  img: string;
  children: string;
  title: string;
}

export default function PageSection2({
  img,
  alt,
  children,
  title,
}: SectionProps) {
  return (
    <div className={styles.container}>
      <SmallImage img={img} alt={alt} />
      <TextContainer title={title}>{children}</TextContainer>
    </div>
  );
}
