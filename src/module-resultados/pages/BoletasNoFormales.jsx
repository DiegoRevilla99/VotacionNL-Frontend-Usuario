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
import { GridBoletasNF } from "../components/GridBoletasNF";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoletasNF } from "../../store/resultados-noformales/noformalesThunks";

export const BoletasNoFormales = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [jornada, setjornada] = useState(null);
  const { jornadas, boletas, isLoadingBoletas } = useSelector(
    (state) => state.noformales
  );
  const getJornada = (id) => {
    return jornadas.find((jornada) => {
      console.log(jornada.idEleccion);
      if (jornada.idEleccion.toString() === id.toString()) return jornada;
    });
  };

  useEffect(() => {
    dispatch(getBoletasNF(id));
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
        Elige
      </Typography>
      <SearchCustome></SearchCustome>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        sx={{
          p: 2,
          mt: 5,
          width: "90%",
          borderRadius: "20px",
          height: "auto",
          // background: "#fff",
          // boxShadow: 3,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Resultados encontrados:
        </Typography>
        {isLoadingBoletas ? (
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
            <GridBoletasNF boletas={boletas} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
