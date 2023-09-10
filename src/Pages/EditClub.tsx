import { useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useLocation } from 'react-router-dom';
import { editClubStyles } from '../styles/EditClub';
import Text from '../Components/UI/Text';
import ClubForm from '../Components/Form/ClubForm';
import CustomLoading from '../Components/UI/Loader';

import { RootState } from '../store/reducers';
import { clubActionCreators } from '../store';

export default function EditClub() {
	const dispatch = useDispatch();
	const classes = editClubStyles();
	const location = useLocation();
	const id = location.state as string;
	const { loading } = useSelector((state: RootState) => state.clubState);
	const { getClub } = bindActionCreators(clubActionCreators, dispatch);

	useEffect(() => {
		if (id) {
			getClub(id);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <CustomLoading />;
	} else {
		return (
			<Grid container className={classes.containerMargin}>
				<Grid item xs={10} sm={10} md={10} lg={6} xl={6}>
					<Paper className={classes.paper}>
						<Text
							data={!id ? 'Create Club' : 'Edit Club'}
							styles={classes.header}
						/>
						<ClubForm />
					</Paper>
				</Grid>
			</Grid>
		);
	}
}
