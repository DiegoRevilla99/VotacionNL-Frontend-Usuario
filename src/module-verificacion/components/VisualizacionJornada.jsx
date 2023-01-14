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
  import { useState, useEffect } from "react";
  import { GeneralTable } from "../components/GeneralTable";
//   import { useJornadaStore } from "../hooks/useJornadaStore";
  import { Stack } from "@mui/system";
  import TableViewIcon from '@mui/icons-material/TableView';
  import SettingsIcon from "@mui/icons-material/Settings";
  import { useDispatch } from "react-redux";
//   import {
//     onDeleteJornada,
//     onGetjornadas,
//     // onGetJornadasFormales,
//   } from "../../store/module-preparacion/jornada/ThunksJornada";
//   import { onSetJornadaSelected } from "../../store/module-preparacion/jornada/SliceJornada";
  import DeleteIcon from "@mui/icons-material/Delete";

  
  export const VisualizacionJornada = () => {
    const navigate = useNavigate();
  
    // ToDo:AQUI OBTENGAN LAS VARIABLES STATUS Y DATA DE SUS ESTADOS GLOBALES
    // const { jornadasData, status } = useJornadaStore();
    // const { jornadasData, status } = useJornadaStore();
  
    // const dispatch = useDispatch();
    const columns = [
      {
        field: "lastName",
        headerName: "Título de la jornada o consulta",
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
                onClick={() => navigate("/verificacion/visualizacion/group")}
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
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            overflowY: "auto",
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                m: "2rem",
                mt: "1rem",
              }}
            >
  
              <Box
                sx={{
                  boxShadow: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  mt: "2rem",
                  borderRadius: "2rem",
                  p: "2rem",
                  pt: "1rem",
                }}
              >
                <Typography variant="h5" color="initial" mb="1rem">
                  Jornadas o consultas activas
                </Typography>
                <Divider />
                <Box
                  mt={"1rem"}
                  sx={{
                    height: "100%",
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
            </Box>
          </Grid>
        </Grid>
      );
  };
  const rows = [
    { id: 1, lastName: 'Snow'},
    { id: 2, lastName: 'Lannister'},
    { id: 3, lastName: 'Lannister'},
    { id: 4, lastName: 'Stark'},
    { id: 5, lastName: 'Targaryen'},
    { id: 6, lastName: 'Melisandre'}, 
    { id: 7, lastName: 'Clifford'},
    { id: 8, lastName: 'Frances'}, 
    { id: 9, lastName: 'Roxie'},
  ];