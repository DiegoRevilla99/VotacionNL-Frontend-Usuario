import { Box, Typography } from "@mui/material";
import React from "react";
import { ConsultasCard } from "./ConsultaCard";
import { EleccionCard } from "./EleccionCard";

export const GridConsultas = ({ more = false, jornadas = [] }) => {
  return (
    <Box
      className="animate__animated animate__fadeInUp"
      display={"flex"}
      gap="50px"
      flexWrap="wrap"
      justifyContent={"space-around"}
      width={"100%"}
    >
      {jornadas?.length > 0 ? (
        jornadas?.map((jornada) => <ConsultasCard jornada={jornada} />)
      ) : (
        <Typography>No se encontró informacón</Typography>
      )}
    </Box>
  );
};
