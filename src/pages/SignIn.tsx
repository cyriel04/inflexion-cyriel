import {
	Card,
	CardContent,
	FormControl,
	FormControlLabel,
	FormLabel,
	IconButton,
	Link,
	outlinedInputClasses,
	TextField,
	touchRippleClasses,
	Typography
} from '@mui/material'
import { Apple, FacebookOutlined, Google } from '@mui/icons-material'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import IFButton from '../components/IFButton'
import Banner from '../assets/banner.svg'
import IFSwitch from '../components/IFSwitch'

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

const SignIn = () => {
	return (
		<div
			style={{
				textAlign: 'center'
			}}
		>
			<Navigation focusedBackground={false} />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<img
					src={Banner}
					alt="banner"
					style={{
						objectFit: 'cover',
						position: 'absolute',
						top: '24px',
						width: `calc(100% - 48px)`,
						height: '520px',
						zIndex: -1,
						borderRadius: '16px'
					}}
				/>
			</div>
			<div className="content" style={{ display: 'inline-block', color: '#fff' }}>
				<Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 700 }}>
					Welcome!
				</Typography>
				<Typography variant="body2" sx={{ width: '330px', display: 'inline-flex', justifyContent: 'center' }}>
					Use these awesome forms to login or create new account in your project for free.
				</Typography>

				<Card sx={{ minWidth: 460, width: '460px', marginTop: '66px', borderRadius: '16px' }}>
					<CardContent sx={{ paddingBottom: '46px !important', padding: '46px 52px' }}>
						<Typography sx={{ fontSize: 18, marginBottom: '22px', fontWeight: 700 }} color="text.secondary" gutterBottom>
							Register with
						</Typography>
						<div className="options" style={{ display: 'flex', justifyContent: 'center' }}>
							{loginOptions.map(({ icon }) => {
								const OptionIcon: React.ElementType<any> = icon
								return (
									<IconButton
										aria-label="add an alarm"
										sx={{
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
											}
										}}
									>
										<OptionIcon
											sx={{
												fontSize: '32px'
											}}
										/>
									</IconButton>
								)
							})}
						</div>

						<Typography variant="h5" component="div" sx={{ margin: '20px 0px 16px 0px', color: '#A0AEC0' }}>
							or
						</Typography>

						<FormControl sx={{ width: '100%', maxWidth: '350px', marginBottom: '24px' }}>
							<FormLabel sx={{ textAlign: 'left', marginBottom: '6px' }}>Name</FormLabel>
							<TextField
								id="standard-size-normal"
								placeholder="Your full name"
								sx={{
									[`.${outlinedInputClasses.root}`]: {
										borderRadius: '16px'
									}
								}}
							/>
						</FormControl>

						<FormControl sx={{ width: '100%', maxWidth: '350px', marginBottom: '24px' }}>
							<FormLabel sx={{ textAlign: 'left', marginBottom: '6px' }}>Email</FormLabel>
							<TextField
								id="standard-size-normal"
								placeholder="Your email address"
								sx={{
									[`.${outlinedInputClasses.root}`]: {
										borderRadius: '16px'
									}
								}}
							/>
						</FormControl>

						<FormControl sx={{ width: '100%', maxWidth: '350px', marginBottom: '24px' }}>
							<FormLabel sx={{ textAlign: 'left', marginBottom: '6px' }}>Password</FormLabel>
							<TextField
								id="standard-size-normal"
								placeholder="Your password"
								sx={{
									[`.${outlinedInputClasses.root}`]: {
										borderRadius: '16px'
									}
								}}
							/>
						</FormControl>

						<FormControl sx={{ display: 'flex' }}>
							<FormControlLabel control={<IFSwitch />} label="Remember me" sx={{ marginLeft: 'unset' }} />
						</FormControl>
						<IFButton sx={{ width: '100%', margin: '36px 0px 22px 0px' }}>SIGN UP</IFButton>

						<Typography variant="body2">
							Already have an account?{' '}
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
								Sign in
							</Link>
						</Typography>
					</CardContent>
				</Card>
			</div>
			<Footer />
		</div>
	)
}

export default SignIn
