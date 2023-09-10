import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const headerStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		appBar: {
			backgroundColor: themeStyle.headerColor,
			padding: 5,
		},
		sectionDesktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				justifyConent: 'space-between',
			},
		},
		sectionMobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		linkButton: {
			color: themeStyle.blackColor,
			textDecoration: 'none',
			[theme.breakpoints.up('md')]: {
				color: themeStyle.whiteText,
			},
		},
		activeLink: {
			color: themeStyle.greenColor,
			borderRadius: 20,
			backgroundColor: themeStyle.blackColor,
			textDecoration: 'none',
		},
		logo: {
			fontFamily: themeStyle.fontFamily,
			textTransform: 'uppercase',
		},
	})
);
