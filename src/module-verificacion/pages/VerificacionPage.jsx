import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import shadows from "@mui/material/styles/shadows";
import { useNavigate } from "react-router-dom";

export const VerificacionPage = () => {
	const navigate = useNavigate();
	const plantilla1 = () => {
		navigate("/verificacion/individual");
	};
	const plantilla2 = () => {
		navigate("/verificacion/grupo");
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
								xs: "1.5rem",
								sm: "1.3rem",
								md: "1.3rem",
								lg: "2rem",
								xl: "2rem",
							},
						}}
					>
						BIENVENIDO AL MÓDULO DE VERIFICACIÓN
					</Typography>
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
                        <Card 
                        
                        sx={{ maxWidth: 350,
                            maxHeight: 400,
                            boxShadow: 3,
                            "&:hover": {
                                boxShadow: "9px 10px 4px rgba(0.37, 0.37, 0.37, 0.37)",
                                transform: "translate(-3px, -3px)",
                                transition: "all 0.5s ease",
                            },
                             }}
                        >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="210"
                                image="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
                                alt="Team"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        VERIFICAR VOTO INDIVIDUAL
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        ¿Desea verificar el sentido de su propio voto?
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button 
                                // size="small" color="primary"
                                onClick={plantilla1}
                                sx={{
									backgroundColor: "#511079",
									// borderRadius: "0px 25px 25px 25px",
                                    // borderColor: "#7E328B",
									color: "#fff",
									fontSize: {
										xl: "0.9rem",
										lg: "0.9rem",
										sm: "0.9rem",
										xs: "0.9Srem",
									},
									textAlign: "center",
									// width: { xl: 340, lg: 240, sm: "80%", xs: "80%" },
                                    width: "100%",
                                    height: "100%",
									// height: { xl: 370, lg: 270, sm: "80%", xs: "80%" },
									"&:hover": {
										background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                        color: "#FFFFFF",
										// boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
										// transform: "translate(-5px, -5px)",
										// transition: "all 0.5s ease",
									},
								}}>
                                Verificar individual
                                </Button>
                            </CardActions>
                        </Card>

                        <Card 
                        sx={{ maxWidth: 350,
                            maxHeight: 400,
                            boxShadow: 3,
                            "&:hover": {
                                boxShadow: "9px 10px 4px rgba(0.37, 0.37, 0.37, 0.37)",
                                transform: "translate(-3px, -3px)",
                                transition: "all 0.5s ease",
                            },
                             }}
                        >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="180"
                                image="https://cdn.pixabay.com/photo/2019/08/05/15/18/people-4386248_960_720.png"
                                alt="Team"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        VERIFICAR TODOS LOS VOTOS
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        ¿Desea verificar el sentido de los votos de todas las personas participantes?
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button 
                                // size="small" color="primary"
                                onClick={plantilla2}
                                sx={{
									backgroundColor: "#511079",
									// borderRadius: "0px 25px 25px 25px",
                                    // borderColor: "#7E328B",
									color: "#fff",
									fontSize: {
										xl: "0.9rem",
										lg: "0.9rem",
										sm: "0.9rem",
										xs: "0.9Srem",
									},
									textAlign: "center",
									// width: { xl: 340, lg: 240, sm: "80%", xs: "80%" },
                                    width: "100%",
                                    height: "100%",
									// height: { xl: 370, lg: 270, sm: "80%", xs: "80%" },
									"&:hover": {
										background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                        color: "#FFFFFF",
										// boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
										// transform: "translate(-5px, -5px)",
										// transition: "all 0.5s ease",
									},
								}}>
                                Verificar en grupo
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>    
				</Box>
			</Container>
		</Box>
	);
};
