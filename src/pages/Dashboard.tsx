import {
	Breadcrumbs,
	Card,
	CardContent,
	Divider,
	Grid,
	IconButton,
	InputAdornment,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
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
		<div>
			<div
				className="sidebar"
				style={{
					background: '#F8F9FA',
					width: '266px',
					position: 'fixed',
					left: 0,
					top: 0,
					height: '100vh',
					overflow: 'auto'
				}}
			>
				<div
					style={{
						padding: '44px 26px 0px 42px'
					}}
				>
					<IFLogo focusedBackground />
					<Divider sx={{ margin: '26px 0 22px 0' }} />
				</div>

				<List sx={{ margin: '0 16px 0 32px' }}>
					{['Dashboard', 'Tables', 'Billing', 'RTL'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton
								selected={text === 'Dashboard'}
								disableGutters
								sx={{
									margin: '0px 16px 6px 0px',
									padding: '12px 16px 12px 16px',
									borderRadius: '15px',
									['&.Mui-selected']: {
										background: '#FFFFFF',
										['.MuiListItemIcon-root']: {
											background: '#4FD1C5',
											color: '#fff'
										}
									}
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: '30px',
										width: '30px',
										height: '30px',
										background: '#fff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '12px',
										color: '#4FD1C5'
									}}
								>
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
				<List sx={{ margin: '0 16px 0 32px' }}>
					{['Profile', 'Sign in', 'Sign up'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton
								selected={text === 'Dashboard'}
								disableGutters
								sx={{
									margin: '0px 16px 6px 0px',
									padding: '12px 16px 12px 16px',
									borderRadius: '15px',
									['&.Mui-selected']: {
										background: '#FFFFFF',
										['.MuiListItemIcon-root']: {
											background: '#4FD1C5',
											color: '#fff'
										}
									}
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: '30px',
										width: '30px',
										height: '30px',
										background: '#fff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '12px',
										color: '#4FD1C5'
									}}
								>
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

				<Card sx={{ borderRadius: '16px', height: '170px', margin: '40px 12px 200px 36px', display: 'inline-block' }}>
					<CardContent sx={{ padding: '18px 0px 18px 20px', display: 'flex', justifyContent: 'space-between' }}>
						<div>
							<Typography sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }} color="text.secondary" gutterBottom>
								Built by developers
							</Typography>
							<Typography sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px' }} color="text.secondary" gutterBottom>
								Purity UI Dashboard
							</Typography>
						</div>
					</CardContent>
				</Card>
			</div>

			<div
				style={{
					height: '100%',
					background: '#F8F9FA',
					position: 'fixed',
					width: 'calc(100% - 300px)',
					display: 'block',
					left: 'auto',
					top: 0,
					right: 0,
					padding: '32px',
					overflow: 'auto'
				}}
			>
				<div className="header" style={{ marginLeft: '16px', display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<Breadcrumbs aria-label="breadcrumb" sx={{}}>
							<Link underline="hover" color="inherit" href="/">
								Pages
							</Link>
							<Link underline="hover" color="text.primary" href="/material-ui/getting-started/installation/">
								Dashboard
							</Link>
						</Breadcrumbs>
						<Typography variant="body1">Dashboard</Typography>
					</div>

					<div className="header-right" style={{ display: 'inline-flex', alignItems: 'center' }}>
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
						<Person
							sx={{
								fontSize: '22px'
							}}
						/>
						<Typography
							variant="body1"
							sx={{
								marginLeft: '4px',
								marginRight: '20px'
							}}
						>
							Sign in
						</Typography>
						<Settings
							sx={{
								fontSize: '22px',
								marginRight: '20px'
							}}
						/>
						<Notifications
							sx={{
								fontSize: '22px',
								marginRight: '28px'
							}}
						/>
					</div>
				</div>

				<Grid container spacing={3}>
					{dashboardList.map(({ title, icon, total, percentage }) => {
						const OptionIcon: React.ElementType<any> = icon
						return (
							<Grid item xs>
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

										<IconButton
											aria-label="add an alarm"
											sx={{
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
												}
											}}
										>
											<OptionIcon
												sx={{
													fontSize: '22px'
												}}
											/>
										</IconButton>
									</CardContent>
								</Card>
							</Grid>
						)
					})}
				</Grid>

				<Grid container spacing={3}>
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
				</Grid>

				{/* Graph's row */}
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
		</div>
	)
}

export default Dashboard
