import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { themeStyle } from '../utils/theme';

const commonStyles = (theme: Theme) =>
	createStyles({
		notchedOutline: {
			border: `2px solid ${themeStyle.notchColor} !important`,
		},
		inputLabel: {
			color: `${themeStyle.notchColor} !important`,
			fontWeight: 700,
			fontFamily: themeStyle.fontFamily,
			textTransform: 'uppercase',
			fontSize: 10,
			[theme.breakpoints.up('sm')]: {
				fontSize: 11,
			},
		},
		helperText: {
			color: 'red',
			fontSize: 12,
		},
	});

export const textFieldStyles = makeStyles((theme: Theme) =>
	createStyles({
		textfield: {
			[`& fieldset`]: {
				borderRadius: 25,
			},
		},
		input: {
			backgroundColor: themeStyle.whiteText,
			fontSize: 11,
			borderRadius: 25,
			[theme.breakpoints.up('sm')]: {
				fontSize: 12,
			},
		},
		...commonStyles(theme),
	})
);

export const dateFieldStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			height: 35,
			fontSize: 11,
			borderRadius: 25,
			[theme.breakpoints.up('sm')]: {
				fontSize: 13,
			},
		},
		...textFieldStyles,
		root: {
			backgroundColor: themeStyle.whiteText,
			borderRadius: 25,
			marginTop: 5,
		},
		...commonStyles(theme),
	})
);

export const selectFieldStyle = makeStyles((theme: Theme) =>
	createStyles({
		select: {
			[`& fieldset`]: {
				borderRadius: 25,
			},
		},
		menu: {
			width: 280,
		},
		input: {
			backgroundColor: themeStyle.whiteText,
			fontSize: 11,
			borderRadius: 25,
			[theme.breakpoints.up('sm')]: {
				fontSize: 12,
			},
		},
		...commonStyles(theme),
	})
);

export const filePickerStyles = makeStyles((theme: Theme) =>
	createStyles({
		filePicker: {
			background: themeStyle.notchColor,
			padding: 8,
			borderRadius: 20,
			fontFamily: themeStyle.fontFamily,
			color: themeStyle.whiteText,
			'&:hover': {
				color: themeStyle.blackColor,
			},
		},
		...commonStyles(theme),
	})
);
