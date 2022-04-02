import Image from 'next/image';
import { urlForImage } from '../../utils/sanity';

import styles from './image.module.scss';
import sectionStyles from '../contentSection/contentSection.module.scss';
import workStyles from '../workContent/workContent.module.scss';

interface ImgProps {
  alt: string;
  img: string;
}

export default function SmallImage({ img, alt }: ImgProps) {
  const imgUrl = urlForImage(img).url();

  return (
    <div
      className={`${styles.imageContainer} ${sectionStyles.imageContainer} ${workStyles.imageContainer}`}
    >
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
