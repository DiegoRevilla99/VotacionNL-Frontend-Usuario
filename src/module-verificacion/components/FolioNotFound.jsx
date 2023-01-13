import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { useNavigate } from "react-router-dom";

export const FolioNotFound = () => {
	const navigate = useNavigate();
	const plantilla2 = () => {
		navigate("/verificacion");
	};
	return (
		<Box pt="3rem">
			<Container
				maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "2rem",
					pl: "2rem",
				}}
			>
				<Box sx={{ width: "100%" }}>
					<Typography
						color="initial"
						mb="1rem"
						align="center"
						sx={{
							fontSize: {
								xs: "2rem",
                                sm: "2rem",
								md: "2rem",
								lg: "2rem",
								xl: "2rem",
							},
						}}
					>
						EL FOLIO INGRESADO NO EXISTE O BIEN SE ENCUENTRA MAL ESCRITO
					</Typography>
                    <Button 
                        startIcon={<ReplyAllIcon size="Large"/>}
                        onClick={plantilla2}
                        sx={{
                            backgroundColor: "#511079",
                            color: "#fff",
                            fontSize: {
								xs: "2rem",
                                sm: "2rem",
								md: "2rem",
								lg: "2rem",
								xl: "2rem",
                            },
                            textAlign: "center",
                            width: "100%",
                            height: "100%",
                            "&:hover": {
                                background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                color: "#FFFFFF",
                            },
                        }}>
                        Volver a inicio
                        </Button>
				</Box>
			</Container>
		</Box>
	);
};
