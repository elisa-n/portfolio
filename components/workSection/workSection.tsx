import WorkContent from '../workContent/workContent';

import { Project } from '../../utils/contentTypes';

import styles from './workSection.module.scss';

interface SectionProps {
  projects: Project[];
}

export default function WorkSection({ projects }: SectionProps) {
  const getStyles = (id: number) => {
    if (id % 2 === 0) return styles.contentWrapper;
    return `${styles.contentWrapper} ${styles.contentWrapperOdd}`;
  };

  return (
    <section className={styles.workSection} aria-label={`Project portfolio`}>
      <h2 className={styles.workSectionTitle}>Projects</h2>
      <ul aria-label={`Projects`}>
        {projects.map((project: Project, id) => {
          return (
            <li
              aria-label={project.title}
              className={getStyles(id)}
              id={`${id}`}
              key={project.slug}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <WorkContent
                img={project.coverImage}
                alt={`Cover image`}
                title={project.title}
                content={project.content}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
