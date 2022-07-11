import { useState, useEffect } from "react";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { setWeb3Provider } from "../contracts/getContracts";
import { injected } from "../utils/connectors";
import { useCustomWeb3React } from "./useCustomWeb3React";

export function useEagerConnect() {
  const { activate, active, status } = useCustomWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized && status !== "disconnected") {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [status]);

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export const useActivateWallet = () => {
  const { activate, library, account, status } = useCustomWeb3React();

  useEffect(() => {
    if (library) {
      setWeb3Provider(library._provider);
    }
  }, [library, account, status]);

  return async (connector, onClose = (e) => {}) => {
    try {
      if (
        connector instanceof WalletConnectConnector &&
        connector.walletConnectProvider?.wc?.uri
      ) {
        connector.walletConnectProvider = undefined;
      }
      await activate(connector ? connector : injected, undefined, true);
      onClose();
    } catch (e) {
      onClose(e);
      // console.log(e);
    }
  };
};
