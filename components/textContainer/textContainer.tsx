import styles from './textContainer.module.scss';

interface ContainerProps {
  children: any;
  title: string;
}

export default function TextContainer({ children, title }: ContainerProps) {
  return (
    <div className={styles.container} aria-labelledby={`title`}>
      <h2 id={title} className={styles.sectionTitle}>
        {title}
      </h2>
      <span className={styles.sectionContent}>{children}</span>
    </div>
  );
}
