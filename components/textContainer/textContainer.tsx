import styles from './textContainer.module.scss';

interface ContainerProps {
  children: string;
  title: string;
}

export default function TextContainer({ children, title }: ContainerProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionContent}>{children}</p>
    </div>
  );
}
