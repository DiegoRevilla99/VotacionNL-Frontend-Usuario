import HelpIcon from '@mui/icons-material/Help';
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BreadCrumbsCustom } from '../components/BreadCrumbsCustom';
import { useVerficacionStore } from '../hooks/useVerificacionStore';
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

import { useParams } from "react-router-dom";




export const GroupPage = () => {
	const navigate = useNavigate();
  
  const params = useParams();
  const [searchJornada, setSearchJornada] = useState('');

  // console.log("imprimimos el store",params);
  const { jornadasFolio } = useVerficacionStore();
  // console.log("imprimimos el stro",jornadasFolio);

  const jornadaEncontrar = jornadasFolio.find(jornada => jornada.jornadaModel.idJornada === params.id);
  // console.log("jornada en la que estamos",jornadaEncontrar);
  const boletaEncontrar = jornadaEncontrar.boletas.find(boleta => boleta.idBoleta === params.idBoleta);
  // console.log("boleta en la que estamos",boletaEncontrar);
  const plantilla1 = () => {
    navigate("/verificacion/visualizacion/boleta/"+params.id);
  };

const [searchValue, setSearchValue] = useState('');

const handleSearch = (value) => {
  setSearchValue(value);
}

// Filtrar las selecciones según la búsqueda
const filteredSelections = boletaEncontrar.selecciones.filter(seleccion => {
  if (seleccion.idSeleccion.toString().includes(searchValue)) {
    return true;
  }
  if (seleccion.nombrePartido.toLowerCase().includes(searchValue.toLowerCase())) {
    return true;
  }
  if (seleccion.nombreCandidato.toLowerCase().includes(searchValue.toLowerCase())) {
    return true;
  }
  return false;
});

	return (
		<Box pt="1.5rem" align="center" display="flex" justifyContent="center"  
        sx={{						
            height: "auto",
            flexGrow: 1,
            overflowY: "auto",
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

        {/* Bradcrumbs */}
        <BreadCrumbsCustom
						routes={[
							{
								name: "VERIFICACIÓN",
								url: "/verificacion",
							},
              {
								name: "JORNADAS ELECTORALES",
								url: "/verificacion/visualizacion",
							},
              {
								name: "BOLETAS",
								url: "/verificacion/visualizacion/boleta/"+params.id,
							},
						]}
						currentRoute="FOLIOS"
					></BreadCrumbsCustom>
        {/* Bradcrumbs */}
        {boletaEncontrar.selecciones.length > 0 ? (
          <>
                <Typography
                  color="initial"
                  mb="1rem"
                  align="center"
                  sx={{
                        fontSize: {
                          xs: "1.2rem",
                          sm: "1.3rem",
                          md: "1.4rem",
                          lg: "1.5rem",
                          xl: "1.5rem",
                      },
                      }}
                    >
                       DETALLES DE LA BOLETA CON EL FOLIO: {boletaEncontrar.idBoleta}
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
						}}>Se muestran los datos recopilados con el folio seleccionado anteriormente. </Typography>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
            {/* {"En caso de no encontrar la deseada, intentelo más tarde."} */}
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
              md: 10,
              lg: 10,
              xl: 10,
            }} 
            mb={3}
            sx={{ 
                display: 'flex', 
                justifyContent:'flex-end' }}>
                  <TextField
                      id="input-with-icon-textfield"
                      label="Ingrese el nombre del sentido, el partido o el folio"
                      sx={{ width: {
                          xs: "100%",
                          sm: "100%",
                          md: "50%",
                          lg: "40%",
                          xl: "40%",
                      } }}
                      size="normal"
                      placeholder="Ej: Nombre del partido... o El Folio... o Nombre del candidato... "
                      onChange={(e) => handleSearch(e.target.value)}
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
          <Box 
          mb={3}
            sx={{ 
              width: {
                xl: "70%",
                lg: "70%",
                md: "70%",
                sm: "85%",
                xs: "100%",
                },
                boxShadow: 5,
                }}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead style={{background: "#783a9cad", color: "white"}}>
                  <TableRow >
                    <TableCell 
                    align="center" 
                    style={{color: "#EEEBDF", 
                      fontSize: "1.2rem",
                                  }} >FOLIOS</TableCell>
                    <TableCell align="center" style={{color: "#EEEBDF", fontSize: "1.2rem",
                                  }}>PARTIDO</TableCell>
                    <TableCell align="center" style={{color: "#EEEBDF", fontSize: "1.2rem",
                                  }}>SENTIDOS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{background: "#d0afd3db"}}>
                {filteredSelections.map((seleccion, index) => (
                    <TableRow 
                      key={index}
                    > 
                      <TableCell  style={{ width: "30%", color:"BLACK", fontSize:"1.05rem"}}>
                      {seleccion.idSeleccion}</TableCell>
                      <TableCell style={{ width: "30%", color:"BLACK", fontSize:"1.05rem"}}>{seleccion.nombrePartido}</TableCell>
                      <TableCell style={{ width: "60%", color:"BLACK", fontSize:"1.05rem"}}>{seleccion.nombreCandidato}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          </>
        ):
        (
                <>
            <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: "#ff0000" }}>
                No se encontraron folios pertenecientes a esta boleta por el momento, intente más tarde.
            </Typography>

            <Button
              // type="submit"
            //   className={styles.boton}
            borderRadius="10px"
              variant="contained"
              color="primary"
            //   style={styleButton}
              onClick={plantilla1}
              sx={{
                mt: 2,
                width: { sm: `150px`, xs: "150px" },
              }}
            >
              <ReplyAllIcon />
              Regresar
            </Button>
                </>
        )}
			</Container>
		</Box>
	);
};
