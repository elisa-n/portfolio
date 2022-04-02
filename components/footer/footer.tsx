import { PortableText } from '@portabletext/react';
import { FooterContent } from '../../utils/contentTypes';

import styles from './footer.module.scss';

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span className={styles.separator} />
      <PortableText value={content.content} />
    </footer>
  );
}
