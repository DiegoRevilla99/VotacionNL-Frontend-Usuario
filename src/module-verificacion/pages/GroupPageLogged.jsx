import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField, Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// ----------- Bradcrumbs ----------
// import { experimentalStyled as styled } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
// import { useParams } from "react-router-dom";
import { ReplyAll } from '@mui/icons-material';
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
  
  const rows = [
    { id: 1, folio:'JE22-ORD-GHR41S', sentido: 'Matias Oropeza Oropeza '},
    { id: 2, folio:'JE22-ORD-GHR42S', sentido: 'Isidoro Arriaga Arriaga'},
    { id: 3, folio:'JE22-ORD-GHR43S', sentido: 'Octaviano Cristobal'},
    { id: 4, folio:'JE22-ORD-GHR44S', sentido: 'Gerard Hermilo Buenrostro'},
    { id: 5, folio:'JE22-ORD-GHR45S', sentido: 'Paola Gaspar Hurtado'},
    { id: 6, folio:'JE22-ORD-GHR46S', sentido: 'Melissa Librado Rojas'}, 
    { id: 7, folio:'JE22-ORD-GHR47S', sentido: 'Karime Nereida Pardo'},
    { id: 8, folio:'JE22-ORD-GHR48S', sentido: 'Elizabeth Cristian Balam'}, 
    { id: 9, folio:'JE22-ORD-GHR49S', sentido: 'Nahomi Elvia Vilchis'},
    { id: 10, folio:'JE22-ORD-GHR411S', sentido: 'Matias Oropeza Oropeza '},
    { id: 11, folio:'JE22-ORD-GHR412S', sentido: 'Isidoro Arriaga Arriaga'},
    { id: 12, folio:'JE22-ORD-GHR413S', sentido: 'Octaviano Cristobal'},
    { id: 13, folio:'JE22-ORD-GHR414S', sentido: 'Gerard Hermilo Buenrostro'},
    { id: 14, folio:'JE22-ORD-GHR415S', sentido: 'Paola Gaspar Hurtado'},
    { id: 15, folio:'JE22-ORD-GHR416S', sentido: 'Melissa Librado Rojas'}, 
    { id: 16, folio:'JE22-ORD-GHR417S', sentido: 'Karime Nereida Pardo'},
    { id: 17, folio:'JE22-ORD-GHR418S', sentido: 'Elizabeth Cristian Balam'}, 
    { id: 18, folio:'JE22-ORD-GHR419S', sentido: 'Nahomi Elvia Vilchis'},
  ];

export const GroupPageLogged = () => {
	const navigate = useNavigate();
  
  const params = useParams();
  const [searchJornada, setSearchJornada] = useState('');

  // console.log("imprimimos el store",params);
  const { eleccionesFolio } = useVerficacionStore();
  // console.log("imprimimos el stro",jornadasFolio);

  const jornadaEncontrar = eleccionesFolio.find(jornada => jornada.jornadaModel.idEleccion === params.id);
  // console.log("jornada en la que estamos",params);
  const boletaEncontrar = jornadaEncontrar.selecciones.find(boleta => boleta.folioBoleta === params.idBoleta);
  console.log("jornada en la que estamos",boletaEncontrar);
  // const boletaEncontrar = jornadaEncontrar.selecciones.find(boleta => boleta.boleta.folioBoleta === params.idBoleta);
  const plantilla1 = () => {
    navigate("/verificacion/visualizacion/boleta/"+params.id);
  };

const [searchValue, setSearchValue] = useState('');

const handleSearch = (value) => {
  setSearchValue(value);
}

// Filtrar las selecciones según la búsqueda
// const filteredSelections = boletaEncontrar.sentido.filter(seleccion => {
//   if (seleccion.idSeleccion.toString().includes(searchValue)) {
//     return true;
//   }
//   if (seleccion.nombreCandidato.toLowerCase().includes(searchValue.toLowerCase())) {
//     return true;
//   }
//   return false;
// });
	return (
		<Box pt="1.5rem" 
    align="center" display="flex" justifyContent="center" 
    sx={{						
      height: "auto",
      flexGrow: 1,
      overflowY: { sx: "none", md: "auto" },
    }}
      >
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
								url: "/verificacion/visualizacionnf",
							},
              {
								name: "BOLETAS",
								// url: "/verificacion/visualizacionnf/boletanf/",
								url: "/verificacion/visualizacionnf/boletanf/"+params.id,
							},
						]}
						currentRoute="FOLIOS"
					></BreadCrumbsCustom>
        {/* Bradcrumbs */}
        {boletaEncontrar.sentido !== null ? (
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
                       Folios y sus sentidos de acuerdo a la boleta {boletaEncontrar.folioBoleta}
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
                            label="Ingrese el nombre o folio"
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
                    <Box 
                      sx={{ width: {
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
                                  }}>SENTIDOS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{background: "#d0afd3db"}}>

  {boletaEncontrar.sentido && (
    <TableRow>
      <TableCell style={{ width: "30%", color: "black", fontSize: "1.05rem" }}>
        {boletaEncontrar.sentido.idSeleccion}
      </TableCell>
      <TableCell style={{ width: "60%", color: "black", fontSize: "1.05rem" }}>
        {boletaEncontrar.sentido.nombreCandidato}
      </TableCell>
    </TableRow>
  )}


                </TableBody>
              </Table>
            </TableContainer>
          </Box>
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
              <ReplyAll />
              Regresar
            </Button>
                </>
        )}
			</Container>
		</Box>
	);
};
