import {
  Box,
  Button, Grid, LinearProgress, TextField, Typography
} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
  //   import { useJornadaStore } from "../hooks/useJornadaStore";
  //   import {
  //     onDeleteJornada,
  //     onGetjornadas,
  //     // onGetJornadasFormales,
  //   } from "../../store/module-preparacion/jornada/ThunksJornada";
  //   import { onSetJornadaSelected } from "../../store/module-preparacion/jornada/SliceJornada";
  import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useParams } from "react-router-dom";
  // ----------- Bradcrumbs ----------
// import { experimentalStyled as styled } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { BotonBack } from "../components/botonback";
import { BreadCrumbsCustom } from "../components/BreadCrumbsCustom";
import { useVerficacionStore } from '../hooks/useVerificacionStore';
// ----------- Bradcrumbs ----------
  export const VisualizacionBoleta = () => {
    const navigate = useNavigate();
  	const plantilla1 = (idBoleta) => {
      console.log("imprimimos el id",idBoleta);
      // navigate("/verificacion/visualizacion/boleta/group");
      navigate("/verificacion/visualizacion/boleta/"+params.id+"/group/"+idBoleta);
      // verificacion/visualizacion/:id/boleta/group/:id
    };

    const params = useParams();
    console.log("imprimimos el store",params);
    const { jornadasFolio } = useVerficacionStore();
    console.log("imprimimos el stro",jornadasFolio);
    const [searchBoleta, setSearchBoleta] = useState('');

    const jornadaEncontrar = jornadasFolio.find(jornada => jornada.jornadaModel.idJornada === params.id);

    const boletasFiltradas = jornadaEncontrar.boletas.filter((boleta) =>
    boleta.idBoleta.toLowerCase().includes(searchBoleta.toLowerCase())
  );
    if (status === "checking")
      return (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      );
    else
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
						]}
						currentRoute="BOLETAS"
					></BreadCrumbsCustom>
          {/* Bradcrumbs */}
          {jornadaEncontrar.boletas.length > 0 ? (
            <>
            <Typography
              color="initial"
              mb="1rem"
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
              A CONTINUACIÓN SE MUESTRAN LAS BOLETAS DE {jornadaEncontrar.jornadaModel.nombreJornada}
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
                      label="Ingrese el nombre de la boleta a buscar"
                      sx={{ width: {
                          xs: "100%",
                          sm: "100%",
                          md: "50%",
                          lg: "40%",
                          xl: "40%",
                      } }}
                      size="normal"
                      placeholder="Ejemplo: Electoral..."
                      onChange={(e) => setSearchBoleta(e.target.value)}
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
              <Box ml={1} mr={1} mt={4} mb={1}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {boletasFiltradas.map((boleta, index) => (
                    <Grid item xs={4} sm={4} md={6} key={index}>
                        <Card 
                        sx={{ minWidth: 247 }} 
                        // onClick={plantilla1}
                        onClick={() => plantilla1(boleta.idBoleta)}
                        style={{ 
                          // border: "1px solid #D0D0D0", 
                          // background: "#373637"
                          // backgroundColor: "#783A9C",
                          backgroundColor: "#5438849e",
                          color: "#FFFFFF",
                      }} >
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text" gutterBottom>
                              Boleta {index}
                            </Typography>
                            <Typography variant="h6" component="div">
                              {boleta.idBoleta}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button 
                          // onClick={plantilla1}
                            onClick={() => plantilla1(boleta.idBoleta)}
                            sx={{ 
                              color: "#364691", 
                              // color: "433A9C",543884
                              // background: "#ffe8c6",
                              "&:hover": {
                                // background: "linear-gradient(45deg, #f0b91a8a 30%, #f0b91a8a 90%)",
                                // color: "#FFFFFF",
                              }, }}
                            size="large" 
                            endIcon = {<ArrowOutwardIcon/>} >Detalles</Button>
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
                        No se encontraron sentidos en la boleta por el momento, intente más tarde.
                    </Typography>

                     <BotonBack url="/verificacion/visualizacion"/>
                         </>
                    
                )}
    </Container>
	</Box>
      );
  };
    const rows = [
      { id: 1, lastName: 'BOLETA ELECTORAL 2021'},
      { id: 2, lastName: 'BOLETA ELECTORAL 2022'},
      { id: 3, lastName: 'BOLETA ELECTORAL 2023'},
      { id: 4, lastName: 'BOLETA ESTUDIANTIL 2021'},
      { id: 5, lastName: 'BOLETA ESTUDIANTIL 2022'},
      { id: 6, lastName: 'BOLETA ESTUDIANTIL 2023'}, 
      { id: 7, lastName: 'BOLETA GOBERNADOR ORDINARIA 2021'},
      { id: 8, lastName: 'BOLETA GOBERNADOR ORDINARIA 2022'}, 
      { id: 9, lastName: 'BOLETA GOBERNADOR ORDINARIA 2023'},
    ];