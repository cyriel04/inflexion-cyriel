import { FormControl, FormControlLabel, Link, styled, Typography } from '@mui/material'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Chakra from '../assets/chakra.svg'
import IFTextField from '../components/IFTextField'
import IFSwitch from '../components/IFSwitch'
import IFButton from '../components/IFButton'

const SignUp = () => {
	return (
		<StyledSignUp>
			<Navigation focusedBackground={true} />
			<div className="content" style={{ height: '500px' }}>
				<img src={Chakra} alt="banner" style={{}} />
				<Typography variant="h5" sx={{ marginBottom: '8px', fontWeight: 700, fontSize: '32px', color: '#4FD1C5' }}>
					Welcome Back
				</Typography>
				<Typography
					variant="body2"
					sx={{ width: '330px', fontSize: '14px', fontWeight: 700, color: '#A0AEC0', marginBottom: '36px' }}
				>
					Enter your email and password to sign in
				</Typography>
				<br />
				<IFTextField label="Email" />
				<IFTextField label="Password" />

				<FormControl sx={{ display: 'flex' }}>
					<FormControlLabel control={<IFSwitch />} label="Remember me" sx={{ marginLeft: 'unset' }} />
				</FormControl>

				<IFButton sx={{ width: '350px', margin: '36px 0px 22px 0px' }}>SIGN IN</IFButton>

				<Typography variant="body2" sx={{ color: '#A0AEC0' }}>
					Don't have an account?{' '}
					<Link
						href="#"
						sx={{
							color: '#4FD1C5',
							fontWeight: 700,
							[`&:not(:hover)`]: {
								textDecoration: 'none'
							}
						}}
					>
						Sign up
					</Link>
				</Typography>
			</div>
			<Footer />
		</StyledSignUp>
	)
}

export default SignUp

const StyledSignUp = styled('div')<any>(({}) => ({
	'.content': {
		display: 'flex',
		flexDirection: 'column',

		'@media (min-width: 600px)': {
			width: `calc(100% - 454px)`,
			margin: '0 auto'
		},
		'@media (max-width: 600px)': {
			margin: '0 auto',
			width: '100%',
			alignItems: 'center',
			textAlign: 'center'
		}
	},

	'@media (max-width: 600px)': {
		marginTop: '200px'
	},

	'& img': {
		objectFit: 'cover',
		position: 'absolute',
		top: 0,

		width: '42%',
		height: '100%',

		zIndex: -1,
		borderBottomLeftRadius: '16px',
		right: 0,

		'@media (max-width: 1000px)': {
			display: 'none'
		}
	}
}))
