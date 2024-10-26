import type { AppProps } from 'next/app'
import '../styles/App.scss'
import '../styles/responsive.scss'
import "bootstrap/dist/css/bootstrap.min.css";

 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}