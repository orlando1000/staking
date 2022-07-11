import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { CHAIN_ID, INFURA_KEY } from "./constants";

const REACT_APP_NETWORK_URL1 = `https://mainnet.infura.io/v3/${INFURA_KEY}`;
const REACT_APP_NETWORK_URL4 = `https://rinkeby.infura.io/v3/${INFURA_KEY}`;

const RPC_URLS = {
  1: REACT_APP_NETWORK_URL1,
  4: REACT_APP_NETWORK_URL4,
  56: "https://bsc-dataseed.binance.org/",
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 3, 97, 56],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { [CHAIN_ID]: RPC_URLS[CHAIN_ID] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[CHAIN_ID],
  appName: "App",
});

export const desktopWalletList = [
  {
    name: "Metamask",
    connector: injected,
    connectorType: InjectedConnector,
  },
  {
    name: "WalletConnect",
    connector: walletconnect,
  },
  {
    name: "Coinbase",
    connector: walletlink,
  },
];

export const walletList = desktopWalletList;
