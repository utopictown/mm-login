import { createClient, defaultChains, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

// Set up client
export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimChainChangedDisconnect: false,
      },
    }),
  ],
  provider,
  webSocketProvider,
});
