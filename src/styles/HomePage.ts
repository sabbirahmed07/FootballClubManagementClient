import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';
import image from '../assets/clubs2.jpg';

export const homePageStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'relative',
			background: `url(${image}) no-repeat`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100vh',
		},
		darkOverlay: {
			backgroundColor: themeStyle.darkLayout,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
		},
		textContainer: {
			paddingTop: 250,
		},
		text1: {
			fontSize: 24,
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
			color: themeStyle.greenColor,
			textTransform: 'uppercase',
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 40,
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: 48,
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: 56,
			},
		},
		text2: {
			fontSize: 24,
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
			color: themeStyle.whiteText,
			textTransform: 'uppercase',
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 40,
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: 48,
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: 56,
			},
		},
	})
);
