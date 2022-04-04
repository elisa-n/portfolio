import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../../utils/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon.svg"
      />
      <link rel="icon" type="image/svg" href="/favicon/favicon.svg" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <link rel="mask-icon" href="/favicon/favicon.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.svg" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`A simple portfolio app`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
    </Head>
  );
}
