import { CircularProgress } from '@material-ui/core';

import { loaderStyles } from '../../styles/Loader';

export default function CustomLoading() {
	const classes = loaderStyles();

	return (
		<div className={classes.root}>
			<CircularProgress disableShrink className={classes.spinner} />
		</div>
	);
}
