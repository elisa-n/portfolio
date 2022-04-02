import styles from './textContainer.module.scss';

interface ContainerProps {
  children: string;
  title: string;
}

export default function TextContainer({ children, title }: ContainerProps) {
  return (
    <div className={styles.container} aria-labelledby={`title`}>
      <h3 id={`title`} className={styles.sectionTitle}>
        {title}
      </h3>
      <p className={styles.sectionContent}>{children}</p>
    </div>
  );
}
