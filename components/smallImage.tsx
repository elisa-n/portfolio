import Image from 'next/image';

import styles from './image.module.scss';
import sectionStyles from './pageSection.module.scss';

interface ImgProps {
  alt: string;
  img: string;
}

export default function SmallImage({ img, alt }: ImgProps) {
  return (
    <div className={`${styles.imageContainer} ${sectionStyles.imageContainer}`}>
      <Image
        src={img}
        alt={alt}
        width="200px"
        height="200px"
        objectFit="cover"
      />
    </div>
  );
}
