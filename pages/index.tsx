import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import PageSection from '../components/pageSection';
import PageSection2 from '../components/pageSection2';
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
}

interface IndexProps {
  allPosts: Post[];
  preview: boolean;
}

export default function Index({ allPosts, preview }: IndexProps) {
  const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Elisa</title>
        </Head>
        <PageSection img="/images/profile.jpg" alt="elisa" title="Me, hello!">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PageSection>
        <PageSection2 img="/images/profile.jpg" alt="elisa" title="Me, hello!">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PageSection2>
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
