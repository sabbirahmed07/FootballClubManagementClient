import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const cardActionStyles = makeStyles((theme: Theme) =>
	createStyles({
		buttonContainer: {
			padding: 5,
		},
		editButton: {
			background: themeStyle.blueColor,
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			borderRadius: 20,
			fontFamily: themeStyle.fontFamily,
		},
		addButton: {
			background: themeStyle.greenColor,
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			borderRadius: 20,
			fontFamily: themeStyle.fontFamily,
		},
		deleteButton: {
			background: themeStyle.redColor,
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			borderRadius: 20,
			fontFamily: themeStyle.fontFamily,
		},
	})
);
