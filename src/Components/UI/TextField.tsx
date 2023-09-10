import { FormHelperText, TextField } from '@material-ui/core';
import { textFieldStyles } from '../../styles/Inputs';

type TextFieldProps = {
	value: string | null;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	label: string;
	error?: boolean;
	errorText?: string;
};

export default function CustomSelect(props: TextFieldProps) {
	const classes = textFieldStyles();
	const {
		label,
		value,
		onChange,
		error = false,
		errorText = '',
		required = false,
	} = props;

	return (
		<>
			<TextField
				fullWidth
				required={required}
				className={classes.textfield}
				label={label}
				margin='dense'
				variant='outlined'
				size='small'
				value={value}
				onChange={onChange}
				error={error}
				InputProps={{
					classes: {
						notchedOutline: classes.notchedOutline,
					},
					className: classes.input,
				}}
				InputLabelProps={{
					className: classes.inputLabel,
				}}
			/>
			<FormHelperText className={classes.helperText}>
				{error && errorText ? errorText : null}
			</FormHelperText>
		</>
	);
}
