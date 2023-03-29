import {
	Card,
	cardClasses,
	CardContent,
	cardContentClasses,
	FormControl,
	FormControlLabel,
	IconButton,
	iconButtonClasses,
	styled,
	touchRippleClasses,
	Typography
} from '@mui/material'
import { Apple, FacebookOutlined, Google } from '@mui/icons-material'

import Footer from '../components/IFFooter'
import Navigation from '../components/IFNavigation'
import IFButton from '../components/IFButton'
import Banner from '../assets/banner.svg'
import IFSwitch from '../components/IFSwitch'
import IFTextField from '../components/IFTextField'
import IFLink from '../components/IFLink'

const loginOptions = [
	{
		label: 'facebook',
		icon: FacebookOutlined
	},
	{
		label: 'apple',
		icon: Apple
	},
	{
		label: 'google',
		icon: Google
	}
]

const SignUp = () => {
	return (
		<StyledSignup>
			<Navigation focusedBackground={false} />
			<div className="banner-container">
				<img src={Banner} alt="banner" className="banner" />
			</div>
			<div className="content">
				<Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 700 }}>
					Welcome!
				</Typography>
				<Typography variant="body2" sx={{ width: '330px', display: 'inline-flex', justifyContent: 'center' }}>
					Use these awesome forms to login or create new account in your project for free.
				</Typography>

				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700 }} gutterBottom>
							Register with
						</Typography>
						<div className="options">
							{loginOptions.map(({ icon }, index) => {
								const OptionIcon: React.ElementType<any> = icon
								return (
									<IconButton key={index}>
										<OptionIcon />
									</IconButton>
								)
							})}
						</div>

						<Typography variant="h5" component="div" sx={{ margin: '20px 0px 16px 0px', color: '#A0AEC0' }}>
							or
						</Typography>

						<IFTextField label="Name" placeholder="Your full name" />
						<IFTextField label="Email" placeholder="Your email address" />
						<IFTextField label="Password" placeholder="Your password" />

						<FormControl sx={{ display: 'flex' }}>
							<FormControlLabel control={<IFSwitch />} label="Remember me" sx={{ marginLeft: 'unset' }} />
						</FormControl>

						<IFButton sx={{ width: '100%', margin: '36px 0px 22px 0px' }} href="/signin">
							SIGN UP
						</IFButton>

						<Typography variant="body2" sx={{ color: '#A0AEC0' }}>
							Already have an account?{' '}
							<IFLink
								href="/signin"
								sx={{
									color: '#4FD1C5'
								}}
							>
								Sign in
							</IFLink>
						</Typography>
					</CardContent>
				</Card>
			</div>
			<Footer />
		</StyledSignup>
	)
}

export default SignUp

const StyledSignup = styled('div')(() => ({
	textAlign: 'center',
	'.banner-container, .options': {
		display: 'flex',
		justifyContent: 'center',

		'.banner': {
			objectFit: 'cover',
			position: 'absolute',
			top: '24px',
			width: `calc(100% - 48px)`,
			height: '520px',
			zIndex: -1,
			borderRadius: '16px'
		}
	},
	'.content': {
		display: 'inline-block',
		color: '#fff'
	},

	[`.${cardClasses.root}`]: {
		minWidth: 460,
		width: '460px',
		marginTop: '66px',
		borderRadius: '16px',

		[`.${cardContentClasses.root}`]: {
			paddingBottom: '46px !important',
			padding: '46px 52px',

			[`.${iconButtonClasses.root}`]: {
				color: '#2D3748',
				borderRadius: '4px',
				border: '1px solid #E2E8F0',
				width: '75px',
				height: '75px',
				'&:not(:last-of-type)': {
					marginRight: '16px'
				},
				[`.${touchRippleClasses.root}`]: {
					display: 'none'
				},

				'& svg': {
					fontSize: '32px'
				}
			}
		}
	}
}))
