import Head from 'next/head';

import Footer from '../footer/footer';
import Header from '../header/header';
import Meta from '../utilityComponents/meta';
import TopBar from '../topBar/topBar';

import { FooterContent, HeaderContent } from 'utils/contentTypes';

import styles from './layout.module.scss';

interface LayoutProps {
  headerContent: HeaderContent;
  footerContent: FooterContent;
  preview: boolean;
  children: any;
}

export default function Layout({
  headerContent,
  footerContent,
  children,
}: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header>
        <Head>
          <title>Portfolio</title>
          <link
            rel="preload"
            href="/fonts/Alata/Alata-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NotoSans/NotoSans-Light.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <TopBar />
        <Header header={headerContent} />
        <Meta />
      </header>
      <main id="main" className={styles.mainContainer}>
        {children}
      </main>
      <Footer content={footerContent} />
    </div>
  );
}
