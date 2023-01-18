import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate } from "react-router-dom";
import { ModalBoleta } from "./ModalBoleta";
import { useState } from "react";
export const FolioFound = () => {
	const navigate = useNavigate();
	const plantilla2 = () => {
		navigate("/verificacion/individual");
	};
    const [statusModal, setStatusModal] = useState(false);
    const handleCloseModal = () => setStatusModal(false);
    const handleOpenModal = () => {
        // toastOffOperation();
        setStatusModal(true);
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
                    <Box 
                    align="center">


					<Typography
						color="initial"
						mb="0.5rem"
						align="center"
						sx={{
							fontSize: {
								xs: "1rem",
                                sm: "1rem",
								md: "1rem",
								lg: "1rem",
								xl: "1rem",
							},
						}}
					>
						LA BOLETA ELECTORAL CON FOLIO:
                        </Typography>
                    <Typography
                        color="primary"
                        mb="1rem"
                        align="center"
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1rem",
                                xl: "1rem",
                            },
                        }}
                    > 
                        JE22-ORD-GHR42S
                    </Typography>
                    <Typography
                        color="initial"
                            mb="0.5rem"
                            align="center"
                            sx={{
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1rem",
                                },
                            }}
                        > 
                        PRESENTA LOS SIGUIENTES DATOS:
					</Typography>
					<Typography
						color="primary"
						mb="0.5rem"
						align="center"
						sx={{
							fontSize: {
                                xs: "1rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1rem",
                                xl: "1rem",
							},
						}}
					>
						FECHA DE EMISIÓN: 10/101/10
                        </Typography>
                    <Typography
                        color="primary"
                            mb="1rem"
                            align="center"
                            sx={{
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1rem",
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
                                    xs: "1rem",
                                    sm: "1rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1rem",
                                },
                            }}
                        > 
                        EL SENTIDO DEL VOTO SE ENCUENTRA REFLEJADO EN EL SIGUIENTE BOTÓN:
					</Typography>
                    <Box
                    mb={2}>
                    <Button 
                        startIcon={<PreviewIcon size="Large"/>}
                        onClick={handleOpenModal}
                        sx={{
                            backgroundColor: "#511079",
                            color: "#fff",
                            fontSize: {
                                xs: "1rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1rem",
                                xl: "1rem",
                            },
                            textAlign: "center",
                            width: {
                                xs: "80%",
                                sm: "70%",
                                md: "60%",
                                lg: "50%",
                                xl: "50%",
                            },
                            // height: "10%",
                            "&:hover": {
                                background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                color: "#FFFFFF",
                            },
                        }}>
                        MOSTRAR BOLETA
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                        startIcon={<PersonSearchIcon size="Large"/>}
                        onClick={plantilla2}
                        sx={{
                            // backgroundColor: "#511079",
                            // color: "#fff",
                            fontSize: {
                                xs: "1rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1rem",
                                xl: "1rem",
                            },
                            textAlign: "center",
                            width: {
                                xs: "80%",
                                sm: "70%",
                                md: "60%",
                                lg: "50%",
                                xl: "50%",
                            },
                            // height: "10%",
                            "&:hover": {
                                // background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                // color: "#FFFFFF",
                            },
                        }}>
                        Ingresar otro folio
                        </Button>
                        </Box>
                    </Box>
				</Box>
			</Container>
            <ModalBoleta statusModal={statusModal} handleToggleModal={handleCloseModal} />
		</Box>
	);
};
