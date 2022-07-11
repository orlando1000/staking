import React, { useEffect } from "react"
import { FaLock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Banner = ({
	valueAmount,
	onChangeAmount,
	updateContractAddr,
	balance,
	userStakes,
	stake,
	totalStaked,
	stakeLabel,
	valueAmount2,
	onChangeAmount2,
	unstake,
	earnings,
	handlerWithdrawEarnings,
	setInAmount,
	setOutAmount
}) => {

	const { t } = useTranslation();
	useEffect(() => {
		updateContractAddr("0xc4cFaf481B906bE6Fb979304f7657952062430E1")
	}, [])
	return (
		<section className="staking-area" style={{ paddingTop: "200px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7" data-aos="fade-up">
						<div className="card no-hover staking-card single-staking">
							<h3 className="m-0">Token Balance</h3>
							<span className="balance">{balance} Monkey</span>
							<ul
								className="nav nav-tabs staking-tabs border-0 my-3 my-md-4"
								id="myTab"
								role="tablist"
							>
								<li className="nav-item" role="presentation">
									<button
										onClick={() => updateContractAddr("0xc4cFaf481B906bE6Fb979304f7657952062430E1")}
										className="tab-link active"
										id="tab-one-tab"
										data-bs-toggle="tab"
										href="#tab-one"
										role="tab"
										aria-controls="tab-one"
										aria-selected="true"
									>
										7 Days
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button
										onClick={() => updateContractAddr("0x197ae343f608eC11991d9eA10Ab0812a3eaa97c0")}
										className="tab-link"
										id="tab-two-tab"
										data-bs-toggle="tab"
										href="#tab-two"
										role="tab"
										aria-controls="tab-two"
										aria-selected="false"
									>
										14 Days
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button
										onClick={() => updateContractAddr("0x35f71166ADAFA865d81aC174DE7c1064Ca5E8764")}
										className="tab-link"
										id="tab-three-tab"
										data-bs-toggle="tab"
										href="#tab-three"
										role="tab"
										aria-controls="tab-three"
										aria-selected="false"
									>
										30 Days
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button
										onClick={() => updateContractAddr("0x64c96f5167c3E100946d03439d8700FCB71DC50D")}
										className="tab-link"
										id="tab-four-tab"
										data-bs-toggle="tab"
										href="#tab-four"
										role="tab"
										aria-controls="tab-four"
										aria-selected="false"
									>
										60 Days
									</button>
								</li>
							</ul>
							<div className="tab-content mt-md-3" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="tab-one"
									role="tabpanel"
									aria-labelledby="tab-one-tab"
								>
									<div className="staking-tab-content">
										<div className="info-box d-flex justify-content-between">
											<div className="info-left">
												<ul className="list-unstyled">
													<li>
														<strong>Lock period:</strong> 07 days
													</li>
													<li>
														<strong>
															Extends lock on registration:
														</strong>{" "}
														Yes
													</li>
													<li>
														<strong>Early unstake fee:</strong>{" "}
														30%
													</li>
													<li>
														<strong>Status:</strong> Unlocked
													</li>
												</ul>
											</div>
											<div className="info-right d-flex flex-column">
												<span>50%</span>
												<span>APY*</span>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="tab-two"
									role="tabpanel"
									aria-labelledby="tab-two-tab"
								>
									<div className="staking-tab-content">
										<div className="info-box d-flex justify-content-between">
											<div className="info-left">
												<ul className="list-unstyled">
													<li>
														<strong>Lock period:</strong> 14 days
													</li>
													<li>
														<strong>
															Extends lock on registration:
														</strong>{" "}
														Yes
													</li>
													<li>
														<strong>Early unstake fee:</strong>{" "}
														30%
													</li>
													<li>
														<strong>Status:</strong> Unlocked
													</li>
												</ul>
											</div>
											<div className="info-right d-flex flex-column">
												<span>75%</span>
												<span>APY*</span>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="tab-three"
									role="tabpanel"
									aria-labelledby="tab-three-tab"
								>
									<div className="staking-tab-content">
										<div className="info-box d-flex justify-content-between">
											<div className="info-left">
												<ul className="list-unstyled">
													<li>
														<strong>Lock period:</strong> 30 days
													</li>
													<li>
														<strong>
															Extends lock on registration:
														</strong>{" "}
														Yes
													</li>
													<li>
														<strong>Early unstake fee:</strong>{" "}
														30%
													</li>
													<li>
														<strong>Status:</strong> Unlocked
													</li>
												</ul>
											</div>
											<div className="info-right d-flex flex-column">
												<span>100%</span>
												<span>APY*</span>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="tab-four"
									role="tabpanel"
									aria-labelledby="tab-four-tab"
								>
									<div className="staking-tab-content">
										<div className="info-box d-flex justify-content-between">
											<div className="info-left">
												<ul className="list-unstyled">
													<li>
														<strong>Lock period:</strong> 60 days
													</li>
													<li>
														<strong>
															Extends lock on registration:
														</strong>{" "}
														No
													</li>
													<li>
														<strong>Early unstake fee:</strong>{" "}
														30%
													</li>
													<li>
														<strong>Status:</strong> Unlocked
													</li>
												</ul>
											</div>
											<div className="info-right d-flex flex-column">
												<span>125%</span>
												<span>APY*</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="input-box my-4">
								<div className="input-area d-flex flex-column flex-md-row mb-3">
									<div className="input-text">
										<input
											required
											type="number"
											placeholder="Enter Amount"
											value={valueAmount}
											onChange={onChangeAmount}
										/>
										<button onClick={() => setInAmount(balance)}>Max</button>
									</div>
									<button
										href="#"
										className="btn input-btn mt-2 mt-md-0 ms-md-3"
										onClick={stake}
									>
										{stakeLabel}
									</button>
								</div>
								<div className="input-area d-flex flex-column flex-md-row">
									<div className="input-text">
										<input
											value={valueAmount2}
											onChange={onChangeAmount2}
											type="number"
											placeholder="Enter Amount"
										/>
										<button onClick={() => setOutAmount(userStakes)}>Max</button>
									</div>
									<button
										onClick={unstake}
										className="btn input-btn mt-2 mt-md-0 ms-md-3"
									>
										Withdraw
									</button>
								</div>
							</div>
							<span>
								Once staked, we lock your tokens, but you still can
								participate in other IDOs.
							</span>
						</div>
					</div>
					<div className="col-12 col-md-5" data-aos="fade-up">
						<div className="staking-items mt-4 mt-md-0">
							<div className="card no-hover staking-card">
								<h3 className="m-0">{totalStaked} Monkey</h3>
								<p>Total Staked</p>
							</div>
							<div className="card no-hover staking-card my-4">
								<h3 className="m-0">{userStakes} Monkey</h3>
								<p>My Staked Monkey</p>
							</div>
							<div className="card no-hover staking-card">
								<span className="item-title mb-2">
									Your Pending earnings
								</span>
								<div className="input-area d-flex flex-column">
									<h4 className="price m-0">{earnings} Monkey</h4>
									<span className="reward my-2">
										Earnings are deposited daily.
									</span>
									<button onClick={handlerWithdrawEarnings} className="btn input-btn mt-2">
										<FaLock className="me-1" /> Claim
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
