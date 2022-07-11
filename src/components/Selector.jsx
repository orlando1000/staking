import { MenuItem, Select, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyVal } from './KeyVal';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CONTRACT_ADDRESSES } from '../utils/constants';

const durations = [
	//   {
	//     value: "Choose Duration",
	//     label: "Choose Duration",
	//   },
	// {
	//   label: "1 week",
	//   value: "12 APR",
	// },
	{
		label: 'duration_label_1',
		value: '15% APY',
		contract: CONTRACT_ADDRESSES.stakingContract_week,
	},
	{
		label: 'duration_label_2',
		value: '20% APY',
		contract: CONTRACT_ADDRESSES.stakingContract_month,
	},
	{
		label: 'duration_label_3',
		value: '25% APY',
		contract: CONTRACT_ADDRESSES.stakingContract_year,
	},
];

export function Selector({ updateContractAddr = (_) => {} }) {
	const theme = useTheme();

	const { t } = useTranslation(); // useTranslation hook

	const [duration, setDuration] = React.useState('');

	const handleChange = (event) => {
		setDuration(event.target.value);
	};

	return (
		<>
			<Select
				id='outlined-select-duration'
				select
				style={{
					backgroundColor: theme.palette.secondary.main,
					borderRadius: 5,
					padding: 0,
					background: `linear-gradient(to right, ${theme.palette.secondary.main} , ${theme.palette.primary.main})`,
				}}
				value={duration}
				variant='standard'
				displayEmpty
				fullWidth
				onChange={handleChange}
				disableUnderline
				endAdornment={
					<ArrowDropDownIcon
						style={{
							color: theme.palette.common.yellow,
						}}
					/>
				}
			>
				<MenuItem key={''} value={''}>
					<Typography
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
						fontSize={'12px'}
						padding='10px'
						// marginTop={"3px"}
						color='common.yellow'
					>
						{t('choose_duration_label')}
					</Typography>
				</MenuItem>
				{durations.map((option) => (
					<MenuItem
						onClick={() => {
							updateContractAddr(option.contract);
						}}
						key={option.value}
						value={option.value}
					>
						<KeyVal
							rootStyle={{
								width: '100%',
							}}
							property={t(option.label)}
							value={option.value}
						/>
					</MenuItem>
				))}
			</Select>
		</>
	);
}
