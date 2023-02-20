import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { GridCards } from "../components/GridCards";
import { SearchCustome } from "../components/SearchCustome";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { GridConsultas } from "../components/GridConsultas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJornadasConsultas } from "../../store/resultados-consultas/consultasThunks";

export const Consultas = () => {
  const dispatch = useDispatch();
  const { jornadas, isLoadingJornadas } = useSelector(
    (state) => state.consultas
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
    dispatch(getJornadasConsultas());
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      sx={{ mt: 3, mb: 5, width: "100%", height: "auto" }}
    >
      <Typography sx={{ mt: 3, mb: 5, fontSize: "20px", fontWeight: "bold" }}>
        Busque la consulta
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
          // background: "#fff",
          //boxShadow: 3,
          //border: "2px solid",
          //borderColor: "#BEBDBD",
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
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
            <GridConsultas jornadas={dataSearch} />
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
