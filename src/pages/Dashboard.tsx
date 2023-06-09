import { Card, Grid, IconButton, iconButtonClasses, styled, touchRippleClasses, Typography } from '@mui/material'
import { AccountBalanceWallet, Description, Language, ShoppingCart } from '@mui/icons-material'

import IFFooter from '../components/IFFooter'
import IFSideBar from '../components/IFSideBar'
import IFHeader from '../components/IFHeader'
import IFProjectsTable from '../components/IFProjectsTable'
import IFCard from '../components/IFCard'

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

function createDataProjects(companies: string, budget?: string, status?: string, completion?: number) {
	return { companies, budget, status, completion }
}
const rowsProjects = [
	createDataProjects('Chakra Soft UI Version', '$14,000', 'Working', 60),
	createDataProjects('Add Progress Track', '$3,000', 'Canceled', 10),
	createDataProjects('Fix Platform Errors', 'Not set', 'Done', 100),
	createDataProjects('Launch our Mobile App', '$32,000', 'Done', 100),
	createDataProjects('Add the New Pricing Page', '$400', 'Working', 25),
	createDataProjects('Redesign New Online Shop', '$400', 'Working', 25)
]
const rowsProjectsTitle = [
	createDataProjects('COMPANIES'),
	createDataProjects('BUDGET'),
	createDataProjects('STATUS'),
	createDataProjects('COMPLETION')
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
								<IFCard sx={{ height: '80px' }}>
									<div>
										<Typography sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
											{title}
										</Typography>
										<div className="figures" style={{ display: 'flex', alignItems: 'center' }}>
											<Typography
												sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }}
												gutterBottom
											>
												{total}
											</Typography>
											<Typography
												sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#48BB78' }}
												gutterBottom
											>
												{percentage}
											</Typography>
										</div>
									</div>
									<IconButton>
										<OptionIcon />
									</IconButton>
								</IFCard>
							</Grid>
						)
					})}
				</Grid>

				{/* Article row */}
				<Grid container spacing={3}>
					<Grid item xs={7}>
						<IFCard sx={{ height: '290px' }}>
							<div>
								<Typography sx={{ fontSize: 12, fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
									Built by developers
								</Typography>
								<Typography sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px' }} gutterBottom>
									Purity UI Dashboard
								</Typography>
								<Typography sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
									From colors, cards, typography to complex elements, you will find the full documentation.
								</Typography>
							</div>
						</IFCard>
					</Grid>

					<Grid item xs={5}>
						<IFCard sx={{ height: '290px' }}>
							<div>
								<Typography sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px', color: '#2D3748' }} gutterBottom>
									Work with the Rockets
								</Typography>
								<Typography sx={{ fontSize: 12, fontWeight: 700, color: '#2D3748' }} gutterBottom>
									Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity
									first.
								</Typography>
							</div>
						</IFCard>
					</Grid>
				</Grid>

				{/* Graphs row */}
				<Grid container spacing={3}>
					<Grid item xs={5}>
						<IFCard sx={{ height: '445px' }}>
							<div>
								<Typography sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }} gutterBottom>
									Active Users
								</Typography>
								<Typography sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
									(+23) than last week
								</Typography>
							</div>
						</IFCard>
					</Grid>

					<Grid item xs={7}>
						<IFCard sx={{ height: '445px' }}>
							<div>
								<Typography sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700, marginRight: '4px' }} gutterBottom>
									Sales overview
								</Typography>
								<Typography sx={{ fontSize: 14, marginBottom: '22px', fontWeight: 700, color: '#A0AEC0' }} gutterBottom>
									(+5) more in 2021
								</Typography>
							</div>
						</IFCard>
					</Grid>
				</Grid>

				{/* Table row */}
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Card sx={{ marginTop: '66px', borderRadius: '16px' }}>
							<IFProjectsTable header={rowsProjectsTitle} body={rowsProjects} />
						</Card>
					</Grid>

					<Grid item xs={4}>
						<IFCard sx={{ height: '520px' }}>
							<div>
								<Typography sx={{ fontSize: 18, fontWeight: 700, marginRight: '4px' }} gutterBottom>
									Orders overview
								</Typography>
								<Typography sx={{ fontSize: 14, fontWeight: 700, color: '#48BB78' }} gutterBottom>
									+30% this month
								</Typography>
							</div>
						</IFCard>
					</Grid>
				</Grid>

				<IFFooter noMargin />
			</div>
		</StyledDashboard>
	)
}

export default Dashboard

const StyledDashboard = styled('div')(() => ({
	'.content': {
		background: '#F8F9FA',
		padding: '32px',
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
