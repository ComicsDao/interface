import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { ScreenSizeProvider } from "../provider/ScreenSizeProvider"
import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "ComicsDAO",
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="m-auto max-w-screen-2xl">
      <ScreenSizeProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            theme={lightTheme({
              accentColor: "#333",
              borderRadius: "large",
              fontStack: "system",
              overlayBlur: "small"
            })}
            chains={chains}
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </ScreenSizeProvider>
    </div>
  )
}

export default MyApp
