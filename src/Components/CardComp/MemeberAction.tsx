import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../UI/Button';
import { cardActionStyles } from '../../styles/CardAction';
import Modal from '../UI/Modal';
import Submit from '../Form/Submit';

import { memberActionCreators } from '../../store';

type MemberActionProps = {
	_id: string;
};

export default function MemberAction(props: MemberActionProps) {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const { _id } = props;
	const classes = cardActionStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { deleteMember } = bindActionCreators(memberActionCreators, dispatch);

	return (
		<>
			<Grid
				container
				spacing={2}
				justifyContent='center'
				className={classes.buttonContainer}>
				<Grid item xs={4}>
					<CustomButton
						onClick={() =>
							navigate('/members/edit', { replace: true, state: _id })
						}
						title='Edit'
						style={classes.editButton}
						fullWidth={true}
					/>
				</Grid>
				<Grid item xs={4}>
					<CustomButton
						onClick={() => navigate('/members/add', { replace: true })}
						title='Add'
						style={classes.addButton}
						fullWidth={true}
					/>
				</Grid>
				<Grid item xs={4}>
					<CustomButton
						onClick={() => setDialogOpen(true)}
						title='Delete'
						style={classes.deleteButton}
						fullWidth={true}
					/>
				</Grid>
			</Grid>

			<Modal
				open={dialogOpen}
				actions={
					<Submit
						submitTitle='Yes'
						cancelTitle='No'
						onCancel={() => setDialogOpen(false)}
						onSubmit={() => {
							deleteMember(_id);
							setDialogOpen(false);
						}}
					/>
				}
				title='Are you confirm to delete?'
			/>
		</>
	);
}
