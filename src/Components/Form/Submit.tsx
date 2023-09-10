import { Grid } from '@material-ui/core';
import CustomButton from '../UI/Button';
import { submitStyles } from '../../styles/Submit';
type SubmitProps = {
	onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
	submitTitle: string;
	cancelTitle: string;
};

export default function Submit(props: SubmitProps) {
	const { onSubmit, onCancel, submitTitle, cancelTitle } = props;
	const classes = submitStyles();

	return (
		<Grid container spacing={2} className={classes.container}>
			<Grid item md={4}>
				<Grid container spacing={2}>
					<Grid item md={6}>
						<CustomButton
							onClick={onSubmit}
							title={submitTitle}
							fullWidth={true}
							style={classes.submit}
						/>
					</Grid>
					<Grid item md={6}>
						<CustomButton
							onClick={onCancel}
							title={cancelTitle}
							fullWidth={true}
							style={classes.cancel}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
