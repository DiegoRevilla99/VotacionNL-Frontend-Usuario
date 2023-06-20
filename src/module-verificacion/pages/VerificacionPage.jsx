import { Box, Button, CardActionArea, CardActions, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { Container } from "@mui/system";
import { default as React, useState } from "react";
import { useNavigate } from "react-router-dom";
export const VerificacionPage = () => {
	const navigate = useNavigate();
	const plantilla1 = () => {
		navigate("/verificacion/individual");
	};
	const rutaJornadasElectorales = () => {
		navigate("/verificacion/visualizacion");
	};
	const rutaEleccionesPopulares = () => {
		navigate("/verificacion/visualizacionnf");
	};
    const [showModal, setShowModal] = useState(false);
	return (
        <>
        
		<Box pt="1.5rem">
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
								xs: "1.6rem",
								sm: "1.7rem",
								md: "1.8rem",
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
                        onClick={plantilla1}
                        sx={{ 
                            maxWidth: {
                                xl: 350,
                                lg: 350,
                                md: 350,
                                sm: 350,
                                xs: 400,
                            },
                            maxHeight: {
                                xl: 400,
                                lg: 400,
                                md: 400,
                                sm: 400,
                                xs: 415,
                            },
                            boxShadow: 4,
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
                                height="240"
                                image="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
                                alt="Team"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        VERIFICAR VOTO INDIVIDUAL
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        Verificar el sentido de mi propio voto
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button 
                                    onClick={plantilla1}
                                    sx={{
                                        backgroundColor: "#511079",
                                        color: "#fff",
                                        fontSize: {
                                            xl: "0.9rem",
                                            lg: "0.9rem",
                                            sm: "0.9rem",
                                            xs: "0.9rem",
                                        },
                                        textAlign: "center",
                                        width: "100%",
                                        height: "100%",
                                        "&:hover": {
                                            background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                            color: "#FFFFFF",
                                        },
                                    }}>
                                    Verificar voto
                                </Button>
                            </CardActions>
                        </Card>

                        <Card 
                        // onClick={plantilla2}
                        onClick={() => setShowModal(true)}
                        sx={{ maxWidth: {
                            xl: 350,
                            lg: 350,
                            md: 350,
                            sm: 350, 
                            xs: 350,
                        },
                            maxHeight: {
                                xl: 400,
                                lg: 400,
                                md: 400,
                                sm: 400,
                                xs: 415,
                            },
                            boxShadow: 4,
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
                                        Verificar el sentido de todos los votos de las personas participantes
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button 
                                onClick={() => setShowModal(true)}
                                // onClick={plantilla2}
                                sx={{
									backgroundColor: "#511079",
									color: "#fff",
									fontSize: {
										xl: "0.9rem",
										lg: "0.9rem",
										sm: "0.9rem",
										xs: "0.9rem",
									},
									textAlign: "center",
                                    width: "100%",
                                    height: "100%",
									"&:hover": {
										background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                        color: "#FFFFFF",
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
        		<div >
                {/* Resto de la interfaz */}
                {showModal && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#DCDCDC',
                        // width: '50px',
                        // height: '50px',
                        zIndex: 9999,
                        padding: '30px',
                        borderRadius: '10px',
                        textAlign: 'center',

                        minHeight: '250px', // Establecer el tamaño mínimo del contenido
                        maxHeight: '90vh', // Establecer la altura máxima para que el contenido se ajuste dentro de la ventana visible
                        overflow: 'auto', // Habilitar la barra de desplazamiento si el contenido se desborda
                        
                    }}
                        
                    >
<Typography
  id="modal-modal-title"
  variant="h4"
  color="black"
  align="center"
  sx={{
    mr: {
      xs: 5,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
    },
    ml: {
      xs: 5,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
    },
    mb: 2,
    fontSize: {
      xs: '1.8rem',
      sm: '1.8rem',
      md: '1.9rem',
      lg: '2rem',
      xl: '2.5rem',
    },
  }}
>
  ¿Qué deseas consultar?
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
                        xl: 5,
                        lg: 5,
                        md: 3,
                        sm: 2,
                        xs: 1,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    >	
                        <Card 
                        onClick={rutaJornadasElectorales}
                        sx={{ 
                            boxShadow: 4,
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
                                sx={{
                                    height: {
                                      xs: '150px',
                                      sm: '200px',
                                      md: '250px',
                                      lg: '300px',
                                      xl: '350px',
                                    },
                                    maxWidth: '100%',
                                  }}
                                    
                                image="https://media.discordapp.net/attachments/1071287057491693608/1120555262646947960/jornada.jpg?width=437&height=480"
                                alt="Team"
                                />
                                    <Typography variant="h5" component="div">
                                        Jornadas electorales
                                    </Typography>

                            </CardActionArea>
                            <CardActions>
                                <Button 
                                    onClick={rutaJornadasElectorales}
                                    sx={{
                                        backgroundColor: "#511079",
                                        color: "#fff",
                                        fontSize: {
                                            xl: "0.9rem",
                                            lg: "0.9rem",
                                            sm: "0.9rem",
                                            xs: "0.9rem",
                                        },
                                        textAlign: "center",
                                        width: "100%",
                                        height: "100%",
                                        "&:hover": {
                                            background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                            color: "#FFFFFF",
                                        },
                                    }}>
                                    Verificar 
                                </Button>
                            </CardActions>
                        </Card>

                        <Card 
                        onClick={rutaEleccionesPopulares}
                        sx={{ 
                            boxShadow: 4,
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
                                sx={{
                                    height: {
                                      xs: '150px',
                                      sm: '200px',
                                      md: '250px',
                                      lg: '300px',
                                      xl: '350px',
                                    },
                                    maxWidth: '100%',
                                  }}
                                image="https://media.discordapp.net/attachments/1071287057491693608/1120555263007666276/Jornadaelectoral.jpg?width=660&height=480"
                                alt="Team"
                                />

                                    <Typography variant="h5" component="div">
                                        Elecciones populares
                                    </Typography>

                            </CardActionArea>
                            <CardActions>
                            <Button 
                                onClick={rutaEleccionesPopulares}
                                sx={{
									backgroundColor: "#511079",
									color: "#fff",
									fontSize: {
										xl: "0.9rem",
										lg: "0.9rem",
										sm: "0.9rem",
										xs: "0.9rem",
									},
									textAlign: "center",
                                    width: "100%",
                                    height: "100%",
									"&:hover": {
										background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                        color: "#FFFFFF",
									},
								}}>
                                Verificar
                                </Button>
                            </CardActions>
                        </Card>
                        
                    </Stack>    
                    <Box mt={{
                                      xs: 1,
                                      sm: 1,
                                      md: 2,
                                      lg: 3,
                                      xl: 3,
                                    }}>
                    <Button 
                                onClick={() => setShowModal(false)}
                                sx={{
									backgroundColor: "#DC143C",
									color: "#fff",
									fontSize: {
										xl: "1.3rem",
										lg: "1.3rem",
                                        md: "1.3rem",
										sm: "1.3rem",
										xs: "1.3rem",
									},
									textAlign: "center",
                                    width: "100%",
                                    height: "100%",
									"&:hover": {
										background: "linear-gradient(45deg, #fff 30%, #fff 90%)",
                                        color: "#DC143C",
									},
								}}>
                                Cancelar
                                </Button>
                    </Box>
                    </div>
                )}
                </div>
        </>
	);
};
