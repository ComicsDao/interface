import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Navbar } from "../components/shared"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <div className=" pt-[95px]">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
