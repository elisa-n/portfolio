import Footer from '../footer/footer';
import Header from '../header/header';
import Meta from '../utilityComponents/meta';
import TopBar from '../topBar/topBar';

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
