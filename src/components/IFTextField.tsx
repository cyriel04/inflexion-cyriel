import { FormControl, FormLabel, outlinedInputClasses, TextField } from '@mui/material'

const IFTextField = ({ textFieldProps, ...props }: any) => {
	console.log(props, 'test')
	console.log(textFieldProps, 'test')
	return (
		<FormControl sx={{ width: '100%', maxWidth: '350px', marginBottom: '24px' }} {...props}>
			{props?.label && <FormLabel sx={{ textAlign: 'left', marginBottom: '6px' }}>{props?.label}</FormLabel>}
			<TextField
				id="standard-size-normal"
				placeholder={props?.placeholder}
				sx={{
					[`.${outlinedInputClasses.root}`]: {
						borderRadius: '16px'
					}
				}}
				{...textFieldProps}
			/>
		</FormControl>
	)
}

export default IFTextField
