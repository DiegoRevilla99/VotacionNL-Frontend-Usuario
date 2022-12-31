import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hourglass.css";

import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Inicio", "Resultados", "Verificación", "Información"];
const settings = ["Ingresar"];
const settings2 = ["Cerrar sesión"];

export const AppBarVotacion = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const goInicio = (event) => {
		setAnchorElNav(null);
		navigate("/home");
	};
	return (
		<AppBar
			position="static"
			sx={{
				"&": {
					backgroundColor: "transparent",
					boxShadow: 0,
					paddingTop: "1rem",
				},
			}}
		>
			<Box pl={{ xs: "1rem", md: "6rem" }} pr={{ xs: "1rem", md: "6rem" }}>
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
						<img
							alt="logo"
							src="../../images/CEE600x321.png"
							style={{
								transition: "width 0.5s, height 0.5s",
								width: "8rem",
							}}
						/>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						{/* <IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="black"
						>
							<MenuIcon />
						</IconButton> */}
						{/* <Box width="1rem" height="1rem"> */}
						<div class="hourglass"></div>
						<Typography
							pl="1rem"
							display="flex"
							variant="subtitle1"
							color="initial"
							justifyContent="center"
							alignContent="center"
							alignItems="center"
						>
							15:60
						</Typography>
						{/* </Box> */}
						{/* <Typography variant="caption" color="initial">
							Tiempo
						</Typography> */}
					</Box>

					<Box sx={{ display: { xs: "flex", md: "none" }, mr: 0, flexGrow: 1 }}>
						<img
							alt="logo"
							src="../../images/CEE600x321.png"
							style={{
								transition: "width 0.5s, height 0.5s",
								width: "8rem",
							}}
						/>
					</Box>

					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<div class="hourglass"></div>
						<Typography
							pl="2rem"
							display="flex"
							variant="subtitle1"
							color="initial"
							justifyContent="center"
							alignContent="center"
							alignItems="center"
						>
							15:60
						</Typography>
					</Box>

					<Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenUserMenu}
							color="black"
						>
							<LoginIcon />
						</IconButton>
						{/* <Typography variant="caption" color="initial">
							Salir
						</Typography> */}
					</Box>

					<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
						<Button
							variant="contained"
							size="large"
							sx={{
								boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
								transition: "all 0.5s ease",
								backgroundColor: "#543884",
								width: "100%",
								// borderRadius: "2rem 2rem 2rem 2rem",
								"&:hover": {
									backgroundColor: "#7E328B !important",
									transform: "translate(-5px, -5px)",
									boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
								},
							}}
						>
							Salir
						</Button>
					</Box>
				</Toolbar>
				{/* </Container> */}
			</Box>
		</AppBar>
	);
};
