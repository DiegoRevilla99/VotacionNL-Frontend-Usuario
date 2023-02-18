import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchCustome } from "../components/SearchCustome";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { GridBoletas } from "../components/GridBoletas";
import { GridBoletasConsultas } from "../components/GridBoletasConsultas";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPapletas } from "../../store/resultados-consultas/consultasThunks";

export const BoletasConsultas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [jornada, setjornada] = useState(null);
  const { jornadas, papeletas, isLoadingPapeletas } = useSelector(
    (state) => state.consultas
  );

  const getJornada = (id) => {
    return jornadas.find((jornada) => {
      console.log(jornada);
      if (jornada.idJornada.toString() === id.toString()) return jornada;
    });
  };
  useEffect(() => {
    dispatch(getPapletas(id));
    const jornadaa = getJornada(id);
    console.log(jornadaa);
    console.log(jornadas);
    setjornada(jornadaa);
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      sx={{ mt: 5, width: "100%", height: "auto" }}
    >
      <Typography sx={{ mb: 5, fontSize: "20px", fontWeight: "bold" }}>
        {jornada?.nombreJornada ? jornada.nombreJornada : "Elige"}
      </Typography>
      <SearchCustome></SearchCustome>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        sx={{
          p: 2,
          pt: 4,
          mt: 5,
          width: "90%",
          borderRadius: "20px",
          height: "auto",
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Resultados encontrados:
        </Typography>
        {isLoadingPapeletas ? (
          <Stack
            justifyContent="center"
            sx={{ color: "grey.500" }}
            spacing={2}
            direction="row"
          >
            <CircularProgress color="primary" />
          </Stack>
        ) : (
          <Box sx={{ width: "100%", p: 3, mt: 3 }}>
            <GridBoletasConsultas papeletas={papeletas} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
