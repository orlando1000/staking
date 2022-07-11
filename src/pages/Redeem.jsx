import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { KeyVal } from '../components/KeyVal';
import { CButton, CInput } from '../components/styled-components';

export function Redeem({
	onClickBack,
	unlocked,
	earnings,
	userStakes,
	unstake,
	withdraw,
	valueAmount,
	onChangeAmount,
}) {
	const theme = useTheme();
	const { t } = useTranslation(); // useTranslation hook
	return (
		<>
			<Header title={t('title_reedem')} hideReferral={true} unlocked={unlocked} />
			<Box
				// border="1px solid red"
				style={{
					width: '90%',
					margin: '0px auto',
				}}
			>
				<Box mt={1} />
				<KeyVal property={t('card_staked_vft')} value={userStakes} />
				<Box mt={1} />

				<KeyVal property={t('card_earned_vft')} value={earnings} />
				<Box mt={1} />

				<CInput
					placeholder={t('placeholder_amount')}
					fullWidth
					disableUnderline
					value={valueAmount}
					onChange={onChangeAmount}
				/>
				<Box mt={2} />

				<Grid container direction={'column'} spacing={2}>
					<Grid item>
						<CButton
							fullWidth
							// disabled={parseInt(unlocked) == 0}
							onClick={unstake}
						>
							{t('text_unstake')}
						</CButton>
					</Grid>
					<Grid item>
						<CButton
							// disabled={parseInt(earnings) == 0}
							fullWidth
							onClick={withdraw}
						>
							{t('text_redeem')}
						</CButton>
					</Grid>
					<Grid item>
						<Button
							onClick={onClickBack}
							fullWidth
							style={{
								color: theme.palette.common.orange,
								textTransform: 'none',
							}}
							variant='text'
						>
							<Typography variant='subtitle1'>{t('back_link')}</Typography>
						</Button>
					</Grid>
				</Grid>
				<Box mt={2} />
			</Box>
		</>
	);
}
