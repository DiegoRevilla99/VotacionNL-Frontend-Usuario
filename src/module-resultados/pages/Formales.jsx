import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GridCards } from "../components/GridCards";
import { SearchCustome } from "../components/SearchCustome";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useDispatch, useSelector } from "react-redux";
import { getJornadasFormales } from "../../store/resultados-formales/formalesThunks";

export const Formales = () => {
  const dispatch = useDispatch();
  const { jornadas, isLoadingJornadas } = useSelector(
    (state) => state.formales
  );
  const [buscador, setBuscador] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const handleSearch = (event) => {
    setBuscador(event.target.value);
    searching(jornadas, event.target.value);
  };

  const searching = (data, buscador) => {
    const newData = data.filter((jornada) => {
      if (jornada.nombreJornada.toUpperCase().includes(buscador.toUpperCase()))
        return jornada;
    });

    setDataSearch(newData);
  };

  useEffect(() => {
    setDataSearch(jornadas);
  }, [jornadas]);

  useEffect(() => {
    dispatch(getJornadasFormales());
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
          // background: "#fff",
          p: 2,
          mt: 5,
          width: "90%",
          borderRadius: "20px",
          height: "auto",
          // boxShadow: 2,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Resultados encontrados:
        </Typography>
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
            <GridCards jornadas={dataSearch} />
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
