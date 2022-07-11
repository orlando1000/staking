import Web3 from 'web3';
// import { provider } from "web3-core";
import { UnsupportedChainIdError } from '@web3-react/core';
import {
	NoEthereumProviderError,
	UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { setWeb3Provider } from '../contracts/getContracts';

export const getLibrary = (provider) => {
	setWeb3Provider(provider);
	return new Web3(provider);
};

export const getErrorMessage = (error) => {
	if (error instanceof NoEthereumProviderError) {
		return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
	} else if (error instanceof UnsupportedChainIdError) {
		return "You're connected to an unsupported network.";
	} else if (error instanceof UserRejectedRequestErrorInjected) {
		return 'Please authorize this website to access your BSC account.';
	} else if (error?.message && error?.code == 4001) {
		return 'User rejected transaction.';
	} else {
		console.error(error);
		return 'An unknown error occurred. Check the console for more details.';
	}
};
