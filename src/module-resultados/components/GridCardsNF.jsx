import { Box } from "@mui/material";
import React from "react";
import { EleccionCard } from "./EleccionCard";
import { EleccionCardNF } from "./EleccionCardNF";

export const GridCardsNF = ({ more = false, jornadas = [] }) => {
  return (
    <Box
      className="animate__animated animate__fadeInUp"
      display={"flex"}
      gap="50px"
      flexWrap="wrap"
      justifyContent={"space-around"}
      width={"100%"}
    >
      {jornadas.map((jornada) => (
        <EleccionCardNF jornada={jornada} />
      ))}
    </Box>
  );
};
