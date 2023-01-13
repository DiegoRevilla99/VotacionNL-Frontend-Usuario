import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate } from "react-router-dom";

export const FolioFound = () => {
	const navigate = useNavigate();
	const plantilla2 = () => {
		navigate("/verificacion/individual");
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

                    <Stack                    
                    direction={{
                        xl: "row",
                        lg: "row",
                        md: "row",
                        sm: "column",
                        xs: "column",
                    }}
                    spacing={{
                        xl: 10,
                        lg: 10,
                        md: 7,
                        sm: 4,
                        xs: 4,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    >

                    <Box>


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
						LA BOLETA ELECTORAL CON FOLIO:
                        </Typography>
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
                        JE22-ORD-GHR42S
                    </Typography>
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
                        PRESENTA LOS SIGUIENTES DATOS:
					</Typography>
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
						FECHA DE EMISIÓN: 10/101/10
                        </Typography>
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
                        HORA APROXIMADA: 000:000:000
					</Typography>
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
                        EL SENTIDO DEL VOTO SE ENCUENTRA REFLEJADO EN LA SIGUIENTE BOLETA:
					</Typography>
                    <Button 
                        startIcon={<PersonSearchIcon size="Large"/>}
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
                        Ingresar otro folio
                        </Button>
                    </Box>
                    <Box>
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
                        BOLETA:
					</Typography>



                        </Box>
                    </Stack>

				</Box>
			</Container>
		</Box>
	);
};
