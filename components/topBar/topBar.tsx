import styles from './topBar.module.scss';

import ToggleButton from '../toggleButton/toggleButton';

interface TopBarProps {
  animationsOn: boolean;
  animationToggle: () => void;
}

export default function TopBar({ animationsOn, animationToggle }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <a href="#main" className={styles.skipToMain}>
        Skip to main content
      </a>
      <div className={styles.animationToggle}>
        <span>animations {animationsOn ? `OFF` : `ON`}</span>
        <ToggleButton onClick={animationToggle} />
      </div>
    </div>
  );
}
