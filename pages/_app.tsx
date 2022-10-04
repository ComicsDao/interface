import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Navbar } from "../components/shared"
import { ScreenSizeProvider } from "../provider/ScreenSizeProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="m-auto max-w-screen-2xl">
      <Navbar />
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </div>
  )
}

export default MyApp
