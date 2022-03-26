import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.separator} />
      <a href="https://www.linkedin.com/in/elisanaskali/">LinkedIN</a>
      <a href="https://github.com/elisa-n/">GitHub</a>
      Have a nice day!
    </footer>
  );
}
