import React, { useEffect, useRef, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Graficas } from "../components/Graficas";
import "../../styles/generalContainer.css";
import { purpleTheme } from "../../theme/purpleTheme";
import { Intermedio } from "../components/Intermedio";
import { useDispatch, useSelector } from "react-redux";
import { getResult } from "../../store/resultados-consultas/consultasThunks";

export const ResultadosConsulta = ({
  chartData = [
    { votos: 50 },
    { votos: 10 },
    { votos: 100 },
    { votos: 140 },
    { votos: 80 },
  ],
}) => {
  const { jornada, id } = useParams();
  const dispatch = useDispatch();
  const { resultados, isLoadingResultados } = useSelector(
    (state) => state.consultas
  );
  const [etiquetas, setetiquetas] = useState([]);
  const [datosN, setDatosN] = useState([]);
  const [titulo, settitulo] = useState("");
  const [update, setUpdate] = useState(false);
  const [update2, setUpdate2] = useState(false);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const datos = [100, 500, 30, 300, 1000, 300, 350];
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/PAN_logo_%28Mexico%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PRI_logo_%28Mexico%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/PRD_logo_%28Mexico%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Worker%27s_Party_logo_%28Mexico%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-partido-verde-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-partido-verde-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-partido-verde-2020.png",
  ];

  useEffect(() => {
    console.log("jornada:", jornada);
    console.log("consulta:", id);
    dispatch(getResult(jornada, id));
  }, []);

  useEffect(() => {
    console.log("Resultados:", resultados);
    if (resultados) {
      console.log(resultados.resultados.lista);
      setetiquetas(resultados.pregunta.lista);
      setDatosN(resultados.resultados.lista);
      settitulo(resultados.pregunta.descripcion);
      setUpdate(!update);
    } else {
      setUpdate(false);
    }
    console.log("cambio");
  }, [resultados]);

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        sx={{ mt: 3, p: 2 }}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          display={"flex"}
          flexDirection="column"
          width={"95%"}
          sx={{ p: 4, background: "#fff", boxShadow: 5, borderRadius: "10px" }}
        >
          <Grid container spacing={2} id="ejemplo23">
            <Grid item xs={3}></Grid>
            <Grid item container xs={6}>
              <Grid
                item
                xs={4}
                display="flex"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  color="initial"
                  align="center"
                  sx={{ wordBreak: "break-word" }}
                >
                  Nuevo León
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Box
                  borderRight="1px solid"
                  pr={4}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    align="center"
                    fontWeight="bold"
                  >
                    Presidente
                  </Typography>
                  <Typography variant="body2" color="initial" align="center">
                    Mayoría relativa
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={5}
                display="flex"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  color="initial"
                  // fontWeight="bold"
                  align="center"
                >
                  Voto por partido político y Candidatura independiente
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Divider sx={{ paddingTop: "1.5rem" }} />
          <Grid container spacing={2} pb={3}>
            <Grid item container xs={12} md={6}>
              <Grid
                item
                xs={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Typography variant="body1" color="initial" align="center">
                  Participación ciudadana
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight="bold"
                  align="center"
                >
                  0.0%
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Typography variant="body1" color="initial" align="center">
                  Inicio
                </Typography>
                <Typography
                  variant="body2"
                  color="initial"
                  fontWeight="bold"
                  align="center"
                >
                  20 Enero 2023
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Box bgcolor="#f2f2f2" border="1px solid" width="100%" p={1}>
                <Typography
                  variant="h6"
                  color="#543884"
                  sx={{ fontSize: "1rem" }}
                >
                  Resumen de la votación
                </Typography>
                <Grid container spacing={1} columns={15}>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ wordBreak: "break-word" }}
                    >
                      Votos acumulados
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  ></Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ wordBreak: "break-word" }}
                      align="center"
                    >
                      Candidaturas no registradas
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  ></Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ wordBreak: "break-word" }}
                      align="center"
                    >
                      Votos nulos
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  ></Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{
                        wordBreak: "break-word",
                        textDecoration: "underline",
                      }}
                      align="center"
                      fontWeight="bold"
                    >
                      Total de votos
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="body1"
                        color="initial"
                        fontWeight="bold"
                        // sx={{ fontSize: "1rem" }}
                      >
                        0
                      </Typography>
                      <Typography
                        variant="caption"
                        color="initial"
                        fontWeight="bold"
                      >
                        0.00%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ fontSize: "2rem" }}
                      fontWeight="bold"
                    >
                      +
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="body1"
                        color="initial"
                        fontWeight="bold"
                      >
                        0
                      </Typography>
                      <Typography
                        variant="caption"
                        color="initial"
                        fontWeight="bold"
                      >
                        0.00%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ fontSize: "2rem" }}
                      fontWeight="bold"
                    >
                      +
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="body1"
                        color="initial"
                        fontWeight="bold"
                      >
                        0
                      </Typography>
                      <Typography
                        variant="caption"
                        color="initial"
                        fontWeight="bold"
                      >
                        0.00%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography
                      variant="caption"
                      color="initial"
                      sx={{ fontSize: "2rem" }}
                      fontWeight="bold"
                    >
                      =
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="body1"
                        color="initial"
                        fontWeight="bold"
                      >
                        0
                      </Typography>
                      <Typography
                        variant="caption"
                        color="initial"
                        fontWeight="bold"
                      >
                        0.00%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ paddingTop: "1.5rem" }} />
        <Box
          display={"flex"}
          width={{ lg: "95%", md: "97%", xs: "100%" }}
          justifyContent="center"
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            height: "auto",

            pt: 5,
            pb: 5,
            background: "#fff",
            boxShadow: 5,
            borderRadius: "10px",
            overflowX: "scroll",
          }}
        >
          <Typography
            variant={"h6"}
            color="initial"
            fontWeight="bold"
            textAlign={"center"}
            sx={{ p: 2 }}
          >
            {titulo}
          </Typography>

          {isLoadingResultados ? (
            <Typography>Esperando</Typography>
          ) : (
            update && (
              <Intermedio
                titulo={titulo}
                datos={datosN}
                labels={etiquetas}
                img={[]}
              ></Intermedio>
            )
          )}
        </Box>
      </Box>

      {/* <ReporteInicialHTML /> */}
    </>
  );
};
