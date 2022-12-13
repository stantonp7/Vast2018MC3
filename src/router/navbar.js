import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import GestureIcon from '@mui/icons-material/Gesture';

export function Navbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			{ <MenuItem component={Link} to="/home">Home</MenuItem> }
			{ <MenuItem component={Link} to="/sketches">Sketches</MenuItem> }
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			{ <MenuItem component={Link} to="/home">Home</MenuItem> }
			{ <MenuItem component={Link} to="/sketches">Sketches</MenuItem> }
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						component={Link}
						to="/"
						variant='h6'
						style={{textDecoration:"none", boxShadow: "none", color:"white"}}
						noWrap
						content = 'div'
						sx={{ display: { xs: "none", sm: "block" } }} 
						> 
						2018 MC3 Vast Challenge
					</Typography>
					{process.env.REACT_APP_ENV && (
						<span>
							<Chip color='secondary' label={process.env.REACT_APP_ENV} />
						</span>
					)}
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<IconButton
						size='large'
						edge='end'
						aria-label='account of current user'
						aria-controls={menuId}
						aria-haspopup='true'
						component={Link}
						to="/sketches"
						color='inherit'>
						<GestureIcon />
					</IconButton>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
}