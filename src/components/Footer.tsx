import { Link, linkClasses, styled, Typography } from '@mui/material'

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer-content">
				<Typography>
					© 2022, Made with ❤️ by <span className="company">Tek torch</span> for a better web
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

export default Footer

const StyledFooter = styled('div')(() => ({
	padding: '64px',
	margin: '0px auto',
	width: '980px',

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
