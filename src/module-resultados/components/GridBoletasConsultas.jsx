import { Box } from "@mui/material";
import React from "react";
import { BoletaCard } from "./BoletaCard";
import { BoletaConsultaCard } from "./BoletaConsultaCard";
import { EleccionCard } from "./EleccionCard";

export const GridBoletasConsultas = ({ more = false, papeletas = [] }) => {
  return (
    <Box
      className="animate__animated animate__fadeInUp"
      display={"flex"}
      gap="60px"
      flexWrap="wrap"
      justifyContent={"center"}
      width={"100%"}
    >
      {papeletas.map((papeleta) => (
        <BoletaConsultaCard papeleta={papeleta} />
      ))}
    </Box>
  );
};
