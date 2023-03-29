import { Link, linkClasses, styled, Typography } from '@mui/material'

const IFFooter = ({ noMargin = false }) => {
	return (
		<StyledFooter noMargin={noMargin}>
			<div className="footer-content">
				<Typography>
					© 2023, Made with ❤️ by <span className="company">Tek torch</span> for a better web
				</Typography>
				<div className="footer-links">
					<Link href="#">About Us</Link>
					<Link href="#">Privacy</Link>
					<Link href="#">Blog</Link>
					<Link href="#">License</Link>
				</div>
			</div>
		</StyledFooter>
	)
}

export default IFFooter

const StyledFooter = styled('div')<any>(({ noMargin }: any) => ({
	padding: '64px 0px',
	bottom: 0,
	margin: noMargin ? 'unset' : '0px auto',
	width: noMargin ? '100%' : '980px',

	'@media (max-width: 600px)': {
		display: 'none'
	},

	'.footer-content': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#A0AEC0',

		'.company': {
			color: '#38B2AC'
		},

		'.footer-links': {
			display: 'inline-flex',
			flexDirection: 'row',

			[`.${linkClasses.root}`]: {
				color: '#A0AEC0',

				'&:not(:last-of-type)': {
					marginRight: '52px'
				},

				[`&:not(:hover)`]: {
					textDecoration: 'none'
				}
			}
		}
	}
}))
