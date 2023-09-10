import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import MediaCard from '../Components/UI/Card';
import Text from '../Components/UI/Text';
import { dataListStyles } from '../styles/DataList';
import CLubTitle from '../Components/CardComp/Title';
import ClubImage from '../Components/CardComp/Image';
import ClubContent from '../Components/CardComp/ClubContent';
import ClubAction from '../Components/CardComp/ClubAction';
import CustomButton from '../Components/UI/Button';
import CustomLoading from '../Components/UI/Loader';
import { clubActionCreators } from '../store';
import { RootState } from '../store/reducers';

export default function ClubList() {
	const classes = dataListStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { clubs, loading } = useSelector((state: RootState) => state.clubState);
	const { getClubs, clearClubs } = bindActionCreators(
		clubActionCreators,
		dispatch
	);

	useEffect(() => {
		getClubs();
		return () => {
			clearClubs();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const cards = clubs.map((item) => {
		let newurl = item.clubLogoUrl.replace(/\\/g, '/');

		return (
			<Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={item.name}>
				<MediaCard
					title={<CLubTitle title={item.name} style={classes.title} />}
					media={
						<ClubImage
							url={newurl}
							imageContaier={classes.imageContainer}
							imageStyle={classes.imageStyle}
						/>
					}
					content={<ClubContent club={item} style={classes.labelGrid} />}
					actions={<ClubAction _id={item._id} />}
				/>
			</Grid>
		);
	});

	if (loading) {
		return <CustomLoading />;
	} else {
		return (
			<Grid className={classes.container}>
				<Text data='All Clubs' styles={classes.header} />
				<Grid container justifyContent='center'>
					<Grid item xs={10} sm={8} md={9} lg={8} xl={9}>
						<Grid container spacing={2} justifyContent='flex-start'>
							{cards.length > 0 ? (
								cards
							) : (
								<div>
									<Text
										data='There is no club now. You can add a new club by clicking the following button'
										styles={classes.noDataText}
									/>
									<CustomButton
										onClick={() => navigate('/clubs/add', { replace: true })}
										title='Add New Club'
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
