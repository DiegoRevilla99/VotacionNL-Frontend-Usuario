import { Box } from "@mui/material";
import React from "react";
import { BoletaCard } from "./BoletaCard";
import { EleccionCard } from "./EleccionCard";

export const GridBoletas = ({ more = false, boletas = [] }) => {
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
        <BoletaCard boleta={boleta}></BoletaCard>
      ))}
    </Box>
  );
};
