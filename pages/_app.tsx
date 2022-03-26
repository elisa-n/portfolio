import { AppProps } from 'next/app';

import '../styles/reset.scss';
import '../styles/index.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
