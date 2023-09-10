import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../UI/Button';
import { cardActionStyles } from '../../styles/CardAction';

type ClubActionProps = {
	_id: string;
};

export default function ClubAction(props: ClubActionProps) {
	const { _id } = props;
	const classes = cardActionStyles();

	const navigate = useNavigate();
	return (
		<Grid
			container
			spacing={2}
			justifyContent='center'
			className={classes.buttonContainer}>
			<Grid item xs={6}>
				<CustomButton
					onClick={() => navigate('/clubs/edit', { replace: true, state: _id })}
					title='Edit'
					style={classes.editButton}
					fullWidth={true}
				/>
			</Grid>
			<Grid item xs={6}>
				<CustomButton
					onClick={() => navigate('/clubs/add', { replace: true })}
					title='Add'
					style={classes.addButton}
					fullWidth={true}
				/>
			</Grid>
		</Grid>
	);
}
