import {
  transactionFailed,
  transactionRejected,
  transactionSuccess,
} from "../../hooks/swal2";
import { toEther, toWei } from "../../utils/helpers";
import { getWeb3, stakingContract } from "../getContracts";

export const stakes = async (contractAddress, account) => {
  try {
    let contract = stakingContract(contractAddress);
    return parseFloat(
      toEther(await contract?.methods.stakes(account).call())
    ).toFixed(5);
  } catch (e) {
    //console.log("stakes", e);
    return "0";
  }
};


export const checkUnstakeStatus = async (contractAddress, account) => {
  try {
    let contract = stakingContract(contractAddress);
    return parseFloat(
      toEther(await contract?.methods.totalStaked().call())
    ).toFixed(5);
  } catch (e) {
    //console.log("checkUnstakeStatus", e);
    return "0";
  }
};

export const calculateEarnings = async (contractAddress, account) => {
  try {
    let contract = stakingContract(contractAddress);
    return parseFloat(
      toEther(await contract?.methods.calculateEarnings(account).call())
    ).toFixed(5);
  } catch (e) {
    //console.log("calculateEarnings", e);
    return "0";
  }
};

// --------------------------------------------------- write funcs

export const stake = async (
  contractAddress,
  account,
  referrer,
  amount,
  cb = () => {}
) => {
  try {
    let txHash;
    let contract = stakingContract(contractAddress);
    await contract?.methods
      .stake(toWei(amount))
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        txHash = hash;
      })
      .then((receipt) => {
        transactionSuccess();
      })
      .catch((e) => {
        if (e.code === 4001) {
          transactionRejected();
        } else if (e?.message?.includes("not mined within 50 blocks")) {
          const web3 = getWeb3();
          if (web3) {
            const handle = setInterval(() => {
              web3.eth.getTransactionReceipt(txHash).then((res) => {
                if (res != null && res.blockNumber > 0) {
                  clearInterval(handle);
                  if (res.status) {
                    transactionSuccess();
                  } else {
                    transactionFailed();
                  }
                }
              });
            });
          }
        } else {
          transactionFailed();
        }
      });
    cb();
  } catch (e) {
    //console.log("stake", e);
  }
};

export const unstake = async (
  contractAddress,
  account,
  amount,
  cb = () => {}
) => {
  try {
    let txHash;
    let contract = stakingContract(contractAddress);
    await contract?.methods
      .unstake(toWei(amount))
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        txHash = hash;
      })
      .then((receipt) => {
        transactionSuccess();
      })
      .catch((e) => {
        if (e.code === 4001) {
          transactionRejected();
        } else if (e?.message?.includes("not mined within 50 blocks")) {
          const web3 = getWeb3();
          if (web3) {
            const handle = setInterval(() => {
              web3.eth.getTransactionReceipt(txHash).then((res) => {
                if (res != null && res.blockNumber > 0) {
                  clearInterval(handle);
                  if (res.status) {
                    transactionSuccess();
                  } else {
                    transactionFailed();
                  }
                }
              });
            });
          }
        } else {
          transactionFailed();
        }
      });
    cb();
  } catch (e) {
    //console.log("unstake", e);
  }
};

export const withdrawEarnings = async (
  contractAddress,
  account,
  cb = () => {}
) => {
  try {
    let txHash;
    let contract = stakingContract(contractAddress);
    await contract?.methods
      .withdrawEarnings()
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        txHash = hash;
      })
      .then((receipt) => {
        transactionSuccess();
      })
      .catch((e) => {
        if (e.code === 4001) {
          transactionRejected();
        } else if (e?.message?.includes("not mined within 50 blocks")) {
          const web3 = getWeb3();
          if (web3) {
            const handle = setInterval(() => {
              web3.eth.getTransactionReceipt(txHash).then((res) => {
                if (res != null && res.blockNumber > 0) {
                  clearInterval(handle);
                  if (res.status) {
                    transactionSuccess();
                  } else {
                    transactionFailed();
                  }
                }
              });
            });
          }
        } else {
          transactionFailed();
        }
      });
    cb();
  } catch (e) {
    //console.log("withdrawEarnings", e);
  }
};
