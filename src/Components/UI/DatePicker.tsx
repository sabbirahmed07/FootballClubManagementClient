import DateFnsUtils from '@date-io/date-fns';
import { FormHelperText } from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { dateFieldStyles } from '../../styles/Inputs';

type DateFieldProps = {
	value: Date | null;
	onChange: (date: Date | null) => void;
	required?: boolean;
	label: string;
	error?: boolean;
	errorText?: string;
};

export default function CustomDatePicker(props: DateFieldProps) {
	const classes = dateFieldStyles();
	const {
		value,
		onChange,
		required = false,
		label,
		error = false,
		errorText = '',
	} = props;
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				fullWidth
				variant='dialog'
				inputVariant='outlined'
				InputProps={{
					className: classes.input,
					classes: {
						notchedOutline: classes.notchedOutline,
					},
				}}
				required={required}
				error={error}
				InputLabelProps={{
					className: classes.inputLabel,
					shrink: true,
				}}
				format='dd/MM/yyyy'
				className={classes.root}
				label={label}
				value={value}
				onChange={onChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
			/>
			<FormHelperText className={classes.helperText}>
				{error && errorText ? errorText : null}
			</FormHelperText>
		</MuiPickersUtilsProvider>
	);
}
