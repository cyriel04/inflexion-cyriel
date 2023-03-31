import { CheckCircle, Facebook, MoreVert } from '@mui/icons-material'
import {
	LinearProgress,
	linearProgressClasses,
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	tableHeadClasses,
	TableRow,
	Typography
} from '@mui/material'

const IFProjectsTable = ({ header, body }: any) => {
	return (
		<StyledProjectsTable>
			<TableContainer component={Paper} className="projects">
				<Typography className="table-title">Projects</Typography>
				<Typography className="table-description">
					<CheckCircle />
					<span>30 done this month</span>
				</Typography>
				<Table sx={{ width: 'calc(100% - 32px)', margin: '0px 16px' }}>
					<TableHead>
						<TableRow component="tr">
							{header.map((row: any) => (
								<TableCell key={row.companies} component="th" variant="head" scope="row">
									{row.companies}
								</TableCell>
							))}
							<TableCell component="th" align="left">
								{''}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{body.map((row: any) => (
							<TableRow component="tr" key={row.companies}>
								<TableCell component="td" scope="row" style={{ width: '300px' }}>
									<span className="company">
										<Facebook />
										<span className="company-name">{row.companies}</span>
									</span>
								</TableCell>
								<TableCell component="td">{row.budget}</TableCell>
								<TableCell component="td">{row.status}</TableCell>
								<TableCell component="td" className="completion">
									{`${row.completion}%`}
									<br />
									<LinearProgress variant="determinate" value={row.completion} />
								</TableCell>
								<TableCell component="td" className="action">
									<MoreVert />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledProjectsTable>
	)
}

export default IFProjectsTable

const StyledProjectsTable = styled('div')(() => ({
	'.projects': {
		[`.${tableHeadClasses.root}`]: {
			[`.${tableCellClasses.root}`]: {
				color: '#A0AEC0',
				fontSize: '10px'
			}
		},
		[`.${tableCellClasses.root}`]: {
			paddingLeft: 0,
			fontWeight: 700
		},

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
		},

		'.company': {
			display: 'flex',
			alignItems: 'center',
			'.company-name': {
				marginLeft: '18px'
			}
		},
		'.completion': {
			color: '#4FD1C5'
		},

		'& svg': {
			color: '#A0AEC0'
		},

		[`.${linearProgressClasses.root}`]: {
			width: '124px',
			borderRadius: '16px',
			[`&.${linearProgressClasses.colorPrimary}`]: {
				background: '#E2E8F0'
			},
			[`.${linearProgressClasses.barColorPrimary}`]: {
				background: '#4FD1C5',
				borderRadius: '16px'
			}
		}
	}
}))
