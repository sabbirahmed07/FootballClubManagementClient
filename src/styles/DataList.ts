import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const dataListStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: 100,
			marginBottom: 80,
		},
		header: {
			textAlign: 'center',
			color: themeStyle.notchColor,
			fontSize: 36,
			textTransform: 'uppercase',
			marginBottom: 20,
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
		},
		imageContainer: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: 10,
		},
		imageStyle: {
			width: 'auto',
			height: 100,
		},
		title: {
			fontSize: 20,
			textAlign: 'center',
			color: themeStyle.notchColor,
			textTransform: 'uppercase',
			margin: '10px 0px',
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
		},
		labelGrid: {
			border: `2px solid ${themeStyle.greenColor}`,
			fontSize: 12,
			textAlign: 'center',
			borderRadius: 20,
			textTransform: 'uppercase',
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
		},
		noDataText: {
			textAlign: 'left',
			fontSize: 20,
			fontWeight: 500,
			padding: '20px 0px',
			fontFamily: themeStyle.fontFamily,
		},
		addButton: {
			backgroundColor: themeStyle.greenColor,
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			borderRadius: 15,
			fontFamily: themeStyle.fontFamily,
		},
	})
);
