import { Link, linkClasses, styled, SvgIcon, svgIconClasses, Typography } from '@mui/material'

import IFButton from './IFButton'
import { ReactComponent as Dashboard } from '../assets/dash.svg'
import { ReactComponent as Profile } from '../assets/profile.svg'
import { ReactComponent as SignUp } from '../assets/signup.svg'
import { ReactComponent as SignIn } from '../assets/signin.svg'
import { ReactComponent as Logo } from '../assets/logo-creative-tim-black.svg'

const links = [
	{
		label: 'DASHBOARD',
		icon: Dashboard,
		link: '#'
	},
	{
		label: 'PROFILE',
		icon: Profile,
		link: '#'
	},
	{
		label: 'SIGN UP',
		icon: SignUp,
		link: '#'
	},
	{
		label: 'SIGN IN',
		icon: SignIn,
		link: '#'
	}
]

const Navigation = ({ focusedBackground = false }) => {
	return (
		<StyledNavigation focusedBackground={focusedBackground}>
			<div className="navigation-content">
				<div style={{ display: 'flex' }}>
					<SvgIcon>{<Logo />}</SvgIcon>
					<Typography className="navigation-title">VANDAL INDUSTRIES</Typography>
				</div>
				<div className="navigation-links">
					{links.map(({ label, icon }: { label: string; icon: any }) => {
						const LinkIcon: React.ElementType<any> = icon
						return (
							<>
								<div className="navigation-link">
									<SvgIcon viewBox="0 0 12 12">{<LinkIcon />}</SvgIcon>
									<Link href="#">{label}</Link>
								</div>
							</>
						)
					})}
				</div>
				<IFButton
					variant="contained"
					sentiment={focusedBackground ? '#ffffff' : '#2D3748'}
					background={focusedBackground ? 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)' : '#ffffff'}
				>
					Free Download
				</IFButton>
			</div>
		</StyledNavigation>
	)
}

export default Navigation

const StyledNavigation = styled('div')<any>(({ focusedBackground }: any) => ({
	top: 0,
	position: 'relative',
	margin: '68px auto',
	zIndex: 1,
	background: focusedBackground && '#ffffff',
	padding: '20px 24px',
	width: '980px',
	borderRadius: '16px',

	'@media (max-width: 600px)': {
		display: 'none'
	},

	'.navigation-content': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: `${focusedBackground ? '#2D3748' : '#ffffff'}`,

		'.navigation-title': {
			fontSize: '14px',
			fontWeight: '700',
			marginLeft: '12px'
		},

		[` .${svgIconClasses.root}`]: {
			[`& svg`]: {
				stroke: focusedBackground && '#2D3748'
			}
		},

		'.navigation-links': {
			display: 'inline-flex',
			flexDirection: 'row',

			fontSize: '10px',
			fontWeight: '700',

			'.navigation-link': {
				display: 'flex',
				alignItems: 'center',

				'&:not(:last-of-type)': {
					marginRight: '30px'
				},

				[`.${linkClasses.root}`]: {
					color: `${focusedBackground ? '#2D3748' : '#fff'}`,

					[`&:not(:hover)`]: {
						textDecoration: 'none'
					}
				},

				[` .${svgIconClasses.root}`]: {
					width: '12px',
					height: '12px',
					marginRight: '4px'
				}
			}
		}
	}
}))
