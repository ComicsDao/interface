import { useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const ConnectedButton = ({ children }) => {
  const { isConnected } = useAccount()
  return isConnected ? children : <ConnectButton />
}

export default ConnectedButton
