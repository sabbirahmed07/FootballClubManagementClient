import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const modalStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			color: themeStyle.notchColor,
			textTransform: 'uppercase',
			textAlign: 'center',
		},
	})
);
