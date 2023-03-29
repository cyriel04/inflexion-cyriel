import { Link, linkClasses, styled, SvgIcon, svgIconClasses } from '@mui/material'

import IFButton from './IFButton'
import { ReactComponent as Dashboard } from '../assets/dash.svg'
import { ReactComponent as Profile } from '../assets/profile.svg'
import { ReactComponent as SignUp } from '../assets/signup.svg'
import { ReactComponent as SignIn } from '../assets/signin.svg'
import IFLogo from './IFLogo'

const links = [
	{
		label: 'DASHBOARD',
		icon: Dashboard,
		link: '/'
	},
	{
		label: 'PROFILE',
		icon: Profile,
		link: '/profile'
	},
	{
		label: 'SIGN UP',
		icon: SignUp,
		link: '/signup'
	},
	{
		label: 'SIGN IN',
		icon: SignIn,
		link: '/signin'
	}
]

const Navigation = ({ focusedBackground = false }) => {
	return (
		<StyledNavigation focusedBackground={focusedBackground}>
			<div className="navigation-content">
				<IFLogo focusedBackground={focusedBackground} />
				<div className="navigation-links">
					{links.map(({ label, icon, link }: { label: string; icon: any; link: string }, index) => {
						const LinkIcon: React.ElementType<any> = icon
						return (
							<div className="navigation-link" key={index}>
								<SvgIcon viewBox="0 0 12 12">{<LinkIcon />}</SvgIcon>
								<Link href={link}>{label}</Link>
							</div>
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
	background: focusedBackground && '#ffffffb6',
	width: '980px',

	borderRadius: '16px',

	boxShadow: focusedBackground && '0px 7px 23px rgba(0, 0, 0, 0.05)',
	backdropFilter: focusedBackground && 'blur(10.5px)',

	'@media (max-width: 600px)': {
		display: 'none'
	},

	'.navigation-content': {
		padding: '20px 24px',

		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: `${focusedBackground ? '#2D3748' : '#ffffff'}`,

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
					marginRight: '4px',

					[`& svg`]: {
						stroke: focusedBackground && '#2D3748'
					}
				}
			}
		}
	}
}))
