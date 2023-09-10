import { useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editMemberStyles } from '../styles/EditMembers';
import Text from '../Components/UI/Text';
import MemberForm from '../Components/Form/MemberForm';
import CustomLoading from '../Components/UI/Loader';

import { RootState } from '../store/reducers';
import { memberActionCreators } from '../store';

export default function EditMember() {
	const dispatch = useDispatch();
	const classes = editMemberStyles();
	const location = useLocation();
	const id = location.state as string;
	const { loading } = useSelector((state: RootState) => state.memberState);
	const { getMemberWithOutId, getMemberWithId, clearMember } =
		bindActionCreators(memberActionCreators, dispatch);

	useEffect(() => {
		if (id) {
			getMemberWithId(id);
		} else {
			getMemberWithOutId();
		}

		return () => {
			clearMember();
		};
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
							data={!id ? 'Create Club Member' : 'Edit Club Member'}
							styles={classes.header}
						/>
						<MemberForm />
					</Paper>
				</Grid>
			</Grid>
		);
	}
}
