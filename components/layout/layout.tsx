import Head from 'next/head';

import Footer from '../footer/footer';
import Header from '../header/header';
import Meta from '../utilityComponents/meta';
import TopBar from '../topBar/topBar';

import { FooterContent, HeaderContent } from 'utils/contentTypes';

import styles from './layout.module.scss';

interface LayoutProps {
  animationsOn: boolean;
  animationToggle: () => void;
  headerContent: HeaderContent;
  footerContent: FooterContent;
  preview: boolean;
  children: any;
}

export default function Layout({
  animationToggle,
  animationsOn,
  headerContent,
  footerContent,
  preview,
  children,
}: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header>
        <Head>
          <title>Elisa</title>
        </Head>
        <TopBar animationsOn={animationsOn} animationToggle={animationToggle} />
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
