import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

export const loaderStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'relative',
			marginTop: '18vmax',
			marginLeft: '50%',
		},
		spinner: {
			color: themeStyle.blackColor,
		},
	})
);
