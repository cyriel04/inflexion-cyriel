import { Card, CardContent, cardContentClasses, styled } from '@mui/material'

const IFCard = ({ children, ...props }: any) => {
	return (
		<StyledCard {...props}>
			<CardContent>{children}</CardContent>
		</StyledCard>
	)
}

export default IFCard

const StyledCard = styled(Card)(() => ({
	marginTop: '66px',
	borderRadius: '16px',

	[`.${cardContentClasses.root}`]: {
		padding: '18px 20px',
		display: 'flex',
		justifyContent: 'space-between'
	}
}))
