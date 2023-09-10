import Text from '../UI/Text';
import { Grid } from '@material-ui/core';
import { clubType } from '../../states/clubTypes';
import { formatDate } from '../../utils/dateFormat';

type ClubContentProps = {
	club: clubType;
	style: string;
};

export default function ClubContent(props: ClubContentProps) {
	const { club, style } = props;
	return (
		<Grid container spacing={1}>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Owner' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={club.owner} styles={style} />
			</Grid>

			<Grid item xs={6} md={6} sm={6}>
				<Text data='Established At' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={formatDate(club.establishedAt)} styles={style} />
			</Grid>

			<Grid item xs={6} md={6} sm={6}>
				<Text data='Chairman' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={club.chairman} styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Manager' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={club.manager} styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Venue' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={club.venue} styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Moto' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={club.description} styles={style} />
			</Grid>
		</Grid>
	);
}
