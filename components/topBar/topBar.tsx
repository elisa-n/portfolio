import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '../toggleButton/toggleButton';

import styles from './topBar.module.scss';

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
      <span className={styles.homeLinkWrapper}>
        <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
        <Link href={`/`}>
          <a className={styles.homeLink}>Home</a>
        </Link>
      </span>
      <div className={styles.animationToggle}>
        <span>animations {animationsOn ? `OFF` : `ON`}</span>
        <ToggleButton onClick={animationToggle} />
      </div>
    </div>
  );
}
