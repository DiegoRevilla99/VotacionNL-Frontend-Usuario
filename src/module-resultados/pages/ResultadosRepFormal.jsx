import React, { useEffect, useRef, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Graficas } from "../components/Graficas";
import "../../styles/generalContainer.css";
import { purpleTheme } from "../../theme/purpleTheme";
import { Intermedio } from "../components/Intermedio";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { getResult } from "../../store/resultados-consultas/consultasThunks";
import { CardCandidatos } from "../components/formales/CardCandidatos";
import { NoDisponible } from "../components/NoDisponible";
import {
  getBoletaBYIDFormales,
  getConfigJornadaFormal,
  getResultFormales,
} from "../../store/resultados-formales/formalesThunks";
import { GridCandFormales } from "../components/formales/GridCandFormales";
import { Resumen } from "../components/Resumen";
import { ChartJFormales } from "../components/formales/chartJFormales";
import { BreadCrumbsCustom } from "../components/BreadCrumbsCustom";
import { startLoadingResultados } from "../../store/resultados-formales/formalesSlice";

export const ResultadosRepFormal = ({}) => {
  const { jornada, id } = useParams();
  const dispatch = useDispatch();
  const {
    resultados,
    isLoadingResultados,
    boleta,
    boletaInfo,
    isLoadingConfigJornadaFormal,
    configJornadaFormal,
  } = useSelector((state) => state.formales);
  const theme = useTheme();
  const xssize = useMediaQuery(theme.breakpoints.only("xs"));

  useEffect(() => {
    dispatch(getBoletaBYIDFormales(id));
    dispatch(getResultFormales(jornada, id));
    dispatch(getConfigJornadaFormal(jornada));
  }, []);

  /* useEffect(() => {
    console.log("Cambio boleta****:", boleta);
  }, [boleta]); */

  useEffect(() => {
    console.log("isLoadingResultados****:", isLoadingResultados);
    console.log("Cambio boleta:", boleta);
  }, [isLoadingResultados]);

  return (
    <>
      {isLoadingResultados ? (
        <Stack
          justifyContent="center"
          sx={{ color: "grey.500" }}
          spacing={2}
          mt={10}
          direction="column"
          alignItems={"center"}
          width={"100%"}
        >
          <Typography textAlign={"centerr"}>
            Cargando esperando resultados
          </Typography>
          <CircularProgress color="primary" />
        </Stack>
      ) : boleta ? (
        <Box
          display={"flex"}
          width={"100%"}
          sx={{ mt: 3, p: 2 }}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
          className="animate__animated animate__fadeInUp"
        >
          <BreadCrumbsCustom
            routes={[
              {
                name: "INICIO",
                url: "/resultados/inicio/",
              },
              {
                //
                name: "JORNADAS FORMALES",
                url: "/resultados/formales/",
              },
              {
                name: !isLoadingConfigJornadaFormal
                  ? configJornadaFormal?.eleccionModel?.nombreJornada
                  : "...",
                url: `/resultados/boletas-formales/${configJornadaFormal?.eleccionModel?.idJornada}/`,
              },
            ]}
            currentRoute={
              !isLoadingResultados ? boletaInfo?.nombreEstructuraBoleta : "..."
            }
          ></BreadCrumbsCustom>
          <Typography
            sx={{
              mb: 3,
              fontWeight: "bold",
              p: 2,
              boxShadow: 3,
              color: "#fff",
              background: "#543884",
              borderRadius: "30px",
              fontSize: { lg: "25px", md: "20px", xs: "15px" },
            }}
            textAlign={"center"}
          >
            {boletaInfo?.nombreEstructuraBoleta}
          </Typography>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            width={{ lg: "90%", md: "97%", xs: "100%" }}
            sx={{
              p: 4,
              background: "#fff",
              mt: 2,
              boxShadow: 5,
              borderRadius: "20px",
            }}
          >
            {/*  <Box display={"flex"} flexDirection="column" alignItems="center">
              <Typography
                variant="body2"
                mt={1}
                mb={1}
                color="initial"
                align="center"
              >
                CANDIDATO GANADOR:
              </Typography>

              <Typography
                mt={2}
                mb={2}
                color="initial"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                {boleta?.isEmpate ? (
                  <>
                    
                  </>
                ) : (
                  <>{boleta?.winner?.nombre}</>
                )}
              </Typography>

              

              <Box
                borderRight="1px solid"
                pr={4}
                display="flex"
                flexDirection="column"
              ></Box>
            </Box> */}

            <Box></Box>

            <Divider sx={{ mb: 2, paddingTop: "1.5rem" }} />

            <Resumen
              acumulados={boleta?.acumuladas}
              candReg={boleta.cnr}
              nulos={boleta.nulo}
              total={boleta?.acumuladas + boleta.cnr + boleta.nulo}
            />
          </Box>

          <Divider sx={{ paddingTop: "1.5rem" }} />
          <Box
            display={"flex"}
            width={{ lg: "90%", md: "97%", xs: "100%" }}
            justifyContent="center"
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              height: "auto",

              pt: 5,
              pb: 5,
              mt: 2,
              background: "#fff",
              boxShadow: 5,
              borderRadius: "20px",
              overflowX: "scroll",
            }}
          >
            <Typography
              variant={"h7"}
              color="initial"
              fontWeight="bold"
              textAlign={"center"}
              sx={{ mb: 5 }}
            >
              RESULTADOS:
            </Typography>
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent="center"
              alignContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              sx={{
                height: "auto",
              }}
            >
              <Box
                width={"100%"}
                justifyContent="center"
                display={xssize ? "flex" : "none"}
              >
                <GridCandFormales
                  total={boleta?.acumuladas + boleta.cnr + boleta.nulo}
                  candidatos={boleta.candidatos}
                />
              </Box>
              <Box width={"95%"} display={!xssize ? "flex" : "none"}>
                <ChartJFormales
                  totalV={boleta?.acumuladas + boleta.cnr + boleta.nulo}
                  candidatos={boleta.candidatos}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <NoDisponible titulo={boletaInfo?.nombreEstructuraBoleta} />
      )}
    </>
  );
};
