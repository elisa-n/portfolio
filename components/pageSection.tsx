import TextContainer from './textContainer';
import SmallImage from './smallImage';

import styles from './pageSection.module.scss';

interface SectionProps {
  alt: string;
  img: string;
  children: string;
  title: string;
}

export default function PageSection({
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
