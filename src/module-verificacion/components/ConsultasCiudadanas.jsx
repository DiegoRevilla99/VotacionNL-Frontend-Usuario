import BallotIcon from '@mui/icons-material/Ballot';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { onGetFoliosConsultas } from '../../store/verificacion-voto/verificacionThunks';
// import { onSetJornadaSelected } from '../../store/verificacion-voto/verificacionSlice';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useVerficacionStore } from '../hooks/useVerificacionStore';
import { BreadCrumbsCustom } from './BreadCrumbsCustom';
import { BotonBack } from './botonback';
const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#8A2BE2', // Color morado
    color: 'white', // Texto en color blanco
    maxWidth: 300, // Ancho máximo del Tooltip
    fontSize: theme.typography.pxToRem(20), // Tamaño de fuente grande
    border: '1px solid #dadde9',
  },
}));

  export const ConsultasCiudadanas = () => {
      const navigate = useNavigate();
      const plantilla1 = (id) => {
          navigate("/verificacion/consultas/papeletas/"+id);
        };
        const [searchJornada, setSearchJornada] = useState('');
        const params = useParams();
        const dispatch = useDispatch();
        //asdasd

        const { consultasFolio } = useVerficacionStore();
      useEffect(() => {
          dispatch(onGetFoliosConsultas());
      }, []);
    //   console.log(consultasFolio);

        const jornadasFiltradas = consultasFolio.filter((consulta) =>
            consulta.jornadaModel.nombreJornada.toLowerCase().includes(searchJornada.toLowerCase())
        );
    //   console.log(params);

      //
	return (
		<Box pt="1.5rem"     
        sx={{						
            height: "auto",
            flexGrow: 1,
            overflowY: { sx: "none", md: "auto" },
          }}>
			<Container
				maxWidth="md"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
                    overflowY: "auto",
					p: "2rem",    
				}}
			>
                {/* start Bradcrumbs */}
                        <BreadCrumbsCustom
						routes={[
							{
								name: "VERIFICACIÓN",
								url: "/verificacion",
							},
						]}
						currentRoute="CONSULTAS CIUDADANAS"
					></BreadCrumbsCustom>
                {/* end Bradcrumbs */}
                {consultasFolio.length > 0 ? (
                    <>
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
                        A CONTINUACIÓN SE MUESTRAN LAS JORNADAS ELECTORALES DISPONIBLES
                        <HtmlTooltip 
        title={
          <React.Fragment>
            <Typography color="inherit" sx={{
							fontSize: {
								xs: "0.9rem",
								sm: "0.9rem",
								md: "0.9rem",
								lg: "1.5rem",
								xl: "1.5rem",
							},
						}}>Seleccione la jornada electoral que deseé. </Typography>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
            {"En caso de no encontrar la deseada, intentelo más tarde."}
          </React.Fragment>
        }
      >
		<HelpIcon color="primary" fontSize="large"/>
      </HtmlTooltip>
					</Typography>
                    <Box 
                    ml={{											
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                    }} 
                    mr={{											
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                    }} 
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
                                lg: "45%",
                                xl: "45%",
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
                    <Box ml={1} mr={1} mt={4} mb={1} align="center" display="flex" justifyContent="center">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {jornadasFiltradas.map((jornada) => (
                    <Grid item xs={4} sm={4} md={4} key={jornada.jornadaModel.idJornada}>
                        <Card 
                        sx={{ minWidth: 247 }} 
                        onClick={() => plantilla1(jornada.jornadaModel.idJornada)}
                        style={{ 
                          // border: "1px solid #D0D0D0", 
                          // background: "#373637"
                          backgroundColor: "#373736",
                      }} >
                          <CardContent>

                            <Typography variant="h6" component="div" color="white">
                            {jornada.jornadaModel.nombreJornada}	
                            </Typography>
                          </CardContent>
                          <CardActions >
                            <Box  align="center" display="flex" justifyContent="center" width="100%" mb={1}>
                            <Button 
                                onClick={() => plantilla1(jornada.jornadaModel.idJornada)}
                                startIcon = {<BallotIcon />}
                                sx={{
									// backgroundColor: "#eba302",
                                    backgroundColor: {
                                        xs: "#373736",
                                        sm: "#373736",
                                        md: "#eba302",
                                        lg: "#eba302",
                                        xl: "#eba302",
                                    },
									// color: "#fff",
                                    color:{
                                        xs: "#f0b91a",
                                        sm: "#f0b91a",
                                        md: "#fff",
                                        lg: "#fff",
                                        xl: "#fff",
                                    },
									fontSize: {
                                        xs: "1rem",
                                        sm: "1rem",
                                        md: "1rem",
                                        lg: "0.9rem",
                                        xl: "0.95rem",
									},
									textAlign: "center",
                                    width: {
                                        xs: "90%",
                                        sm: "85%",
                                        md: "85%",
                                        lg: "80%",
                                        xl: "87%",
                                    },
									"&:hover": {
										background: "linear-gradient(45deg, #fecd0d 30%, #f0b91a 90%)",
                                        color: "#FFFFFF",
									},
								}}>
                                Verificar boletas
                                </Button>
                                </Box>
                          
                          </CardActions>
                        </Card>

                            </Grid>
                            ))}
                        </Grid>
                </Box>
                </>
                ):
                (
                        <>
                    <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: "#ff0000" }}>
                        No se encontraron Consultas por el momento, intente más tarde.
                    </Typography>
                    <BotonBack url='/verificacion'/>
                        </>
                )}
			</Container>
		</Box>
	);
};

