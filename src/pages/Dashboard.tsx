import {
	Breadcrumbs,
	Card,
	cardClasses,
	CardContent,
	cardContentClasses,
	Divider,
	Grid,
	IconButton,
	iconButtonClasses,
	InputAdornment,
	List,
	listClasses,
	ListItem,
	ListItemButton,
	listItemButtonClasses,
	ListItemIcon,
	listItemIconClasses,
	ListItemText,
	styled,
	touchRippleClasses,
	Typography
} from '@mui/material'
import {
	AccountBalanceWallet,
	Description,
	Home,
	Language,
	Notifications,
	Person,
	Search,
	Settings,
	ShoppingCart
} from '@mui/icons-material'

import Footer from '../components/Footer'
import IFLogo from '../components/IFLogo'
import IFTextField from '../components/IFTextField'
import IFButton from '../components/IFButton'
import Docs from '../assets/docs-bg.svg'
import IFLink from '../components/IFLink'

const dashboardList = [
	{
		title: 'Today’s Money',
		label: 'balance',
		icon: AccountBalanceWallet,
		total: '$53,000',
		percentage: '+55%'
	},
	{
		title: 'Today’s Users',
		label: 'language',
		icon: Language,
		total: '2,300',
		percentage: '+5%'
	},
	{
		title: 'New Clients',
		label: 'description',
		icon: Description,
		total: '+3,052',
		percentage: '-14%'
	},
	{
		title: 'Total Sales',
		label: 'cart',
		icon: ShoppingCart,
		total: '$173,000',
		percentage: '+8%'
	}
]
const Dashboard = () => {
	return (
		<StyledDashboard>
			<div className="sidebar">
				<div className="logo-container">
					<IFLogo focusedBackground />
					<Divider sx={{ margin: '26px 0 22px 0' }} />
				</div>

				<List>
					{['Dashboard', 'Tables', 'Billing', 'RTL'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton selected={text === 'Dashboard'} disableGutters>
								<ListItemIcon>
									{index % 2 === 0 ? <Home sx={{ fontSize: '15px' }} /> : <Home sx={{ fontSize: '15px' }} />}
								</ListItemIcon>
								<ListItemText
									primary={text}
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
						marginRight: '16px'
					}}
				>
					ACCOUNT PAGES
				</Typography>
				<List>
					{['Profile', 'Sign in', 'Sign up'].map((text, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton selected={text === 'Dashboard'} disableGutters>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText
									primary={text}
									sx={{
										marginLeft: '12px'
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
			</div>

			<div className="content">
				<div className="header">
					<div>
						<Breadcrumbs aria-label="breadcrumb" sx={{}}>
							<IFLink color="inherit" href="/">
								Pages
							</IFLink>
							<IFLink color="text.primary" href="/material-ui/getting-started/installation/">
								Dashboard
							</IFLink>
						</Breadcrumbs>
						<Typography variant="body1">Dashboard</Typography>
					</div>

					<div className="header-right">
						<IFTextField
							placeholder="Type here..."
							textFieldProps={{
								InputProps: {
									startAdornment: (
										<InputAdornment position="start">
											<Search />
										</InputAdornment>
									)
								}
							}}
							sx={{ marginRight: '18px' }}
						/>
						<Person />
						<IFLink variant="body1" sx={{ marginLeft: '4px', marginRight: '20px', color: '#718096' }} href="/signin">
							Sign in
						</IFLink>
						<Settings sx={{ marginRight: '20px' }} />
						<Notifications sx={{ marginRight: '28px' }} />
					</div>
				</div>

				<Grid container spacing={3}>
					{dashboardList.map(({ title, icon, total, percentage }, index) => {
						const OptionIcon: React.ElementType<any> = icon
						return (
							<Grid item xs key={index}>
								<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '80px' }}>
									<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
										<div>
											<Typography
												sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
												color="text.secondary"
												gutterBottom
											>
												{title}
											</Typography>
											<div className="figures" style={{ display: 'flex', alignItems: 'center' }}>
												<Typography
													sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
													color="text.secondary"
													gutterBottom
												>
													{total}
												</Typography>
												<Typography
													sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
													color="text.secondary"
													gutterBottom
												>
													{percentage}
												</Typography>
											</div>
										</div>

										<IconButton>
											<OptionIcon />
										</IconButton>
									</CardContent>
								</Card>
							</Grid>
						)
					})}
				</Grid>

				{/* Article row */}
				<Grid container spacing={3}>
					<Grid item xs={7}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '290px' }}>
							<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
										color="text.secondary"
										gutterBottom
									>
										Built by developers
									</Typography>
									<Typography
										sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px' }}
										color="text.secondary"
										gutterBottom
									>
										Purity UI Dashboard
									</Typography>
									<Typography sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
										From colors, cards, typography to complex elements, you will find the full documentation.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={5}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '290px' }}>
							<CardContent
								sx={{
									padding: '17px',
									display: 'flex',
									justifyContent: 'space-between'
								}}
							>
								<div>
									<Typography
										sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px', color: '#2D3748' }}
										color="text.secondary"
										gutterBottom
									>
										Work with the Rockets
									</Typography>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#2D3748' }}
										color="text.secondary"
										gutterBottom
									>
										Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the
										opportunity first.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				{/* Graphs row */}
				<Grid container spacing={3}>
					<Grid item xs={5}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '80px' }}>
							<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
										color="text.secondary"
										gutterBottom
									>
										Built by developers
									</Typography>
									<Typography
										sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
										color="text.secondary"
										gutterBottom
									>
										Purity UI Dashboard
									</Typography>
									<Typography
										sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
										color="text.secondary"
										gutterBottom
									>
										From colors, cards, typography to complex elements, you will find the full documentation.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={7}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '80px' }}>
							<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
										color="text.secondary"
										gutterBottom
									>
										Built by developers
									</Typography>
									<Typography
										sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
										color="text.secondary"
										gutterBottom
									>
										Purity UI Dashboard
									</Typography>
									<Typography
										sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
										color="text.secondary"
										gutterBottom
									>
										From colors, cards, typography to complex elements, you will find the full documentation.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				{/* Table row */}
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '80px' }}>
							<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
										color="text.secondary"
										gutterBottom
									>
										Built by developers
									</Typography>
									<Typography
										sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
										color="text.secondary"
										gutterBottom
									>
										Purity UI Dashboard
									</Typography>
									<Typography
										sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
										color="text.secondary"
										gutterBottom
									>
										From colors, cards, typography to complex elements, you will find the full documentation.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={4}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px', height: '80px' }}>
							<CardContent sx={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Typography
										sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }}
										color="text.secondary"
										gutterBottom
									>
										Built by developers
									</Typography>
									<Typography
										sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
										color="text.secondary"
										gutterBottom
									>
										Purity UI Dashboard
									</Typography>
									<Typography
										sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
										color="text.secondary"
										gutterBottom
									>
										From colors, cards, typography to complex elements, you will find the full documentation.
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Footer noMargin />
			</div>
		</StyledDashboard>
	)
}

export default Dashboard

const StyledDashboard = styled('div')(() => ({
	'.sidebar': {
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
	},

	'.content': {
		height: '100%',
		background: '#F8F9FA',
		position: 'fixed',
		display: 'block',
		left: 'auto',
		top: 0,
		right: 0,
		padding: '32px',
		overflow: 'auto',
		marginLeft: '266px',

		'.header': {
			marginLeft: '16px',
			display: 'flex',
			justifyContent: 'space-between',

			'.header-right': {
				display: 'inline-flex',
				alignItems: 'center',

				'& svg': {
					fontSize: '22px'
				}
			}
		},
		[`.${iconButtonClasses.root}`]: {
			color: '#fff',
			borderRadius: '4px',
			border: '1px solid transparent',
			background: '#4FD1C5',
			width: '45px',
			height: '45px',
			'&:not(:last-of-type)': {
				marginRight: '16px'
			},
			[`.${touchRippleClasses.root}`]: {
				display: 'none'
			},
			'& svg': {
				fontSize: '22px'
			}
		}
	}
}))
