import { styled, SvgIcon, svgIconClasses, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/logo-creative-tim-black.svg'

const IFLogo = (props: any) => {
	return (
		<StyledLogo to="/" {...props}>
			<SvgIcon>{<Logo />}</SvgIcon>
			<Typography className="navigation-title">VANDAL INDUSTRIES</Typography>
		</StyledLogo>
	)
}

export default IFLogo

const StyledLogo = styled(Link, {
	shouldForwardProp: (prop) => prop !== 'focusedBackground'
})<any>(({ focusedBackground }: any) => ({
	display: 'flex',
	cursor: 'pointer',
	color: `${focusedBackground ? '#2D3748' : '#ffffff'}`,
	textDecoration: 'none',

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
