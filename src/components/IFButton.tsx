import { Button, ButtonProps, styled, touchRippleClasses } from '@mui/material'

const IFButton: React.FC<ButtonProps & { sentiment?: string; background?: string }> = ({
	children,
	sentiment = '#ffffff',
	background = '#4FD1C5',
	...props
}: any) => {
	return (
		<StyledButton variant="contained" sentiment={sentiment} background={background} {...props}>
			{children}
		</StyledButton>
	)
}

export default IFButton

const StyledButton = styled(Button)<ButtonProps & { sentiment?: string; background?: string }>(({ sentiment, background }: any) => ({
	borderRadius: '34.5px',
	padding: '10px 30px',
	height: '36px',
	width: '150px',
	textTransform: 'capitalize',
	fontSize: '10px',
	fontWeight: '700',

	background: background,
	color: sentiment,

	[`&:hover`]: {
		background: `${background}ff`
	},

	[`.${touchRippleClasses.root}`]: {
		display: 'none'
	}
}))
