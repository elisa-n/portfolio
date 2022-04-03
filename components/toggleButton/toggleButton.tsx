import { useState } from 'react';

import styles from './toggleButton.module.scss';

interface ToggleButtonProps {
  onClick: () => void;
  isOn: boolean;
}

export default function ToggleButton({ onClick, isOn }: ToggleButtonProps) {
  const [toggleOn, setToggleState] = useState(isOn);

  const handleOnClick = () => {
    setToggleState(!toggleOn);
    onClick();
  };

  return (
    <button
      aria-label={`Animations ${toggleOn ? `on` : `off`}. Turn animations ${
        toggleOn ? `off` : `on`
      } `}
      className={toggleOn ? styles.toggleOn : styles.toggleOff}
      onClick={handleOnClick}
    >
      <span className={styles.toggleCircle} />
    </button>
  );
}
