import Web3 from "web3";
import { CONTRACT_ADDRESSES } from "../utils/constants";

import StakingContractABI from "./abis/StakingContract.json";
import ERC20ABI from "./abis/ERC20.json";

let web3;

try {
  web3 = new Web3(window?.ethereum);
  // web3Infura = new Web3(infuraUrl);
} catch (e) {
  // console.log("Connect Web3", e);
}

export const setWeb3Provider = (provider) => {
  web3 = new Web3(provider);
};

export const stakingContract = (contractAddress) => {
  let contract;
  try {
    if (window?.web3?.currentProvider || web3) {
      contract = new web3.eth.Contract(StakingContractABI, contractAddress);
    } else {
      // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
      throw new Error("web3 not found");
    }
    return contract;
  } catch (e) {
    // console.log("contract", e);
  }
};

// export const stakingContract_year = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_year
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

// export const stakingContract_month = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_month
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

// export const stakingContract_week = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_week
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

export const erc20 = () => {
  let contract;
  try {
    if (window?.web3?.currentProvider || web3) {
      contract = new web3.eth.Contract(
        ERC20ABI,
        CONTRACT_ADDRESSES.tokenContract
      );
    } else {
      // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
      throw new Error("web3 not found");
    }
    return contract;
  } catch (e) {
    // console.log("contract", e);
  }
};

export const getBalance = async (account) => {
  try {
    return await web3.eth.getBalance(account);
  } catch (e) {
    // console.log("balance", e);
  }
};

export const toEther = (val) => {
  try {
    return web3.utils.fromWei(val, "ether");
  } catch {
    return "0";
  }
};
export const toWei = (val) => {
  try {
    return Web3.utils.toWei(val, "ether");
  } catch {
    return "0";
  }
};

export const getWeb3 = () => web3;
