import { Link, styled } from '@mui/material'

const IFLink = ({ children, ...props }: any) => {
	return <StyledLink {...props}>{children}</StyledLink>
}

export default IFLink

const StyledLink = styled(Link)(() => ({
	fontWeight: 700,

	[`&:not(:hover)`]: {
		textDecoration: 'none'
	}
}))
