import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.separator} />
      <ul aria-label="Social media links">
        <li>
          <a href="https://www.linkedin.com/in/elisanaskali/">LinkedIN</a>
        </li>
        <li>
          <a href="https://github.com/elisa-n/">GitHub</a>
        </li>
      </ul>
      Have a nice day!
    </footer>
  );
}
