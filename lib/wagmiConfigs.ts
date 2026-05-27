import { base } from "wagmi/chains";
import { createConfig, createStorage, cookieStorage, http } from "wagmi";
import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";
import { baseAccount, injected, walletConnect } from "wagmi/connectors";
import { APP_DISPLAY_NAME, getWalletConnectProjectId } from "@/lib/appConfig";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();
const walletConnectProjectId = getWalletConnectProjectId();

/** Base App / Farcaster mini app — embedded wallet only. */
export const miniAppWagmiConfig = createConfig({
  chains: [base],
  connectors: [farcasterMiniApp()],
  transports: { [base.id]: http() },
});

const webConnectors = [
  injected({ target: "rabby" }),
  injected({ target: "metaMask" }),
  ...(walletConnectProjectId
    ? [
        walletConnect({
          projectId: walletConnectProjectId,
          showQrModal: true,
          metadata: {
            name: APP_DISPLAY_NAME,
            description: APP_DISPLAY_NAME,
            url: siteUrl,
            icons: [`${siteUrl}/forest-icon.svg`],
          },
        }),
      ]
    : []),
  baseAccount({
    appName: APP_DISPLAY_NAME,
  }),
];

/** Browser — Rabby, MetaMask, optional WalletConnect, Base smart wallet (passkey). */
export const webWagmiConfig = createConfig({
  chains: [base],
  connectors: webConnectors,
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  transports: { [base.id]: http() },
});
