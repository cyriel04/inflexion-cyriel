import {
	Avatar,
	avatarClasses,
	Chip,
	chipClasses,
	Paper,
	styled,
	Table,
	TableBody,
	tableBodyClasses,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	tableHeadClasses,
	TableRow,
	Typography,
	typographyClasses
} from '@mui/material'

import IFFooter from '../components/IFFooter'
import IFHeader from '../components/IFHeader'
import IFLink from '../components/IFLink'
import IFProjectsTable from '../components/IFProjectsTable'
import IFSideBar from '../components/IFSideBar'

function createData(name: string, email?: string, position?: string, department?: string, status?: boolean, date?: string) {
	return { name, email, position, department, status, date }
}
const rows = [
	createData('Elaine Benes', 'elaine@vandelay.com', 'Manager', 'Organization', true, '14/06/21'),
	createData('Sidra Holland', 'sidra@vandelay.com', 'Manager', 'Organization', true, '14/06/21'),
	createData('Cosmo Kramer', 'kramer@vandelay.com', 'Manager', 'Organization', true, '14/06/21'),
	createData('Newman', 'newman@usps.com', 'Manager', 'Organization', true, '14/06/21'),
	createData('Frank Cost', 'frank@vandelay.com', 'Manager', 'Organization', false, '14/06/21'),
	createData('Art VanDelay', 'art.ie@vandelay.com', 'Manager', 'Organization', false, '14/06/21')
]
const rowsTitle = [createData('AUTHOR'), createData('FUNCTION'), createData('STATUS'), createData('EMPLOYED')]

function createDataProjects(companies: string, budget?: string, status?: string, completion?: number) {
	return { companies, budget, status, completion }
}
const rowsProjects = [
	createDataProjects('Software Import/Export', '$14,000', 'Working', 60),
	createDataProjects('Add Progress Track', '$3,000', 'Canceled', 10),
	createDataProjects('Fix Platform Errors', 'Not set', 'Done', 100),
	createDataProjects('Launch our Mobile App', '$32,000', 'Done', 100),
	createDataProjects('Add the New Pricing Page', '$400', 'Working', 25)
]
const rowsProjectsTitle = [
	createDataProjects('COMPANIES'),
	createDataProjects('BUDGET'),
	createDataProjects('STATUS'),
	createDataProjects('COMPLETION')
]

const Tables = () => {
	return (
		<StyledTables>
			<IFSideBar />
			<div
				style={{
					marginLeft: '266px',
					padding: '32px'
				}}
			>
				<IFHeader title="Tables" />

				<div className="content">
					<TableContainer component={Paper}>
						<Typography className="table-title">Authors Table</Typography>
						<Table sx={{ width: 'calc(100% - 32px)', margin: '0px 16px' }}>
							<TableHead>
								<TableRow component="tr">
									{rowsTitle.map((row) => (
										<TableCell key={row.name} component="th" variant="head" scope="row">
											{row.name}
										</TableCell>
									))}
									<TableCell component="th" align="left">
										{''}
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow component="tr" key={row.name}>
										<TableCell component="td" scope="row" style={{ width: '400px' }}>
											<div className="name-cell">
												<Avatar
													alt={row.name}
													src="https://4.bp.blogspot.com/-pvKOdlBpL2A/WsN8akhjfYI/AAAAAAAAYRQ/LByqrluY6gI63caRHdPo8z4FPXOPOwECQCLcBGAs/s640/Eren_Jaeger_%2528Anime%2529_character_image.png"
												/>
												<span className="details">
													{row.name}
													<br />
													<span className="email">{row.email}</span>
												</span>
											</div>
										</TableCell>
										<TableCell component="td">
											{row.position}
											<br />
											<span className="department">{row.department}</span>
										</TableCell>
										<TableCell component="td">
											<Chip
												size="small"
												label={row.status ? 'Online' : 'Offline'}
												className={`${row.status ? 'online' : 'offline'}`}
											/>
										</TableCell>
										<TableCell component="td">{row.date}</TableCell>
										<TableCell component="td" className="action">
											<IFLink>Edit</IFLink>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					<br />
					<br />
					<IFProjectsTable header={rowsProjectsTitle} body={rowsProjects} />
				</div>
				<IFFooter noMargin />
			</div>
		</StyledTables>
	)
}

export default Tables

const StyledTables = styled('div')(() => ({
	'.content': {
		marginTop: '26px',

		'.table-title': {
			marginTop: '20px',
			marginLeft: '16px',
			fontSize: '18px',
			fontWeight: 700
		},
		'.table-description': {
			marginTop: '6px',
			marginLeft: '16px',
			fontSize: '14px',
			fontWeight: 700,
			color: '#A0AEC0',

			display: 'flex',
			alignItems: 'center',

			'& svg': {
				color: '#68D391',
				fontSize: '12px',
				marginRight: '6px'
			}
		}
	},

	[`.${tableHeadClasses.root}`]: {
		[`.${tableCellClasses.root}`]: {
			color: '#A0AEC0',
			fontSize: '10px'
		}
	},

	[`.${tableBodyClasses.root}`]: {
		[`.${tableCellClasses.root}`]: {
			'.name-cell': {
				display: 'flex',
				alignItems: 'center',
				gap: '14px',
				[`.${avatarClasses.root}`]: {
					borderRadius: '14px',
					width: '40px',
					height: '40px'
				}
			},

			fontSize: '14px',
			'.department, .email': {
				color: '#A0AEC0',
				fontWeight: 400
			},

			[`.${chipClasses.root}`]: {
				borderRadius: '8px',
				fontSize: '14px',
				color: '#FFFFFF',
				'&.online': {
					background: '#48BB78'
				},
				'&.offline': {
					background: '#CBD5E0'
				}
			},

			'&.action': {
				[`.${typographyClasses.root}`]: {
					color: '#718096',
					fontWeight: 700,
					fontSize: '12px'
				}
			}
		}
	},

	[`.${tableCellClasses.root}`]: {
		paddingLeft: 0,
		fontWeight: 700
	}
}))
