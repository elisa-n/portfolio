import { urlForImage } from '../../utils/sanity';

import WorkContent from '../workContent/workContent';

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
}

export default function WorkSection({ posts }: SectionProps) {
  const getStyles = (id: number) => {
    if (id % 2 === 0) return styles.contentWrapper;
    return `${styles.contentWrapper} ${styles.contentWrapperOdd}`;
  };

  return (
    <div className={styles.workSection}>
      <h2 className={styles.workSectionTitle}>Work</h2>
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
            <WorkContent
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
