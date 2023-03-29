import { Card, CardContent, Grid, IconButton, iconButtonClasses, styled, touchRippleClasses, Typography } from '@mui/material'
import { AccountBalanceWallet, Description, Language, ShoppingCart } from '@mui/icons-material'

import Footer from '../components/IFFooter'
import IFSideBar from '../components/IFSideBar'
import IFHeader from '../components/IFHeader'

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
			<IFSideBar />

			<div className="content">
				<IFHeader title="Dashboard" />

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
