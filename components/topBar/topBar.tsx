import styles from './topBar.module.scss';

interface TopBarProps {
  animationsOn: boolean;
  animationToggle: () => void;
}

export default function TopBar({ animationsOn, animationToggle }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <button className={styles.animationToggle} onClick={animationToggle}>
        Turn animations {animationsOn ? `off` : `on`}
      </button>
    </div>
  );
}
