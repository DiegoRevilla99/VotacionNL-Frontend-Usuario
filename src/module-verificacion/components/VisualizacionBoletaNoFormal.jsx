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
import ReplyIcon from '@mui/icons-material/Reply';

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
                Boletas registradas no formales
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
              <Box pt="2rem"
                                align="right">
									<Button 
									onClick={() => navigate("/verificacion/visualizacion")}
									startIcon={<ReplyIcon />}
									sx={{
										backgroundColor: "#511079",
										// borderRadius: "15px 15px 15px 15px",
										color: "#fff",
										fontSize: {
											xl: "0.9rem",
											lg: "0.9rem",
											sm: "0.9rem",
											xs: "0.9Srem",
										},
										textAlign: "center",
										width: "13rem",
										height: "2.8rem",
										"&:hover": {
											background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
											color: "#FFFFFF",
											boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
											transform: "translate(-2px, -2px)",
											transition: "all 0.5s ease",
										},
									}}>
									Regresar
									</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
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