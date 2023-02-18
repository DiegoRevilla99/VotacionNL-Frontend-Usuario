import { Box } from "@mui/material";
import React from "react";
import { BoletaCard } from "./BoletaCard";
import { BoletaNFCard } from "./BoletaNFCard";
import { EleccionCard } from "./EleccionCard";

export const GridBoletasNF = ({ more = false, boletas = [] }) => {
  return (
    <Box
      className="animate__animated animate__fadeInUp"
      display={"flex"}
      gap="60px"
      flexWrap="wrap"
      justifyContent={"center"}
      width={"100%"}
    >
      {boletas.map((boleta) => (
        <BoletaNFCard boleta={boleta} />
      ))}
    </Box>
  );
};
