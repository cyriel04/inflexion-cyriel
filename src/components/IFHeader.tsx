import { Notifications, Person, Search, Settings } from '@mui/icons-material'
import { Breadcrumbs, breadcrumbsClasses, InputAdornment, inputBaseClasses, styled, Typography, typographyClasses } from '@mui/material'

import IFLink from './IFLink'
import IFTextField from './IFTextField'

const IFHeader = ({ title }: any) => {
	return (
		<StyledHeader>
			<div>
				<Breadcrumbs aria-label="breadcrumb">
					<IFLink color="inherit" href="/">
						Pages
					</IFLink>
					<IFLink color="text.primary" href="/">
						{title}
					</IFLink>
				</Breadcrumbs>
				<Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 700 }}>
					{title}
				</Typography>
			</div>

			<div className="header-right">
				<IFTextField
					placeholder="Type here..."
					textFieldProps={{
						InputProps: {
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							)
						}
					}}
					sx={{ marginRight: '18px' }}
				/>
				<Person />
				<IFLink variant="body1" sx={{ marginLeft: '4px', marginRight: '20px', color: '#718096' }} href="/signin">
					Sign in
				</IFLink>
				<Settings sx={{ marginRight: '20px' }} />
				<Notifications sx={{ marginRight: '28px' }} />
			</div>
		</StyledHeader>
	)
}

export default IFHeader

const StyledHeader = styled('div')(() => ({
	marginLeft: '16px',
	display: 'flex',
	justifyContent: 'space-between',

	[`.${breadcrumbsClasses.root}`]: {
		[`.${typographyClasses.root}, .${breadcrumbsClasses.separator}`]: {
			fontSize: '12px',
			fontWeight: 400
		}
	},
	'.header-right': {
		display: 'inline-flex',
		alignItems: 'center',

		'& svg': {
			fontSize: '22px',
			color: '#718096'
		},
		[`.${inputBaseClasses.root}`]: {
			height: '40px'
		}
	}
}))
