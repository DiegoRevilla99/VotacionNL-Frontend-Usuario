import {
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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
  const [rangFecha, setRangFecha] = React.useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const handleSearch = (event) => {
    setBuscador(event.target.value);
    searching(jornadas, event.target.value);
  };
  const handleFilter = (event) => {
    setRangFecha(event.target.value);
    console.log("Tiempo", event.target.value);
    filterForDate(jornadas, event.target.value);
  };

  const searching = (data, buscador) => {
    const newData = data.filter((jornada) => {
      if (jornada.nombreEleccion.toUpperCase().includes(buscador.toUpperCase()))
        return jornada;
    });

    setDataSearch(newData);
  };
  const filterForDate = (data, buscador) => {
    console.log("AAA");
    const rangoFecha = new Date();
    let filterFn;
    if (buscador === "month") {
      filterFn = (obj) => {
        const fecha = new Date(obj.dateTimeCreation);
        return (
          fecha.getMonth() === rangoFecha.getMonth() &&
          fecha.getFullYear() === rangoFecha.getFullYear()
        );
      };
    } else if (buscador === "year") {
      filterFn = (obj) => {
        const fecha = new Date(obj.dateTimeCreation);
        return fecha.getFullYear() === rangoFecha.getFullYear();
      };
    } else if (buscador === "all") {
      setDataSearch(jornadas);
      return;
    }

    // Aplicar el filtro y actualizar los datos
    const newData = data.filter(filterFn);
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
      <Box
        display={"flex"}
        flexDirection="row"
        alignItems={"center"}
        justifyContent="space-around"
        sx={{ mt: 3, mb: 5, width: "100%", height: "auto" }}
      >
        <SearchCustome
          buscador={buscador}
          handleSearch={handleSearch}
        ></SearchCustome>
        <FormControl sx={{ width: "25%" }}>
          <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rangFecha}
            label="Filtrar por"
            onChange={handleFilter}
          >
            <MenuItem value={"month"}>Mes</MenuItem>
            <MenuItem value={"year"}>Año</MenuItem>
            <MenuItem value={"all"}>Todo</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
