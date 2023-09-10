import { Button, FormHelperText } from '@material-ui/core';
import { filePickerStyles } from '../../styles/Inputs';

type ButtonProps = {
	onChange: any;
	error?: boolean;
	errorText?: string;
};

export default function UploadFile(props: ButtonProps) {
	const classes = filePickerStyles();
	const { onChange, error, errorText } = props;

	return (
		<>
			<Button variant='outlined' size='small' className={classes.filePicker}>
				<input type='file' onChange={onChange} />
			</Button>
			<FormHelperText className={classes.helperText}>
				{error && errorText ? errorText : null}
			</FormHelperText>
		</>
	);
}
