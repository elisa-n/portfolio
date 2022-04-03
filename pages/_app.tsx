import { AppProps } from 'next/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { AnimationCtxtProvider } from '../context/animationContext';

import '../styles/reset.scss';
import '../styles/index.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimationCtxtProvider>
      <Component {...pageProps} />
    </AnimationCtxtProvider>
  );
}

export default App;
