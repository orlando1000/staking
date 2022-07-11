import { Box, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { KeyVal } from '../components/KeyVal';
import { Selector } from '../components/Selector';
import { CButton, CButtonOutlined, CInput } from '../components/styled-components';

export function Staking({
	onClickRedeem,
	onClickReferral,
	valueAmount,
	onChangeAmount,
	valueRefAddr,
	onChangeRefAddr,
	updateContractAddr,
	unlocked,
	balance,
	userStakes,
	stake,
	stakeLabel,
}) {
	const { t } = useTranslation(); // useTranslation hook

	return (
		<>
			<Header onClickReferral={onClickReferral} title={t('title_staking')} unlocked={unlocked} />
			<Box
				// border="1px solid red"
				style={{
					width: '90%',
					margin: '0px auto',
				}}
			>
				<Box mt={1} />
				{/* <KeyVal property="Balance VFT" value={balance} /> */}
				<KeyVal property={t('card_balance_vft')} value={balance} />
				<Box mt={1} />

				{/* <KeyVal property="Staked VFT" value={userStakes} /> */}
				<KeyVal property={t('card_staked_vft')} value={userStakes} />
				<Box mt={1} />

				<Selector updateContractAddr={updateContractAddr} />
				<Box mt={1} />

				<CInput
					// placeholder="Referrer's Address"
					placeholder={t('placeholder_address')}
					fullWidth
					disableUnderline
					value={valueRefAddr}
					onChange={onChangeRefAddr}
				/>
				<Box mt={1} />

				<CInput
					// placeholder="Enter Amount"
					placeholder={t('placeholder_amount')}
					fullWidth
					disableUnderline
					value={valueAmount}
					onChange={onChangeAmount}
				/>
				<Box mt={3} />

				<Grid container spacing={2}>
					<Grid item xs sm md lg xl>
						<CButton fullWidth onClick={stake}>
							{t(stakeLabel)}
						</CButton>
					</Grid>
					<Grid item xs sm md lg xl>
						<CButtonOutlined onClick={onClickRedeem} fullWidth>
							{/* Redeem */}
							{t('title_reedem')}
						</CButtonOutlined>
					</Grid>
				</Grid>
				<Box mt={2} />
			</Box>
		</>
	);
}
