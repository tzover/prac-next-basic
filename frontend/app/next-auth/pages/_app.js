import { SessionProvider } from 'next-auth/react'
import Navber from '../components/Navber'
import '../styles/globals.css'
import '../styles/Navber.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navber />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
