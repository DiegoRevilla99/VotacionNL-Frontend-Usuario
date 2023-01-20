import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { GeneralTable } from "../components/GeneralTable";
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

// ----------- Bradcrumbs ----------
// import { experimentalStyled as styled } from '@mui/material/styles';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BallotIcon from '@mui/icons-material/Ballot';
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

export const VisualizacionBoletaNoFormal = () => {
  const navigate = useNavigate();

  // ToDo:AQUI OBTENGAN LAS VARIABLES STATUS Y DATA DE SUS ESTADOS GLOBALES
  // const { jornadasData, status } = useJornadaStore();
  // const { jornadasData, status } = useJornadaStore();

  // const dispatch = useDispatch();
  const columns = [
    {
      field: "lastName",
      headerName: "Título de la boleta",
      flex: 10,
    },
    {
      field: "Acciones",
      headerName: "Acciones",
      flex: 3,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              startIcon={<TableViewIcon />}
              // onClick={() => handleEdit(params.id, params.row.nombreJornada)}
              onClick={() => navigate("/verificacion/visualizacionnf/boletanf/groupnf")}
            >
              Ver
            </Button>
          </Stack>
        );
      },
    },
  ];

  // USEEFFECT QUE PUEDES USAR PARA HACER UN GET DE LAS JORNADAS AL RENDERIZAR LA PAGINA
  // useEffect(() => {
  //   // if (jornadasData.length === 0) dispatch(onGetjornadas());
  //   if (jornadasData.length === 0) dispatch(onGetjornadas());
  // }, []);

  // // METODO PARA BORRAR UN REGISTRO
  // const handleDelete = (id) => {
  //   dispatch(onDeleteJornada(id));
  // };

  // // MÉTODO PARA EDITAR UN REGISTRO
  // const handleEdit = (id, title) => {
  //   dispatch(onSetJornadaSelected({ id, title, boletas: [] }));
  //   navigate("/preparacion/jornada/" + id);
  // };

  // MÉTODO PARA IR A LA PAGINA DE CONFIGURACIÓN DEL REGISTRO
  // const handleConfig = (id) => {
  //   navigate("/preparacion/jornada/config/" + id);
    // dispatch(onGetConfig(id));
  // };

  if (status === "checking")
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  else
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
                     <Breadcrumbs aria-label="breadcrumb">
                         <StyledBreadcrumb
                         component="a"
                         href="/verificacion"
                         label="Verificación"
                         icon={<HomeIcon fontSize="small" />}
                         />
                         <StyledBreadcrumb 
                         component="a"
                         href="/verificacion/visualizacionnf"
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
         A CONTINUACIÓN SE MUESTRAN LAS BOLETAS DE LA JORNADA + NOMBRE DE LA JORNADA
       </Typography>
       <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  boxShadow: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  borderRadius: "2rem",
                  p: "2rem",
                }}
              >
                <Typography variant="h5" color="initial" mb={2}>
                  Boletas registradas
                </Typography>
              <Divider />
              <Box
                sx={{
                  height: "25rem",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* TABLA GENERAL, TIENEN QUE PASARLE LA DATA DE LOS REGISTROS Y EL ID DE 
                                CADA REGISTRO SE DEBE LLAMAR "idJornada" o si el id de cada registro 
                                tiene otro nombre, cambien el atributo idName al nombre que quieran */}
                <GeneralTable
                // data = {jornadasData}
                  data={rows}
                  columns={columns}
                  idName={"id"}
                />
                </Box>
              </Box>
          </Grid>
          </Box>
        </Grid>
    </Container>
	</Box>
    );
};
  const rows = [
    { id: 1, lastName: 'BOLETA N F ELECTORAL 2021'},
    { id: 2, lastName: 'BOLETA N F ELECTORAL 2022'},
    { id: 3, lastName: 'BOLETA N F ELECTORAL 2023'},
    { id: 4, lastName: 'BOLETA N F ESTUDIANTIL 2021'},
    { id: 5, lastName: 'BOLETA N F ESTUDIANTIL 2022'},
    { id: 6, lastName: 'BOLETA N F ESTUDIANTIL 2023'}, 
    { id: 7, lastName: 'BOLETA N F GOBERNADOR ORDINARIA 2021'},
    { id: 8, lastName: 'BOLETA N F GOBERNADOR ORDINARIA 2022'}, 
    { id: 9, lastName: 'BOLETA N F GOBERNADOR ORDINARIA 2023'},
  ];