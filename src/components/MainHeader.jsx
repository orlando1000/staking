import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';

import {
	Button,
	Container,
	Drawer,
	Tab,
	Tabs,
	useTheme,
	List,
	ListItem,
	ListItemButton,
	IconButton,
	useMediaQuery,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { useNavigate, useLocation } from "react-router-dom";

import logo from '../assets/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import discord from '../assets/discord.png';
import { CButton } from './styled-components';
import LanguageSelector from './LanguageSelector';

const useStyles = makeStyles({
	marginTop: (props) => ({
		...props?.toolbar,
	}),
	selected: {
		color: 'red',
	},
});

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function MainHeader({ connectMetaMask = () => {}, account }) {
	const theme = useTheme();
	const classes = useStyles(theme.mixins);

	const { t } = useTranslation(); // useTranslation hook

	const _sm = useMediaQuery(theme.breakpoints.down('sm'));

	const [tabValue, setTabValue] = React.useState(0);

	const handleChangeTab = (event, newValue) => {
		setTabValue(newValue);
	};

	// const social = (
	//   <Box margin="0px 10px" display={"flex"} alignItems={"center"}>
	//     <a
	//       href="#"
	//       target={"_blank"}
	//       style={{
	//         margin: "0px 5px",
	//         display: "flex",
	//         alignItems: "center",
	//         justifyContent: "center",
	//       }}
	//     >
	//       <TwitterIcon style={{ color: "white" }} />
	//     </a>
	//     <a
	//       style={{
	//         margin: "0px 5px",
	//         display: "flex",
	//         alignItems: "center",
	//         justifyContent: "center",
	//       }}
	//       href="#"
	//       target={"_blank"}
	//     >
	//       <TelegramIcon style={{ color: "white" }} />
	//     </a>
	//     <a
	//       style={{
	//         margin: "0px 6px",
	//         // backgroundColor: "red",
	//         display: "flex",
	//         alignItems: "center",
	//         justifyContent: "center",
	//       }}
	//       href="#"
	//       target={"_blank"}
	//     >
	//       <img src={discord} width="20px" alt="discord" />
	//     </a>
	//   </Box>
	// );

	// const connectButton = (
	//   <Button
	//     // style={{
	//     //   maxHeight: 40,
	//     //   background: "#bf1e2e",
	//     // }}
	//     sx={{
	//       border: `0.5px solid ${theme.palette.primary.main}`,
	//     }}
	//     onClick={connectMetaMask}
	//     variant="outlined"
	//   >
	//     {account
	//       ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
	//       : "Connect Wallet"}
	//   </Button>
	// );

	// const smallScreen = (
	//   <>
	//     <Drawer anchor={"right"} open={drawer} onClose={handleCloseDrawer}>
	//       <List>
	//         {navs.map((nav, idx) => (
	//           <ListItem
	//             key={idx}
	//             onClick={() => {
	//               // navigate(nav.link);
	//               handleCloseDrawer();
	//             }}
	//             disablePadding
	//           >
	//             <ListItemButton
	//               style={{
	//                 color: "white",
	//                 minWidth: 250,
	//                 padding: "10px 10px",
	//                 backgroundColor: "rgba(255,255,255,0.05)",
	//                 marginTop: 5,
	//                 alignItems: "center",
	//                 justifyContent: "center",
	//               }}
	//             >
	//               {nav.name}
	//             </ListItemButton>
	//           </ListItem>
	//         ))}
	//         <ListItem disablePadding>
	//           <ListItemButton
	//             style={{
	//               color: "white",
	//               minWidth: 250,
	//               padding: "10px 10px",
	//               backgroundColor: "rgba(255,255,255,0.05)",
	//               marginTop: 5,
	//               alignItems: "center",
	//               justifyContent: "center",
	//             }}
	//           >
	//             {social}
	//           </ListItemButton>
	//         </ListItem>
	//         <ListItem disablePadding>
	//           <ListItemButton
	//             style={{
	//               color: "white",
	//               minWidth: 250,
	//               padding: "10px 10px",
	//               backgroundColor: "rgba(255,255,255,0.05)",
	//               marginTop: 5,
	//               alignItems: "center",
	//               justifyContent: "center",
	//             }}
	//           >
	//             {connectButton}
	//           </ListItemButton>
	//         </ListItem>
	//       </List>
	//     </Drawer>
	//     <Box style={{ marginLeft: "auto" }}>
	//       <IconButton onClick={handleOpenDrawer}>
	//         <MenuIcon style={{ color: "white" }} />
	//       </IconButton>
	//     </Box>
	//   </>
	// );

	// const largeScreen = (
	//   <>
	//     <Tabs
	//       style={{ marginLeft: 20 }}
	//       value={tabValue}
	//       onChange={handleChangeTab}
	//       aria-label="basic tabs example"
	//       textColor="white"
	//       TabIndicatorProps={{
	//         hidden: true,
	//       }}
	//     >
	//       {navs.map((nav, idx) => (
	//         <Tab
	//           label={nav.name}
	//           {...a11yProps(idx)}
	//           onClick={() => {
	//             // navigate(nav.link);
	//             handleCloseDrawer();
	//           }}
	//           sx={{
	//             "&.Mui-selected": {
	//               color: "primary.main",
	//             },
	//           }}
	//         />
	//       ))}
	//     </Tabs>

	//     <Box
	//       style={{
	//         marginLeft: "auto",
	//         display: "flex",
	//         alignItems: "center",
	//       }}
	//     >
	//       {social}

	//       <Button
	//         // style={{
	//         //   maxHeight: 40,
	//         //   background: "#bf1e2e",
	//         // }}
	//         sx={{
	//           border: `0.5px solid ${theme.palette.primary.main}`,
	//         }}
	//         onClick={connectMetaMask}
	//         variant="outlined"
	//       >
	//         {account
	//           ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
	//           : "Connect Wallet"}
	//       </Button>
	//     </Box>
	//   </>
	// );

	return (
		<>
			<Box sx={{ flexGrow: 1, background: '#191301' }}>
				<AppBar elevation={0} color='transparent' position='static'>
					<Toolbar>
						<Container style={{ display: 'flex', alignItems: 'center' }} maxWidth='lg'>
							<Box>
								<img src={logo} alt='logo' width='50px' />
							</Box>
							<Box
								style={{
									marginLeft: 'auto',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								{/* <Typography
                  // variant="body2"
                  style={{
                    marginRight: 20,
                    border: "1px solid #F28F21",
                    padding: 3,
                    borderRadius: 5,
                    color: "#FFE599",
                    fontSize: 10,
                  }}
                >
                  ENG
                </Typography> */}
								<box style={{ marginRight: 10 }}>
									<LanguageSelector />
								</box>

								<CButton onClick={connectMetaMask} variant='outlined'>
									<Typography variant='body2'>
										{account
											? account.slice(0, 8) + '...' + account.slice(account.length - 5)
											: t('connect_wallet')}
									</Typography>
								</CButton>
							</Box>
						</Container>
					</Toolbar>
				</AppBar>
			</Box>
			{/* <Box mt={"50px"} /> */}
		</>
	);
}
