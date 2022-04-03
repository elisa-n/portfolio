import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import AOS from 'aos';
import { AnimationContext } from 'context/animationContext';
import Layout from '../components/layout/layout';
import WorkSection from '../components/workSection/workSection';
import ContentSection from '../components/contentSection/contentSection';
import {
  aboutMeQuery,
  footerQuery,
  headerQuery,
  indexQuery,
} from '../utils/queries';
import { getClient, overlayDrafts } from '../utils/sanity.server';

import {
  AboutMe,
  FooterContent,
  HeaderContent,
  ProjectContent,
} from '../utils/contentTypes';

import 'aos/dist/aos.css';

interface IndexProps {
  aboutMe: AboutMe[];
  allProjects: ProjectContent[];
  footerContent: FooterContent[];
  headerContent: HeaderContent[];
  preview: boolean;
}

export default function Index({
  allProjects,
  aboutMe,
  headerContent,
  footerContent,
  preview,
}: IndexProps) {
  const { disableAnimations } = useContext(AnimationContext);

  useEffect(() => {
    AOS.init({
      disable: disableAnimations,
      once: true,
    });
    AOS.refresh();
  }, [disableAnimations]);

  return (
    <>
      <Layout
        footerContent={footerContent[0]}
        headerContent={headerContent[0]}
        preview={preview}
      >
        <ContentSection content={aboutMe[0]} />
        <WorkSection projects={allProjects} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery));
  const aboutMe = overlayDrafts(await getClient(preview).fetch(aboutMeQuery));
  const headerContent = overlayDrafts(
    await getClient(preview).fetch(headerQuery),
  );
  const footerContent = overlayDrafts(
    await getClient(preview).fetch(footerQuery),
  );

  return {
    props: { allProjects, aboutMe, headerContent, footerContent, preview },
  };
};
