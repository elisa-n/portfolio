import { useEffect } from 'react';
import AOS from 'aos';
import { urlForImage } from '../../utils/sanity';

import CarouselSection from '../workContent/workContent';

import 'aos/dist/aos.css';
import styles from './workSection.module.scss';

interface Post {
  title: string;
  coverImage: any;
  date: string;
  author: {
    name: string;
    picture: any;
  };
  slug: string;
  excerpt: string;
  content: string;
}

interface SectionProps {
  posts: Post[];
  disableAnimations: boolean;
}

export default function Carousel({ posts, disableAnimations }: SectionProps) {
  useEffect(() => {
    AOS.init({
      disable: disableAnimations,
      once: true,
    });
  }, [disableAnimations]);

  const getStyles = (id: number) => {
    if (id % 2 === 0) return styles.contentWrapper;
    return `${styles.contentWrapper} ${styles.contentWrapperOdd}`;
  };

  return (
    <div className={styles.carousel}>
      <h2 className={styles.carouselTitle}>Work</h2>
      {posts.map((post: Post, id) => {
        return (
          <div
            className={getStyles(id)}
            id={`${id}`}
            key={post.slug}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in"
            data-aos-duration="600"
          >
            <CarouselSection
              img={urlForImage(post.coverImage).url()}
              alt={`Cover image`}
              title={post.title}
              content={post.content}
            />
          </div>
        );
      })}
    </div>
  );
}
