import '../styles/globals.css' // only place to import global css
import '../styles/global.fonts.css'
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
