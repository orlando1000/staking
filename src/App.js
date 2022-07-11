import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState, Suspense } from 'react';
import body__background from "./assets/img/dark-brown.jpg";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './theme/global.css';
import { Box, useTheme, Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToaster } from './hooks/toaster';
import { WalletModel } from './components/WalletModel';
import { useCustomWeb3React } from './hooks/useCustomWeb3React';
import { useEagerConnect } from './hooks/walletConnect';
import { allowance, approve, balanceOf } from './contracts/functions/erc20';
import { ZERO_ADDRESS } from './utils/constants';
import {
	calculateEarnings,
	checkUnstakeStatus,
	stake,
	stakes,
	unstake,
	withdrawEarnings,
} from './contracts/functions/stakingContract';
import { selectDurationMsg } from './hooks/swal2';





function App() {
	AOS.init();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		window.addEventListener("load", () => {
			setLoading(true);
		});
	}, []);


	/* for web 3 */
	const { account, chainId } = useCustomWeb3React();
	const { } = useToaster();
	const _ = useEagerConnect();

	const [contractAddress, setContractAddress] = useState('');
	const [random, setRandom] = useState(Math.random());

	const [inAmount, setInAmount] = useState('');
	const [outAmount, setOutAmount] = useState('');

	const [isApproved, setIsApproved] = useState(false);

	const [refAddr, setRefAddr] = useState('');
	const [gRefAddr, setGRefAddr] = useState(account ?? '');

	const [balance, setBalance] = useState('0');
	const [userStakes, setUserStakes] = useState('0');
	const [earnings, setEarnings] = useState('0');
	const [totalStaked, setUserUnstakeStatus] = useState('0');

	const [page, setPage] = useState(0);
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	const handlerRedeem = () => setPage(1);
	const handlerRefferral = () => setPage(2);
	const handlerBack = () => setPage(0);
	const handlerOpenWallets = () => setOpen(true);

	const handlerInAmount = (e) => setInAmount(e.target.value);
	const handlerOutAmount = (e) => setOutAmount(e.target.value);

	const handlerRefAddr = (e) => setRefAddr(e.target.value);
	const handlerGRefAddr = (e) => setGRefAddr(e.target.value);

	const handlerContractAddr = (addr) => setContractAddress(addr);

	const handlerRandom = () => setRandom(Math.random());

	const handlerStake = async () => {
		stake(contractAddress, account, refAddr ? refAddr : ZERO_ADDRESS, inAmount, () => {
			handlerRandom();
		});
	};

	const handlerApprove = async () => {
		if (contractAddress !== '') {
			approve(contractAddress, account, () => {
				handlerRandom();
			});
		} else {
			selectDurationMsg();
		}
	};

	const handlerUnstake = async () => {
		unstake(contractAddress, account, outAmount, () => {
			handlerRandom();
		});
	};

	const handlerIsApproved = async () => {
		if (account && contractAddress !== '') {
			setIsApproved(await allowance(account, contractAddress));
		}
	};

	const handlerWithdrawEarnings = async () => {
		withdrawEarnings(contractAddress, account, () => {
			handlerRandom();
		});
	};

	const init = async () => {
		if (account) {
			let _balance = await balanceOf(account);
			setBalance(_balance);
			if (contractAddress) {
				let _stakes = await stakes(contractAddress, account);
				let _unstakeStatus = await checkUnstakeStatus(contractAddress);
				let _earnings = await calculateEarnings(contractAddress, account);

				// console.log(_balance, _stakes, _unstakeStatus, _earnings);
				setUserStakes(_stakes);
				setUserUnstakeStatus(_unstakeStatus);
				setEarnings(_earnings);
			}
		}
	};

	useEffect(() => {
		init();
		handlerIsApproved();
	}, [account, chainId, contractAddress, random]);

	useEffect(() => {
		if (account) {
			setGRefAddr(account);
		}
	}, [account]);

	useEffect(() => {
		let path = window.location.pathname;
		let _ref = path.toLowerCase().slice(1);
		let isRef = /^0x[0-9a-f]{40}$/.test(_ref);
		if (isRef) {
			setRefAddr(_ref);
		} else {
			window.history.replaceState(undefined, undefined, '/');
		}
	}, []);

	return (
		<Suspense fallback={<div>Loading</div>}>
			<>
				<WalletModel open={open} setOpen={setOpen} />
				<ToastContainer style={{ fontSize: '0.9rem' }} />
				<div
					id="gameon-preloader"
					className={`gameon-preloader ${loading ? "loaded" : ""}`}
				>
					<div className="preloader-animation">
						<div className="spinner"></div>
						<p className="fw-5 text-center text-uppercase">Loading</p>
					</div>

					<div className="loader-animation">
						<div className="row h-100">
							<div className="col-3 single-loader p-0">
								<div className="loader-bg"></div>
							</div>

							<div className="col-3 single-loader p-0">
								<div className="loader-bg"></div>
							</div>

							<div className="col-3 single-loader p-0">
								<div className="loader-bg"></div>
							</div>

							<div className="col-3 single-loader p-0">
								<div className="loader-bg"></div>
							</div>
						</div>
					</div>
				</div>
				<main style={{ backgroundImage: `url(${body__background})` }}>
					<div className="main">
						<Header
							connectMetaMask={handlerOpenWallets}
							account={account}
						/>
						<Banner
							valueAmount={inAmount}
							onChangeAmount={handlerInAmount}
							valueRefAddr={refAddr}
							totalStaked={totalStaked}
							onChangeRefAddr={handlerRefAddr}
							onClickRedeem={contractAddress !== '' ? handlerRedeem : selectDurationMsg}
							onClickReferral={handlerRefferral}
							updateContractAddr={handlerContractAddr}
							// unlocked={"1000.55"}
							unlocked={totalStaked}
							balance={balance}
							userStakes={userStakes}
							stake={
								isApproved
									? contractAddress !== ''
										? handlerStake
										: selectDurationMsg
									: handlerApprove
							}
							stakeLabel={isApproved ? "Stake" : "Approve"}
							valueAmount2={outAmount}
							onChangeAmount2={handlerOutAmount}
							unstake={handlerUnstake}
							earnings={earnings}
							handlerWithdrawEarnings={handlerWithdrawEarnings}
							setInAmount={setInAmount}
							setOutAmount={setOutAmount}
						/>
						<Cta />
						<Footer />
					</div>
				</main>
			</>
		</Suspense>
	);
}

export default App;
