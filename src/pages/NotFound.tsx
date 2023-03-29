import { Typography } from '@mui/material'

import Navigation from '../components/IFNavigation'

const NotFound = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Navigation focusedBackground />
			<Typography variant="h4">NotFound</Typography>
		</div>
	)
}

export default NotFound
