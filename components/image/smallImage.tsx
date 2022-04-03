import { useContext } from 'react';
import Image from 'next/image';

import { AnimationContext } from 'context/animationContext';
import { urlForImage } from '../../utils/sanity';

import styles from './image.module.scss';
import sectionStyles from '../contentSection/contentSection.module.scss';
import workStyles from '../workContent/workContent.module.scss';

interface ImgProps {
  alt: string;
  img: string;
}

export default function SmallImage({ img, alt }: ImgProps) {
  const { disableAnimations } = useContext(AnimationContext);
  const imgUrl = urlForImage(img).url();

  const getStyles = () => {
    if (disableAnimations)
      return `${styles.imageContainer} ${sectionStyles.imageContainer} ${workStyles.imageContainer}`;
    return `${styles.imageContainer} ${sectionStyles.imageContainer} ${workStyles.imageContainer} ${styles.animated}`;
  };

  return (
    <div className={getStyles()}>
      <Image
        src={imgUrl}
        alt={alt}
        width="200px"
        height="200px"
        objectFit="cover"
      />
    </div>
  );
}
