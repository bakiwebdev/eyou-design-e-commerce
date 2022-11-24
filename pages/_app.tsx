import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'

const popppins = Poppins({
  weight: ['100', '200', '300', '400', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={popppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
