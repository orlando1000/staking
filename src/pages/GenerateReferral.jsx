import { Box, Button, Grid, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { CButton, CInput } from '../components/styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function GenerateReferral({ onClickBack, valueGRefAddr, onChangeGRefAddr }) {
	const [generate, setGenerate] = useState(false);
	const theme = useTheme();
	const { t } = useTranslation(); // useTranslation hook

	const handlerGenerateHide = () => setGenerate(false);
	const handlerGenerateShow = () => setGenerate(true);

	const handlerOnChangeRef = (e) => {
		onChangeGRefAddr(e);
		handlerGenerateHide();
	};

	const handlerBack = () => {
		onClickBack();
		handlerGenerateHide();
	};

	return (
		<>
			<Header title={t('title_referal')} hideReferral hideUnlocked />
			<Box
				// border="1px solid red"
				style={{
					width: '90%',
					margin: '0px auto',
				}}
			>
				<Box mt={1} />
				<CInput
					placeholder={t('placeholder_busd_address')}
					fullWidth
					disableUnderline
					value={`${valueGRefAddr}`}
					onChange={handlerOnChangeRef}
				/>

				{generate && (
					<>
						<Box mt={1} />
						<CInput
							id='gen-ref'
							placeholder='Generate'
							fullWidth
							disableUnderline
							value={`${window.location.origin}/${valueGRefAddr}`}
							endAdornment={
								<IconButton
									onClick={() => {
										document.getElementById('gen-ref').select();
										document.execCommand('copy');
									}}
								>
									<ContentCopyIcon style={{ color: theme.palette.common.orange }} />
								</IconButton>
							}
						/>
					</>
				)}

				<Box mt={4} />
				<Grid container direction={'column'} spacing={2}>
					<Grid item>
						<CButton fullWidth onClick={handlerGenerateShow}>
							{t('generate_link')}
						</CButton>
					</Grid>
					<Grid item>
						<Button
							onClick={handlerBack}
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
