import { Grid } from '@material-ui/core';
import Text from '../Components/UI/Text';
import { homePageStyles } from '../styles/HomePage';

function HomePage() {
	const classes = homePageStyles();
	return (
		<div className={classes.root}>
			<Grid className={classes.darkOverlay}>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					direction='column'
					className={classes.textContainer}>
					<Text styles={classes.text1} data='Welcome To' />
					<Text styles={classes.text2} data='Football Club Management' />
				</Grid>
			</Grid>
		</div>
	);
}

export default HomePage;
