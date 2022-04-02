import { useState } from 'react';

import styles from './toggleButton.module.scss';

interface ToggleButtonProps {
  onClick: () => void;
}

export default function ToggleButton({ onClick }: ToggleButtonProps) {
  const [toggleOn, setToggleState] = useState(true);

  const handleOnClick = () => {
    setToggleState(!toggleOn);
    onClick();
  };

  return (
    <span
      role={`button`}
      className={toggleOn ? styles.toggleOn : styles.toggleOff}
      onClick={handleOnClick}
    >
      <span className={styles.toggleCircle} />
    </span>
  );
}
