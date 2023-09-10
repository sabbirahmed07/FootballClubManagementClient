import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const editClubStyles = makeStyles((theme: Theme) =>
	createStyles({
		containerMargin: {
			marginTop: 100,
			display: 'flex',
			justifyContent: 'center',
		},
		paper: {
			padding: theme.spacing(5),
			background: themeStyle.whiteText,
			border: `2px solid ${themeStyle.notchColor}`,
		},
		header: {
			fontFamily: themeStyle.fontFamily,
			textTransform: 'uppercase',
			fontWeight: 700,
			fontSize: 18,
			color: themeStyle.notchColor,
			marginBottom: 10,
			textAlign: 'center',
			[theme.breakpoints.up('sm')]: {
				fontSize: 24,
			},
		},
		submitContainer: {
			display: 'flex',
			justifyContent: 'center',
		},
		submit: {
			backgroundColor: 'green',
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
		},
		back: {
			backgroundColor: 'green',
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
		},
	})
);
