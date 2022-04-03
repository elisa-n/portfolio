import { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { AnimationContext } from 'context/animationContext';

import ToggleButton from '../toggleButton/toggleButton';

import styles from './topBar.module.scss';

export default function TopBar() {
  const { disableAnimations, toggleAnimations } = useContext(AnimationContext);

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
        <span>animations {disableAnimations ? `OFF` : `ON`}</span>
        <ToggleButton onClick={toggleAnimations} isOn={!disableAnimations} />
      </div>
    </div>
  );
}
