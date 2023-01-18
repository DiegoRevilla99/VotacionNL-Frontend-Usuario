import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography, Step, StepLabel, Input } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { experimentalStyled as styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BallotIcon from '@mui/icons-material/Ballot';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const rows = [
    { id: 1, lastName: 'JORNADA NO F ELECTORAL 2021'},
    { id: 2, lastName: 'JORNADA NO F ELECTORAL 2022'},
    { id: 3, lastName: 'JORNADA NO F ELECTORAL 2023'},
    { id: 4, lastName: 'JORNADA NO F ELECTORAL 2024'},
    { id: 5, lastName: 'JORNADA NO F ELECTORAL 2025'},
    { id: 6, lastName: 'JORNADA NO F ELECTORAL 2026'}, 
    { id: 7, lastName: 'JORNADA NO F ELECTORAL GOBERNADOR ORDINARIA 2021'},
    { id: 8, lastName: 'JORNADA NO F ELECTORAL GOBERNADOR ORDINARIA 2022'}, 
    { id: 9, lastName: 'JORNADA NO F ELECTORAL GOBERNADOR ORDINARIA 2023'},
  ];

export const JornadasNoFormales = () => {
	const navigate = useNavigate();
	const plantilla1 = () => {
		navigate("/verificacion/visualizacionnf/boletanf");
	};
    const [searchJornada, setSearchJornada] = useState('');
	return (
        // En este Box esta el espacio entre el AppBar y el contenido
		<Box pt="3rem"> 
			<Container
				// maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "2rem",
				}}
			>
				<Box 
                // mr={100}
                sx={{ width: "100%" }}
                >
					<Typography
						color="initial"
						align="center"
						sx={{
							fontSize: {
								xs: "1.3rem",
								sm: "1.4rem",
								md: "1.6rem",
								lg: "1.8rem",
								xl: "1.8rem",
							},
						}}
					>
						A CONTINUACIÓN SE MUESTRAN LAS JORNADAS NO FORMALES DE VOTACIÓN
					</Typography>
                    <Box 
                    mt={1}
                    ml={5} mr={5}
                    sx={{ 
                        display: 'flex', 
                        justifyContent:'flex-end' }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Ingrese el nombre de la jornada a buscar"
                            sx={{ width: {
                                xs: "100%",
                                sm: "100%",
                                md: "50%",
                                lg: "40%",
                                xl: "40%",
                            } }}
                            size="normal"
                            placeholder="Ejemplo: Jornada..."
                            onChange={(e) => setSearchJornada(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                    </Box>
                    <Box mt={4} ml={5} mr={5}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {rows.filter((jornada) => jornada.lastName.toLowerCase().includes(searchJornada)
                            || jornada.lastName.toUpperCase().includes(searchJornada)
                            ).map((jornada) => (
                            <Grid item xs={4} sm={4} md={4} key={jornada.id}>
                                <Item
                                style={{ 
                                    // border: "1px solid #D0D0D0", 
                                    background: "#373736"
                                }} 
                                >
                                <Typography
                                    color="white"
                                    mb="1rem"
                                    align="center"
                                    sx={{
                                        fontSize: {
                                            xs: "1.1rem",
                                            sm: "1.2rem",
                                            md: "1.3rem",
                                            lg: "1.5rem",
                                            xl: "1.5rem",
                                        },
                                    }}
                                >
                                    {jornada.lastName}	
                                </Typography>

                                <Button 
                                onClick={plantilla1}
                                startIcon = {<BallotIcon />}
                                sx={{
									backgroundColor: "#eba302",
									color: "#fff",
									fontSize: {
										xl: "0.9rem",
										lg: "0.9rem",
										sm: "0.9rem",
										xs: "0.9Srem",
									},
									textAlign: "center",
                                    width: "70%",
									"&:hover": {
										background: "linear-gradient(45deg, #fecd0d 30%, #f0b91a 90%)",
                                        color: "#FFFFFF",
									},
								}}>
                                Verificar boletas
                                </Button>
                                </Item>

                            </Grid>
                            ))}
                        </Grid>
                    </Box>
				</Box>
			</Container>
		</Box>
	);
};
