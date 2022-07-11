import { useWeb3React } from "@web3-react/core";

export const safeLocalStorageGetItem = (name) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(name);
  }
};

export const safeLocalStorageSetItem = (name, value) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(name, value);
  }
};

export const useCustomWeb3React = () => {
  const {
    account: oAccount,
    chainId: oChainId,
    activate: oActivate,
    deactivate: oDeactivate,
    connector,
    library,
  } = useWeb3React();

  const status = safeLocalStorageGetItem("status");
  const account = status == "connected" && oAccount ? oAccount : undefined;
  const chainId = status == "connected" && oChainId ? oChainId : undefined;

  const deactivate = () => {
    safeLocalStorageSetItem("status", "disconnected");
    oDeactivate();
  };

  const activate = async (
    connector,
    errorCallBack = () => {},
    errorThrow = false
  ) => {
    safeLocalStorageSetItem("status", "connected");
    await oActivate(connector, errorCallBack, errorThrow);
  };

  return {
    account,
    chainId,
    connector,
    library,
    status,
    activate,
    deactivate,
  };
};

// import { useWeb3React } from "@web3-react/core";
// import { useEffect, useState } from "react";

// export const useCustomWeb3React = () => {
//   const {
//     account: oAccount,
//     chainId: oChainId,
//     activate: oActivate,
//     deactivate: oDeactivate,
//     connector,
//     library,
//   } = useWeb3React();

//   const [status, setStatus] = useState("");
//   const [account, setAccount] = useState(
//     status == "connected" && oAccount ? oAccount : undefined
//   );
//   const [chainId, setChainId] = useState(
//     status == "connected" && oChainId ? oChainId : undefined
//   );

//   const deactivate = () => {
//     localStorage.setItem("status", "disconnected");
//     oDeactivate();
//     setStatus("disconnected");
//     setAccount(undefined);
//     setChainId(undefined);
//   };

//   const activate = async (
//     connector,
//     errorCallBack = () => {},
//     errorThrow = false
//   ) => {
//     localStorage.setItem("status", "connected");
//     await oActivate(connector, errorCallBack, errorThrow);
//     setStatus("connected");
//     console.log(oAccount, oChainId);
//     setAccount(oAccount);
//     setChainId(oChainId);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setStatus(localStorage.getItem("status") ?? "disconnected");
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined" && status !== "disconnected") {
//       setAccount(oAccount);
//       setChainId(oChainId);
//       console.log("ch=>", account, chainId, oAccount);
//     }
//   }, [account, chainId, status]);

//   return {
//     account,
//     chainId,
//     connector,
//     library,
//     status,
//     activate,
//     deactivate,
//   };
// };
