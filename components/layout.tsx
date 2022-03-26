import Footer from './footer';
import Header from './header';
import Meta from './meta';
import TopBar from './topBar';

import styles from './layout.module.scss';

type LayoutProps = {
  preview: boolean;
  children: any;
};

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header>
        <TopBar />
        <Header />
        <Meta />
      </header>
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
}
