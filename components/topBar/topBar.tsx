import styles from './topBar.module.scss';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <button className={styles.animationToggle}>Animations on</button>
    </div>
  );
}
