import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const cardStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			border: `2px solid ${themeStyle.notchColor}`,
			borderRadius: 30,
		},
	})
);
