import { PortableText } from '@portabletext/react';
import ErrorPage from 'next/error';

import { useRouter } from 'next/router';

import { FooterContent, HeaderContent } from 'utils/contentTypes';
import { getClient, overlayDrafts, sanityClient } from 'utils/sanity.server';
import {
  footerQuery,
  headerQuery,
  projectQuery,
  projectSlugQuery,
} from 'utils/queries';

import LinkButton from 'components/button/button';
import Layout from '../../components/layout/layout';
import SmallImage from 'components/image/smallImage';

import styles from '../../styles/project.module.scss';

interface ProjectProps {
  footerProps: FooterContent[];
  headerProps: HeaderContent[];
  preview: boolean;
  data: any;
}

const defaultHeader = {
  image: undefined,
  title: `Portfolio`,
  subtitle: `Frontend Development`,
};

const defaultFooter = {
  content: `Have a nice day`,
};

export default function Project({
  data = {},
  headerProps = [defaultHeader],
  footerProps = [defaultFooter],
}: ProjectProps) {
  const router = useRouter();
  const slug = data?.project?.project?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const project = data?.project?.project;

  return (
    <Layout
      headerContent={headerProps[0]}
      footerContent={footerProps[0]}
      preview={false}
    >
      <div className={styles.projectWrapper}>
        {router.isFallback ? (
          <div> Loading...</div>
        ) : (
          <>
            <aside className={styles.projectSide}>
              {project.coverImage && (
                <SmallImage img={project.coverImage} alt={project?.imageAlt} />
              )}
            </aside>
            <article id={`main`} className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project?.title}</h2>
              <PortableText value={project?.content} />
            </article>
          </>
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <LinkButton target={`/`}>Return</LinkButton>
      </div>
    </Layout>
  );
}

export async function getStaticProps({
  params = { slug: `` },
  preview = false,
}) {
  const project = await getClient(preview).fetch(projectQuery, {
    slug: params.slug,
  });
  const headerProps = overlayDrafts(
    await getClient(preview).fetch(headerQuery),
  );
  const footerProps = overlayDrafts(
    await getClient(preview).fetch(footerQuery),
  );

  return {
    props: {
      footerProps,
      headerProps,
      data: {
        project,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugQuery);
  return {
    paths: paths.map((slug = {}) => ({ params: { slug } })),
    fallback: true,
  };
}
