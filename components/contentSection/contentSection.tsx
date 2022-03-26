import TextContainer from '../textContainer/textContainer';
import SmallImage from '../image/smallImage';

import styles from './contentSection.module.scss';

interface SectionProps {
  alt: string;
  img: string;
  children: string;
  title: string;
}

export default function ContentSection({
  img,
  alt,
  children,
  title,
}: SectionProps) {
  return (
    <div className={styles.container}>
      <TextContainer title={title}>{children}</TextContainer>
      <SmallImage img={img} alt={alt} />
    </div>
  );
}
