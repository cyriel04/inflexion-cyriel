import { Home } from '@mui/icons-material'
import {
	Card,
	cardClasses,
	CardContent,
	cardContentClasses,
	Divider,
	IconButton,
	iconButtonClasses,
	List,
	listClasses,
	ListItem,
	ListItemButton,
	listItemButtonClasses,
	ListItemIcon,
	listItemIconClasses,
	ListItemText,
	styled,
	Typography
} from '@mui/material'

import IFButton from './IFButton'
import Docs from '../assets/docs-bg.svg'
import IFLogo from './IFLogo'
import IFLink from './IFLink'

const IFSideBar = () => {
	return (
		<StyledSideBar className="sidebar">
			<div className="logo-container">
				<IFLogo focusedBackground />
				<Divider sx={{ margin: '26px 0 22px 0' }} />
			</div>

			<List>
				{[
					{ label: 'Dashboard', link: '/' },
					{ label: 'Tables', link: '/tables' },
					{ label: 'Billing', link: '/billing' },
					{ label: 'RTL', link: '/rtl' }
				].map(({ label, link }, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton selected={label === 'Dashboard'} disableGutters href={link}>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText
								primary={
									<IFLink component="div" sx={{ color: '#A0AEC0', fontSize: '12px' }}>
										{label}
									</IFLink>
								}
								sx={{
									marginLeft: '12px'
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>

			<Typography
				variant="body1"
				sx={{
					marginLeft: '32px',
					marginRight: '16px',
					color: '#2D3748',
					fontWeight: 700,
					fontSize: '12px'
				}}
			>
				ACCOUNT PAGES
			</Typography>
			<List>
				{[
					{ label: 'Profile', link: '/profile' },
					{ label: 'Sign in', link: '/signin' },
					{ label: 'Sign up', link: '/signup' }
				].map(({ label, link }, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton selected={label === 'Dashboard'} disableGutters href={link}>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText
								primary={
									<IFLink component="div" sx={{ color: '#A0AEC0', fontSize: '12px' }}>
										{label}
									</IFLink>
								}
								disableTypography
								sx={{
									marginLeft: '12px',
									color: '#A0AEC0',
									fontWeight: 700,
									fontSize: '12px'
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>

			<Card>
				<CardContent>
					<IconButton>
						<Home sx={{ fontSize: '15px' }} />
					</IconButton>
					<Typography
						sx={{ fontSize: 18, fontWeight: 700, marginTop: '12px', marginBottom: 'unset', color: '#fff' }}
						color="text.secondary"
						gutterBottom
					>
						Need help?
					</Typography>
					<Typography sx={{ fontSize: 12, fontWeight: 700, color: '#fff' }} color="text.secondary" gutterBottom>
						Please check our docs
					</Typography>
					<IFButton sx={{ width: '100%', marginTop: '8px' }} background="#fff" sentiment="#2D3748">
						DOCUMENTATION
					</IFButton>
				</CardContent>
			</Card>
		</StyledSideBar>
	)
}

export default IFSideBar

const StyledSideBar = styled('div')(() => ({
	background: '#F8F9FA',
	width: '266px',
	position: 'fixed',
	left: 0,
	top: 0,
	height: '100vh',
	overflow: 'auto',

	'.logo-container': {
		padding: '44px 26px 0px 42px'
	},

	[`.${listClasses.root}`]: {
		margin: '0 16px 0 32px',

		[`.${listItemButtonClasses.root}`]: {
			margin: '0px 16px 6px 0px',
			padding: '12px 16px 12px 16px',
			borderRadius: '15px',
			'&.Mui-selected': {
				background: '#FFFFFF',
				'.MuiListItemIcon-root': {
					background: '#4FD1C5',
					color: '#fff'
				}
			}
		},

		[`.${listItemIconClasses.root}`]: {
			minWidth: '30px',
			width: '30px',
			height: '30px',
			background: '#fff',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '12px',
			color: '#4FD1C5',

			'& svg': {
				fontSize: '15px'
			}
		}
	},

	[`.${cardClasses.root}`]: {
		borderRadius: '16px',
		margin: '0px 12px 200px 36px',
		backgroundImage: `url(${Docs})`,

		[`.${cardContentClasses.root}`]: {
			background: 'transparent',
			height: '138px',
			paddingBottom: 'unset !important',
			marginBottom: '16px'
		},

		[`.${iconButtonClasses.root}`]: {
			minWidth: '30px',
			width: '30px',
			height: '30px',
			background: '#fff',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '12px',
			color: '#4FD1C5'
		}
	}
}))
