import { layoutStyles } from '../../styles/Layout';

type LayoutProps = {
	children: React.ReactNode;
};

function Layout(props: LayoutProps) {
	const classes = layoutStyles();
	return (
		<div className={classes.root}>
			<main>{props.children}</main>
		</div>
	);
}
export default Layout;
