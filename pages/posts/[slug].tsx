import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { CMS_NAME } from '../../utils/constants';
import { postQuery, postSlugsQuery } from '../../utils/queries';
import { urlForImage, usePreviewSubscription } from '../../utils/sanity';
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from '../../utils/sanity.server';

type Post = {
  data: any;
  preview: any;
};

export default function Post({ data = {}, preview }: Post) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        {post.coverImage && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(post.coverImage)
              .width(1200)
              .height(627)
              .fit(`crop`)
              .url()}
          />
        )}
      </Head>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params!.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};
