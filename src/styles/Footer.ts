import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const footerStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: themeStyle.headerColor,
			position: 'fixed',
			bottom: 0,
			width: '100%',
			height: 50,
			color: themeStyle.whiteText,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
);
