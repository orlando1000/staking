import React from 'react';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import { MenuItem, Select, useTheme } from '@mui/material';
// import { KeyVal } from "./KeyVal";
import LanguageValue from './LanguageValue';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const languages = [
	{ value: 'en', country_code: 'EN', label: 'english' },
	{ value: 'fr', country_code: 'FR', label: 'français' },
	{ value: 'zh', country_code: 'CN', label: '简体中文' },
	{ value: 'es', country_code: 'ES', label: 'español' },
	{ value: 'ar', country_code: 'AR', label: 'عربي' },
	{ value: 'de', country_code: 'DE', label: 'Deutsch' },
	{ value: 'hi', country_code: 'IN', label: 'हिन्दी' },
	{ value: 'pt', country_code: 'PT', label: 'português' },
	{ value: 'ru', country_code: 'RU', label: 'русский' },
	{ value: 'bn', country_code: 'BD', label: 'বাংলা' },
	{ value: 'ja', country_code: 'JA', label: '日本語' },
];

export default function LanguageSelector({ selectedLanguage = (_) => {} }) {
	const theme = useTheme();

	const currentLanguage = Cookies.get('i18next') ? Cookies.get('i18next') : 'en';
	const languageCode = languages.find((option) => option.value === currentLanguage);
	const [language, setLanguage] = React.useState(currentLanguage);

	const handleChange = (event) => {
		setLanguage(event.target.value);
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
					marginRight: 40,
					background: `linear-gradient(to right, ${theme.palette.secondary.main} , ${theme.palette.primary.main})`,
				}}
				// label={}
				value={language}
				variant='outlined'
				displayEmpty
				fullWidth
				onChange={handleChange}
				disableUnderline
				endAdornment={false}
			>
				{languages.map((option) => (
					<MenuItem
						onClick={() => {
							selectedLanguage(option.value);
							i18next.changeLanguage(option.value);
						}}
						key={option.value}
						value={option.value}
					>
						<LanguageValue
							rootStyle={{
								width: '100%',
							}}
							property={option.label}
							value={option.value}
						/>
					</MenuItem>
				))}
			</Select>
		</>
	);
}
