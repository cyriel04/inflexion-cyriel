import { FormControl, FormLabel, outlinedInputClasses, TextField } from '@mui/material'

const IFTextField = ({ props }: any) => {
	return (
		<FormControl sx={{ width: '100%', maxWidth: '350px', marginBottom: '24px' }} {...props}>
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
	)
}

export default IFTextField
