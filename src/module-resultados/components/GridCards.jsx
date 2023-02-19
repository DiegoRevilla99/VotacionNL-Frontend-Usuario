import { Box, Typography } from "@mui/material";
import React from "react";
import { EleccionCard } from "./EleccionCard";

export const GridCards = ({ more = false, jornadas = [] }) => {
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
        jornadas?.map((jornada) => <EleccionCard jornada={jornada} />)
      ) : (
        <Typography>No se encontró información</Typography>
      )}
    </Box>
  );
};
