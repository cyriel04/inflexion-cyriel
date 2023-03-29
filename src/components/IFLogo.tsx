import { styled, SvgIcon, svgIconClasses, Typography } from '@mui/material'

import { ReactComponent as Logo } from '../assets/logo-creative-tim-black.svg'

const IFLogo = (props: any) => {
	return (
		<StyledLogo {...props}>
			<SvgIcon>{<Logo />}</SvgIcon>
			<Typography className="navigation-title">VANDAL INDUSTRIES</Typography>
		</StyledLogo>
	)
}

export default IFLogo

const StyledLogo = styled('div')<any>(({ focusedBackground }: any) => ({
	display: 'flex',
	cursor: 'default',
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
	}
}))
