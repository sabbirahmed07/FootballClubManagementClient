import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const submitStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 10,
		},
		submit: {
			backgroundColor: themeStyle.greenColor,
			color: themeStyle.whiteText,
			borderRadius: 10,
			fontWeight: 700,
			textTransform: 'uppercase',
			fontFamily: themeStyle.fontFamily,
		},
		cancel: {
			backgroundColor: themeStyle.redColor,
			color: themeStyle.whiteText,
			borderRadius: 10,
			fontWeight: 700,
			textTransform: 'uppercase',
			fontFamily: themeStyle.fontFamily,
		},
	})
);
