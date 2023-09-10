import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { cardStyles } from '../../styles/Card';

type CardTypeProps = {
	title: React.ReactNode;
	media: React.ReactNode;
	content: React.ReactNode;
	actions: React.ReactNode;
};

export default function MediaCard(props: CardTypeProps) {
	const classes = cardStyles();
	const { title, media, content, actions } = props;

	return (
		<Card className={classes.root}>
			{title}
			<CardActionArea>
				{media}

				<CardContent>{content}</CardContent>
			</CardActionArea>
			<CardActions>{actions}</CardActions>
		</Card>
	);
}
