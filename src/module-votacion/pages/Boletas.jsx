import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";

export const Boletas = () => {
	return (
		<Box
			display={"flex"}
			sx={{
				height: "auto",
				flexGrow: 1,
				overflowY: "auto",
			}}
			// pt="2rem"
			// pb="2rem"
			// pl="2rem"
			// pr="2rem"
			// p="1rem"
		>
			<Container maxWidth="md">
				<Box bgcolor="#423838" m={0} width="100%" height="auto" p="1rem">
					<Box bgcolor="base.main">
						<Box pb={1} display="flex" flexDirection="column" bgcolor="#423838">
							<Typography variant="h6" align="center" color="base.main" width="100%">
								PROCESO ELECTORAL ESTATAL 2022-2025
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center" mb="2rem">
							<Typography
								variant="h4"
								align="center"
								color="base.main"
								pl={{ xs: 2, md: 8 }}
								pr={{ xs: 2, md: 8 }}
								pb={1}
								sx={{ backgroundColor: "#423838" }}
							>
								GOBERNADOR
							</Typography>
						</Box>
						<Grid container spacing={2}>
							<Grid container item xs={12} md={7} display="flex">
								<Grid item xs={12} md={3}>
									<Typography variant="body1" color="initial" align="center">
										Entidad Federativa
									</Typography>
								</Grid>
								<Grid item xs={12} md={9} px="1rem">
									<TextField fullWidth label="Entidad federativa" />
								</Grid>
							</Grid>
							<Grid container item xs={12} md={5}>
								<Grid item xs={12} md={3} justifyContent="center">
									<Typography variant="body1" color="initial" align="center">
										Distrito Electoral
									</Typography>
								</Grid>
								<Grid item xs={12} md={9} px="1rem">
									<TextField fullWidth label="Distrito Electoral" />
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
