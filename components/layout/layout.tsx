import Footer from '../footer/footer';
import Header from '../header/header';
import Meta from '../utilityComponents/meta';
import TopBar from '../topBar/topBar';

import styles from './layout.module.scss';

interface LayoutProps {
  animationsOn: boolean;
  animationToggle: () => void;
  preview: boolean;
  children: any;
}

export default function Layout({
  animationToggle,
  animationsOn,
  preview,
  children,
}: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header>
        <TopBar animationsOn={animationsOn} animationToggle={animationToggle} />
        <Header />
        <Meta />
      </header>
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
}
