import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    LinearProgress,
    TextField,
    Paper,
    Typography,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { Container } from "@mui/system";
  import { useState, useEffect } from "react";
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  //   import { useJornadaStore } from "../hooks/useJornadaStore";
  import { Stack } from "@mui/system";
  import TableViewIcon from '@mui/icons-material/TableView';
  import { useDispatch } from "react-redux";
  //   import {
  //     onDeleteJornada,
  //     onGetjornadas,
  //     // onGetJornadasFormales,
  //   } from "../../store/module-preparacion/jornada/ThunksJornada";
  //   import { onSetJornadaSelected } from "../../store/module-preparacion/jornada/SliceJornada";
  import SearchIcon from '@mui/icons-material/Search';
  import InputAdornment from '@mui/material/InputAdornment';
  import { experimentalStyled } from '@mui/material/styles';

  // ----------- Bradcrumbs ----------
// import { experimentalStyled as styled } from '@mui/material/styles';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BallotIcon from '@mui/icons-material/Ballot';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Item = experimentalStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
// ----------- Bradcrumbs ----------
  export const VisualizacionBoleta = () => {
    const navigate = useNavigate();
  	const plantilla1 = () => {
      navigate("/verificacion/visualizacion/boleta/group");
    };
    const [searchJornada, setSearchJornada] = useState('');
    if (status === "checking")
      return (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      );
    else
      return (
        <Box pt="1.5rem">
         <Container
         maxWidth="lg"
             sx={{
                 boxShadow: 1,
                 backgroundColor: "white",
                 borderRadius: { xs: "1rem", md: "2rem" },
                 p: "2rem",
                //  pl: "2rem",
             }}
         >
        <Grid
            container
          sx={{
            height: "100%",
            width: "100%",
            overflowY: "auto",
          }}
        >
            <Box sx={{ width: "100%" }}>
              {/* Bradcrumbs */}
              <Box align="center" display="flex" justifyContent="center" mb={2}>
                  <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
                      <StyledBreadcrumb
                      component="a"
                      href="/verificacion"
                      label="Verificación"
                      icon={<HomeIcon fontSize="small" />}
                      />
                      <StyledBreadcrumb 
                      component="a"
                      href="/verificacion/visualizacion"
                      icon={<AllInboxIcon fontSize="small" />}
                      label="Jornadas" 
                      />
                      <StyledBreadcrumb
                      label="Boletas"
                      icon={<BallotIcon fontSize="small" />}
                      />
                  </Breadcrumbs>
                </Box>
          {/* Bradcrumbs */}
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
              A continuación se muestran las boletas de la jornadas *name jornada*
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
              <Box ml={1} mr={1} mt={4} mb={1}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {rows.filter((jornada) => jornada.lastName.toLowerCase().includes(searchJornada)
                    || jornada.lastName.toUpperCase().includes(searchJornada)
                    ).map((jornada) => (
                    <Grid item xs={4} sm={4} md={6} key={jornada.id}>
                        <Card 
                        sx={{ minWidth: 247 }} 
                        onClick={plantilla1}
                        style={{ 
                          // border: "1px solid #D0D0D0", 
                          // background: "#373637"
                          backgroundColor: "#EEEBDF",
                      }} >
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              Boleta {jornada.id}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {jornada.lastName}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button 
                            onClick={plantilla1}
                            sx={{ 
                              // color: "#373637", 
                              color: "f0b91a8a",
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
          </Box>
        </Grid>
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