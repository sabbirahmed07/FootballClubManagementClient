import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaCard from '../Components/UI/Card';
import Text from '../Components/UI/Text';
import { dataListStyles } from '../styles/DataList';
import MemberTitle from '../Components/CardComp/Title';
import MemberImage from '../Components/CardComp/Image';
import MemberContent from '../Components/CardComp/MemberContent';
import MemberAction from '../Components/CardComp/MemeberAction';
import CustomButton from '../Components/UI/Button';
import CustomLoading from '../Components/UI/Loader';
import { memberActionCreators } from '../store';
import { RootState } from '../store/reducers';

export default function MemberList() {
	const classes = dataListStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { members, loading } = useSelector(
		(state: RootState) => state.memberState
	);
	const { clearMembers, getMemebrs } = bindActionCreators(
		memberActionCreators,
		dispatch
	);

	useEffect(() => {
		getMemebrs();
		return () => {
			clearMembers();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const cards = members.map((item) => {
		let newurl = item.imageUrl.replace(/\\/g, '/');

		return (
			<Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={item.imageUrl}>
				<MediaCard
					title={
						<MemberTitle
							title={item.firstName + ' ' + item.lastName}
							style={classes.title}
						/>
					}
					media={
						<MemberImage
							url={newurl}
							imageContaier={classes.imageContainer}
							imageStyle={classes.imageStyle}
						/>
					}
					content={<MemberContent member={item} style={classes.labelGrid} />}
					actions={<MemberAction _id={item._id} />}
				/>
			</Grid>
		);
	});

	if (loading) {
		return <CustomLoading />;
	} else {
		return (
			<Grid className={classes.container}>
				<Text data='All Club Members' styles={classes.header} />
				<Grid container justifyContent='center'>
					<Grid item xs={10} sm={8} md={9} lg={8} xl={9}>
						<Grid container spacing={2} justifyContent='flex-start'>
							{cards.length > 0 ? (
								cards
							) : (
								<div>
									<Text
										data='There is no memebrs for this club now. You can add a new member by clicking the following button'
										styles={classes.noDataText}
									/>
									<CustomButton
										onClick={() => navigate('/members/add', { replace: true })}
										title='Add New Member'
										style={classes.addButton}
									/>
								</div>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
