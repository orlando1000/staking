import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import logo from "../assets/img/logo/logo.png";
const Header = ({ connectMetaMask = () => { }, account }) => {
	const [headerHide, setHeaderHide] = useState(false);
	const { t } = useTranslation();
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setHeaderHide(true);
			} else {
				setHeaderHide(false);
			}
		});

	}, []);

	return (
		<>
			<header id="header">
				<nav
					data-aos="zoom-out"
					data-aos-delay="800"
					className={`navbar gameon-navbar navbar-expand ${headerHide ? "d-none" : "d-flex"
						}`}
				>
					<div className="container header">
						<a className="navbar-brand" href="index.html">
							<img src={logo} alt="Brand Logo" />
						</a>

						<div className="ml-auto"></div>

						<ul className="navbar-nav items mx-auto">
							<li className="nav-item">
								<a href="index.html" className="nav-link">
									Home
								</a>
							</li>
							<li className="nav-item dropdown">
								<a href="#" className="nav-link">
									Staking
								</a>
							</li>
							<li className="nav-item dropdown">
								<a href="#" className="nav-link">
									Launchpad
								</a>
							</li>
							<li className="nav-item dropdown">
								<a href="#" className="nav-link">
									Litepaper
								</a>
							</li>
							<li className="nav-item">
								<a href="contact.html" className="nav-link">
									NFT Marketplace
								</a>
							</li>
						</ul>

						<ul className="navbar-nav toggle">
							<li className="nav-item">
								<a
									href="#"
									className="nav-link"
									data-bs-toggle="modal"
									data-bs-target="#menu"
								>
									<AiOutlineMenu />
								</a>
							</li>
						</ul>

						<ul className="navbar-nav action">
							<li className="nav-item ml-2">
								<button onClick={connectMetaMask} className="btn ml-lg-auto btn-bordered-white">
									{/* <BiWallet className="mr-md-2" /> Wallet Connect */}
									{account
										? account.slice(0, 8) + '...' + account.slice(account.length - 5)
										: t('Connect Wallet')}
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div id="menu" className="modal fade p-0">
				<div className="modal-dialog dialog-animated">
					<div className="modal-content h-100">
						<div className="modal-header" data-bs-dismiss="modal">
							Menu <AiOutlineCloseCircle />
						</div>
						<div className="menu modal-body">
							<div className="row w-100">
								<div className="items p-0 col-12 text-center">
									<ul className="navbar-nav items mx-auto">
										<li className="nav-item">
											<a href="index.html" className="nav-link">
												Home
											</a>
										</li>
										<li className="nav-item dropdown">
											<a href="#" className="nav-link">
												Staking
											</a>
										</li>
										<li className="nav-item dropdown">
											<a href="#" className="nav-link">
												Launchpad
											</a>
										</li>
										<li className="nav-item dropdown">
											<a href="#" className="nav-link">
												Litepaper
											</a>
										</li>
										<li className="nav-item">
											<a href="contact.html" className="nav-link">
												NFT Marketplace
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
