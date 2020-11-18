import { globalStyles } from '../styles/global.css';
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

export default function App({ Component, pageProps }) {
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    );
}
