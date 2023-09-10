import { FormHelperText, TextField } from '@material-ui/core';
import { selectFieldStyle } from '../../styles/Inputs';

type SelectFieldProps = {
	value: string | null;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	label: string;
	error?: boolean;
	errorText?: string;
	options: {
		name: string;
		_id?: string;
	}[];
};

export default function Select(props: SelectFieldProps) {
	const classes = selectFieldStyle();
	const {
		value,
		onChange,
		label,
		options,
		error = false,
		errorText = '',
		required = false,
	} = props;

	return (
		<>
			<TextField
				fullWidth
				error={error}
				required={required}
				label={label}
				select={true}
				className={classes.select}
				size='small'
				margin='dense'
				variant='outlined'
				SelectProps={{
					native: true,
					MenuProps: {
						className: classes.menu,
					},
				}}
				InputProps={{
					classes: {
						notchedOutline: classes.notchedOutline,
					},
					className: classes.input,
				}}
				InputLabelProps={{
					className: classes.inputLabel,
				}}
				value={value}
				onChange={onChange}>
				{options.map((option, index) => (
					<option key={index} value={option.name}>
						{option.name}
					</option>
				))}
			</TextField>
			<FormHelperText className={classes.helperText}>
				{error && errorText ? errorText : null}
			</FormHelperText>
		</>
	);
}
