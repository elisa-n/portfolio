import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Carousel from '../components/workSection/workSection';
import ContentSection from '../components/contentSection/contentSection';
import { indexQuery } from '../utils/queries';
import { getClient, overlayDrafts } from '../utils/sanity.server';

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

  const toggleAnimations = () => {
    console.log(`tap`);
    setAnimations(!disableAnimations);
  };

  return (
    <>
      <Layout
        preview={preview}
        animationsOn={!disableAnimations}
        animationToggle={toggleAnimations}
      >
        <Head>
          <title>Elisa</title>
        </Head>
        <ContentSection
          img="/images/profile.jpg"
          alt="elisa"
          title="Me, hello!"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContentSection>
        <Carousel posts={allPosts} disableAnimations={disableAnimations} />
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
