import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GridCardsNF } from "../components/GridCardsNF";
import { SearchCustome } from "../components/SearchCustome";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useDispatch, useSelector } from "react-redux";
import { getJornadasNF } from "../../store/resultados-noformales/noformalesThunks";
export const NoFormales = () => {
  const dispatch = useDispatch();
  const { jornadas, isLoadingJornadas } = useSelector(
    (state) => state.noformales
  );

  const [buscador, setBuscador] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const handleSearch = (event) => {
    setBuscador(event.target.value);
    searching(jornadas, event.target.value);
  };

  const searching = (data, buscador) => {
    const newData = data.filter((jornada) => {
      if (jornada.nombreEleccion.toUpperCase().includes(buscador.toUpperCase()))
        return jornada;
    });

    setDataSearch(newData);
  };

  useEffect(() => {
    setDataSearch(jornadas);
  }, [jornadas]);

  useEffect(() => {
    dispatch(getJornadasNF());
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
        Busque la elección
      </Typography>
      <SearchCustome
        buscador={buscador}
        handleSearch={handleSearch}
      ></SearchCustome>
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
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Resultados encontrados:
        </Typography>
        {/* <Typography sx={{ mb:2 ,}}>Elecciones recientes</Typography> */}
        <Box sx={{ width: "100%", p: 3, mt: 3 }}>
          {isLoadingJornadas ? (
            <Stack
              justifyContent="center"
              sx={{ color: "grey.500" }}
              spacing={2}
              direction="row"
            >
              <CircularProgress color="primary" />
            </Stack>
          ) : (
            <GridCardsNF jornadas={dataSearch} />
          )}
        </Box>

        <IconButton
          sx={{ mt: 2 }}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <Typography sx={{ mr: 2 }}>Ver más</Typography>
          <ExpandCircleDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
