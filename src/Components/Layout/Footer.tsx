import { footerStyles } from '../../styles/Footer';
function Footer() {
	const classes = footerStyles();
	return (
		<div className={classes.root}>
			Copyright &copy; {new Date().getFullYear()} Sabbir Sristy
		</div>
	);
}
export default Footer;
