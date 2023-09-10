import Text from '../UI/Text';
import { Grid } from '@material-ui/core';
import { memberType } from '../../states/memberTypes';
import { formatDate } from '../../utils/dateFormat';

type ClubContentProps = {
	member: memberType;
	style: string;
};

export default function ClubContent(props: ClubContentProps) {
	const { member, style } = props;
	return (
		<Grid container spacing={1}>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Nickname' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={member.userName} styles={style} />
			</Grid>

			<Grid item xs={6} md={6} sm={6}>
				<Text data='Date Of Birth' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={formatDate(member.dateOfBirth)} styles={style} />
			</Grid>

			<Grid item xs={6} md={6} sm={6}>
				<Text data='Weekly Wage' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={`$${member.wage}`} styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Country' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={member.country} styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data='Current Club' styles={style} />
			</Grid>
			<Grid item xs={6} md={6} sm={6}>
				<Text data={member.clubId.name} styles={style} />
			</Grid>
		</Grid>
	);
}
