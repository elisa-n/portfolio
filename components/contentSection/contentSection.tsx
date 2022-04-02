import { PortableText } from '@portabletext/react';

import TextContainer from '../textContainer/textContainer';
import SmallImage from '../image/smallImage';

import { AboutMe } from '../../utils/contentTypes';

import styles from './contentSection.module.scss';

interface SectionProps {
  content: AboutMe;
}

export default function ContentSection({ content }: SectionProps) {
  return (
    <section className={styles.container} aria-label={content.title}>
      <TextContainer title={content.title}>
        <PortableText value={content.content} />
      </TextContainer>
      <SmallImage img={content.image} alt={content.imageAlt} />
    </section>
  );
}
