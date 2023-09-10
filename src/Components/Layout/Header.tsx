import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { headerStyles } from '../../styles/Header';

function Header() {
	const classes = headerStyles();

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const links = (
		<>
			<NavLink
				to='/home'
				className={(navData) =>
					navData.isActive ? classes.activeLink : classes.linkButton
				}>
				<ListItem button>
					<ListItemText primary='HOME' />
				</ListItem>
			</NavLink>
			<NavLink
				to='/clubs'
				className={(navData) =>
					navData.isActive ? classes.activeLink : classes.linkButton
				}>
				<ListItem button>
					<ListItemText primary='CLUBS' />
				</ListItem>
			</NavLink>
			<NavLink
				to='/members'
				className={(navData) =>
					navData.isActive ? classes.activeLink : classes.linkButton
				}>
				<ListItem button>
					<ListItemText primary='MEMBERS' />
				</ListItem>
			</NavLink>
		</>
	);

	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			{links}
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='fixed' className={classes.appBar}>
				{/* <CssBaseline /> */}
				<Toolbar>
					<Typography variant='h4' noWrap className={classes.logo}>
						Football Club
					</Typography>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>{links}</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}

export default Header;
