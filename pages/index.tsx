import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import AOS from 'aos';
import Layout from '../components/layout/layout';
import WorkSection from '../components/workSection/workSection';
import ContentSection from '../components/contentSection/contentSection';
import { indexQuery } from '../utils/queries';
import { getClient, overlayDrafts } from '../utils/sanity.server';

import 'aos/dist/aos.css';

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

interface IndexProps {
  allPosts: Post[];
  preview: boolean;
}

export default function Index({ allPosts, preview }: IndexProps) {
  const [disableAnimations, setAnimations] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: disableAnimations,
      once: true,
    });
    AOS.refresh();
  }, [disableAnimations]);

  const toggleAnimations = () => {
    setAnimations(!disableAnimations);
    console.log(`animations disabled: ${disableAnimations}`);
  };

  return (
    <>
      <Layout
        preview={preview}
        animationsOn={disableAnimations}
        animationToggle={toggleAnimations}
      >
        <ContentSection
          img="/images/profile.jpg"
          alt="elisa"
          title="Me, hello!"
        >
          Lorem <a href="https://google.com">ipsum</a> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </ContentSection>
        <WorkSection posts={allPosts} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
};
